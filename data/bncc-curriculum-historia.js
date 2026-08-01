// Prof GB — Dados fixos da BNCC (História), Ensino Fundamental 1º-9º ano.
// Fonte: BNCC (MEC, versão final), seção 4.4.2 História — texto das
// habilidades e nomes dos objetos de conhecimento são verbatim do documento
// oficial (conferidos código a código e objeto a objeto contra o PDF em 2026-08).
//
// Diferente de Geografia e Ciências, História NÃO reaproveita os mesmos
// nomes de unidade temática entre os anos — cada ano tem suas próprias
// unidades (ex.: 1º ano usa "Mundo pessoal: meu lugar no mundo", 6º ano usa
// "História: tempo, espaço e formas de registros" etc.), refletindo os
// períodos/temas históricos específicos daquele ano.
//
// Como o documento não separa visualmente qual habilidade pertence a qual
// objeto específico dentro de uma unidade com múltiplos objetos, todos os
// objetos de uma mesma unidade (no mesmo ano) compartilham o conjunto
// completo de habilidades daquela unidade (mesmo padrão de Geografia e
// Ensino Religioso).

// Todo objeto de conhecimento de uma mesma unidade, no mesmo ano,
// compartilha o MESMO conjunto de habilidades daquela unidade.
function habilidadesDoAno(objetosPorUnidade, habilidadesPorUnidade) {
    const resultado = {};
    Object.entries(objetosPorUnidade).forEach(([unidade, objetos]) => {
        const mapaObjetos = {};
        objetos.forEach(o => { mapaObjetos[o] = habilidadesPorUnidade[unidade]; });
        resultado[unidade] = mapaObjetos;
    });
    return resultado;
}

// ============================== 1º Ano ==============================
const U_1ANO = ["Mundo pessoal: meu lugar no mundo", "Mundo pessoal: eu, meu grupo social e meu tempo"];
const OBJ_1ANO = {
    [U_1ANO[0]]: ["As fases da vida e a ideia de temporalidade (passado, presente, futuro)", "As diferentes formas de organização da família e da comunidade: os vínculos pessoais e as relações de amizade"],
    [U_1ANO[1]]: ["A escola e a diversidade do grupo social envolvido", "A vida em casa, a vida na escola e formas de representação social e espacial: os jogos e brincadeiras como forma de interação social e espacial", "A vida em família: diferentes configurações e vínculos", "A escola, sua representação espacial, sua história e seu papel na comunidade"]
};
const H_1ANO = {
    [U_1ANO[0]]: [
        { codigo: "EF01HI01", descricao: "Identificar aspectos do seu crescimento por meio do registro das lembranças particulares ou de lembranças dos membros de sua família e/ou de sua comunidade." },
        { codigo: "EF01HI02", descricao: "Identificar a relação entre as suas histórias e as histórias de sua família e de sua comunidade." }
    ],
    [U_1ANO[1]]: [
        { codigo: "EF01HI03", descricao: "Descrever e distinguir os seus papéis e responsabilidades relacionados à família, à escola e à comunidade." },
        { codigo: "EF01HI04", descricao: "Identificar as diferenças entre os variados ambientes em que vive (doméstico, escolar e da comunidade), reconhecendo as especificidades dos hábitos e das regras que os regem." },
        { codigo: "EF01HI05", descricao: "Identificar semelhanças e diferenças entre jogos e brincadeiras atuais e de outras épocas e lugares." },
        { codigo: "EF01HI06", descricao: "Conhecer as histórias da família e da escola e identificar o papel desempenhado por diferentes sujeitos em diferentes espaços." },
        { codigo: "EF01HI07", descricao: "Identificar mudanças e permanências nas formas de organização familiar." },
        { codigo: "EF01HI08", descricao: "Reconhecer o significado das comemorações e festas escolares, diferenciando-as das datas festivas comemoradas no âmbito familiar ou da comunidade." }
    ]
};

// ============================== 2º Ano ==============================
const U_2ANO = ["A comunidade e seus registros", "As formas de registrar as experiências da comunidade", "O trabalho e a sustentabilidade na comunidade"];
const OBJ_2ANO = {
    [U_2ANO[0]]: ["A noção do \"Eu\" e do \"Outro\": comunidade, convivências e interações entre pessoas", "A noção do \"Eu\" e do \"Outro\": registros de experiências pessoais e da comunidade no tempo e no espaço", "Formas de registrar e narrar histórias (marcos de memória materiais e imateriais)", "O tempo como medida"],
    [U_2ANO[1]]: ["As fontes: relatos orais, objetos, imagens (pinturas, fotografias, vídeos), músicas, escrita, tecnologias digitais de informação e comunicação e inscrições nas paredes, ruas e espaços sociais"],
    [U_2ANO[2]]: ["A sobrevivência e a relação com a natureza"]
};
const H_2ANO = {
    [U_2ANO[0]]: [
        { codigo: "EF02HI01", descricao: "Reconhecer espaços de sociabilidade e identificar os motivos que aproximam e separam as pessoas em diferentes grupos sociais ou de parentesco." },
        { codigo: "EF02HI02", descricao: "Identificar e descrever práticas e papéis sociais que as pessoas exercem em diferentes comunidades." },
        { codigo: "EF02HI03", descricao: "Selecionar situações cotidianas que remetam à percepção de mudança, pertencimento e memória." },
        { codigo: "EF02HI04", descricao: "Selecionar e compreender o significado de objetos e documentos pessoais como fontes de memórias e histórias nos âmbitos pessoal, familiar, escolar e comunitário." },
        { codigo: "EF02HI05", descricao: "Selecionar objetos e documentos pessoais e de grupos próximos ao seu convívio e compreender sua função, seu uso e seu significado." },
        { codigo: "EF02HI06", descricao: "Identificar e organizar, temporalmente, fatos da vida cotidiana, usando noções relacionadas ao tempo (antes, durante, ao mesmo tempo e depois)." },
        { codigo: "EF02HI07", descricao: "Identificar e utilizar diferentes marcadores do tempo presentes na comunidade, como relógio e calendário." }
    ],
    [U_2ANO[1]]: [
        { codigo: "EF02HI08", descricao: "Compilar histórias da família e/ou da comunidade registradas em diferentes fontes." },
        { codigo: "EF02HI09", descricao: "Identificar objetos e documentos pessoais que remetam à própria experiência no âmbito da família e/ou da comunidade, discutindo as razões pelas quais alguns objetos são preservados e outros são descartados." }
    ],
    [U_2ANO[2]]: [
        { codigo: "EF02HI10", descricao: "Identificar diferentes formas de trabalho existentes na comunidade em que vive, seus significados, suas especificidades e importância." },
        { codigo: "EF02HI11", descricao: "Identificar impactos no ambiente causados pelas diferentes formas de trabalho existentes na comunidade em que vive." }
    ]
};

