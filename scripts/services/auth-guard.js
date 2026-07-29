// Prof GB — Guarda de autenticação compartilhada.
// Substitui o bloco de onAuthStateChanged duplicado em cada página de
// módulo. Componentes de layout (pf-header/pf-sidebar) nunca chamam o
// Firebase diretamente: só escutam 'pf-auth-ready' e disparam
// 'pf-logout-request', mantendo a autenticação centralizada aqui.
import { observarEstadoAuth, sair } from './auth-service.js';

export function requireAuth({ onReady, loginPath = 'login.html' } = {}) {
    observarEstadoAuth((user) => {
        if (!user) {
            window.location.href = loginPath;
            return;
        }
        document.dispatchEvent(new CustomEvent('pf-auth-ready', { detail: { user } }));
        onReady?.(user);
    });

    document.addEventListener('pf-logout-request', async () => {
        await sair();
        window.location.href = loginPath;
    });
}
