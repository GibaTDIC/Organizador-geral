// Prof GB — <pf-sidebar>. Menu lateral compartilhado, construído a partir do
// registro MODULES (scripts/utils/constants.js) — a mesma fonte que uma
// futura Home GIBABIT poderia consumir. Uso: <pf-sidebar active="controlador">.
import { MODULES, GRUPOS_MODULOS } from '../utils/constants.js';
import { showToast } from './pf-alert.js';

export class PfSidebar extends HTMLElement {
    connectedCallback() {
        this.classList.add('pf-sidebar');
        const ativo = this.getAttribute('active');

        // Agrupada em seções (Uso diário / Ferramentas / Configuração) em
        // vez de uma lista só — "complexidade nos bastidores, simplicidade
        // pro professor": os 3 módulos do dia a dia ficam em destaque no
        // topo, o resto continua todo alcançável, só sem competir de igual
        // pra igual por atenção.
        const linksDoGrupo = (chave) => MODULES.filter(m => m.grupo === chave).map(modulo => `
            <a class="pf-sidebar__link${modulo.id === ativo ? ' pf-sidebar__link--active' : ''}${modulo.status === 'planned' ? ' pf-sidebar__link--planned' : ''}"
               href="${modulo.path}">
                <span class="pf-sidebar__icon">${modulo.icon}</span>
                <span class="pf-sidebar__label">${modulo.label}</span>
            </a>
        `).join('');

        this.innerHTML = `
            <nav class="pf-sidebar__nav">
                ${GRUPOS_MODULOS.map(grupo => `
                    <div class="pf-sidebar__secao-titulo">${grupo.label}</div>
                    ${linksDoGrupo(grupo.chave)}
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

        // Fecha a gaveta ao tocar fora dela (só existe como gaveta sobreposta
        // no breakpoint mobile — em telas largas a classe não muda nada
        // visualmente, então esse listener não interfere lá). O toggle do
        // cabeçalho já corre no momento em que o clique acontece (listener
        // dele fica no próprio botão, dispara antes deste aqui em document),
        // então o guard abaixo evita fechar e reabrir no mesmo clique.
        document.addEventListener('click', (evento) => {
            if (!this.classList.contains('pf-sidebar--open')) return;
            if (this.contains(evento.target)) return;
            if (evento.target.closest('.pf-header__menu-toggle')) return;
            this.classList.remove('pf-sidebar--open');
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