// ============================== 3º Ano ==============================
const U_3ANO = ["As pessoas e os grupos que compõem a cidade e o município", "O lugar em que vive", "A noção de espaço público e privado"];
const OBJ_3ANO = {
    [U_3ANO[0]]: ["O \"Eu\", o \"Outro\" e os diferentes grupos sociais e étnicos que compõem a cidade e os municípios: os desafios sociais, culturais e ambientais do lugar onde vive"],
    [U_3ANO[1]]: ["Os patrimônios históricos e culturais da cidade e/ou do município em que vive", "A produção dos marcos da memória: os lugares de memória (ruas, praças, escolas, monumentos, museus etc.)", "A produção dos marcos da memória: formação cultural da população", "A produção dos marcos da memória: a cidade e o campo, aproximações e diferenças"],
    [U_3ANO[2]]: ["A cidade, seus espaços públicos e privados e suas áreas de conservação ambiental", "A cidade e suas atividades: trabalho, cultura e lazer"]
};
const H_3ANO = {
    [U_3ANO[0]]: [
        { codigo: "EF03HI01", descricao: "Identificar os grupos populacionais que formam a cidade, o município e a região, as relações estabelecidas entre eles e os eventos que marcam a formação da cidade, como fenômenos migratórios (vida rural/vida urbana), desmatamentos, estabelecimento de grandes empresas etc." },
        { codigo: "EF03HI02", descricao: "Selecionar, por meio da consulta de fontes de diferentes naturezas, e registrar acontecimentos ocorridos ao longo do tempo na cidade ou região em que vive." },
        { codigo: "EF03HI03", descricao: "Identificar e comparar pontos de vista em relação a eventos significativos do local em que vive, aspectos relacionados a condições sociais e à presença de diferentes grupos sociais e culturais, com especial destaque para as culturas africanas, indígenas e de migrantes." }
    ],
    [U_3ANO[1]]: [
        { codigo: "EF03HI04", descricao: "Identificar os patrimônios históricos e culturais de sua cidade ou região e discutir as razões culturais, sociais e políticas para que assim sejam considerados." },
        { codigo: "EF03HI05", descricao: "Identificar os marcos históricos do lugar em que vive e compreender seus significados." },
        { codigo: "EF03HI06", descricao: "Identificar os registros de memória na cidade (nomes de ruas, monumentos, edifícios etc.), discutindo os critérios que explicam a escolha desses nomes." },
        { codigo: "EF03HI07", descricao: "Identificar semelhanças e diferenças existentes entre comunidades de sua cidade ou região, e descrever o papel dos diferentes grupos sociais que as formam." },
        { codigo: "EF03HI08", descricao: "Identificar modos de vida na cidade e no campo no presente, comparando-os com os do passado." }
    ],
    [U_3ANO[2]]: [
        { codigo: "EF03HI09", descricao: "Mapear os espaços públicos no lugar em que vive (ruas, praças, escolas, hospitais, prédios da Prefeitura e da Câmara de Vereadores etc.) e identificar suas funções." },
        { codigo: "EF03HI10", descricao: "Identificar as diferenças entre o espaço doméstico, os espaços públicos e as áreas de conservação ambiental, compreendendo a importância dessa distinção." },
        { codigo: "EF03HI11", descricao: "Identificar diferenças entre formas de trabalho realizadas na cidade e no campo, considerando também o uso da tecnologia nesses diferentes contextos." },
        { codigo: "EF03HI12", descricao: "Comparar as relações de trabalho e lazer do presente com as de outros tempos e espaços, analisando mudanças e permanências." }
    ]
};

