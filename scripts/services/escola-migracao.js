// Prof GB — Migração automática do dataset legado (de antes de existir o
// conceito de escola) para a primeira escola do primeiro professor a logar
// depois desta mudança. Roda no máximo uma vez: usa uma transação contra
// migracao/legado como trava, então mesmo que duas contas cheguem quase
// juntas, só uma reivindica os dados antigos — a outra ganha uma escola
// nova vazia, sem herdar nada.
import { db } from '../firebase-config.js';
import {
    doc,
    getDoc,
    getDocs,
    setDoc,
    updateDoc,
    collection,
    runTransaction
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const DOCS_LEGADOS = ['grade', 'turmas', 'configuracoes', 'controlador'];

async function reivindicarMigracao(uid, escolaIdCandidato) {
    const marcoRef = doc(db, 'migracao', 'legado');
    return runTransaction(db, async (tx) => {
        const marco = await tx.get(marcoRef);
        const dados = marco.exists() ? marco.data() : null;

        if (dados?.migrado && dados.copiaConcluida) {
            // Já reivindicado e concluído por alguém — esta conta não herda nada.
            return { podeMigrar: false, escolaId: null };
        }
        if (dados?.migrado && dados.migradoPorUid === uid && !dados.copiaConcluida) {
            // Tentativa anterior desta mesma conta ficou pela metade — retomar.
            return { podeMigrar: true, escolaId: dados.escolaId, retomando: true };
        }
        if (dados?.migrado) {
            // Reivindicado por outra conta, ainda incompleto — não é nosso, não herda.
            return { podeMigrar: false, escolaId: null };
        }

        tx.set(marcoRef, {
            migrado: true,
            copiaConcluida: false,
            escolaId: escolaIdCandidato,
            migradoPorUid: uid,
            migradoEm: new Date().toISOString()
        });
        return { podeMigrar: true, escolaId: escolaIdCandidato, retomando: false };
    });
}

async function copiarDadosLegados(escolaId) {
    for (const colecao of DOCS_LEGADOS) {
        const origemSnap = await getDoc(doc(db, colecao, 'principal'));
        if (origemSnap.exists()) {
            await setDoc(doc(db, 'escolas', escolaId, colecao, 'principal'), origemSnap.data());
        }
    }

    // Preserva o ID original de cada aula — o Controlador correlaciona
    // suas entradas com aulas pelo campo firebaseId.
    const aulasSnap = await getDocs(collection(db, 'aulas'));
    for (const aulaDoc of aulasSnap.docs) {
        await setDoc(doc(db, 'escolas', escolaId, 'aulas', aulaDoc.id), aulaDoc.data());
    }
}

// Chamada só quando um professor ainda não tem documento em professores/{uid}.
// Retorna o id da escola que deve virar a escola ativa desse professor.
export async function migrarDadosLegadosSeNecessario(uid) {
    const escolaRefCandidata = doc(collection(db, 'escolas'));
    const { podeMigrar, escolaId } = await reivindicarMigracao(uid, escolaRefCandidata.id);

    if (!podeMigrar) {
        const escolaVaziaRef = doc(collection(db, 'escolas'));
        await setDoc(escolaVaziaRef, {
            nome: 'Escola Principal',
            owner: uid,
            membros: [uid],
            criadoEm: new Date().toISOString()
        });
        return escolaVaziaRef.id;
    }

    await setDoc(doc(db, 'escolas', escolaId), {
        nome: 'Escola Principal',
        owner: uid,
        membros: [uid],
        criadoEm: new Date().toISOString()
    }, { merge: true });

    await copiarDadosLegados(escolaId);
    await updateDoc(doc(db, 'migracao', 'legado'), { copiaConcluida: true });

    return escolaId;
}
