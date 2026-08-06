// Prof GB — Serviço de escolas e do documento do professor.
// professores/{uid} guarda qual escola está ativa e a lista de escolas
// que o professor criou/possui. escolas/{escolaId} guarda os dados da
// própria escola (nome, dono, membros) — os dados de grade/turmas/
// configuracoes/controlador/aulas dessa escola ficam em subcoleções,
// ver os serviços grade-service.js etc. (agora recebem escolaId).
import { db } from '../firebase-config.js';
import {
    doc,
    getDoc,
    setDoc,
    updateDoc,
    collection,
    arrayUnion
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

export function lerProfessor(uid) {
    return getDoc(doc(db, 'professores', uid));
}

export function criarProfessor(uid, { escolaAtivaId, escolasIds }) {
    return setDoc(doc(db, 'professores', uid), {
        escolaAtivaId,
        escolasIds,
        criadoEm: new Date().toISOString()
    });
}

export function definirEscolaAtiva(uid, escolaId) {
    return updateDoc(doc(db, 'professores', uid), { escolaAtivaId: escolaId });
}

export async function criarEscola({ nome, ownerUid }) {
    const escolaRef = doc(collection(db, 'escolas'));
    await setDoc(escolaRef, {
        nome,
        owner: ownerUid,
        membros: [ownerUid],
        criadoEm: new Date().toISOString()
    });
    return escolaRef.id;
}

export function adicionarEscolaAoProfessor(uid, escolaId) {
    return updateDoc(doc(db, 'professores', uid), {
        escolasIds: arrayUnion(escolaId),
        escolaAtivaId: escolaId
    });
}

export async function listarEscolasPorIds(escolaIds) {
    return Promise.all(escolaIds.map(id => getDoc(doc(db, 'escolas', id))));
}

// componentesAtivos: quais componentes curriculares (ver COMPONENTES_CURRICULARES
// em grade-service.js) essa escola leciona — restringe os seletores de
// componente na grade e no formulário de aula do Planejamento, em vez de
// sempre oferecer o catálogo completo. Escolas sem esse campo ainda (criadas
// antes dessa feature) caem no fallback [COMPONENTE_CURRICULAR_PADRAO] em
// quem lê, não aqui.
export function definirComponentesAtivos(escolaId, componentes) {
    return updateDoc(doc(db, 'escolas', escolaId), { componentesAtivos: componentes });
}

// turnoNoturnoAtivo: liga/desliga a seção Noturno na Grade Semanal — nem
// toda escola usa, então fica opcional em vez de sempre presente. Desligar
// só esconde a seção (ver Configurações), não apaga dado já salvo em
// gradeHorarios.noturno.
export function definirTurnoNoturno(escolaId, ativo) {
    return updateDoc(doc(db, 'escolas', escolaId), { turnoNoturnoAtivo: ativo });
}
