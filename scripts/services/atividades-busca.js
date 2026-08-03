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
