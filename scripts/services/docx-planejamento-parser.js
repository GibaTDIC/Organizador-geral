// Prof GB — Leitor de planejamento a partir de arquivo .docx. Primeira peça
// de um conjunto de leitores modulares (um futuro pdf-planejamento-parser.js
// poderia existir do lado, sem tocar aqui) — mas tudo isolado neste arquivo:
// quem chama só conhece parseArquivoDocxPlanejamento(file).
//
// Validado contra um modelo real (rede municipal CEMFOR de Sorriso/MT):
// documento sem nenhum estilo de título do Word — a única forma confiável
// de identificar um campo é pelo texto do rótulo ("Unidade Temática:",
// "Habilidades:" etc.), não por formatação. Por isso o reconhecimento é
// uma lista de rótulos configurável (fácil de estender pra outro modelo),
// não uma leitura "inteligente" de verdade — sem IA, é reconhecimento de
// padrão mesmo, o professor sempre revisa antes de salvar.
import JSZip from "https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm";

const ROTULOS = [
    { chave: 'periodo', regex: /per[íi]odo\s*:\s*/i },
    { chave: 'areaConhecimento', regex: /[áa]rea\s+do\s+conhecimento\s*:\s*/i },
    { chave: 'componenteCurricular', regex: /componente\s+curricular\s*:\s*/i },
    { chave: 'turma', regex: /turma\s*:\s*/i },
    { chave: 'docente', regex: /docente\s+respons[áa]vel\s*:\s*/i },
    { chave: 'coordenador', regex: /coordenador(?:\s*\(a\))?\s+respons[áa]vel\s*:\s*/i },
    { chave: 'unidadeTematica', regex: /unidade\s+tem[áa]tica\s*:\s*/i },
    { chave: 'habilidades', regex: /habilidades\s*:\s*/i },
    { chave: 'objetoConhecimento', regex: /objeto\s+de\s+conhecimento(?:\s*\/\s*conte[úu]do)?\s*:\s*/i },
    { chave: 'procedimentos', regex: /procedimentos\s+metodol[óo]gicos\s*:\s*/i },
    { chave: 'planejamentoMensal', regex: /planejamento\s+mensal\s*:?\s*/i },
    { chave: 'organizacaoTurma', regex: /organiza[çc][ãa]o\s+turma\s*\/\s*sala\s*:\s*/i },
    { chave: 'avaliacao', regex: /avalia[çc][ãa]o\s*:\s*/i },
    { chave: 'recursos', regex: /recursos\s+necess[áa]rios\s*:\s*/i },
    { chave: 'referencias', regex: /refer[êe]ncias\s*:\s*/i },
    { chave: 'observacao', regex: /observa[çc][ãa]o\s*:\s*/i }
];

const RE_SEMANA = /ATIVIDADES\s*[-–]\s*(\d+)[°º]?\s*SEMANA\s*:\s*(\d{2}\/\d{2})\s*a\s*(\d{2}\/\d{2})/i;
const RE_ATIVIDADE = /^(\d+)[ªa]\s*Atividade\s*[-–]\s*(.+)$/i;
const RE_CODIGO_BNCC = /\bEF\d{2}[A-Z]{2}\d{2,3}\b/g;

// Modelo alternativo (visto em planejamento de Anos Iniciais, sem data por
// item): em vez de "ATIVIDADES – Nª SEMANA: DD/MM a DD/MM", o mês é
// organizado em "1°momento", "2°momento" etc., com só UMA data pro mês
// inteiro no cabeçalho "Período:" — ver parseMomentos/extrairIntervaloMes,
// usados só como fallback quando RE_SEMANA não encontra nada.
const RE_MOMENTO = /^\d+[°º]\s*momento\s*:?\s*(.*)$/i;
const RE_UNIDADE_BLOCO = /^unidade\s+\d+\s*[-–]\s*(.*)$/i;
const RE_INTERVALO_MES = /(\d{2}\/\d{2})(?:\/\d{2,4})?\s*a\s*(\d{2}\/\d{2})(?:\/\d{2,4})?/;

