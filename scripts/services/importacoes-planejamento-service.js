// Prof GB — Registro de importações de planejamento (DOCX/futuros formatos).
// Guarda a referência do arquivo original + quais aulas foram geradas a
// partir dele, pra consulta futura. Referência unidirecional (auditoria,
// não índice vivo) — se uma aula gerada for editada/excluída depois pelo
// fluxo normal do Planejamento, este registro não é atualizado.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function importacoesRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'importacoesPlanejamento');
}

export function ouvirImportacoesPlanejamento(escolaId, callback) {
    return onSnapshot(importacoesRef(escolaId), callback);
}

export function criarImportacaoPlanejamento(escolaId, dados) {
    return addDoc(importacoesRef(escolaId), {
        importadoEm: new Date().toISOString(),
        ...dados
    });
}

export function atualizarImportacaoPlanejamento(escolaId, id, dados) {
    return updateDoc(doc(db, 'escolas', escolaId, 'importacoesPlanejamento', id), dados);
}

export function excluirImportacaoPlanejamento(escolaId, id) {
    return deleteDoc(doc(db, 'escolas', escolaId, 'importacoesPlanejamento', id));
}
