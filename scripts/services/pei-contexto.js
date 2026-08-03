// Prof GB — Agregação pura pro contexto de IA do PEI. Sem Firestore (igual
// relatorios-service.js): recebe o Controlador já carregado pela página e só
// calcula. Separado de pei-service.js pra continuar testável com Node puro,
// sem precisar simular o import do SDK do Firebase.
import { resolverDataRealAula } from './relatorios-service.js';
import { buscarAtividadesCompativeis } from './atividades-busca.js';

// Agrega, a partir do Controlador já carregado (mesma fonte usada em
// Relatórios), o que o Planejamento já sabe sobre a turma+componente do
// aluno: objetos do conhecimento distintos e habilidades BNCC distintas
// (planejadas ou trabalhadas). Isso vira o contexto curricular enviado à IA
// — ela não inventa objeto/habilidade, só escreve a adaptação pedagógica.
// `atividadesBanco` é opcional (retrocompatível com chamadas de 2
// argumentos já em produção) — quando informado, busca atividades já
// cadastradas compatíveis com o componente/habilidades do aluno pra IA usar
// como referência concreta, em vez de inventar do zero.
export function montarContextoIA(aluno, aulasControlador, atividadesBanco) {
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

    const contexto = {
        objetosConhecimento,
        habilidades: [...habilidadesPorCodigo.values()],
        deficiencia: aluno.deficiencia || '',
        cid: aluno.cid || ''
    };

    if (atividadesBanco && atividadesBanco.length > 0) {
        const compativeis = buscarAtividadesCompativeis(atividadesBanco, {
            componenteCurricular: aluno.componenteCurricular,
            habilidadesCodigos: contexto.habilidades.map(h => h.codigo)
        });
        if (compativeis.length > 0) {
            contexto.atividadesBanco = compativeis.slice(0, 8).map(r => ({
                titulo: r.atividade.titulo,
                tipo: r.atividade.tipo || null,
                descricao: r.atividade.descricao || ''
            }));
        }
    }

    return contexto;
}

// 'DD/MM/AAAA' (formato dos bimestres em Configurações) -> 'AAAA-MM-DD'
// (formato dos <input type="date"> do PEI). Retorna '' se não bater o padrão.
export function dataBRParaISO(dataBR) {
    const m = /^(\d{2})\/(\d{2})\/(\d{4})$/.exec(dataBR || '');
    return m ? `${m[3]}-${m[2]}-${m[1]}` : '';
}

const DIAS_SEMANA_GRADE = ['segunda', 'terca', 'quarta', 'quinta', 'sexta'];

// O aluno do PEI assiste aula junto da turma dele, no mesmo horário — então
// a Planilha de Acompanhamento pode começar preenchida com as datas em que a
// turma+componente do aluno realmente tem aula na grade, dentro do período
// do bimestre, pulando qualquer dia especial (feriado/recesso/sábado
// letivo/conselho de classe — todos bloqueiam aula, mesma regra já usada em
// Programação Diária/Dashboard). Fica só a data; o professor preenche a
// atividade conforme a aula acontece.
export function calcularDatasDeAulaNoPeriodo(gradeAtual, turma, componenteCurricular, dataInicioISO, dataTerminoISO, diasEspeciais, normalizarCelulaFn) {
    if (!gradeAtual || !dataInicioISO || !dataTerminoISO) return [];

    const diasSemanaComAula = new Set();
    ['matutino', 'vespertino'].forEach(periodo => {
        (gradeAtual[periodo] || []).forEach(linha => {
            DIAS_SEMANA_GRADE.forEach((chave, indice) => {
                const celula = normalizarCelulaFn(linha[chave]);
                if (celula.tipo === 'turma' && celula.turma === turma && celula.componenteCurricular === componenteCurricular) {
                    diasSemanaComAula.add(indice + 1); // getDay(): 1=segunda ... 5=sexta
                }
            });
        });
    });
    if (diasSemanaComAula.size === 0) return [];

    const datasBloqueadas = new Set(
        (diasEspeciais || [])
            .map(d => {
                const [dia, mes, ano] = (d.data || '').split('/').map(Number);
                return (dia && mes && ano) ? `${ano}-${String(mes).padStart(2, '0')}-${String(dia).padStart(2, '0')}` : null;
            })
            .filter(Boolean)
    );

    const [anoIni, mesIni, diaIni] = dataInicioISO.split('-').map(Number);
    const [anoFim, mesFim, diaFim] = dataTerminoISO.split('-').map(Number);
    const cursor = new Date(anoIni, mesIni - 1, diaIni);
    const fim = new Date(anoFim, mesFim - 1, diaFim);

    const datas = [];
    while (cursor <= fim) {
        if (diasSemanaComAula.has(cursor.getDay())) {
            const iso = `${cursor.getFullYear()}-${String(cursor.getMonth() + 1).padStart(2, '0')}-${String(cursor.getDate()).padStart(2, '0')}`;
            if (!datasBloqueadas.has(iso)) datas.push(iso);
        }
        cursor.setDate(cursor.getDate() + 1);
    }
    return datas;
}

// Linha do tempo do conteúdo dado pra essa turma+componente: cada aula do
// Controlador vira um ponto {data, titulo}, com a data corrigida pro dia real
// da semana (reaproveita resolverDataRealAula, mesma correção do Diário de
// Classe em Relatórios — o Controlador guarda uma única dataInicio por
// conteúdo, igual pra toda turma da série, não uma por turma física).
export function montarLinhaDoTempoConteudo(aulasControlador, turma, componenteCurricular, gradeAtual, normalizarCelulaFn) {
    return (aulasControlador || [])
        .filter(a => a.turma === turma && a.componenteCurricular === componenteCurricular && a.dataInicio)
        .map(a => ({
            titulo: a.titulo || '',
            data: resolverDataRealAula(gradeAtual, turma, componenteCurricular, a.dataInicio, normalizarCelulaFn)
        }))
        .filter(e => e.data)
        .sort((x, y) => x.data.localeCompare(y.data));
}

// Qual era o conteúdo "vigente" numa data específica: o último item da linha
// do tempo cuja data de início já tinha chegado. Cobre sozinho o caso de um
// conteúdo ocupar mais de uma aula (numAulas > 1) — não precisa calcular
// quantas semanas ele durou, só precisa saber que nenhum conteúdo novo
// começou ainda depois dele.
export function tituloVigenteNaData(linhaDoTempo, dataISO) {
    let atual = '';
    for (const item of linhaDoTempo) {
        if (item.data <= dataISO) atual = item.titulo;
        else break;
    }
    return atual;
}
