// Prof GB — Serviço do documento do Controlador (escolas/{id}/controlador/
// principal). Operações de leitura/escuta/escrita puras; a lógica de
// reconciliação (cruzamento Planejamento × Grade) fica em controlador-sync.js.
import { db } from '../firebase-config.js';
import { doc, onSnapshot, setDoc, runTransaction } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function controladorRef(escolaId) {
    return doc(db, 'escolas', escolaId, 'controlador', 'principal');
}

export function ouvirControlador(escolaId, callback) {
    return onSnapshot(controladorRef(escolaId), callback);
}

export function salvarControlador(escolaId, dados) {
    return setDoc(controladorRef(escolaId), dados);
}

// Transação: se o documento mudar entre a leitura e a escrita (ex.: o
// professor clica "Iniciar Aula" enquanto a sincronização automática está
// em andamento), o Firestore detecta e refaz "transformar" sozinho com o
// dado mais novo, em vez de simplesmente sobrescrever por cima da mutação
// do professor. `transformar(dadosAtuais)` deve devolver { alterou, dados }.
export async function transacionarControlador(escolaId, transformar) {
    const ref = controladorRef(escolaId);
    return runTransaction(db, async (transaction) => {
        const snap = await transaction.get(ref);
        const atual = snap.exists() ? snap.data() : null;
        const { alterou, dados } = transformar(atual);
        if (alterou) transaction.set(ref, dados);
        return dados;
    });
}
