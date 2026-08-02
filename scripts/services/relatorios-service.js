// Prof GB — Serviço do módulo Relatórios.
// Só funções puras: recebe os dados já carregados pela página (Controlador,
// Configurações, catálogo BNCC) e devolve filtragens/agregações. Não importa
// nada do Firebase nem duplica os listeners que os outros módulos já têm —
// a interface é quem assina ouvirControlador/ouvirConfiguracoes/ouvirTurmas
// e passa o resultado pra cá, mantendo a lógica de relatório centralizada
// num lugar testável sem DOM.

// ---------- Filtro central ----------
// filtros: { turma?, componenteCurricular?, bimestre?, periodo?: {inicio:'YYYY-MM-DD', fim} }
export function filtrarAulas(aulasControlador, filtros = {}) {
    const { turma, componenteCurricular, bimestre, periodo } = filtros;
    return (aulasControlador || []).filter(a => {
        if (turma && a.turma !== turma) return false;
        if (componenteCurricular && a.componenteCurricular !== componenteCurricular) return false;
        if (bimestre && String(a.bimestre) !== String(bimestre)) return false;
        if (periodo && periodo.inicio && periodo.fim) {
            if (!a.dataInicio || a.dataInicio < periodo.inicio || a.dataInicio > periodo.fim) return false;
        }
        return true;
    });
}

export function turmasDistintas(aulasControlador) {
    return [...new Set((aulasControlador || []).map(a => a.turma))].sort();
}

export function componentesDistintos(aulasControlador) {
    return [...new Set((aulasControlador || []).map(a => a.componenteCurricular))].sort();
}

// ---------- Dashboard Analítico ----------
export function calcularIndicadores(aulasFiltradas) {
    const lista = aulasFiltradas || [];
    const totalPrevistas = lista.reduce((soma, a) => soma + (a.numAulas || 0), 0);
    const totalRealizadas = lista.reduce((soma, a) => soma + (a.aulasExecutadas || 0), 0);
    const percentualExecutado = totalPrevistas > 0 ? Math.round((totalRealizadas / totalPrevistas) * 100) : 0;
    const turmasAtendidas = new Set(lista.map(a => a.turma)).size;
    const habilidadesDesenvolvidas = new Set(lista.flatMap(a => a.habilidadesTrabalhadas || [])).size;
    const aulasPendentes = Math.max(0, totalPrevistas - totalRealizadas);
    const proximasAulas = lista
        .filter(a => a.status !== 'Concluída' && a.status !== 'Cancelada')
        .slice()
        .sort((a, b) => (a.prazo || '').localeCompare(b.prazo || ''))
        .slice(0, 5)
        .map(a => ({ id: a.id, titulo: a.titulo, turma: a.turma, dataInicio: a.dataInicio, prazo: a.prazo }));

    return { totalPrevistas, totalRealizadas, percentualExecutado, turmasAtendidas, habilidadesDesenvolvidas, aulasPendentes, proximasAulas };
}

// ---------- Relatório: Execução das Aulas ----------
export function montarRelatorioExecucao(aulasFiltradas) {
    const linhas = (aulasFiltradas || []).map(a => {
        const previstas = a.numAulas || 0;
        const realizadas = a.aulasExecutadas || 0;
        const historico = a.historico || [];
        return {
            id: a.id,
            turma: a.turma,
            componenteCurricular: a.componenteCurricular,
            titulo: a.titulo,
            bimestre: a.bimestre,
            previstas,
            realizadas,
            naoRealizadas: Math.max(0, previstas - realizadas),
            status: a.status,
            foiRemarcada: historico.some(h => h.tipo === 'reposicao'),
            foiCancelada: historico.some(h => h.tipo === 'cancelamento'),
            observacoes: a.observacoes || '',
            justificativaAlteracao: a.justificativaAlteracao || null
        };
    });

    const totais = linhas.reduce((acc, l) => {
        acc.previstas += l.previstas;
        acc.realizadas += l.realizadas;
        acc.naoRealizadas += l.naoRealizadas;
        return acc;
    }, { previstas: 0, realizadas: 0, naoRealizadas: 0 });
    totais.percentualExecucao = totais.previstas > 0 ? Math.round((totais.realizadas / totais.previstas) * 100) : 0;

    return { linhas, totais };
}

