// Prof GB — Busca de compatibilidade no Banco de Atividades. Puro (sem
// Firestore/DOM), igual relatorios-service.js/pei-contexto.js, porque é
// consumido por três telas: Banco de Atividades ("Gerar com IA" avisa se já
// existe algo parecido antes de criar), Planejamento (painel de sugestões no
// formulário de aula) e PEI (contexto de IA). Comparação de componente
// curricular é exata — quem chama normaliza atividades antigas sem esse
// campo (`atividade.componenteCurricular || COMPONENTE_CURRICULAR_PADRAO`,
// constante de grade-service.js) antes de passar pra cá; este módulo nunca
// importa grade-service.js pra continuar sem nenhuma dependência do Firebase.
export function calcularPontuacaoCompatibilidade(atividade, criterios) {
    if (!atividade || !criterios) return 0;
    if (criterios.componenteCurricular && atividade.componenteCurricular !== criterios.componenteCurricular) {
        return 0;
    }
    // Unidade Temática e Objeto de Conhecimento (especificacao), quando
    // informados, são filtro obrigatório (cascata) — não pontuação opcional.
    // Sem isso, uma atividade de um Objeto de Conhecimento diferente que só
    // compartilha a Unidade Temática (categoria bem mais ampla) ainda
    // pontuava e aparecia como "compatível", poluindo as sugestões do
    // Planejamento com o tempo conforme o Banco crescia.
    if (criterios.unidadeTematica && atividade.unidadeTematica !== criterios.unidadeTematica) {
        return 0;
    }
    if (criterios.especificacao && atividade.especificacao !== criterios.especificacao) {
        return 0;
    }

    let pontuacao = 0;
    if (criterios.unidadeTematica && atividade.unidadeTematica === criterios.unidadeTematica) pontuacao += 1;
    if (criterios.especificacao && atividade.especificacao === criterios.especificacao) pontuacao += 1;

    const codigosAtividade = new Set((atividade.habilidades || []).map(h => (h && h.codigo) || h));
    (criterios.habilidadesCodigos || []).forEach(codigo => {
        if (codigosAtividade.has(codigo)) pontuacao += 1;
    });
    return pontuacao;
}

// criterios: { componenteCurricular, unidadeTematica?, especificacao?, habilidadesCodigos?:[] }
// opcoes: { excluirIds?:[], incluirArquivadas?:false }
export function buscarAtividadesCompativeis(atividades, criterios, opcoes = {}) {
    const { excluirIds = [], incluirArquivadas = false } = opcoes;
    return (atividades || [])
        .filter(a => (incluirArquivadas || !a.arquivada) && !excluirIds.includes(a.id))
        .map(a => {
            const codigosAtividade = new Set((a.habilidades || []).map(h => (h && h.codigo) || h));
            const habilidadesComuns = (criterios.habilidadesCodigos || []).filter(c => codigosAtividade.has(c));
            return { atividade: a, pontuacao: calcularPontuacaoCompatibilidade(a, criterios), habilidadesComuns };
        })
        .filter(r => r.pontuacao > 0)
        .sort((x, y) => y.pontuacao - x.pontuacao);
}

// Duplicidade por TÍTULO — complementar a buscarAtividadesCompativeis acima
// (que compara Unidade Temática/Objeto de Conhecimento/habilidades da BNCC).
// Título é o único dado sempre presente desde o primeiro instante — na
// importação de arquivo, por exemplo, a BNCC só é classificada manualmente
// DEPOIS que o professor revisa o formulário, então checar só por
// compatibilidade de BNCC não pega nada nesse momento. Comparação puramente
// textual (normaliza acento/caixa/espaço + correspondência exata ou uma
// string contida na outra) — não é similaridade semântica via IA/embeddings,
// que continua fora de escopo.
function normalizarTitulo(titulo) {
    return (titulo || '')
        .normalize('NFD').replace(/[\u0300-\u036f]/g, '')
        // Indicador ordinal (\u00ba/\u00aa) \u2014 s\u00e9rie extra\u00edda de um documento \u00e0s vezes
        // vem sem ele ("6 Ano" em vez de "6\u00ba Ano"); tratar como equivalente
        // evita que s\u00f3 essa diferen\u00e7a quebre o match da s\u00e9rie.
        .replace(/[\u00ba\u00aa]/g, '')
        .toLowerCase()
        .trim()
        .replace(/\s+/g, ' ');
}

// criterios: { titulo, componenteCurricular }
// opcoes: { excluirIds?:[], incluirArquivadas?:false }
export function buscarTitulosSimilares(atividades, criterios, opcoes = {}) {
    const tituloBusca = normalizarTitulo(criterios && criterios.titulo);
    if (!tituloBusca) return [];
    const { excluirIds = [], incluirArquivadas = false } = opcoes;
    return (atividades || []).filter(a => {
        if (!a || excluirIds.includes(a.id)) return false;
        if (!incluirArquivadas && a.arquivada) return false;
        if ((a.componenteCurricular || null) !== (criterios.componenteCurricular || null)) return false;
        const tituloAtual = normalizarTitulo(a.titulo);
        if (!tituloAtual) return false;
        if (tituloAtual === tituloBusca) return true;
        // Contenção só entra em jogo com títulos "reais" (>=4 caracteres),
        // senão títulos curtos como "Bola" geram falso positivo demais.
        return tituloBusca.length >= 4 && tituloAtual.length >= 4 &&
            (tituloAtual.includes(tituloBusca) || tituloBusca.includes(tituloAtual));
    });
}

// Casa um texto lido de um documento importado (ex: a IA extraiu "Esportes
// de Marca" do cabeçalho do arquivo) contra a lista de opções curadas da
// BNCC pra aquele componente/série (ex: unidadesPorAno, especificacoesPor
// Unidade[serie][unidade]) — mesma normalização de buscarTitulosSimilares
// (sem acento/caixa/espaço). Nunca inventa uma opção que não exista na
// lista curada; sem correspondência confiável, devolve null e quem chama
// deixa o campo em branco pro professor escolher manualmente.
export function encontrarOpcaoCorrespondente(valorExtraido, opcoesDisponiveis) {
    const alvo = normalizarTitulo(valorExtraido);
    if (!alvo) return null;
    const lista = opcoesDisponiveis || [];
    const exata = lista.find(op => normalizarTitulo(op) === alvo);
    if (exata) return exata;
    return lista.find(op => {
        const opNorm = normalizarTitulo(op);
        return opNorm.length >= 4 && alvo.length >= 4 && (opNorm.includes(alvo) || alvo.includes(opNorm));
    }) || null;
}
