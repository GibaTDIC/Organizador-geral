// Prof GB — <pf-sidebar>. Menu lateral compartilhado, construído a partir do
// registro MODULES (scripts/utils/constants.js) — a mesma fonte que uma
// futura Home GIBABIT poderia consumir. Uso: <pf-sidebar active="controlador">.
import { MODULES } from '../utils/constants.js';
import { showToast } from './pf-alert.js';

export class PfSidebar extends HTMLElement {
    connectedCallback() {
        this.classList.add('pf-sidebar');
        const ativo = this.getAttribute('active');

        this.innerHTML = `
            <nav class="pf-sidebar__nav">
                ${MODULES.map(modulo => `
                    <a class="pf-sidebar__link${modulo.id === ativo ? ' pf-sidebar__link--active' : ''}${modulo.status === 'planned' ? ' pf-sidebar__link--planned' : ''}"
                       href="${modulo.path}">
                        <span class="pf-sidebar__icon">${modulo.icon}</span>
                        <span class="pf-sidebar__label">${modulo.label}</span>
                    </a>
                `).join('')}
                <div class="pf-sidebar__divisor"></div>
                <button type="button" class="pf-sidebar__link pf-sidebar__fechar" id="pfSidebarFechar">
                    <span class="pf-sidebar__icon">❌</span>
                    <span class="pf-sidebar__label">Fechar App</span>
                </button>
            </nav>
        `;

        document.addEventListener('pf-sidebar-toggle', () => {
            this.classList.toggle('pf-sidebar--open');
        });

        // window.close() só funciona em abas abertas por script — pra uma
        // aba aberta digitando o endereço ou pelo ícone salvo, o navegador
        // ignora silenciosamente (sem erro pra detectar). Por isso sempre
        // avisamos como alternativa, em vez de fingir que sempre funciona.
        this.querySelector('#pfSidebarFechar').addEventListener('click', () => {
            window.close();
            setTimeout(() => {
                showToast('Não consegui fechar a aba sozinho — os navegadores só permitem isso quando o próprio app abriu a aba. Feche manualmente pelo menu de abas do navegador.', 'info', 5000);
            }, 150);
        });
    }
}

if (!customElements.get('pf-sidebar')) {
    customElements.define('pf-sidebar', PfSidebar);
}