// ============================== 4º Ano ==============================
const U_4ANO = ["Transformações e permanências nas trajetórias dos grupos humanos", "Circulação de pessoas, produtos e culturas", "As questões históricas relativas às migrações"];
const OBJ_4ANO = {
    [U_4ANO[0]]: ["A ação das pessoas, grupos sociais e comunidades no tempo e no espaço: nomadismo, agricultura, escrita, navegações, indústria, entre outras", "O passado e o presente: a noção de permanência e as lentas transformações sociais e culturais"],
    [U_4ANO[1]]: ["A circulação de pessoas e as transformações no meio natural", "A invenção do comércio e a circulação de produtos", "As rotas terrestres, fluviais e marítimas e seus impactos para a formação de cidades e as transformações do meio natural", "O mundo da tecnologia: a integração de pessoas e as exclusões sociais e culturais"],
    [U_4ANO[2]]: ["O surgimento da espécie humana no continente africano e sua expansão pelo mundo", "Os processos migratórios para a formação do Brasil: os grupos indígenas, a presença portuguesa e a diáspora forçada dos africanos", "Os processos migratórios do final do século XIX e início do século XX no Brasil", "As dinâmicas internas de migração no Brasil a partir dos anos 1960"]
};
const H_4ANO = {
    [U_4ANO[0]]: [
        { codigo: "EF04HI01", descricao: "Reconhecer a história como resultado da ação do ser humano no tempo e no espaço, com base na identificação de mudanças e permanências ao longo do tempo." },
        { codigo: "EF04HI02", descricao: "Identificar mudanças e permanências ao longo do tempo, discutindo os sentidos dos grandes marcos da história da humanidade (nomadismo, desenvolvimento da agricultura e do pastoreio, criação da indústria etc.)." },
        { codigo: "EF04HI03", descricao: "Identificar as transformações ocorridas na cidade ao longo do tempo e discutir suas interferências nos modos de vida de seus habitantes, tomando como ponto de partida o presente." }
    ],
    [U_4ANO[1]]: [
        { codigo: "EF04HI04", descricao: "Identificar as relações entre os indivíduos e a natureza e discutir o significado do nomadismo e da fixação das primeiras comunidades humanas." },
        { codigo: "EF04HI05", descricao: "Relacionar os processos de ocupação do campo a intervenções na natureza, avaliando os resultados dessas intervenções." },
        { codigo: "EF04HI06", descricao: "Identificar as transformações ocorridas nos processos de deslocamento das pessoas e mercadorias, analisando as formas de adaptação ou marginalização." },
        { codigo: "EF04HI07", descricao: "Identificar e descrever a importância dos caminhos terrestres, fluviais e marítimos para a dinâmica da vida comercial." },
        { codigo: "EF04HI08", descricao: "Identificar as transformações ocorridas nos meios de comunicação (cultura oral, imprensa, rádio, televisão, cinema, internet e demais tecnologias digitais de informação e comunicação) e discutir seus significados para os diferentes grupos ou estratos sociais." }
    ],
    [U_4ANO[2]]: [
        { codigo: "EF04HI09", descricao: "Identificar as motivações dos processos migratórios em diferentes tempos e espaços e avaliar o papel desempenhado pela migração nas regiões de destino." },
        { codigo: "EF04HI10", descricao: "Analisar diferentes fluxos populacionais e suas contribuições para a formação da sociedade brasileira." },
        { codigo: "EF04HI11", descricao: "Analisar, na sociedade em que vive, a existência ou não de mudanças associadas à migração (interna e internacional)." }
    ]
};

// ============================== 5º Ano ==============================
const U_5ANO = ["Povos e culturas: meu lugar no mundo e meu grupo social", "Registros da história: linguagens e culturas"];
const OBJ_5ANO = {
    [U_5ANO[0]]: ["O que forma um povo: do nomadismo aos primeiros povos sedentarizados", "As formas de organização social e política: a noção de Estado", "O papel das religiões e da cultura para a formação dos povos antigos", "Cidadania, diversidade cultural e respeito às diferenças sociais, culturais e históricas"],
    [U_5ANO[1]]: ["As tradições orais e a valorização da memória", "O surgimento da escrita e a noção de fonte para a transmissão de saberes, culturas e histórias", "Os patrimônios materiais e imateriais da humanidade"]
};
const H_5ANO = {
    [U_5ANO[0]]: [
        { codigo: "EF05HI01", descricao: "Identificar os processos de formação das culturas e dos povos, relacionando-os com o espaço geográfico ocupado." },
        { codigo: "EF05HI02", descricao: "Identificar os mecanismos de organização do poder político com vistas à compreensão da ideia de Estado e/ou de outras formas de ordenação social." },
        { codigo: "EF05HI03", descricao: "Analisar o papel das culturas e das religiões na composição identitária dos povos antigos." },
        { codigo: "EF05HI04", descricao: "Associar a noção de cidadania com os princípios de respeito à diversidade, à pluralidade e aos direitos humanos." },
        { codigo: "EF05HI05", descricao: "Associar o conceito de cidadania à conquista de direitos dos povos e das sociedades, compreendendo-o como conquista histórica." }
    ],
    [U_5ANO[1]]: [
        { codigo: "EF05HI06", descricao: "Comparar o uso de diferentes linguagens e tecnologias no processo de comunicação e avaliar os significados sociais, políticos e culturais atribuídos a elas." },
        { codigo: "EF05HI07", descricao: "Identificar os processos de produção, hierarquização e difusão dos marcos de memória e discutir a presença e/ou a ausência de diferentes grupos que compõem a sociedade na nomeação desses marcos de memória." },
        { codigo: "EF05HI08", descricao: "Identificar formas de marcação da passagem do tempo em distintas sociedades, incluindo os povos indígenas originários e os povos africanos." },
        { codigo: "EF05HI09", descricao: "Comparar pontos de vista sobre temas que impactam a vida cotidiana no tempo presente, por meio do acesso a diferentes fontes, incluindo orais." },
        { codigo: "EF05HI10", descricao: "Inventariar os patrimônios materiais e imateriais da humanidade e analisar mudanças e permanências desses patrimônios ao longo do tempo." }
    ]
};

