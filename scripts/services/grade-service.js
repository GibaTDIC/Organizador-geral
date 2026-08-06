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

export const COMPONENTE_CURRICULAR_PADRAO = 'Educação Física';
export const SLOTS_ESPECIAIS = ['Folga', 'Planejamento', 'CEMFOR', '---'];

// Períodos que gradeHorarios pode ter — matutino/vespertino sempre
// existem, noturno é opcional (ver escola.turnoNoturnoAtivo). Toda tela
// que varre "todos os períodos do dia" deve iterar esta lista em vez de
// hardcodear ['matutino','vespertino'], senão aulas do noturno somem
// silenciosamente dessa tela.
export const PERIODOS_GRADE = ['matutino', 'vespertino', 'noturno'];

// Catálogo completo — usado só na tela de "quais componentes eu leciono"
// (Configurações). Os formulários do dia a dia (grade, aula do Planejamento)
// usam o subconjunto marcado como ativo pela escola (escolas/{id}.componentesAtivos),
// não este catálogo inteiro, pra não poluir o professor de uma área só com
// opções de outras 9 disciplinas que ele não leciona.
export const COMPONENTES_CURRICULARES = [
    'Educação Física', 'Língua Portuguesa', 'Matemática', 'Ciências',
    'História', 'Geografia', 'Arte', 'Língua Inglesa', 'Ensino Religioso',
    'Computação'
];

// Siglas de 2 letras pra caber o componente dentro da célula da grade sem
// estourar a largura (nome por extenso não cabia). Mesmas siglas oficiais
// da API do bncc.dev (AR/CI/EF/ER/GE/HI/LI/LP/MA, ver /v1/estrutura) — só
// Computação não é componente oficial da BNCC, sigla CO escolhida aqui só
// pra manter o padrão de 2 letras.
export const SIGLA_COMPONENTE = {
    'Educação Física': 'EF',
    'Língua Portuguesa': 'LP',
    'Matemática': 'MA',
    'Ciências': 'CI',
    'História': 'HI',
    'Geografia': 'GE',
    'Arte': 'AR',
    'Língua Inglesa': 'LI',
    'Ensino Religioso': 'ER',
    'Computação': 'CO'
};

// Uma célula da grade pode ser: vazia/'---' (sem compromisso), uma palavra
// reservada de SLOTS_ESPECIAIS (compromisso não-letivo), ou uma turma. Dados
// gravados antes desta função guardam turma como string crua ("6º A") —
// sempre Educação Física, único componente que já existiu nesta grade.
// Leitura aceita os dois formatos; toda escrita nova usa o formato objeto
// {turma, componenteCurricular}, permitindo no futuro células com matérias
// diferentes.
export function normalizarCelula(valor) {
    if (!valor || SLOTS_ESPECIAIS.includes(valor)) {
        return { tipo: 'especial', valor: valor || '---' };
    }
    if (typeof valor === 'string') {
        return { tipo: 'turma', turma: valor, componenteCurricular: COMPONENTE_CURRICULAR_PADRAO };
    }
    return {
        tipo: 'turma',
        turma: valor.turma,
        componenteCurricular: valor.componenteCurricular || COMPONENTE_CURRICULAR_PADRAO
    };
}
