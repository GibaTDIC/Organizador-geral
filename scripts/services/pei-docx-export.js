// Prof GB — Exportação do PEI em .docx real, usando o modelo institucional
// (assets/pei/modelo-pei.docx) via docxtemplater+pizzip carregados por CDN.
// Primeira biblioteca não-Firebase do projeto: o professor pediu ".docx de
// verdade" (não só impressão), e como o projeto não tem build step, a única
// forma de gerar um binário .docx real no navegador é com uma lib de
// template carregada como <script> UMD, igual já se faz com o SDK do
// Firebase via CDN.
const PIZZIP_CDN = 'https://cdn.jsdelivr.net/npm/pizzip@3.2.0/dist/pizzip.min.js';
const DOCXTEMPLATER_CDN = 'https://cdn.jsdelivr.net/npm/docxtemplater@3.69.3/build/docxtemplater.min.js';
const MODELO_URL = new URL('../../assets/pei/modelo-pei.docx', import.meta.url).href;

let carregamentoLibs = null;

function carregarScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
        document.head.appendChild(script);
    });
}

function garantirBibliotecas() {
    if (!carregamentoLibs) {
        carregamentoLibs = (async () => {
            if (!window.PizZip) await carregarScript(PIZZIP_CDN);
            if (!window.docxtemplater) await carregarScript(DOCXTEMPLATER_CDN);
        })();
    }
    return carregamentoLibs;
}

function opcaoMarcada(condicao, rotulo) {
    return `(${condicao ? 'X' : '  '}) ${rotulo}`;
}

function textoPeriodo(periodo) {
    return [
        opcaoMarcada(periodo === 'matutino', 'MATUTINO'),
        opcaoMarcada(periodo === 'vespertino', 'VESPERTINO'),
        opcaoMarcada(periodo === 'integral', 'INTEGRAL')
    ].join('   ');
}

function textoSimNao(marcado) {
    return `${opcaoMarcada(marcado, 'SIM')}      ${opcaoMarcada(!marcado, 'NÃO')}`;
}

function formatarDataBR(iso) {
    const m = /^(\d{4})-(\d{2})-(\d{2})/.exec(iso || '');
    return m ? `${m[3]}/${m[2]}/${m[1]}` : (iso || '');
}

// Monta o objeto de dados nos exatos nomes de tag gravados no modelo
// (assets/pei/modelo-pei.docx) — qualquer tag do modelo sem chave
// correspondente aqui faz o docxtemplater falhar no render.
export function montarDadosDocx(aluno, documento, nomeEscola) {
    const conteudo = documento.conteudoPedagogico || {};
    return {
        unidadeEscolar: nomeEscola || '',
        nomeEstudante: aluno.nome || '',
        deficienciaCid: [aluno.deficiencia, aluno.cid].filter(Boolean).join(' - '),
        anoTurma: aluno.anoTurma || '',
        disciplina: aluno.componenteCurricular || '',
        professorRegente: aluno.professorRegente || '',
        periodoTexto: textoPeriodo(aluno.periodo),
        professorMediadorTexto: textoSimNao(!!(aluno.professorMediador && aluno.professorMediador.tem)),
        professorMediadorQuem: (aluno.professorMediador && aluno.professorMediador.quem) || '',
        estagiarioTexto: textoSimNao(!!(aluno.estagiario && aluno.estagiario.tem)),
        estagiarioQuem: (aluno.estagiario && aluno.estagiario.quem) || '',
        dataInicio: formatarDataBR(documento.dataInicio),
        dataTermino: formatarDataBR(documento.dataTermino),
        dataRevisao1: formatarDataBR(documento.dataRevisao1),
        dataRevisao2: formatarDataBR(documento.dataRevisao2),
        objetosConhecimento: conteudo.objetosConhecimento || [],
        habilidades: conteudo.habilidades || [],
        metodologiaRecursos: conteudo.metodologiaRecursos || '',
        avaliacaoPeriodo: conteudo.avaliacaoPeriodo || '',
        adaptacoesFuncionais: documento.adaptacoesFuncionais || '',
        atividades: (documento.planilhaAcompanhamento || []).map(a => ({
            data: formatarDataBR(a.data) || a.data || '',
            atividade: a.atividade || ''
        }))
    };
}

export async function exportarPeiDocx(aluno, documento, nomeEscola) {
    await garantirBibliotecas();
    const resposta = await fetch(MODELO_URL);
    if (!resposta.ok) {
        throw new Error('Não foi possível carregar o modelo do PEI.');
    }
    const modeloBuffer = await resposta.arrayBuffer();

    const zip = new window.PizZip(modeloBuffer);
    const doc = new window.docxtemplater(zip, { paragraphLoop: true, linebreaks: true });
    doc.render(montarDadosDocx(aluno, documento, nomeEscola));

    const blob = doc.getZip().generate({
        type: 'blob',
        mimeType: 'application/vnd.openxmlformats-officedocument.wordprocessingml.document'
    });

    const nomeArquivo = `PEI - ${aluno.nome || 'aluno'} - ${documento.bimestre || ''}bim.docx`.replace(/\s+/g, ' ').trim();
    const url = URL.createObjectURL(blob);
    const link = document.createElement('a');
    link.href = url;
    link.download = nomeArquivo;
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    URL.revokeObjectURL(url);
}
