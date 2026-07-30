// Prof GB — Serviço do nível Anual da hierarquia de Planejamento.
// Um doc por (turma, anoLetivo). CRUD simples, sem cross-produto — mesmo
// padrão de aulas-service.js, escopado por escola.
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

function planejamentosAnuaisRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'planejamentoAnual');
}

export function ouvirPlanejamentosAnuais(escolaId, callback) {
    return onSnapshot(planejamentosAnuaisRef(escolaId), callback);
}

export function criarPlanejamentoAnual(escolaId, dados) {
    const agora = new Date().toISOString();
    return addDoc(planejamentosAnuaisRef(escolaId), { ...dados, criadoEm: agora, atualizadoEm: agora });
}

export function atualizarPlanejamentoAnual(escolaId, id, dados) {
    const docRef = doc(db, 'escolas', escolaId, 'planejamentoAnual', id);
    return salvarComHistorico(docRef, { ...dados, atualizadoEm: new Date().toISOString() });
}

export function excluirPlanejamentoAnual(escolaId, id) {
    return deleteDoc(doc(db, 'escolas', escolaId, 'planejamentoAnual', id));
}

export async function duplicarPlanejamentoAnual(escolaId, id, overrides) {
    const snap = await getDoc(doc(db, 'escolas', escolaId, 'planejamentoAnual', id));
    if (!snap.exists()) throw new Error('Planejamento anual não encontrado.');
    const agora = new Date().toISOString();
    const { criadoEm, atualizadoEm, ...dados } = snap.data();
    return addDoc(planejamentosAnuaisRef(escolaId), { ...dados, ...overrides, criadoEm: agora, atualizadoEm: agora });
}
