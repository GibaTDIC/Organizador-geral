// PROF+ — Componente de toast/mensagem.
// Substitui as 3 implementações quase idênticas de "mostrarMensagem" que
// existiam soltas em index.html, controlador.html e planejamento.html.
// Cada página mantém sua função mostrarMensagem(texto, tipo) como um
// wrapper fino em torno de showToast, então os ~40 pontos de chamada
// existentes não precisam mudar.
if (!customElements.get('pf-alert')) {
    customElements.define('pf-alert', class extends HTMLElement {
        connectedCallback() {
            const tipo = this.getAttribute('tipo') || 'info';
            this.classList.add('pf-alert', `pf-alert--${tipo}`);
        }
    });
}

export function showToast(texto, tipo = 'info', timeout = 3000) {
    const el = document.createElement('pf-alert');
    el.setAttribute('tipo', tipo);
    el.style.whiteSpace = 'pre-line';
    el.textContent = texto;
    document.body.appendChild(el);
    setTimeout(() => el.remove(), timeout);
}
