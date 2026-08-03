// Prof GB — Serviço do Banco de Atividades. Coleção escolas/{id}/atividades,
// escopada por escola como todo o resto do app. Favoritos e registro de uso
// usam arrayUnion/arrayRemove (não leitura-modificação-escrita) porque uma
// escola pode ter mais de um professor — overwrite do documento inteiro
// perderia a alteração de um professor se outro salvasse ao mesmo tempo.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    deleteDoc,
    getDoc,
    onSnapshot,
    arrayUnion,
    arrayRemove
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function atividadesRef(escolaId) {
    return collection(db, 'escolas', escolaId, 'atividades');
}

function atividadeDocRef(escolaId, id) {
    return doc(db, 'escolas', escolaId, 'atividades', id);
}

export function ouvirAtividades(escolaId, callback) {
    return onSnapshot(atividadesRef(escolaId), callback);
}

export function criarAtividade(escolaId, dados) {
    const agora = new Date().toISOString();
    return addDoc(atividadesRef(escolaId), {
        favoritadoPor: [],
        usos: [],
        arquivos: [],
        arquivada: false,
        variacoes: [],
        origem: 'manual',
        ...dados,
        criadoEm: agora,
        atualizadoEm: agora
    });
}

export function atualizarAtividade(escolaId, id, dados) {
    return updateDoc(atividadeDocRef(escolaId, id), { ...dados, atualizadoEm: new Date().toISOString() });
}

export async function excluirAtividade(escolaId, id) {
    await deleteDoc(atividadeDocRef(escolaId, id));
}

// Duplica os METADADOS, incluindo os links externos já cadastrados.
export async function duplicarAtividade(escolaId, id, overrides) {
    const snap = await getDoc(atividadeDocRef(escolaId, id));
    if (!snap.exists()) throw new Error('Atividade não encontrada.');
    const agora = new Date().toISOString();
    const { criadoEm, atualizadoEm, favoritadoPor, usos, ...dados } = snap.data();
    return addDoc(atividadesRef(escolaId), {
        ...dados,
        ...overrides,
        favoritadoPor: [],
        usos: [],
        criadoEm: agora,
        atualizadoEm: agora
    });
}

export function favoritar(escolaId, id, uid) {
    return updateDoc(atividadeDocRef(escolaId, id), { favoritadoPor: arrayUnion(uid) });
}

export function desfavoritar(escolaId, id, uid) {
    return updateDoc(atividadeDocRef(escolaId, id), { favoritadoPor: arrayRemove(uid) });
}

export function arquivar(escolaId, id) {
    return updateDoc(atividadeDocRef(escolaId, id), { arquivada: true, atualizadoEm: new Date().toISOString() });
}

export function desarquivar(escolaId, id) {
    return updateDoc(atividadeDocRef(escolaId, id), { arquivada: false, atualizadoEm: new Date().toISOString() });
}

export function registrarUso(escolaId, id, turma) {
    return updateDoc(atividadeDocRef(escolaId, id), {
        usos: arrayUnion({ turma, data: new Date().toISOString() })
    });
}

export function adicionarVariacao(escolaId, id, dadosVariacao) {
    const variacao = {
        id: crypto.randomUUID(),
        titulo: dadosVariacao.titulo || '',
        descricao: dadosVariacao.descricao || '',
        materiais: dadosVariacao.materiais || '',
        desenvolvimento: dadosVariacao.desenvolvimento || '',
        avaliacao: dadosVariacao.avaliacao || '',
        criadoEm: new Date().toISOString()
    };
    return updateDoc(atividadeDocRef(escolaId, id), {
        variacoes: arrayUnion(variacao),
        atualizadoEm: new Date().toISOString()
    });
}

// Editar/remover um item específico do array precisa ler o documento
// inteiro (arrayUnion/arrayRemove só casam por igualdade exata do objeto,
// não por id) — diferente de favoritos/usos, aceitável aqui porque
// variações normalmente são curadas pelo próprio autor da atividade, não
// por vários professores da escola ao mesmo tempo.
export async function atualizarVariacao(escolaId, id, variacaoId, dados) {
    const snap = await getDoc(atividadeDocRef(escolaId, id));
    if (!snap.exists()) throw new Error('Atividade não encontrada.');
    const variacoes = (snap.data().variacoes || []).map(v =>
        v.id === variacaoId ? { ...v, ...dados, id: variacaoId } : v
    );
    return updateDoc(atividadeDocRef(escolaId, id), { variacoes, atualizadoEm: new Date().toISOString() });
}

export async function removerVariacao(escolaId, id, variacaoId) {
    const snap = await getDoc(atividadeDocRef(escolaId, id));
    if (!snap.exists()) throw new Error('Atividade não encontrada.');
    const variacoes = (snap.data().variacoes || []).filter(v => v.id !== variacaoId);
    return updateDoc(atividadeDocRef(escolaId, id), { variacoes, atualizadoEm: new Date().toISOString() });
}