// ---------- Relatório: Planejamento por Turma ----------
// Sem campo "objetivos" de propósito — só existe no Planejamento Bimestral,
// que hoje é exclusivo de Educação Física (sem seletor de componente); um
// lookup daria dado errado pros outros componentes. A página mostra uma nota
// fixa no lugar em vez de inventar essa coluna.
export function montarRelatorioPlanejamentoPorTurma(aulasFiltradas) {
    return (aulasFiltradas || []).map(a => ({
        turma: a.turma,
        componenteCurricular: a.componenteCurricular,
        bimestre: a.bimestre,
        unidadeTematica: a.unidadeTematica,
        especificacao: a.especificacao,
        objetoConhecimento: a.objetoConhecimento,
        titulo: a.titulo,
        habilidades: a.habilidades || [],
        numAulas: a.numAulas || 0
    }));
}

// ---------- Diário de Classe (pra colar em sistemas externos, ex: Omega) ----------
// Um sistema oficial da secretaria (SGE/Omega) pede "conteúdo ministrado"
// por data — este relatório organiza o que já foi registrado no Controlador
// em ordem cronológica, pronto pra copiar. Limitação conhecida: o Controlador
// guarda uma única dataInicio por conteúdo (que pode ocupar mais de uma aula,
// ver numAulas) — não uma data por sessão individual — então uma aula que
// ocupou 2+ sessões aparece como 1 linha aqui; o professor repete o texto
// nas datas seguintes do sistema externo.
//
// `codigosHabilidades` traz só os códigos (ex: "EF67EF01") das habilidades
// MINISTRADAS (habilidadesTrabalhadas — marcadas pelo professor no Registro
// da Aula), não as planejadas — pedido explícito: o diário externo precisa
// do que foi de fato trabalhado, não do que só estava previsto.
export function montarDiarioDeClasse(aulasFiltradas) {
    return (aulasFiltradas || [])
        .filter(a => a.dataInicio)
        .slice()
        .sort((a, b) => a.dataInicio.localeCompare(b.dataInicio))
        .map(a => ({
            id: a.id,
            data: a.dataInicio,
            turma: a.turma,
            componenteCurricular: a.componenteCurricular,
            numAulas: a.numAulas || 0,
            codigosHabilidades: (a.habilidadesTrabalhadas || []).slice(),
            conteudo: (a.conteudoMinistrado && a.conteudoMinistrado.trim()) || a.titulo || a.objetoConhecimento || ''
        }));
}

const DIA_CHAVES_SEMANA = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

function segundaFeiraDaSemana(data) {
    const diaSemana = data.getDay(); // 0=domingo..6=sábado
    const offset = diaSemana === 0 ? -6 : 1 - diaSemana;
    return new Date(data.getFullYear(), data.getMonth(), data.getDate() + offset);
}

// O Controlador grava uma única dataInicio por conteúdo, herdada da
// "Data de referência" escolhida uma vez no Planejamento — a MESMA data pra
// TODAS as turmas físicas daquela série, mesmo que cada turma tenha esse
// componente num dia da semana diferente na grade (ex: 6º A na terça, 6º B
// na quinta). Esta função corrige isso: acha, dentro da semana que contém
// dataReferenciaISO, o primeiro dia (segunda a sexta, checando os 2
// períodos) em que turma+componenteCurricular realmente aparece na grade, e
// devolve a data real desse dia. Sem correspondência na grade (turma
// removida dela, por exemplo) devolve a data original, sem quebrar.
export function resolverDataRealAula(gradeAtual, turma, componenteCurricular, dataReferenciaISO, normalizarCelulaFn) {
    if (!dataReferenciaISO || !gradeAtual) return dataReferenciaISO;
    const [ano, mes, dia] = dataReferenciaISO.split('-').map(Number);
    const segunda = segundaFeiraDaSemana(new Date(ano, mes - 1, dia));

    for (let i = 0; i < DIA_CHAVES_SEMANA.length; i++) {
        const diaChave = DIA_CHAVES_SEMANA[i];
        const encontrado = ['matutino', 'vespertino'].some(periodo =>
            (gradeAtual[periodo] || []).some(linha => {
                const celula = normalizarCelulaFn(linha[diaChave]);
                return celula.tipo === 'turma' && celula.turma === turma && celula.componenteCurricular === componenteCurricular;
            })
        );
        if (encontrado) {
            const dataOcorrencia = new Date(segunda.getFullYear(), segunda.getMonth(), segunda.getDate() + i);
            return paraISO(dataOcorrencia);
        }
    }
    return dataReferenciaISO;
}

