// Prof GB — Reconciliação do Controlador (aulas do Planejamento × turmas
// cadastradas). Extraído de controlador.html pra ser usado também pela
// Programação Diária — antes só o Controlador rodava essa sincronização,
// então abrir a Programação Diária sem nunca ter aberto o Controlador
// deixava o professor sem nenhuma entrada pra ver. Função pura: só lê/grava
// Firestore e retorna o resultado, nenhum efeito colateral de UI.
import { lerControlador, salvarControlador } from './controlador-service.js';
import { COMPONENTE_CURRICULAR_PADRAO } from './grade-service.js';

// Turma FÍSICA ("6º A") → SÉRIE ("6º Ano"). Compartilhada com Controlador e
// Dashboard: deixou de ser só uma conveniência de exibição (cruzamento com a
// BNCC) e passou a decidir se uma aula do Planejamento entra ou não no
// Controlador de uma turma — uma cópia dessincronizada aqui volta a zerar o
// Controlador inteiro, então isso não fica mais duplicado por página.
export function serieDaTurma(turmaFisica) {
    const m = /^(\d+)º/.exec(turmaFisica || '');
    return m ? `${m[1]}º Ano` : null;
}

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
            const componenteAula = aulaBase.componenteCurricular || COMPONENTE_CURRICULAR_PADRAO;

            turmasAtuais.forEach((turma) => {
                // Só cruza quando a turma física é da MESMA série da aula E
                // do MESMO componente curricular — antes não havia nenhum
                // dos dois checks, e toda aula era cruzada com toda turma
                // cadastrada, sem relação nenhuma com a série real dela
                // (causa raiz do Dashboard/Controlador aparecerem zerados).
                const serie = serieDaTurma(turma.nome);
                const componenteTurma = turma.componenteCurricular || COMPONENTE_CURRICULAR_PADRAO;
                if (serie !== aulaBase.turma || componenteTurma !== componenteAula) return;

                const jaExiste = controladorBanco.find(a =>
                    a.firebaseId === aulaBase.id && a.turma === turma.nome
                );

                if (!jaExiste) {
                    // Usa a data real da aula quando o professor a preencheu
                    // (dataReferencia, YYYY-MM-DD — mesmo campo que a
                    // importação DOCX já popula). Fallback pro comportamento
                    // antigo (hoje + índice×3 dias) só quando a aula não tem
                    // essa data — aulas antigas continuam funcionando sem
                    // migração.
                    let dataInicioObj;
                    if (aulaBase.dataReferencia) {
                        dataInicioObj = new Date(aulaBase.dataReferencia + 'T12:00:00');
                    } else {
                        dataInicioObj = new Date();
                        dataInicioObj.setDate(dataInicioObj.getDate() + (indexAula * 3));
                    }
                    const dataInicio = aulaBase.dataReferencia || dataInicioObj.toISOString().split('T')[0];

                    const prazoObj = new Date(dataInicioObj);
                    prazoObj.setDate(prazoObj.getDate() + 7);
                    const prazo = prazoObj.toISOString().split('T')[0];

                    // Correção: o Planejamento salva "habilidades" (array) e
                    // "especificacao" hoje — o campo legado singular
                    // "habilidade" só existe em aulas muito antigas.
                    const habilidades = Array.isArray(aulaBase.habilidades) && aulaBase.habilidades.length > 0
                        ? aulaBase.habilidades
                        : (aulaBase.habilidade ? [{ codigo: aulaBase.habilidade, descricao: '' }] : []);

                    controladorBanco.push({
                        id: gerarIdUnico(aulaBase.titulo, turma.nome, indexAula),
                        firebaseId: aulaBase.id,
                        turma: turma.nome,
                        componenteCurricular: componenteTurma,
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
                        dataInicio: dataInicio,
                        prazo: prazo,
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
