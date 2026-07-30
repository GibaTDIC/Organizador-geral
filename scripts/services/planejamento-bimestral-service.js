// Prof GB — Serviço do nível Bimestral da hierarquia de Planejamento.
// Um doc por (turma, anoLetivo, bimestre). As datas do bimestre continuam
// vivendo só em configuracoes/principal.bimestres — aqui só a referência
// numérica (1-4), sem duplicar dado.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    addDoc,
    getDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { salvarComHistorico } from './historico-service.js';

function planejamentosBimestraisRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'planejamentoBimestral');
}

export function ouvirPlanejamentosBimestrais(escolaId, callback) {
    return onSnapshot(planejamentosBimestraisRef(escolaId), callback);
}

export function criarPlanejamentoBimestral(escolaId, dados) {
    const agora = new Date().toISOString();
    return addDoc(planejamentosBimestraisRef(escolaId), { ...dados, criadoEm: agora, atualizadoEm: agora });
}

export function atualizarPlanejamentoBimestral(escolaId, id, dados) {
    const docRef = doc(db, 'escolas', escolaId, 'planejamentoBimestral', id);
    return salvarComHistorico(docRef, { ...dados, atualizadoEm: new Date().toISOString() });
}

export function excluirPlanejamentoBimestral(escolaId, id) {
    return deleteDoc(doc(db, 'escolas', escolaId, 'planejamentoBimestral', id));
}

export async function duplicarPlanejamentoBimestral(escolaId, id, overrides) {
    const snap = await getDoc(doc(db, 'escolas', escolaId, 'planejamentoBimestral', id));
    if (!snap.exists()) throw new Error('Planejamento bimestral não encontrado.');
    const agora = new Date().toISOString();
    const { criadoEm, atualizadoEm, ...dados } = snap.data();
    return addDoc(planejamentosBimestraisRef(escolaId), { ...dados, ...overrides, criadoEm: agora, atualizadoEm: agora });
}