function textoDoParagrafo(p) {
    const nos = p.getElementsByTagName('w:t');
    let texto = '';
    for (let i = 0; i < nos.length; i++) {
        texto += nos[i].textContent || '';
    }
    return texto;
}

// Percorre a(s) tabela(s) do documento em ordem; se não houver tabela
// nenhuma (outro modelo de planejamento), cai pra parágrafos soltos do
// corpo — mantém o parser útil mesmo fora do formato de referência.
function extrairParagrafos(xmlDoc) {
    const paragrafos = [];
    const tabelas = xmlDoc.getElementsByTagName('w:tbl');

    if (tabelas.length > 0) {
        const linhas = tabelas[0].getElementsByTagName('w:tr');
        for (let i = 0; i < linhas.length; i++) {
            const celulas = linhas[i].getElementsByTagName('w:tc');
            for (let j = 0; j < celulas.length; j++) {
                const ps = celulas[j].getElementsByTagName('w:p');
                for (let k = 0; k < ps.length; k++) {
                    const texto = textoDoParagrafo(ps[k]);
                    if (texto.trim()) paragrafos.push(texto);
                }
            }
        }
        if (paragrafos.length > 0) return paragrafos;
    }

    const corpos = xmlDoc.getElementsByTagName('w:body');
    if (corpos.length === 0) return paragrafos;
    const filhos = corpos[0].childNodes;
    for (let i = 0; i < filhos.length; i++) {
        const filho = filhos[i];
        if (filho.nodeType === 1 && filho.tagName === 'w:p') {
            const texto = textoDoParagrafo(filho);
            if (texto.trim()) paragrafos.push(texto);
        }
    }
    return paragrafos;
}

function encontrarRotulosNoTexto(texto) {
    const encontrados = [];
    ROTULOS.forEach(r => {
        const re = new RegExp(r.regex.source, 'gi');
        let m;
        while ((m = re.exec(texto)) !== null) {
            encontrados.push({ chave: r.chave, inicio: m.index, fimRotulo: m.index + m[0].length });
            if (m.index === re.lastIndex) re.lastIndex++; // evita loop infinito em match vazio
        }
    });
    encontrados.sort((a, b) => a.inicio - b.inicio);
    return encontrados;
}

// Máquina de estados por rótulo conhecido: cada parágrafo pode conter 0, 1
// ou vários rótulos (ex: "Área do conhecimento: X    Componente Curricular:
// Y" no mesmo parágrafo). Parágrafos sem rótulo novo continuam o campo
// aberto mais recente — é assim que a seção "PLANEJAMENTO MENSAL" absorve
// dezenas de linhas de semanas/atividades até o próximo rótulo conhecido
// aparecer (ex: "Observação:"). Um rótulo que se repete (como "Observação"
// no modelo de referência) vira múltiplas entradas, nunca sobrescreve.
function extrairCamposBrutos(paragrafos) {
    const campos = {};
    let chaveAtual = null;

    function anexar(chave, texto) {
        if (!texto || !texto.trim()) return;
        if (!campos[chave]) campos[chave] = [];
        campos[chave].push(texto.trim());
    }

    paragrafos.forEach(paragrafo => {
        const rotulosAchados = encontrarRotulosNoTexto(paragrafo);
        if (rotulosAchados.length === 0) {
            if (chaveAtual) anexar(chaveAtual, paragrafo);
            return;
        }
        for (let i = 0; i < rotulosAchados.length; i++) {
            const atual = rotulosAchados[i];
            const fimTexto = (i + 1 < rotulosAchados.length) ? rotulosAchados[i + 1].inicio : paragrafo.length;
            const valor = paragrafo.slice(atual.fimRotulo, fimTexto);
            anexar(atual.chave, valor);
            chaveAtual = atual.chave;
        }
    });

    return campos;
}

