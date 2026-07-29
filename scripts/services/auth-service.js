// Prof GB — Serviço de autenticação. Espelha 1:1 as chamadas que já existiam
// soltas em login.html, só centralizadas aqui.
import { auth } from '../firebase-config.js';
import {
    signInWithEmailAndPassword,
    createUserWithEmailAndPassword,
    GoogleAuthProvider,
    signInWithPopup,
    onAuthStateChanged,
    sendPasswordResetEmail,
    signOut
} from "https://www.gstatic.com/firebasejs/9.22.0/firebase-auth.js";

export function entrarComEmailSenha(email, senha) {
    return signInWithEmailAndPassword(auth, email, senha);
}

export function criarContaComEmailSenha(email, senha) {
    return createUserWithEmailAndPassword(auth, email, senha);
}

export function entrarComGoogle() {
    const provider = new GoogleAuthProvider();
    return signInWithPopup(auth, provider);
}

export function enviarEmailRecuperacaoSenha(email) {
    return sendPasswordResetEmail(auth, email);
}

export function sair() {
    return signOut(auth);
}

export function observarEstadoAuth(callback) {
    return onAuthStateChanged(auth, callback);
}