// ---------- Relatório: BNCC (previstas x trabalhadas x pendentes) ----------
// "Pendente" é sempre relativo ao CATÁLOGO COMPLETO da série+componente (não
// só ao que foi planejado) — é isso que permite o relatório apontar
// habilidades que o professor nem chegou a planejar ainda, não só as que
// planejou e não executou.
export function montarRelatorioBNCC(aulasFiltradas, { bnccCatalogoPorComponente, serieDaTurmaFn }) {
    const combos = new Map(); // "turma|||componente" -> { turma, componenteCurricular, previstos, trabalhados }
    (aulasFiltradas || []).forEach(a => {
        const chave = `${a.turma}|||${a.componenteCurricular}`;
        if (!combos.has(chave)) {
            combos.set(chave, { turma: a.turma, componenteCurricular: a.componenteCurricular, previstos: new Set(), trabalhados: new Set() });
        }
        const combo = combos.get(chave);
        (a.habilidades || []).forEach(h => combo.previstos.add(h.codigo || h));
        (a.habilidadesTrabalhadas || []).forEach(codigo => combo.trabalhados.add(codigo));
    });

    const linhas = [];
    combos.forEach(combo => {
        const serie = serieDaTurmaFn(combo.turma);
        const catalogo = bnccCatalogoPorComponente[combo.componenteCurricular];
        const habilidadesPorUnidade = catalogo && catalogo.habilidadesBNCC && catalogo.habilidadesBNCC[serie];
        if (!habilidadesPorUnidade) return; // sem catálogo curado pra essa série/componente

        Object.entries(habilidadesPorUnidade).forEach(([unidadeTematica, porEspecificacao]) => {
            Object.entries(porEspecificacao).forEach(([especificacao, habilidadesList]) => {
                (habilidadesList || []).forEach(h => {
                    const codigo = h.codigo || h;
                    const descricao = h.descricao || '';
                    let status;
                    if (combo.trabalhados.has(codigo)) status = 'trabalhada';
                    else if (combo.previstos.has(codigo)) status = 'prevista-nao-trabalhada';
                    else status = 'pendente';
                    linhas.push({ turma: combo.turma, serie, componenteCurricular: combo.componenteCurricular, unidadeTematica, especificacao, codigo, descricao, status });
                });
            });
        });
    });

    return linhas;
}

// ---------- Período (filtro de data) ----------
function paraISO(data) {
    const ano = data.getFullYear();
    const mes = String(data.getMonth() + 1).padStart(2, '0');
    const dia = String(data.getDate()).padStart(2, '0');
    return `${ano}-${mes}-${dia}`;
}

function stringBRParaData(dataStr) {
    const [dia, mes, ano] = dataStr.split('/').map(Number);
    return new Date(ano, mes - 1, dia);
}

// preset: 'bimestre' | 'mes' | 'semana' | 'personalizado'
// 'bimestre' usa bimestreSelecionado se vier, senão o bimestre que contém `hoje`.
// 'personalizado' devolve null — quem chama fornece inicio/fim explícitos.
export function resolverPeriodoPreset(preset, { bimestresConfig, bimestreSelecionado, hoje } = {}) {
    const agora = hoje || new Date();

    if (preset === 'bimestre') {
        const lista = bimestresConfig || [];
        const bimestre = bimestreSelecionado
            ? lista.find(b => String(b.numero) === String(bimestreSelecionado))
            : lista.find(b => {
                const inicio = stringBRParaData(b.inicio);
                const fim = stringBRParaData(b.fim);
                fim.setHours(23, 59, 59, 999);
                return agora >= inicio && agora <= fim;
            });
        if (!bimestre) return null;
        return { inicio: paraISO(stringBRParaData(bimestre.inicio)), fim: paraISO(stringBRParaData(bimestre.fim)) };
    }

    if (preset === 'mes') {
        const inicio = new Date(agora.getFullYear(), agora.getMonth(), 1);
        const fim = new Date(agora.getFullYear(), agora.getMonth() + 1, 0);
        return { inicio: paraISO(inicio), fim: paraISO(fim) };
    }

    if (preset === 'semana') {
        const diaSemana = agora.getDay(); // 0=domingo..6=sábado
        const offsetSegunda = diaSemana === 0 ? -6 : 1 - diaSemana;
        const inicio = new Date(agora.getFullYear(), agora.getMonth(), agora.getDate() + offsetSegunda);
        const fim = new Date(inicio.getFullYear(), inicio.getMonth(), inicio.getDate() + 6);
        return { inicio: paraISO(inicio), fim: paraISO(fim) };
    }

    return null;
}
