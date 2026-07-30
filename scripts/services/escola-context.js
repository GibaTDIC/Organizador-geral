// Prof GB — Coordenador de escola ativa. É o único lugar (além de
// escola-service.js/escola-migracao.js) que sabe que escolas existem no
// Firestore. Componentes de layout (pf-header) nunca chamam o Firebase
// diretamente — só escutam 'pf-escola-ready' e disparam
// 'pf-escola-selecionar-request'/'pf-escola-criar-request', no mesmo
// padrão já usado por auth-guard.js com 'pf-auth-ready'/'pf-logout-request'.
import { showToast } from '../components/pf-alert.js';
import {
    lerProfessor,
    criarProfessor,
    definirEscolaAtiva,
    criarEscola,
    adicionarEscolaAoProfessor,
    listarEscolasPorIds
} from './escola-service.js';
import { migrarDadosLegadosSeNecessario } from './escola-migracao.js';

let uidAtual = null;

async function montarListaEscolas(escolasIds) {
    const snaps = await listarEscolasPorIds(escolasIds);
    return snaps.filter(s => s.exists()).map(s => ({ id: s.id, ...s.data() }));
}

function dispatchEscolaReady(escolaId, escolas) {
    document.dispatchEvent(new CustomEvent('pf-escola-ready', { detail: { escolaId, escolas } }));
}

document.addEventListener('pf-auth-ready', async (evento) => {
    const user = evento.detail.user;
    uidAtual = user.uid;
    try {
        const snap = await lerProfessor(user.uid);
        let escolaAtivaId, escolasIds;

        if (!snap.exists()) {
            escolaAtivaId = await migrarDadosLegadosSeNecessario(user.uid);
            escolasIds = [escolaAtivaId];
            await criarProfessor(user.uid, { escolaAtivaId, escolasIds });
        } else {
            ({ escolaAtivaId, escolasIds } = snap.data());
        }

        dispatchEscolaReady(escolaAtivaId, await montarListaEscolas(escolasIds));
    } catch (erro) {
        console.error('escola-context: falha ao inicializar', erro);
        showToast('Não foi possível carregar suas escolas. Recarregue a página.', 'error', 6000);
    }
});

document.addEventListener('pf-escola-selecionar-request', async (evento) => {
    const escolaId = evento.detail.escolaId;
    try {
        await definirEscolaAtiva(uidAtual, escolaId);
        const { escolasIds } = (await lerProfessor(uidAtual)).data();
        dispatchEscolaReady(escolaId, await montarListaEscolas(escolasIds));
    } catch (erro) {
        console.error('escola-context: falha ao trocar de escola', erro);
        showToast('Não foi possível trocar de escola.', 'error', 6000);
    }
});

document.addEventListener('pf-escola-criar-request', async (evento) => {
    const nome = evento.detail.nome;
    try {
        const novaEscolaId = await criarEscola({ nome, ownerUid: uidAtual });
        await adicionarEscolaAoProfessor(uidAtual, novaEscolaId);
        const { escolasIds } = (await lerProfessor(uidAtual)).data();
        dispatchEscolaReady(novaEscolaId, await montarListaEscolas(escolasIds));
        showToast(`Escola "${nome}" criada!`, 'success');
    } catch (erro) {
        console.error('escola-context: falha ao criar escola', erro);
        showToast('Não foi possível criar a escola.', 'error', 6000);
    }
});
