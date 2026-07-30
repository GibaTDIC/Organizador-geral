// Prof GB — Serviço da grade semanal (Programação Diária).
// Espelha 1:1 as chamadas que já existiam soltas em index.html contra o
// documento grade/principal — agora escopado por escola.
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function gradeRef(escolaId) {
    return doc(db, 'escolas', escolaId, 'grade', 'principal');
}

export function ouvirGrade(escolaId, callback) {
    return onSnapshot(gradeRef(escolaId), callback);
}

export function salvarGrade(escolaId, gradeHorarios) {
    return setDoc(gradeRef(escolaId), gradeHorarios);
}

export function salvarGradeParcial(escolaId, gradeHorarios) {
    return setDoc(gradeRef(escolaId), gradeHorarios, { merge: true });
}
