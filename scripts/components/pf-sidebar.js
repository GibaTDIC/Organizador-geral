// Prof GB — <pf-sidebar>. Menu lateral compartilhado, construído a partir do
// registro MODULES (scripts/utils/constants.js) — a mesma fonte que uma
// futura Home GIBABIT poderia consumir. Uso: <pf-sidebar active="controlador">.
import { MODULES } from '../utils/constants.js';

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
            </nav>
        `;

        document.addEventListener('pf-sidebar-toggle', () => {
            this.classList.toggle('pf-sidebar--open');
        });
    }
}

if (!customElements.get('pf-sidebar')) {
    customElements.define('pf-sidebar', PfSidebar);
}
