// Prof GB — Serviço de upload/exclusão de arquivo no Firebase Storage.
// Primeiro uso de Storage no projeto (Banco de Atividades) — path escopado
// por escola, mesmo espírito de isolamento multi-tenant do Firestore:
// escolas/{escolaId}/atividades/{atividadeId}/{timestamp}-{nomeSanitizado}
import { storage } from '../firebase-config.js';
import {
    ref,
    uploadBytes,
    getDownloadURL,
    deleteObject
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-storage.js";

// Remove acentos, espaços e caracteres especiais de verdade — o nome vira
// parte do path do Storage, não pode carregar nada que precise de escape.
function sanitizarNomeArquivo(nome) {
    return nome
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[^a-zA-Z0-9.\-]/g, '_')
        .replace(/_+/g, '_');
}

export async function uploadArquivo(escolaId, atividadeId, file) {
    const nomeSanitizado = sanitizarNomeArquivo(file.name);
    const caminhoStorage = `escolas/${escolaId}/atividades/${atividadeId}/${Date.now()}-${nomeSanitizado}`;
    const storageRef = ref(storage, caminhoStorage);
    await uploadBytes(storageRef, file);
    const url = await getDownloadURL(storageRef);
    return {
        nome: file.name,
        caminhoStorage,
        url,
        tipo: file.type || 'application/octet-stream',
        tamanho: file.size
    };
}

export async function excluirArquivo(caminhoStorage) {
    if (!caminhoStorage) return; // recursos do tipo "link" não têm arquivo no Storage
    await deleteObject(ref(storage, caminhoStorage));
}
