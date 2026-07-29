// PROF+ — <pf-header>. Cabeçalho compartilhado: marca, usuário logado e
// botão de sair. Nunca chama o Firebase diretamente — só escuta
// 'pf-auth-ready' (disparado por auth-guard.js) e dispara
// 'pf-logout-request' quando o usuário clica em Sair.
export class PfHeader extends HTMLElement {
    connectedCallback() {
        this.classList.add('pf-header');
        this.innerHTML = `
            <div class="pf-header__left">
                <button class="pf-header__menu-toggle" type="button" aria-label="Abrir menu">☰</button>
                <div class="pf-header__brand">
                    <span class="pf-header__mark">G</span>
                    <span class="pf-header__wordmark">PROF<span class="pf-header__plus">+</span></span>
                </div>
            </div>
            <a class="pf-header__login-link" href="../../login.html">🔑 Entrar</a>
            <div class="pf-header__user" hidden>
                <span class="pf-header__email"></span>
                <button class="pf-header__logout" type="button">Sair</button>
            </div>
        `;

        this.querySelector('.pf-header__menu-toggle').addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('pf-sidebar-toggle'));
        });

        this.querySelector('.pf-header__logout').addEventListener('click', () => {
            document.dispatchEvent(new CustomEvent('pf-logout-request'));
        });

        document.addEventListener('pf-auth-ready', (evento) => {
            const userEl = this.querySelector('.pf-header__user');
            const emailEl = this.querySelector('.pf-header__email');
            const loginLink = this.querySelector('.pf-header__login-link');
            emailEl.textContent = evento.detail.user.displayName || evento.detail.user.email;
            userEl.hidden = false;
            loginLink.hidden = true;
        });
    }
}

if (!customElements.get('pf-header')) {
    customElements.define('pf-header', PfHeader);
}
