// Prof GB — Serviço das turmas cadastradas. Espelha 1:1 as chamadas que já
// existiam soltas em index.html e controlador.html contra o documento
// turmas/principal (fonte compartilhada entre os dois módulos) — agora
// escopado por escola.
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { COMPONENTE_CURRICULAR_PADRAO } from './grade-service.js';

function turmasRef(escolaId) {
    return doc(db, 'escolas', escolaId, 'turmas', 'principal');
}

export function ouvirTurmas(escolaId, callback) {
    return onSnapshot(turmasRef(escolaId), callback);
}

export function salvarTurmas(escolaId, lista) {
    return setDoc(turmasRef(escolaId), { lista });
}

// Dados gravados antes desta função guardam a turma como string crua
// ("6º A") — sempre Educação Física, já que nunca existiu outro componente
// nesta grade. Leitura aceita os dois formatos; escrita nova usa sempre
// {nome, componenteCurricular}.
export function normalizarTurma(item) {
    if (typeof item === 'string') {
        return { nome: item, componenteCurricular: COMPONENTE_CURRICULAR_PADRAO };
    }
    return { nome: item.nome, componenteCurricular: item.componenteCurricular || COMPONENTE_CURRICULAR_PADRAO };
}

export function normalizarTurmas(lista) {
    return (lista || []).map(normalizarTurma);
}
