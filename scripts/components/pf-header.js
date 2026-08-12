// Prof GB — <pf-header>. Cabeçalho compartilhado: marca, seletor de escola
// ativa, usuário logado e botão de sair. Nunca chama o Firebase
// diretamente — só escuta 'pf-auth-ready'/'pf-escola-ready' (disparados por
// auth-guard.js/escola-context.js) e dispara 'pf-logout-request',
// 'pf-escola-selecionar-request' e 'pf-escola-criar-request'.
import { MODULES } from '../utils/constants.js';

// A marca usa gibabit-avatar-header.png (128x128, ~8KB) em vez do arquivo
// original em assets/ (5250x5250, ~9.7MB — inviável carregar num badge de
// 32px em TODA página do app, já que este componente aparece em todas).
// new URL(..., import.meta.url) resolve o caminho relativo a partir deste
// arquivo (scripts/components/), não da página que importa o componente —
// funciona igual em qualquer profundidade de pasta (raiz ou modules/*).
const AVATAR_URL = new URL('../../assets/gibabit-avatar-header.png', import.meta.url).href;

// Título da página atual — responde "onde estou?" sem precisar de markup
// extra em cada uma das 9 páginas de módulo: casa o `id` de MODULES (que já
// é igual ao nome da pasta em modules/<id>/) contra a URL de verdade
// (location.pathname), não contra o `path` relativo de cada entrada (que é
// relativo a partir de dentro de modules/*, não serve pra comparar direto
// com a URL). Páginas fora de modules/ (login.html, index.html raiz) não
// casam com nada — título fica vazio, sem span extra na tela.
function tituloPaginaAtual() {
    const modulo = MODULES.find(m => location.pathname.includes(`/modules/${m.id}/`));
    return modulo ? `${modulo.icon} ${modulo.label}` : '';
}

export class PfHeader extends HTMLElement {
    connectedCallback() {
        this.classList.add('pf-header');
        const titulo = tituloPaginaAtual();
        this.innerHTML = `
            <div class="pf-header__left">
                <button class="pf-header__menu-toggle" type="button" aria-label="Abrir menu">☰</button>
                <div class="pf-header__brand">
                    <img class="pf-header__mark" src="${AVATAR_URL}" alt="Gibabit" width="32" height="32">
                    <span class="pf-header__wordmark">Prof<span class="pf-header__accent">GB</span></span>
                </div>
                ${titulo ? `<span class="pf-header__titulo">${titulo}</span>` : ''}
            </div>
            <a class="pf-header__login-link" href="../../login.html">🔑 Entrar</a>
            <div class="pf-header__escola" hidden>
                <select class="pf-header__escola-select" aria-label="Escola ativa" disabled>
                    <option>Carregando escolas…</option>
                </select>
                <button class="pf-header__escola-nova" type="button" title="Criar nova escola">+ Escola</button>
            </div>
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

        const escolaSelect = this.querySelector('.pf-header__escola-select');
        escolaSelect.addEventListener('change', () => {
            document.dispatchEvent(new CustomEvent('pf-escola-selecionar-request', {
                detail: { escolaId: escolaSelect.value }
            }));
        });

        this.querySelector('.pf-header__escola-nova').addEventListener('click', () => {
            const nome = prompt('Nome da nova escola:');
            if (nome && nome.trim()) {
                document.dispatchEvent(new CustomEvent('pf-escola-criar-request', {
                    detail: { nome: nome.trim() }
                }));
            }
        });

        document.addEventListener('pf-auth-ready', (evento) => {
            const userEl = this.querySelector('.pf-header__user');
            const emailEl = this.querySelector('.pf-header__email');
            const loginLink = this.querySelector('.pf-header__login-link');
            const escolaDiv = this.querySelector('.pf-header__escola');
            emailEl.textContent = evento.detail.user.displayName || evento.detail.user.email;
            userEl.hidden = false;
            loginLink.hidden = true;
            escolaDiv.hidden = false;
        });

        document.addEventListener('pf-escola-ready', (evento) => {
            const { escolaId, escolas } = evento.detail;
            escolaSelect.disabled = false;
            escolaSelect.innerHTML = escolas.map(e =>
                `<option value="${e.id}"${e.id === escolaId ? ' selected' : ''}>${e.nome}</option>`
            ).join('');
        });
    }
}

if (!customElements.get('pf-header')) {
    customElements.define('pf-header', PfHeader);
}
