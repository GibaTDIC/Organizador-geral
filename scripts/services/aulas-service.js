// PROF+ — Serviço das aulas planejadas. Espelha 1:1 as chamadas que já
// existiam soltas em planejamento.html (CRUD completo) e controlador.html
// (somente leitura) contra a coleção 'aulas'.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    onSnapshot,
    addDoc,
    updateDoc,
    deleteDoc
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const aulasRef = collection(db, 'aulas');

export function ouvirAulas(callback) {
    return onSnapshot(aulasRef, callback);
}

export function criarAula(aulaData) {
    return addDoc(aulasRef, aulaData);
}

export function atualizarAula(id, aulaData) {
    return updateDoc(doc(db, 'aulas', id), aulaData);
}

export function excluirAula(id) {
    return deleteDoc(doc(db, 'aulas', id));
}
