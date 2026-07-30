// Prof GB — Serviço do documento do Controlador. Espelha 1:1 as chamadas que
// já existiam soltas em controlador.html contra o documento
// controlador/principal — agora escopado por escola. A lógica de
// reconciliação (sincronizarControlador, com a correção de condição de
// corrida já aplicada) continua em controlador.html — aqui ficam as
// operações de leitura/escuta/escrita puras (leitura em tempo real
// adicionada para o Dashboard, primeiro consumidor de onSnapshot deste doc).
import { db } from '../firebase-config.js';
import { doc, getDoc, onSnapshot, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

function controladorRef(escolaId) {
    return doc(db, 'escolas', escolaId, 'controlador', 'principal');
}

export function lerControlador(escolaId) {
    return getDoc(controladorRef(escolaId));
}

export function ouvirControlador(escolaId, callback) {
    return onSnapshot(controladorRef(escolaId), callback);
}

export function salvarControlador(escolaId, dados) {
    return setDoc(controladorRef(escolaId), dados);
}
