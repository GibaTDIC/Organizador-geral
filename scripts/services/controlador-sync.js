// Prof GB — Reconciliação do Controlador (aulas do Planejamento × turmas
// cadastradas). Extraído de controlador.html pra ser usado também pela
// Programação Diária — antes só o Controlador rodava essa sincronização,
// então abrir a Programação Diária sem nunca ter aberto o Controlador
// deixava o professor sem nenhuma entrada pra ver. Função pura: só lê/grava
// Firestore e retorna o resultado, nenhum efeito colateral de UI.
import { lerControlador, salvarControlador } from './controlador-service.js';

function gerarIdUnico(tituloAula, turma, index) {
    const slug = tituloAula
        .toLowerCase()
        .normalize('NFD')
        .replace(/\p{Diacritic}/gu, '')
        .replace(/[^a-z0-9]/g, '-')
        .replace(/-+/g, '-')
        .replace(/^-|-$/g, '');
    const turmaSlug = turma.replace('º', '').toLowerCase();
    return `aula-${slug}-${turmaSlug}-${index}`;
}

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
        const docSnap = await lerControlador(escolaId);
        const data = docSnap.exists() ? docSnap.data() : null;
        let controladorBanco = data?.aulas || [];
        let alterou = false;

        aulasFirebase.forEach((aulaBase, indexAula) => {
            turmasAtuais.forEach((turma) => {
                const jaExiste = controladorBanco.find(a =>
                    a.firebaseId === aulaBase.id && a.turma === turma
                );

                if (!jaExiste) {
                    const dataInicio = new Date();
                    dataInicio.setDate(dataInicio.getDate() + (indexAula * 3));

                    const prazo = new Date(dataInicio);
                    prazo.setDate(prazo.getDate() + 7);

                    // Correção: o Planejamento salva "habilidades" (array) e
                    // "especificacao" hoje — o campo legado singular
                    // "habilidade" só existe em aulas muito antigas.
                    const habilidades = Array.isArray(aulaBase.habilidades) && aulaBase.habilidades.length > 0
                        ? aulaBase.habilidades
                        : (aulaBase.habilidade ? [{ codigo: aulaBase.habilidade, descricao: '' }] : []);

                    controladorBanco.push({
                        id: gerarIdUnico(aulaBase.titulo, turma, indexAula),
                        firebaseId: aulaBase.id,
                        turma: turma,
                        titulo: aulaBase.titulo,
                        objetoConhecimento: aulaBase.objetoConhecimento,
                        unidadeTematica: aulaBase.unidadeTematica || "Ginásticas",
                        especificacao: aulaBase.especificacao || null,
                        habilidades: habilidades,
                        descricao: aulaBase.descricao,
                        bimestre: aulaBase.bimestre || 1,
                        status: "Não iniciada",
                        // Correção: o campo real salvo pelo Planejamento é
                        // "numeroAulas" — "numAulas" nunca existiu no
                        // documento, então isso sempre caía no fallback 2.
                        numAulas: aulaBase.numeroAulas || 2,
                        aulasExecutadas: 0,
                        dataInicio: dataInicio.toISOString().split('T')[0],
                        prazo: prazo.toISOString().split('T')[0],
                        conteudoMinistrado: '',
                        tempoUtilizado: null,
                        dificuldades: '',
                        habilidadesTrabalhadas: [],
                        historico: [],
                        observacoes: ''
                    });

                    alterou = true;
                }
            });
        });

        // Remove entradas cujo plano de aula original foi excluído do Planejamento.
        const tamanhoAntes = controladorBanco.length;
        controladorBanco = controladorBanco.filter(aulaControlador =>
            aulasFirebase.some(aulaFirebase => aulaFirebase.id === aulaControlador.firebaseId)
        );
        if (controladorBanco.length !== tamanhoAntes) {
            alterou = true;
        }

        if (alterou) {
            await salvarControlador(escolaId, {
                aulas: controladorBanco,
                aulaAtualId: data?.aulaAtualId || null,
                ultimaAtualizacao: new Date().toISOString()
            });
        }

        return { aulas: controladorBanco, aulaAtualId: data?.aulaAtualId || null };
    } finally {
        atualizandoControlador = false;
    }
}
