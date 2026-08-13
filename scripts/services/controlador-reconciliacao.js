// Prof GB — Reconciliação pura do Controlador (Planejamento × turmas
// cadastradas), sem Firestore. Separada de controlador-sync.js só pra ficar
// testável com Node puro — grade-service.js, de onde viria
// COMPONENTE_CURRICULAR_PADRAO, importa o SDK do Firestore e quebraria
// qualquer teste que importasse este arquivo transitivamente. A orquestração
// com Firestore (transação, lock de reentrância) continua em
// controlador-sync.js, que reexporta tudo daqui.
const COMPONENTE_CURRICULAR_PADRAO = 'Educação Física';

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

// Reconciliação pura: recebe o estado atual do Controlador + o Planejamento/
// turmas já carregados, devolve { alterou, dados }. Extraída do corpo da
// transação pra poder ser testada com fixtures Node puras, sem precisar
// simular o SDK do Firestore — a lógica de cruzamento é o que mais muda e
// mais precisa de teste; a transação em si (transacionarControlador) não.
export function reconciliarAulas(data, { aulasFirebase, turmasAtuais }) {
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

            // Uma entrada já sincronizada nunca era revisitada — se o
            // professor criasse a aula sem data (ganhando o fallback
            // fabricado hoje+índice×3) e só depois voltasse no
            // Planejamento pra preencher "Data de referência", essa
            // correção nunca chegava ao Controlador: a entrada ficava
            // congelada pra sempre com a data fabricada, podendo cair no
            // futuro e travar Iniciar/Concluir por engano ("Aula
            // futura"). Agora, sempre que dataReferencia existir e
            // divergir da data já salva, a entrada é realinhada — sem
            // tocar em status/aulasExecutadas/observações, que são do
            // Controlador, não do Planejamento.
            if (jaExiste && aulaBase.dataReferencia && jaExiste.dataInicio !== aulaBase.dataReferencia) {
                const dataInicioObj = new Date(aulaBase.dataReferencia + 'T12:00:00');
                const prazoObj = new Date(dataInicioObj);
                prazoObj.setDate(prazoObj.getDate() + 7);
                jaExiste.dataInicio = aulaBase.dataReferencia;
                jaExiste.prazo = prazoObj.toISOString().split('T')[0];
                alterou = true;
            }

            // Mesmo problema de fundo, pros outros campos que vêm do
            // Planejamento: título, objeto do conhecimento, habilidades,
            // descrição etc. também ficavam congelados pra sempre com o
            // valor da primeira sincronização — renomear uma aula (ou
            // editar qualquer um desses campos) no Planejamento nunca
            // chegava ao Controlador, então Dashboard/Relatórios/PEI
            // continuavam mostrando o nome/conteúdo antigo. Realinha só
            // os campos que são do Planejamento; nunca toca nos que são
            // do Controlador (status, aulasExecutadas, conteudoMinistrado,
            // habilidadesTrabalhadas, historico, observacoes).
            if (jaExiste) {
                const habilidadesAtuais = Array.isArray(aulaBase.habilidades) && aulaBase.habilidades.length > 0
                    ? aulaBase.habilidades
                    : (aulaBase.habilidade ? [{ codigo: aulaBase.habilidade, descricao: '' }] : []);
                const camposPlanejamento = {
                    titulo: aulaBase.titulo,
                    objetoConhecimento: aulaBase.objetoConhecimento,
                    unidadeTematica: aulaBase.unidadeTematica || "Ginásticas",
                    especificacao: aulaBase.especificacao || null,
                    habilidades: habilidadesAtuais,
                    descricao: aulaBase.descricao,
                    bimestre: aulaBase.bimestre || 1,
                    numAulas: aulaBase.numeroAulas || 2
                };
                Object.keys(camposPlanejamento).forEach((campo) => {
                    const valorNovo = camposPlanejamento[campo];
                    if (JSON.stringify(jaExiste[campo]) !== JSON.stringify(valorNovo)) {
                        jaExiste[campo] = valorNovo;
                        alterou = true;
                    }
                });
            }

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

    // Remove entradas cujo plano de aula original foi excluído do
    // Planejamento, OU cuja turma física foi excluída (ou trocou de
    // componente curricular) em Configurações — sem o segundo check, apagar
    // uma turma deixava as aulas dela "penduradas" pra sempre no Controlador
    // (e portanto em Pendências/Dashboard/Relatórios), mesmo já sumida da
    // grade e da lista de turmas.
    const tamanhoAntes = controladorBanco.length;
    controladorBanco = controladorBanco.filter(aulaControlador => {
        const aulaExiste = aulasFirebase.some(aulaFirebase => aulaFirebase.id === aulaControlador.firebaseId);
        const turmaExiste = turmasAtuais.some(turma =>
            turma.nome === aulaControlador.turma &&
            (turma.componenteCurricular || COMPONENTE_CURRICULAR_PADRAO) === (aulaControlador.componenteCurricular || COMPONENTE_CURRICULAR_PADRAO)
        );
        return aulaExiste && turmaExiste;
    });
    if (controladorBanco.length !== tamanhoAntes) {
        alterou = true;
    }

    return {
        alterou,
        dados: {
            aulas: controladorBanco,
            aulaAtualId: data?.aulaAtualId || null,
            ultimaAtualizacao: new Date().toISOString()
        }
    };
}
