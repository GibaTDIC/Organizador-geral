// Prof GB — Serviço do módulo PEI (Plano Educacional Individualizado).
// peiAlunos = cadastro do estudante; peiDocumentos = o PEI de um bimestre
// específico daquele estudante. Versionamento do documento reaproveita
// salvarComHistorico/ouvirHistorico/restaurarVersao (já usados pelo
// Planejamento) em vez de reimplementar histórico aqui.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    setDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { salvarComHistorico, ouvirHistorico, restaurarVersao } from './historico-service.js';

function peiAlunosRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'peiAlunos');
}

function peiAlunoDocRef(escolaId, id) {
    return doc(db, 'escolas', escolaId, 'peiAlunos', id);
}

function peiDocumentosRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'peiDocumentos');
}

function peiDocumentoDocRef(escolaId, id) {
    return doc(db, 'escolas', escolaId, 'peiDocumentos', id);
}

export function ouvirPeiAlunos(escolaId, callback) {
    return onSnapshot(peiAlunosRef(escolaId), callback);
}

export async function salvarPeiAluno(escolaId, id, dados) {
    const ref = id ? peiAlunoDocRef(escolaId, id) : doc(peiAlunosRef(escolaId));
    await setDoc(ref, { ...dados, atualizadoEm: new Date().toISOString() }, { merge: true });
    return ref.id;
}

export function removerPeiAluno(escolaId, id) {
    return deleteDoc(peiAlunoDocRef(escolaId, id));
}

export function ouvirPeiDocumentos(escolaId, callback) {
    return onSnapshot(peiDocumentosRef(escolaId), callback);
}

export async function salvarPeiDocumento(escolaId, id, dados) {
    const ref = id ? peiDocumentoDocRef(escolaId, id) : doc(peiDocumentosRef(escolaId));
    await salvarComHistorico(ref, { ...dados, atualizadoEm: new Date().toISOString() });
    return ref.id;
}

export function ouvirVersoesPeiDocumento(escolaId, documentoId, callback) {
    return ouvirHistorico(peiDocumentoDocRef(escolaId, documentoId), callback);
}

export function restaurarVersaoPeiDocumento(escolaId, documentoId, dadosDaVersao) {
    return restaurarVersao(peiDocumentoDocRef(escolaId, documentoId), dadosDaVersao);
}
