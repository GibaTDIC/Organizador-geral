// Prof GB — Serviço das turmas cadastradas. Espelha 1:1 as chamadas que já
// existiam soltas em index.html e controlador.html contra o documento
// turmas/principal (fonte compartilhada entre os dois módulos).
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const turmasRef = doc(db, 'turmas', 'principal');

export function ouvirTurmas(callback) {
    return onSnapshot(turmasRef, callback);
}

export function salvarTurmas(lista) {
    return setDoc(turmasRef, { lista });
}
