// Prof GB — Serviço do Banco de Atividades. Coleção escolas/{id}/atividades,
// escopada por escola como todo o resto do app. Favoritos e registro de uso
// usam arrayUnion/arrayRemove (não leitura-modificação-escrita) porque uma
// escola pode ter mais de um professor — overwrite do documento inteiro
// perderia a alteração de um professor se outro salvasse ao mesmo tempo.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    getDoc,
    getDocs,
    onSnapshot,
    arrayUnion,
    arrayRemove
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { excluirArquivo } from './storage-service.js';

function atividadesRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'atividades');
}

function atividadeDocRef(escolaId, id) {
    return doc(db, 'escolas', escolaId, 'atividades', id);
}

export function ouvirAtividades(escolaId, callback) {
    return onSnapshot(atividadesRef(escolaId), callback);
}

export function criarAtividade(escolaId, dados) {
    const agora = new Date().toISOString();
    return addDoc(atividadesRef(escolaId), {
        favoritadoPor: [],
        usos: [],
        arquivos: [],
        arquivada: false,
        ...dados,
        criadoEm: agora,
        atualizadoEm: agora
    });
}

export function atualizarAtividade(escolaId, id, dados) {
    return updateDoc(atividadeDocRef(escolaId, id), { ...dados, atualizadoEm: new Date().toISOString() });
}

// Antes de apagar um arquivo do Storage, confirma que nenhuma OUTRA atividade
// (ex: uma duplicata) ainda referencia o mesmo caminho — evita quebrar link
// de uma cópia só porque a original foi excluída.
export async function excluirAtividade(escolaId, id) {
    const snap = await getDoc(atividadeDocRef(escolaId, id));
    const dados = snap.exists() ? snap.data() : null;
    const arquivos = (dados && dados.arquivos) || [];

    if (arquivos.length > 0) {
        const todasSnap = await getDocs(atividadesRef(escolaId));
        const caminhosEmUsoPorOutras = new Set();
        todasSnap.docs.forEach(d => {
            if (d.id === id) return;
            (d.data().arquivos || []).forEach(a => {
                if (a.caminhoStorage) caminhosEmUsoPorOutras.add(a.caminhoStorage);
            });
        });

        for (const arquivo of arquivos) {
            if (!arquivo.caminhoStorage) continue; // tipo 'link', nada no Storage
            if (caminhosEmUsoPorOutras.has(arquivo.caminhoStorage)) continue; // ainda referenciado por outra atividade
            await excluirArquivo(arquivo.caminhoStorage);
        }
    }

    await deleteDoc(atividadeDocRef(escolaId, id));
}

// Duplica os METADADOS — referencia os MESMOS arquivos no Storage (copiar o
// binário seria caro e desnecessário; excluirAtividade já protege contra
// quebrar o link da duplicata se a original for excluída depois).
export async function duplicarAtividade(escolaId, id, overrides) {
    const snap = await getDoc(atividadeDocRef(escolaId, id));
    if (!snap.exists()) throw new Error('Atividade não encontrada.');
    const agora = new Date().toISOString();
    const { criadoEm, atualizadoEm, favoritadoPor, usos, ...dados } = snap.data();
    return addDoc(atividadesRef(escolaId), {
        ...dados,
        ...overrides,
        favoritadoPor: [],
        usos: [],
        criadoEm: agora,
        atualizadoEm: agora
    });
}

export function favoritar(escolaId, id, uid) {
    return updateDoc(atividadeDocRef(escolaId, id), { favoritadoPor: arrayUnion(uid) });
}

export function desfavoritar(escolaId, id, uid) {
    return updateDoc(atividadeDocRef(escolaId, id), { favoritadoPor: arrayRemove(uid) });
}

export function arquivar(escolaId, id) {
    return updateDoc(atividadeDocRef(escolaId, id), { arquivada: true, atualizadoEm: new Date().toISOString() });
}

export function desarquivar(escolaId, id) {
    return updateDoc(atividadeDocRef(escolaId, id), { arquivada: false, atualizadoEm: new Date().toISOString() });
}

export function registrarUso(escolaId, id, turma) {
    return updateDoc(atividadeDocRef(escolaId, id), {
        usos: arrayUnion({ turma, data: new Date().toISOString() })
    });
}
