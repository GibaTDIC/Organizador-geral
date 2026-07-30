// Prof GB — Serviço do nível Mensal da hierarquia de Planejamento.
// Um doc por (turma, anoLetivo, bimestre, mes). É o nível que as aulas
// (Semanal) podem referenciar via aula.planejamentoMensalId.
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

function planejamentosMensaisRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'planejamentoMensal');
}

export function ouvirPlanejamentosMensais(escolaId, callback) {
    return onSnapshot(planejamentosMensaisRef(escolaId), callback);
}

export function criarPlanejamentoMensal(escolaId, dados) {
    const agora = new Date().toISOString();
    return addDoc(planejamentosMensaisRef(escolaId), { ...dados, criadoEm: agora, atualizadoEm: agora });
}

export function atualizarPlanejamentoMensal(escolaId, id, dados) {
    const docRef = doc(db, 'escolas', escolaId, 'planejamentoMensal', id);
    return salvarComHistorico(docRef, { ...dados, atualizadoEm: new Date().toISOString() });
}

export function excluirPlanejamentoMensal(escolaId, id) {
    return deleteDoc(doc(db, 'escolas', escolaId, 'planejamentoMensal', id));
}

export async function duplicarPlanejamentoMensal(escolaId, id, overrides) {
    const snap = await getDoc(doc(db, 'escolas', escolaId, 'planejamentoMensal', id));
    if (!snap.exists()) throw new Error('Planejamento mensal não encontrado.');
    const agora = new Date().toISOString();
    const { criadoEm, atualizadoEm, ...dados } = snap.data();
    return addDoc(planejamentosMensaisRef(escolaId), { ...dados, ...overrides, criadoEm: agora, atualizadoEm: agora });
}