// Sub-parser da seção "PLANEJAMENTO MENSAL": semanas marcadas por
// "ATIVIDADES – Nª SEMANA: DD/MM a DD/MM", cada uma com N atividades
// marcadas por "Nª Atividade – <título>"; linhas restantes viram descrição
// da atividade atual (sub-bullets do modelo de referência).
function parseSemanas(linhas) {
    const semanas = [];
    let semanaAtual = null;
    let atividadeAtual = null;

    (linhas || []).forEach(linha => {
        const mSemana = RE_SEMANA.exec(linha);
        if (mSemana) {
            semanaAtual = { numero: parseInt(mSemana[1], 10), dataInicio: mSemana[2], dataFim: mSemana[3], atividades: [] };
            semanas.push(semanaAtual);
            atividadeAtual = null;
            return;
        }
        const mAtividade = RE_ATIVIDADE.exec(linha);
        if (mAtividade && semanaAtual) {
            atividadeAtual = { titulo: mAtividade[2].trim(), descricao: [] };
            semanaAtual.atividades.push(atividadeAtual);
            return;
        }
        if (atividadeAtual) {
            atividadeAtual.descricao.push(linha.trim());
        } else if (semanaAtual) {
            semanaAtual.observacao = (semanaAtual.observacao ? semanaAtual.observacao + ' ' : '') + linha.trim();
        }
    });

    return semanas;
}

// Extrai a data de início/fim do MÊS inteiro a partir do texto livre de
// "Período:" (ex: "9ª FORMAÇÃO - ... Planejamento mensal 21/07 a 21/08/26")
// — usada só como fallback quando não há data por semana/momento no
// documento. Mantém o formato DD/MM (sem ano) pra bater com o que RE_SEMANA
// já produz, sem exigir mudança em sugerirBimestreParaData/escolherMesDaSemana
// a jusante.
function extrairIntervaloMes(textoPeriodo) {
    const m = RE_INTERVALO_MES.exec(textoPeriodo || '');
    if (!m) return null;
    return { inicio: m[1], fim: m[2] };
}

// Sub-parser alternativo à seção "PLANEJAMENTO MENSAL": em modelos sem data
// por item, o mês é organizado em "N°momento: <título>", dentro de blocos
// "Unidade N – <nome>" (rastreados só pra prefixar o título de cada
// momento, já que "1°momento" se repete em cada unidade). Numeração própria
// (não o dígito capturado do texto) porque esse dígito reinicia a cada
// unidade — usar ele criaria dois itens numerados "1" com a mesma data,
// indistinguíveis no título gerado por quem chama (que usa só número+datas).
// Todo momento recebe a MESMA data (o mês inteiro) — o professor ajusta a
// data real de cada um na revisão, como já faz com as semanas do modelo EF.
function parseMomentos(linhas, dataInicioMes, dataFimMes) {
    const momentos = [];
    let unidadeAtual = '';
    let momentoAtual = null;

    (linhas || []).forEach(linhaBruta => {
        const linha = linhaBruta.trim();
        const mUnidade = RE_UNIDADE_BLOCO.exec(linha);
        if (mUnidade) {
            unidadeAtual = linha;
            momentoAtual = null;
            return;
        }
        const mMomento = RE_MOMENTO.exec(linha);
        if (mMomento) {
            const numero = momentos.length + 1;
            const tituloMomento = mMomento[1].trim();
            const titulo = [unidadeAtual, tituloMomento].filter(Boolean).join(' — ') || `Momento ${numero}`;
            momentoAtual = {
                numero,
                dataInicio: dataInicioMes,
                dataFim: dataFimMes,
                atividades: [{ titulo, descricao: [] }]
            };
            momentos.push(momentoAtual);
            return;
        }
        if (momentoAtual) {
            momentoAtual.atividades[0].descricao.push(linha);
        }
    });

    return momentos;
}

function extrairCodigosBNCC(linhas) {
    const codigos = new Set();
    const textoCompleto = (linhas || []).join(' ');
    let m;
    RE_CODIGO_BNCC.lastIndex = 0;
    while ((m = RE_CODIGO_BNCC.exec(textoCompleto)) !== null) {
        codigos.add(m[0]);
    }
    return [...codigos];
}

