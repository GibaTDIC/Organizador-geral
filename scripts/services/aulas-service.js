// Prof GB — Serviço das aulas planejadas. Espelha 1:1 as chamadas que já
// existiam soltas em planejamento.html (CRUD completo) e controlador.html
// (somente leitura) contra a coleção 'aulas' — agora escopada por escola.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function aulasRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'aulas');
}

export function ouvirAulas(escolaId, callback) {
    return onSnapshot(aulasRef(escolaId), callback);
}

export function criarAula(escolaId, aulaData) {
    return addDoc(aulasRef(escolaId), aulaData);
}

export function atualizarAula(escolaId, id, aulaData) {
    return updateDoc(doc(db, 'escolas', escolaId, 'aulas', id), aulaData);
}

export function excluirAula(escolaId, id) {
    return deleteDoc(doc(db, 'escolas', escolaId, 'aulas', id));
}
