// Prof GB — Serviço das turmas cadastradas. Espelha 1:1 as chamadas que já
// existiam soltas em index.html e controlador.html contra o documento
// turmas/principal (fonte compartilhada entre os dois módulos) — agora
// escopado por escola.
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function turmasRef(escolaId) {
    return doc(db, 'escolas', escolaId, 'turmas', 'principal');
}

export function ouvirTurmas(escolaId, callback) {
    return onSnapshot(turmasRef(escolaId), callback);
}

export function salvarTurmas(escolaId, lista) {
    return setDoc(turmasRef(escolaId), { lista });
}
