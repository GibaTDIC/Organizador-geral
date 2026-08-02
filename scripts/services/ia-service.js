// Prof GB — Serviço do Assistente Pedagógico (IA).
// Duas responsabilidades: (1) persistir histórico de conversas em
// escolas/{id}/conversasIA, no mesmo padrão dos outros serviços; (2) chamar
// o Worker do Cloudflare que fala com o Gemini. É o primeiro fetch() a uma
// API externa neste projeto — não existe outro ponto no código pra espelhar,
// então o formato de erro/carregamento abaixo é o precedente pros próximos.
import { db } from '../firebase-config.js';
import {
    collection,
    doc,
    addDoc,
    updateDoc,
    onSnapshot
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";
import { obterIdToken } from './auth-service.js';

const IA_WORKER_URL = 'https://profgb-ia-worker.gibabit.workers.dev';

function conversasIARef(escolaId) {
    return collection(db, 'escolas', escolaId, 'conversasIA');
}

function conversaIADocRef(escolaId, id) {
    return doc(db, 'escolas', escolaId, 'conversasIA', id);
}

export function ouvirConversasIA(escolaId, callback) {
    return onSnapshot(conversasIARef(escolaId), callback);
}

export function criarConversaIA(escolaId, dados) {
    return addDoc(conversasIARef(escolaId), {
        mensagens: [],
        ...dados,
        criadoEm: new Date().toISOString(),
        atualizadoEm: new Date().toISOString()
    });
}

export function adicionarMensagemConversaIA(escolaId, id, mensagens) {
    return updateDoc(conversaIADocRef(escolaId, id), {
        mensagens,
        atualizadoEm: new Date().toISOString()
    });
}

// Chama o Worker. Lança erro com mensagem amigável em pt-BR pra quem
// chamar decidir como exibir (toast, inline etc) — não mostra toast aqui
// dentro pra não acoplar o serviço a uma decisão de UI específica.
// `arquivo` é opcional: { mimeType, dadosBase64 } — usado pra anexar um
// documento (ex: PDF do calendário anual) que o Gemini lê diretamente.
export async function chamarAssistenteIA(prompt, contexto, arquivo) {
    const idToken = await obterIdToken();
    if (!idToken) {
        throw new Error('Sessão expirada. Recarregue a página e faça login novamente.');
    }

    let resposta;
    try {
        resposta = await fetch(IA_WORKER_URL, {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json',
                'Authorization': `Bearer ${idToken}`
            },
            body: JSON.stringify(arquivo ? { prompt, contexto, arquivo } : { prompt, contexto })
        });
    } catch {
        throw new Error('Não foi possível conectar ao assistente. Verifique sua internet.');
    }

    if (!resposta.ok) {
        let mensagem = 'O assistente não conseguiu responder agora.';
        try {
            const corpo = await resposta.json();
            if (corpo?.erro) mensagem = corpo.erro;
        } catch { /* corpo não era JSON, mantém mensagem genérica */ }
        throw new Error(mensagem);
    }

    return (await resposta.json()).resposta;
}
