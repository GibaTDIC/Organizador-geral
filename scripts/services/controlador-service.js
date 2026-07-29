// PROF+ — Serviço do documento do Controlador. Espelha 1:1 as chamadas que
// já existiam soltas em controlador.html contra o documento
// controlador/principal. A lógica de reconciliação (sincronizarControlador,
// com a correção de condição de corrida já aplicada) continua em
// controlador.html — aqui só ficam as operações de leitura/escrita puras.
import { db } from '../firebase-config.js';
import { doc, getDoc, setDoc } from "https://www.gstatic.com/firebasejs/9.22.0/firebase-firestore.js";

const controladorRef = doc(db, 'controlador', 'principal');

export function lerControlador() {
    return getDoc(controladorRef);
}

export function salvarControlador(dados) {
    return setDoc(controladorRef, dados);
}