// ============================== 6º Ano ==============================
const U_6ANO = ["História: tempo, espaço e formas de registros", "A invenção do mundo clássico e o contraponto com outras sociedades", "Lógicas de organização política", "Trabalho e formas de organização social e cultural"];
const OBJ_6ANO = {
    [U_6ANO[0]]: ["A questão do tempo, sincronias e diacronias: reflexões sobre o sentido das cronologias", "Formas de registro da história e da produção do conhecimento histórico", "As origens da humanidade, seus deslocamentos e os processos de sedentarização"],
    [U_6ANO[1]]: ["Povos da Antiguidade na África (egípcios), no Oriente Médio (mesopotâmicos) e nas Américas (pré-colombianos)", "Os povos indígenas originários do atual território brasileiro e seus hábitos culturais e sociais", "O Ocidente Clássico: aspectos da cultura na Grécia e em Roma"],
    [U_6ANO[2]]: ["As noções de cidadania e política na Grécia e em Roma", "Domínios e expansão das culturas grega e romana", "Significados do conceito de \"império\" e as lógicas de conquista, conflito e negociação dessa forma de organização política", "As diferentes formas de organização política na África: reinos, impérios, cidades-estados e sociedades linhageiras ou aldeias"],
    [U_6ANO[3]]: ["A passagem do mundo antigo para o mundo medieval", "A fragmentação do poder político na Idade Média", "O Mediterrâneo como espaço de interação entre as sociedades da Europa, da África e do Oriente Médio", "Senhores e servos no mundo antigo e no medieval", "Escravidão e trabalho livre em diferentes temporalidades e espaços (Roma Antiga, Europa medieval e África)", "Lógicas comerciais na Antiguidade romana e no mundo medieval", "O papel da religião cristã, dos mosteiros e da cultura na Idade Média", "O papel da mulher na Grécia e em Roma, e no período medieval"]
};
const H_6ANO = {
    [U_6ANO[0]]: [
        { codigo: "EF06HI01", descricao: "Identificar diferentes formas de compreensão da noção de tempo e de periodização dos processos históricos (continuidades e rupturas)." },
        { codigo: "EF06HI02", descricao: "Identificar a gênese da produção do saber histórico e analisar o significado das fontes que originaram determinadas formas de registro em sociedades e épocas distintas." },
        { codigo: "EF06HI03", descricao: "Identificar as hipóteses científicas sobre o surgimento da espécie humana e sua historicidade e analisar os significados dos mitos de fundação." },
        { codigo: "EF06HI04", descricao: "Conhecer as teorias sobre a origem do homem americano." },
        { codigo: "EF06HI05", descricao: "Descrever modificações da natureza e da paisagem realizadas por diferentes tipos de sociedade, com destaque para os povos indígenas originários e povos africanos, e discutir a natureza e a lógica das transformações ocorridas." }
    ],
    [U_6ANO[1]]: [
        { codigo: "EF06HI06", descricao: "Identificar geograficamente as rotas de povoamento no território americano." },
        { codigo: "EF06HI07", descricao: "Identificar aspectos e formas de registro das sociedades antigas na África, no Oriente Médio e nas Américas, distinguindo alguns significados presentes na cultura material e na tradição oral dessas sociedades." },
        { codigo: "EF06HI08", descricao: "Identificar os espaços territoriais ocupados e os aportes culturais, científicos, sociais e econômicos dos astecas, maias e incas e dos povos indígenas de diversas regiões brasileiras." },
        { codigo: "EF06HI09", descricao: "Discutir o conceito de Antiguidade Clássica, seu alcance e limite na tradição ocidental, assim como os impactos sobre outras sociedades e culturas." },
        { codigo: "EF06HI10", descricao: "Explicar a formação da Grécia Antiga, com ênfase na formação da pólis e nas transformações políticas, sociais e culturais." },
        { codigo: "EF06HI11", descricao: "Caracterizar o processo de formação da Roma Antiga e suas configurações sociais e políticas nos períodos monárquico e republicano." }
    ],
    [U_6ANO[2]]: [
        { codigo: "EF06HI12", descricao: "Associar o conceito de cidadania a dinâmicas de inclusão e exclusão na Grécia e Roma antigas." },
        { codigo: "EF06HI13", descricao: "Conceituar \"império\" no mundo antigo, com vistas à análise das diferentes formas de equilíbrio e desequilíbrio entre as partes envolvidas." },
        { codigo: "EF06HI14", descricao: "Identificar e analisar diferentes formas de contato, adaptação ou exclusão entre populações em diferentes tempos e espaços." }
    ],
    [U_6ANO[3]]: [
        { codigo: "EF06HI15", descricao: "Descrever as dinâmicas de circulação de pessoas, produtos e culturas no Mediterrâneo e seu significado." },
        { codigo: "EF06HI16", descricao: "Caracterizar e comparar as dinâmicas de abastecimento e as formas de organização do trabalho e da vida social em diferentes sociedades e períodos, com destaque para as relações entre senhores e servos." },
        { codigo: "EF06HI17", descricao: "Diferenciar escravidão, servidão e trabalho livre no mundo antigo." },
        { codigo: "EF06HI18", descricao: "Analisar o papel da religião cristã na cultura e nos modos de organização social no período medieval." },
        { codigo: "EF06HI19", descricao: "Descrever e analisar os diferentes papéis sociais das mulheres no mundo antigo e nas sociedades medievais." }
    ]
};

