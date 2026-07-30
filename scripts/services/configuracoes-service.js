// Prof GB — Serviço das configurações de bimestres (Programação Diária).
// Espelha 1:1 as chamadas que já existiam soltas em index.html contra o
// documento configuracoes/principal — agora escopado por escola.
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function configuracoesRef(escolaId) {
    return doc(db, 'escolas', escolaId, 'configuracoes', 'principal');
}

export function ouvirConfiguracoes(escolaId, callback) {
    return onSnapshot(configuracoesRef(escolaId), callback);
}

export function salvarConfiguracoes(escolaId, bimestres) {
    return setDoc(configuracoesRef(escolaId), { bimestres });
}