export async function parseArquivoDocxPlanejamento(file) {
    const zip = await JSZip.loadAsync(await file.arrayBuffer());
    const arquivoXml = zip.file('word/document.xml');
    if (!arquivoXml) {
        throw new Error('Arquivo .docx inválido ou corrompido (word/document.xml não encontrado).');
    }
    const xmlTexto = await arquivoXml.async('string');
    const xmlDoc = new DOMParser().parseFromString(xmlTexto, 'application/xml');
    if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        throw new Error('Não foi possível ler o conteúdo do arquivo .docx.');
    }

    const paragrafos = extrairParagrafos(xmlDoc);
    const campos = extrairCamposBrutos(paragrafos);

    const linhaUnica = (chave) => (campos[chave] || []).join(' ').trim();
    const linhasArray = (chave) => campos[chave] || [];

    let semanas = parseSemanas(campos.planejamentoMensal);
    // Fallback pro modelo "momento" (ver parseMomentos) — só entra em ação
    // quando o modelo de referência (ATIVIDADES – Nª SEMANA) não achou
    // nada. Busca tanto em planejamentoMensal quanto em procedimentos
    // porque, no modelo real de Anos Iniciais que motivou isso, o conteúdo
    // dos "momentos" cai sob "PROCEDIMENTOS METODOLÓGICOS" — só um trecho
    // de UMA linha cai em planejamentoMensal, por coincidência (a própria
    // linha do cabeçalho "Período: ... Planejamento mensal 21/07 a
    // 21/08/26" contém as palavras "planejamento mensal").
    if (semanas.length === 0) {
        // Busca a data em "período" E "planejamentoMensal" juntos — no
        // modelo real que motivou isso, "Período: ... Planejamento mensal
        // 21/07 a 21/08/26" está no MESMO parágrafo, e como "Planejamento
        // mensal" também é um rótulo reconhecido, a data acaba cortada pro
        // campo planejamentoMensal, não período (ver extrairCamposBrutos —
        // cada rótulo encontrado no parágrafo fecha o campo anterior).
        const intervaloMes = extrairIntervaloMes(`${linhaUnica('periodo')} ${linhaUnica('planejamentoMensal')}`);
        if (intervaloMes) {
            // Varre TODOS os parágrafos do documento (não um campo
            // específico de `campos`) — no modelo real, uma "Observação:"
            // citada no meio de uma atividade (não como cabeçalho de
            // seção) já é o suficiente pra extrairCamposBrutos cortar o
            // campo aberto no meio e jogar o resto pra outro rótulo,
            // fragmentando os momentos entre "procedimentos"/"observacao"/
            // etc. Como RE_MOMENTO e RE_UNIDADE_BLOCO exigem o padrão bem
            // no início da linha, varrer tudo não corre risco de pegar
            // texto solto por engano.
            semanas = parseMomentos(paragrafos, intervaloMes.inicio, intervaloMes.fim);
        }
    }
    const codigosBNCC = extrairCodigosBNCC(campos.habilidades);

    // "Unidade Temática" no documento de origem corresponde, no nosso
    // schema, ao nível "especificação" (ver bncc-sugestao.js) — cada bullet
    // vira um item da lista, sem o prefixo "- " do modelo de referência.
    const especificacoesExtraidas = linhasArray('unidadeTematica')
        .map(l => l.replace(/^-\s*/, '').trim())
        .filter(Boolean);

    return {
        arquivoNome: file.name,
        periodo: linhaUnica('periodo'),
        areaConhecimento: linhaUnica('areaConhecimento'),
        componenteCurricular: linhaUnica('componenteCurricular'),
        turmaTexto: linhaUnica('turma'),
        docente: linhaUnica('docente'),
        coordenador: linhaUnica('coordenador'),
        especificacoesExtraidas,
        habilidadesTexto: linhasArray('habilidades'),
        codigosBNCC,
        objetoConhecimento: linhasArray('objetoConhecimento').join(' '),
        procedimentos: linhaUnica('procedimentos'),
        semanas,
        organizacaoTurma: linhaUnica('organizacaoTurma'),
        avaliacao: linhaUnica('avaliacao'),
        recursos: linhaUnica('recursos'),
        referencias: linhasArray('referencias'),
        observacoes: linhasArray('observacao')
    };
}