// ============================== 7º Ano ==============================
const U_7ANO = ["O mundo moderno e a conexão entre sociedades africanas, americanas e europeias", "Humanismos, Renascimentos e o Novo Mundo", "A organização do poder e as dinâmicas do mundo colonial americano", "Lógicas comerciais e mercantis da modernidade"];
const OBJ_7ANO = {
    [U_7ANO[0]]: ["A construção da ideia de modernidade e seus impactos na concepção de História", "A ideia de \"Novo Mundo\" ante o Mundo Antigo: permanências e rupturas de saberes e práticas na emergência do mundo moderno", "Saberes dos povos africanos e pré-colombianos expressos na cultura material e imaterial"],
    [U_7ANO[1]]: ["Humanismos: uma nova visão de ser humano e de mundo", "Renascimentos artísticos e culturais", "Reformas religiosas: a cristandade fragmentada"],
    [U_7ANO[2]]: ["As descobertas científicas e a expansão marítima", "A formação e o funcionamento das monarquias europeias: a lógica da centralização política e os conflitos na Europa", "A conquista da América e as formas de organização política dos indígenas e europeus: conflitos, dominação e conciliação", "A estruturação dos vice-reinos nas Américas", "Resistências indígenas, invasões e expansão na América portuguesa"],
    [U_7ANO[3]]: ["As lógicas mercantis e o domínio europeu sobre os mares e o contraponto Oriental", "As lógicas internas das sociedades africanas", "As formas de organização das sociedades ameríndias", "A escravidão moderna e o tráfico de escravizados", "A emergência do capitalismo"]
};
const H_7ANO = {
    [U_7ANO[0]]: [
        { codigo: "EF07HI01", descricao: "Explicar o significado de \"modernidade\" e suas lógicas de inclusão e exclusão, com base em uma concepção europeia." },
        { codigo: "EF07HI02", descricao: "Identificar conexões e interações entre as sociedades do Novo Mundo, da Europa, da África e da Ásia no contexto das navegações e indicar a complexidade e as interações que ocorrem nos Oceanos Atlântico, Índico e Pacífico." },
        { codigo: "EF07HI03", descricao: "Identificar aspectos e processos específicos das sociedades africanas e americanas antes da chegada dos europeus, com destaque para as formas de organização social e o desenvolvimento de saberes e técnicas." }
    ],
    [U_7ANO[1]]: [
        { codigo: "EF07HI04", descricao: "Identificar as principais características dos Humanismos e dos Renascimentos e analisar seus significados." },
        { codigo: "EF07HI05", descricao: "Identificar e relacionar as vinculações entre as reformas religiosas e os processos culturais e sociais do período moderno na Europa e na América." }
    ],
    [U_7ANO[2]]: [
        { codigo: "EF07HI06", descricao: "Comparar as navegações no Atlântico e no Pacífico entre os séculos XIV e XVI." },
        { codigo: "EF07HI07", descricao: "Descrever os processos de formação e consolidação das monarquias e suas principais características com vistas à compreensão das razões da centralização política." },
        { codigo: "EF07HI08", descricao: "Descrever as formas de organização das sociedades americanas no tempo da conquista com vistas à compreensão dos mecanismos de alianças, confrontos e resistências." },
        { codigo: "EF07HI09", descricao: "Analisar os diferentes impactos da conquista europeia da América para as populações ameríndias e identificar as formas de resistência." },
        { codigo: "EF07HI10", descricao: "Analisar, com base em documentos históricos, diferentes interpretações sobre as dinâmicas das sociedades americanas no período colonial." },
        { codigo: "EF07HI11", descricao: "Analisar a formação histórico-geográfica do território da América portuguesa por meio de mapas históricos." },
        { codigo: "EF07HI12", descricao: "Identificar a distribuição territorial da população brasileira em diferentes épocas, considerando a diversidade étnico-racial e étnico-cultural (indígena, africana, europeia e asiática)." }
    ],
    [U_7ANO[3]]: [
        { codigo: "EF07HI13", descricao: "Caracterizar a ação dos europeus e suas lógicas mercantis visando ao domínio no mundo atlântico." },
        { codigo: "EF07HI14", descricao: "Descrever as dinâmicas comerciais das sociedades americanas e africanas e analisar suas interações com outras sociedades do Ocidente e do Oriente." },
        { codigo: "EF07HI15", descricao: "Discutir o conceito de escravidão moderna e suas distinções em relação ao escravismo antigo e à servidão medieval." },
        { codigo: "EF07HI16", descricao: "Analisar os mecanismos e as dinâmicas de comércio de escravizados em suas diferentes fases, identificando os agentes responsáveis pelo tráfico e as regiões e zonas africanas de procedência dos escravizados." },
        { codigo: "EF07HI17", descricao: "Discutir as razões da passagem do mercantilismo para o capitalismo." }
    ]
};

