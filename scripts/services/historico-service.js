// Prof GB — Versionamento simples para a hierarquia de Planejamento
// (Anual/Bimestral/Mensal/aulas). Cada doc é uma entidade isolada (não um
// array cross-produto como controlador/principal), então não precisa do
// lock de reentrância que aquele caso exigiu — só grava a versão anterior
// antes de sobrescrever.
import { db } from '../firebase-config.js';
import {
    collection,
    addDoc,
    getDoc,
    setDoc,
    onSnapshot,
    query,
    orderBy,
    limit
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

export async function salvarComHistorico(docRef, dadosNovos) {
    const snapAtual = await getDoc(docRef);
    if (snapAtual.exists()) {
        await addDoc(collection(docRef, 'historico'), {
            ...snapAtual.data(),
            _versionadoEm: new Date().toISOString()
        });
    }
    await setDoc(docRef, dadosNovos, { merge: true });
}

export function ouvirHistorico(docRef, callback) {
    return onSnapshot(
        query(collection(docRef, 'historico'), orderBy('_versionadoEm', 'desc'), limit(20)),
        callback
    );
}

// Restaurar = salvar de novo com os dados da versão escolhida — isso por si
// só já gera uma entrada de histórico com o estado atual (o que estava
// valendo antes da restauração), preservando continuidade em vez de perder
// o estado que existia antes de restaurar.
export async function restaurarVersao(docRef, dadosDaVersao) {
    const { _versionadoEm, ...dadosLimpos } = dadosDaVersao;
    await salvarComHistorico(docRef, dadosLimpos);
}
