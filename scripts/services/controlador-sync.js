// Prof GB — Orquestração da sincronização do Controlador com o Firestore
// (transação + lock de reentrância). A lógica de reconciliação em si
// (Planejamento × turmas) mora em controlador-reconciliacao.js — pura, sem
// Firestore, testável com Node puro — e é só reexportada daqui pra não
// quebrar quem já importa serieDaTurma/reconciliarAulas deste arquivo.
import { transacionarControlador } from './controlador-service.js';
import { serieDaTurma, reconciliarAulas } from './controlador-reconciliacao.js';

export { serieDaTurma, reconciliarAulas };

// module-scope: cada página que importa este módulo tem sua própria
// instância (top-level state não é compartilhado entre abas/documentos),
// então este lock só evita reentrância de chamadas concorrentes dentro da
// mesma página — nunca precisou (nem deveria) coordenar entre páginas.
let atualizandoControlador = false;

export async function sincronizarControlador({ escolaId, aulasFirebase, turmasAtuais }) {
    if (atualizandoControlador) return null;
    if (aulasFirebase.length === 0 && turmasAtuais.length === 0) return null;

    atualizandoControlador = true;
    try {
        // transacionarControlador lê e escreve dentro de uma transação do
        // Firestore: se o documento mudar entre a leitura e a escrita (ex.:
        // o professor clica "Iniciar Aula" enquanto esta sincronização
        // automática ainda está em andamento — o cenário real que apagava
        // esse clique), o SDK detecta o conflito e roda esta função de novo
        // sozinho, com o dado mais recente, em vez de sobrescrever por cima
        // da mutação do professor.
        return await transacionarControlador(escolaId, (data) => reconciliarAulas(data, { aulasFirebase, turmasAtuais }));
    } finally {
        atualizandoControlador = false;
    }
}