// ============================== 8º Ano ==============================
const U_8ANO = ["O mundo contemporâneo: o Antigo Regime em crise", "Os processos de independência nas Américas", "O Brasil no século XIX", "Configurações do mundo no século XIX"];
const OBJ_8ANO = {
    [U_8ANO[0]]: ["A questão do iluminismo e da ilustração", "As revoluções inglesas e os princípios do liberalismo", "Revolução Industrial e seus impactos na produção e circulação de povos, produtos e culturas", "Revolução Francesa e seus desdobramentos"],
    [U_8ANO[1]]: ["Rebeliões na América portuguesa: as conjurações mineira e baiana", "Independência dos Estados Unidos da América", "Independências na América espanhola", "A revolução dos escravizados em São Domingo e seus múltiplos significados e desdobramentos: o caso do Haiti", "Os caminhos até a independência do Brasil", "A tutela da população indígena, a escravidão dos negros e a tutela dos egressos da escravidão"],
    [U_8ANO[2]]: ["Brasil: Primeiro Reinado", "O Período Regencial e as contestações ao poder central", "O Brasil do Segundo Reinado: política e economia", "A Lei de Terras e seus desdobramentos na política do Segundo Reinado", "Territórios e fronteiras: a Guerra do Paraguai", "O escravismo no Brasil do século XIX: plantations e revoltas de escravizados, abolicionismo e políticas migratórias no Brasil Imperial"],
    [U_8ANO[3]]: ["Políticas de extermínio do indígena durante o Império", "A produção do imaginário nacional brasileiro: cultura popular, representações visuais, letras e o Romantismo no Brasil", "Nacionalismo, revoluções e as novas nações europeias", "Uma nova ordem econômica: as demandas do capitalismo industrial e o lugar das economias africanas e asiáticas nas dinâmicas globais", "Os Estados Unidos da América e a América Latina no século XIX", "O imperialismo europeu e a partilha da África e da Ásia", "Pensamento e cultura no século XIX: darwinismo e racismo", "O discurso civilizatório nas Américas, o silenciamento dos saberes indígenas e as formas de integração e destruição de comunidades e povos indígenas", "A resistência dos povos e comunidades indígenas diante da ofensiva civilizatória"]
};
const H_8ANO = {
    [U_8ANO[0]]: [
        { codigo: "EF08HI01", descricao: "Identificar os principais aspectos conceituais do iluminismo e do liberalismo e discutir a relação entre eles e a organização do mundo contemporâneo." },
        { codigo: "EF08HI02", descricao: "Identificar as particularidades político-sociais da Inglaterra do século XVII e analisar os desdobramentos posteriores à Revolução Gloriosa." },
        { codigo: "EF08HI03", descricao: "Analisar os impactos da Revolução Industrial na produção e circulação de povos, produtos e culturas." },
        { codigo: "EF08HI04", descricao: "Identificar e relacionar os processos da Revolução Francesa e seus desdobramentos na Europa e no mundo." }
    ],
    [U_8ANO[1]]: [
        { codigo: "EF08HI05", descricao: "Explicar os movimentos e as rebeliões da América portuguesa, articulando as temáticas locais e suas interfaces com processos ocorridos na Europa e nas Américas." },
        { codigo: "EF08HI06", descricao: "Aplicar os conceitos de Estado, nação, território, governo e país para o entendimento de conflitos e tensões." },
        { codigo: "EF08HI07", descricao: "Identificar e contextualizar as especificidades dos diversos processos de independência nas Américas, seus aspectos populacionais e suas conformações territoriais." },
        { codigo: "EF08HI08", descricao: "Conhecer o ideário dos líderes dos movimentos independentistas e seu papel nas revoluções que levaram à independência das colônias hispano-americanas." },
        { codigo: "EF08HI09", descricao: "Conhecer as características e os principais pensadores do Pan-americanismo." },
        { codigo: "EF08HI10", descricao: "Identificar a Revolução de São Domingo como evento singular e desdobramento da Revolução Francesa e avaliar suas implicações." },
        { codigo: "EF08HI11", descricao: "Identificar e explicar os protagonismos e a atuação de diferentes grupos sociais e étnicos nas lutas de independência no Brasil, na América espanhola e no Haiti." },
        { codigo: "EF08HI12", descricao: "Caracterizar a organização política e social no Brasil desde a chegada da Corte portuguesa, em 1808, até 1822 e seus desdobramentos para a história política brasileira." },
        { codigo: "EF08HI13", descricao: "Analisar o processo de independência em diferentes países latino-americanos e comparar as formas de governo neles adotadas." },
        { codigo: "EF08HI14", descricao: "Discutir a noção da tutela dos grupos indígenas e a participação dos negros na sociedade brasileira do final do período colonial, identificando permanências na forma de preconceitos, estereótipos e violências sobre as populações indígenas e negras no Brasil e nas Américas." }
    ],
    [U_8ANO[2]]: [
        { codigo: "EF08HI15", descricao: "Identificar e analisar o equilíbrio das forças e os sujeitos envolvidos nas disputas políticas durante o Primeiro e o Segundo Reinado." },
        { codigo: "EF08HI16", descricao: "Identificar, comparar e analisar a diversidade política, social e regional nas rebeliões e nos movimentos contestatórios ao poder centralizado." },
        { codigo: "EF08HI17", descricao: "Relacionar as transformações territoriais, em razão de questões de fronteiras, com as tensões e conflitos durante o Império." },
        { codigo: "EF08HI18", descricao: "Identificar as questões internas e externas sobre a atuação do Brasil na Guerra do Paraguai e discutir diferentes versões sobre o conflito." },
        { codigo: "EF08HI19", descricao: "Formular questionamentos sobre o legado da escravidão nas Américas, com base na seleção e consulta de fontes de diferentes naturezas." },
        { codigo: "EF08HI20", descricao: "Identificar e relacionar aspectos das estruturas sociais da atualidade com os legados da escravidão no Brasil e discutir a importância de ações afirmativas." }
    ],
    [U_8ANO[3]]: [
        { codigo: "EF08HI21", descricao: "Identificar e analisar as políticas oficiais com relação ao indígena durante o Império." },
        { codigo: "EF08HI22", descricao: "Discutir o papel das culturas letradas, não letradas e das artes na produção das identidades no Brasil do século XIX." },
        { codigo: "EF08HI23", descricao: "Estabelecer relações causais entre as ideologias raciais e o determinismo no contexto do imperialismo europeu e seus impactos na África e na Ásia." },
        { codigo: "EF08HI24", descricao: "Reconhecer os principais produtos, utilizados pelos europeus, procedentes do continente africano durante o imperialismo e analisar os impactos sobre as comunidades locais na forma de organização e exploração econômica." },
        { codigo: "EF08HI25", descricao: "Caracterizar e contextualizar aspectos das relações entre os Estados Unidos da América e a América Latina no século XIX." },
        { codigo: "EF08HI26", descricao: "Identificar e contextualizar o protagonismo das populações locais na resistência ao imperialismo na África e Ásia." },
        { codigo: "EF08HI27", descricao: "Identificar as tensões e os significados dos discursos civilizatórios, avaliando seus impactos negativos para os povos indígenas originários e as populações negras nas Américas." }
    ]
};

