// Prof GB — Agregação pura pro contexto de IA do PEI. Sem Firestore (igual
// relatorios-service.js): recebe o Controlador já carregado pela página e só
// calcula. Separado de pei-service.js pra continuar testável com Node puro,
// sem precisar simular o import do SDK do Firebase.

// Agrega, a partir do Controlador já carregado (mesma fonte usada em
// Relatórios), o que o Planejamento já sabe sobre a turma+componente do
// aluno: objetos do conhecimento distintos e habilidades BNCC distintas
// (planejadas ou trabalhadas). Isso vira o contexto curricular enviado à IA
// — ela não inventa objeto/habilidade, só escreve a adaptação pedagógica.
export function montarContextoIA(aluno, aulasControlador) {
    const relevantes = (aulasControlador || []).filter(a =>
        a.turma === aluno.turmaSistema && a.componenteCurricular === aluno.componenteCurricular
    );

    const objetosConhecimento = [...new Set(relevantes.map(a => a.objetoConhecimento).filter(Boolean))];

    const habilidadesPorCodigo = new Map();
    relevantes.forEach(a => {
        (a.habilidades || []).forEach(h => {
            const codigo = (h && h.codigo) || h;
            if (codigo && !habilidadesPorCodigo.has(codigo)) {
                habilidadesPorCodigo.set(codigo, { codigo, descricao: (h && h.descricao) || '' });
            }
        });
    });

    return {
        objetosConhecimento,
        habilidades: [...habilidadesPorCodigo.values()],
        deficiencia: aluno.deficiencia || '',
        cid: aluno.cid || ''
    };
}
