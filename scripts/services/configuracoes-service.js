// PROF+ — Serviço das configurações de bimestres (Programação Diária).
// Espelha 1:1 as chamadas que já existiam soltas em index.html contra o
// documento configuracoes/principal.
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const configuracoesRef = doc(db, 'configuracoes', 'principal');

export function ouvirConfiguracoes(callback) {
    return onSnapshot(configuracoesRef, callback);
}

export function salvarConfiguracoes(bimestres) {
    return setDoc(configuracoesRef, { bimestres });
}