// ============================== 9º Ano ==============================
const U_9ANO = ["O nascimento da República no Brasil e os processos históricos até a metade do século XX", "Totalitarismos e conflitos mundiais", "Modernização, ditadura civil-militar e redemocratização: o Brasil após 1946", "A história recente"];
const OBJ_9ANO = {
    [U_9ANO[0]]: ["Experiências republicanas e práticas autoritárias: as tensões e disputas do mundo contemporâneo", "A proclamação da República e seus primeiros desdobramentos", "A questão da inserção dos negros no período republicano do pós-abolição", "Os movimentos sociais e a imprensa negra; a cultura afro-brasileira como elemento de resistência e superação das discriminações", "Primeira República e suas características", "Contestações e dinâmicas da vida cultural no Brasil entre 1900 e 1930", "O período varguista e suas contradições", "A emergência da vida urbana e a segregação espacial", "O trabalhismo e seu protagonismo político", "A questão indígena durante a República (até 1964)", "Anarquismo e protagonismo feminino"],
    [U_9ANO[1]]: ["O mundo em conflito: a Primeira Guerra Mundial", "A questão da Palestina", "A Revolução Russa", "A crise capitalista de 1929", "A emergência do fascismo e do nazismo", "A Segunda Guerra Mundial", "Judeus e outras vítimas do holocausto", "O colonialismo na África", "As guerras mundiais, a crise do colonialismo e o advento dos nacionalismos africanos e asiáticos", "A Organização das Nações Unidas (ONU) e a questão dos Direitos Humanos"],
    [U_9ANO[2]]: ["O Brasil da era JK e o ideal de uma nação moderna: a urbanização e seus desdobramentos em um país em transformação", "Os anos 1960: revolução cultural?", "A ditadura civil-militar e os processos de resistência", "As questões indígena e negra e a ditadura", "O processo de redemocratização", "A Constituição de 1988 e a emancipação das cidadanias (analfabetos, indígenas, negros, jovens etc.)", "A história recente do Brasil: transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais", "Os protagonismos da sociedade civil e as alterações da sociedade brasileira", "A questão da violência contra populações marginalizadas", "O Brasil e suas relações internacionais na era da globalização"],
    [U_9ANO[3]]: ["A Guerra Fria: confrontos de dois modelos políticos", "A Revolução Chinesa e as tensões entre China e Rússia", "A Revolução Cubana e as tensões entre Estados Unidos da América e Cuba", "As experiências ditatoriais na América Latina", "Os processos de descolonização na África e na Ásia", "O fim da Guerra Fria e o processo de globalização", "Políticas econômicas na América Latina", "Os conflitos do século XXI e a questão do terrorismo", "Pluralidades e diversidades identitárias na atualidade", "As pautas dos povos indígenas no século XXI e suas formas de inserção no debate local, regional, nacional e internacional"]
};
const H_9ANO = {
    [U_9ANO[0]]: [
        { codigo: "EF09HI01", descricao: "Descrever e contextualizar os principais aspectos sociais, culturais, econômicos e políticos da emergência da República no Brasil." },
        { codigo: "EF09HI02", descricao: "Caracterizar e compreender os ciclos da história republicana, identificando particularidades da história local e regional até 1954." },
        { codigo: "EF09HI03", descricao: "Identificar os mecanismos de inserção dos negros na sociedade brasileira pós-abolição e avaliar os seus resultados." },
        { codigo: "EF09HI04", descricao: "Discutir a importância da participação da população negra na formação econômica, política e social do Brasil." },
        { codigo: "EF09HI05", descricao: "Identificar os processos de urbanização e modernização da sociedade brasileira e avaliar suas contradições e impactos na região em que vive." },
        { codigo: "EF09HI06", descricao: "Identificar e discutir o papel do trabalhismo como força política, social e cultural no Brasil, em diferentes escalas (nacional, regional, cidade, comunidade)." },
        { codigo: "EF09HI07", descricao: "Identificar e explicar, em meio a lógicas de inclusão e exclusão, as pautas dos povos indígenas, no contexto republicano (até 1964), e das populações afrodescendentes." },
        { codigo: "EF09HI08", descricao: "Identificar as transformações ocorridas no debate sobre as questões da diversidade no Brasil durante o século XX e compreender o significado das mudanças de abordagem em relação ao tema." },
        { codigo: "EF09HI09", descricao: "Relacionar as conquistas de direitos políticos, sociais e civis à atuação de movimentos sociais." }
    ],
    [U_9ANO[1]]: [
        { codigo: "EF09HI10", descricao: "Identificar e relacionar as dinâmicas do capitalismo e suas crises, os grandes conflitos mundiais e os conflitos vivenciados na Europa." },
        { codigo: "EF09HI11", descricao: "Identificar as especificidades e os desdobramentos mundiais da Revolução Russa e seu significado histórico." },
        { codigo: "EF09HI12", descricao: "Analisar a crise capitalista de 1929 e seus desdobramentos em relação à economia global." },
        { codigo: "EF09HI13", descricao: "Descrever e contextualizar os processos da emergência do fascismo e do nazismo, a consolidação dos estados totalitários e as práticas de extermínio (como o holocausto)." },
        { codigo: "EF09HI14", descricao: "Caracterizar e discutir as dinâmicas do colonialismo no continente africano e asiático e as lógicas de resistência das populações locais diante das questões internacionais." },
        { codigo: "EF09HI15", descricao: "Discutir as motivações que levaram à criação da Organização das Nações Unidas (ONU) no contexto do pós-guerra e os propósitos dessa organização." },
        { codigo: "EF09HI16", descricao: "Relacionar a Carta dos Direitos Humanos ao processo de afirmação dos direitos fundamentais e de defesa da dignidade humana, valorizando as instituições voltadas para a defesa desses direitos e para a identificação dos agentes responsáveis por sua violação." }
    ],
    [U_9ANO[2]]: [
        { codigo: "EF09HI17", descricao: "Identificar e analisar processos sociais, econômicos, culturais e políticos do Brasil a partir de 1946." },
        { codigo: "EF09HI18", descricao: "Descrever e analisar as relações entre as transformações urbanas e seus impactos na cultura brasileira entre 1946 e 1964 e na produção das desigualdades regionais e sociais." },
        { codigo: "EF09HI19", descricao: "Identificar e compreender o processo que resultou na ditadura civil-militar no Brasil e discutir a emergência de questões relacionadas à memória e à justiça sobre os casos de violação dos direitos humanos." },
        { codigo: "EF09HI20", descricao: "Discutir os processos de resistência e as propostas de reorganização da sociedade brasileira durante a ditadura civil-militar." },
        { codigo: "EF09HI21", descricao: "Identificar e relacionar as demandas indígenas e quilombolas como forma de contestação ao modelo desenvolvimentista da ditadura." },
        { codigo: "EF09HI22", descricao: "Discutir o papel da mobilização da sociedade brasileira do final do período ditatorial até a Constituição de 1988." },
        { codigo: "EF09HI23", descricao: "Identificar direitos civis, políticos e sociais expressos na Constituição de 1988 e relacioná-los à noção de cidadania e ao pacto da sociedade brasileira de combate a diversas formas de preconceito, como o racismo." },
        { codigo: "EF09HI24", descricao: "Analisar as transformações políticas, econômicas, sociais e culturais de 1989 aos dias atuais, identificando questões prioritárias para a promoção da cidadania e dos valores democráticos." },
        { codigo: "EF09HI25", descricao: "Relacionar as transformações da sociedade brasileira aos protagonismos da sociedade civil após 1989." },
        { codigo: "EF09HI26", descricao: "Discutir e analisar as causas da violência contra populações marginalizadas (negros, indígenas, mulheres, homossexuais, camponeses, pobres etc.) com vistas à tomada de consciência e à construção de uma cultura de paz, empatia e respeito às pessoas." },
        { codigo: "EF09HI27", descricao: "Relacionar aspectos das mudanças econômicas, culturais e sociais ocorridas no Brasil a partir da década de 1990 ao papel do País no cenário internacional na era da globalização." }
    ],
    [U_9ANO[3]]: [
        { codigo: "EF09HI28", descricao: "Identificar e analisar aspectos da Guerra Fria, seus principais conflitos e as tensões geopolíticas no interior dos blocos liderados por soviéticos e estadunidenses." },
        { codigo: "EF09HI29", descricao: "Descrever e analisar as experiências ditatoriais na América Latina, seus procedimentos e vínculos com o poder, em nível nacional e internacional, e a atuação de movimentos de contestação às ditaduras." },
        { codigo: "EF09HI30", descricao: "Comparar as características dos regimes ditatoriais latino-americanos, com especial atenção para a censura política, a opressão e o uso da força, bem como para as reformas econômicas e sociais e seus impactos." },
        { codigo: "EF09HI31", descricao: "Descrever e avaliar os processos de descolonização na África e na Ásia." },
        { codigo: "EF09HI32", descricao: "Analisar mudanças e permanências associadas ao processo de globalização, considerando os argumentos dos movimentos críticos às políticas globais." },
        { codigo: "EF09HI33", descricao: "Analisar as transformações nas relações políticas locais e globais geradas pelo desenvolvimento das tecnologias digitais de informação e comunicação." },
        { codigo: "EF09HI34", descricao: "Discutir as motivações da adoção de diferentes políticas econômicas na América Latina, assim como seus impactos sociais nos países da região." },
        { codigo: "EF09HI35", descricao: "Analisar os aspectos relacionados ao fenômeno do terrorismo na contemporaneidade, incluindo os movimentos migratórios e os choques entre diferentes grupos e culturas." },
        { codigo: "EF09HI36", descricao: "Identificar e discutir as diversidades identitárias e seus significados históricos no início do século XXI, combatendo qualquer forma de preconceito e violência." }
    ]
};

