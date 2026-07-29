// PROF+ — <pf-modal>. Wrapper genérico de modal (overlay + caixa central).
// Usado nesta fase só no modal de configuração de bimestres da Programação
// Diária — os modais do Controlador/Planejamento carregam lógica de
// formulário própria e não são migrados agora.
export class PfModal extends HTMLElement {
    connectedCallback() {
        this.classList.add('pf-modal-overlay');

        if (!this.querySelector('.pf-modal')) {
            const caixa = document.createElement('div');
            caixa.className = 'pf-modal';
            while (this.firstChild) {
                caixa.appendChild(this.firstChild);
            }
            this.appendChild(caixa);
        }

        this.addEventListener('click', (evento) => {
            if (evento.target === this) {
                this.close();
            }
        });
    }

    open() {
        this.classList.add('pf-modal--open');
    }

    close() {
        this.classList.remove('pf-modal--open');
    }
}

if (!customElements.get('pf-modal')) {
    customElements.define('pf-modal', PfModal);
}
