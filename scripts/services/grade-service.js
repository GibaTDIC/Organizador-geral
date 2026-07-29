// Prof GB — Serviço da grade semanal (Programação Diária).
// Espelha 1:1 as chamadas que já existiam soltas em index.html contra o
// documento grade/principal.
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const gradeRef = doc(db, 'grade', 'principal');

export function ouvirGrade(callback) {
    return onSnapshot(gradeRef, callback);
}

export function salvarGrade(gradeHorarios) {
    return setDoc(gradeRef, gradeHorarios);
}

export function salvarGradeParcial(gradeHorarios) {
    return setDoc(gradeRef, gradeHorarios, { merge: true });
}