export const unidadesPorAno = {
    "1º Ano": U_1ANO, "2º Ano": U_2ANO, "3º Ano": U_3ANO,
    "4º Ano": U_4ANO, "5º Ano": U_5ANO, "6º Ano": U_6ANO,
    "7º Ano": U_7ANO, "8º Ano": U_8ANO, "9º Ano": U_9ANO
};

export const especificacoesPorUnidade = {
    "1º Ano": OBJ_1ANO, "2º Ano": OBJ_2ANO, "3º Ano": OBJ_3ANO,
    "4º Ano": OBJ_4ANO, "5º Ano": OBJ_5ANO, "6º Ano": OBJ_6ANO,
    "7º Ano": OBJ_7ANO, "8º Ano": OBJ_8ANO, "9º Ano": OBJ_9ANO
};

// === BANCO DE HABILIDADES COMPLETO DA BNCC - HISTÓRIA ===
export const habilidadesBNCC = {
    "1º Ano": habilidadesDoAno(OBJ_1ANO, H_1ANO),
    "2º Ano": habilidadesDoAno(OBJ_2ANO, H_2ANO),
    "3º Ano": habilidadesDoAno(OBJ_3ANO, H_3ANO),
    "4º Ano": habilidadesDoAno(OBJ_4ANO, H_4ANO),
    "5º Ano": habilidadesDoAno(OBJ_5ANO, H_5ANO),
    "6º Ano": habilidadesDoAno(OBJ_6ANO, H_6ANO),
    "7º Ano": habilidadesDoAno(OBJ_7ANO, H_7ANO),
    "8º Ano": habilidadesDoAno(OBJ_8ANO, H_8ANO),
    "9º Ano": habilidadesDoAno(OBJ_9ANO, H_9ANO)
};
