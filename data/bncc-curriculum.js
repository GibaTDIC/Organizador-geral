// Prof GB — Dados fixos da BNCC (Educação Física), Ensino Fundamental 1º-9º ano.
// Fonte: BNCC (MEC, versão final), seção 4.1.3 Educação Física — texto das
// habilidades e nomes dos objetos de conhecimento são verbatim do documento
// oficial (conferidos código a código contra o PDF em 2026-07).
//
// A BNCC organiza as habilidades de Educação Física em 4 blocos de série
// (1º-2º, 3º-5º, 6º-7º, 8º-9º) — dentro de cada bloco, os DOIS anos têm
// exatamente as mesmas unidades temáticas, objetos de conhecimento e
// habilidades. Quando uma unidade temática tem mais de um objeto de
// conhecimento cobertos pela(s) MESMA habilidade (ex: "esportes de marca e
// de precisão" é uma habilidade só, não duas), os arrays de habilidade são
// definidos uma única vez (consts H12_*/H35_*/H67_*/H89_*) e reaproveitados
// por referência entre os anos do bloco e entre as especificações que os
// compartilham — o texto de cada habilidade não é redigitado em nenhum
// outro lugar deste arquivo.

// Mapeamento de unidades temáticas por ano/série
export const unidadesPorAno = {
    "1º Ano": ["Brincadeiras e Jogos", "Esportes", "Ginásticas", "Danças"],
    "2º Ano": ["Brincadeiras e Jogos", "Esportes", "Ginásticas", "Danças"],
    "3º Ano": ["Brincadeiras e Jogos", "Esportes", "Ginásticas", "Danças", "Lutas"],
    "4º Ano": ["Brincadeiras e Jogos", "Esportes", "Ginásticas", "Danças", "Lutas"],
    "5º Ano": ["Brincadeiras e Jogos", "Esportes", "Ginásticas", "Danças", "Lutas"],
    "6º Ano": ["Brincadeiras e Jogos", "Esportes", "Ginásticas", "Danças", "Lutas", "Práticas Corporais de Aventura"],
    "7º Ano": ["Brincadeiras e Jogos", "Esportes", "Ginásticas", "Danças", "Lutas", "Práticas Corporais de Aventura"],
    "8º Ano": ["Esportes", "Ginásticas", "Danças", "Lutas", "Práticas Corporais de Aventura"],
    "9º Ano": ["Esportes", "Ginásticas", "Danças", "Lutas", "Práticas Corporais de Aventura"]
};

// especificacoesPorUnidade é indexado POR SÉRIE (não globalmente por unidade)
// porque os objetos de conhecimento de uma mesma unidade temática mudam de
// bloco pra bloco — ex: "Ginásticas" tem só 1 objeto do 1º ao 7º ano, mas 2
// objetos distintos (com habilidades diferentes) no 8º/9º ano. Uma unidade
// que não aparece aqui pra uma série (ou lista vazia) não tem sub-nível de
// especificação — a BNCC só descreve 1 objeto de conhecimento pra ela nessa
// série, então a cascata do formulário vai direto pras habilidades.
const ESPEC_ESPORTES_12 = ["Esportes de Marca", "Esportes de Precisão"];
const ESPEC_ESPORTES_35 = ["Esportes de Campo e Taco", "Esportes de Rede/Parede", "Esportes de Invasão"];
const ESPEC_ESPORTES_67 = ["Esportes de Marca", "Esportes de Precisão", "Esportes de Invasão", "Esportes Técnico-Combinatórios"];
const ESPEC_ESPORTES_89 = ["Esportes de Rede/Parede", "Esportes de Campo e Taco", "Esportes de Invasão", "Esportes de Combate"];
const ESPEC_BRINCADEIRAS_35 = ["Brincadeiras e Jogos Populares do Brasil e do Mundo", "Brincadeiras e Jogos de Matriz Indígena e Africana"];
const ESPEC_DANCAS_35 = ["Danças do Brasil e do Mundo", "Danças de Matriz Indígena e Africana"];
const ESPEC_LUTAS_35 = ["Lutas do Contexto Comunitário e Regional", "Lutas de Matriz Indígena e Africana"];
const ESPEC_GINASTICAS_89 = ["Ginástica de Condicionamento Físico", "Ginástica de Conscientização Corporal"];

const ESPEC_POR_12 = { "Esportes": ESPEC_ESPORTES_12 };
const ESPEC_POR_35 = {
    "Brincadeiras e Jogos": ESPEC_BRINCADEIRAS_35,
    "Esportes": ESPEC_ESPORTES_35,
    "Danças": ESPEC_DANCAS_35,
    "Lutas": ESPEC_LUTAS_35
};
const ESPEC_POR_67 = { "Esportes": ESPEC_ESPORTES_67 };
const ESPEC_POR_89 = { "Esportes": ESPEC_ESPORTES_89, "Ginásticas": ESPEC_GINASTICAS_89 };

export const especificacoesPorUnidade = {
    "1º Ano": ESPEC_POR_12,
    "2º Ano": ESPEC_POR_12,
    "3º Ano": ESPEC_POR_35,
    "4º Ano": ESPEC_POR_35,
    "5º Ano": ESPEC_POR_35,
    "6º Ano": ESPEC_POR_67,
    "7º Ano": ESPEC_POR_67,
    "8º Ano": ESPEC_POR_89,
    "9º Ano": ESPEC_POR_89
};

// ===== Bloco 1º/2º ano (EF12EF01-12) =====
const H12_BRINCADEIRAS = [
    { codigo: "EF12EF01", descricao: "Experimentar, fruir e recriar diferentes brincadeiras e jogos da cultura popular presentes no contexto comunitário e regional, reconhecendo e respeitando as diferenças individuais de desempenho dos colegas." },
    { codigo: "EF12EF02", descricao: "Explicar, por meio de múltiplas linguagens (corporal, visual, oral e escrita), as brincadeiras e os jogos populares do contexto comunitário e regional, reconhecendo e valorizando a importância desses jogos e brincadeiras para suas culturas de origem." },
    { codigo: "EF12EF03", descricao: "Planejar e utilizar estratégias para resolver desafios de brincadeiras e jogos populares do contexto comunitário e regional, com base no reconhecimento das características dessas práticas." },
    { codigo: "EF12EF04", descricao: "Colaborar na proposição e na produção de alternativas para a prática, em outros momentos e espaços, de brincadeiras e jogos e demais práticas corporais tematizadas na escola, produzindo textos (orais, escritos, audiovisuais) para divulgá-las na escola e na comunidade." }
];
const H12_ESPORTES = [
    { codigo: "EF12EF05", descricao: "Experimentar e fruir, prezando pelo trabalho coletivo e pelo protagonismo, a prática de esportes de marca e de precisão, identificando os elementos comuns a esses esportes." },
    { codigo: "EF12EF06", descricao: "Discutir a importância da observação das normas e das regras dos esportes de marca e de precisão para assegurar a integridade própria e as dos demais participantes." }
];
const H12_GINASTICAS = [
    { codigo: "EF12EF07", descricao: "Experimentar, fruir e identificar diferentes elementos básicos da ginástica (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais) e da ginástica geral, de forma individual e em pequenos grupos, adotando procedimentos de segurança." },
    { codigo: "EF12EF08", descricao: "Planejar e utilizar estratégias para a execução de diferentes elementos básicos da ginástica e da ginástica geral." },
    { codigo: "EF12EF09", descricao: "Participar da ginástica geral, identificando as potencialidades e os limites do corpo, e respeitando as diferenças individuais e de desempenho corporal." },
    { codigo: "EF12EF10", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita e audiovisual), as características dos elementos básicos da ginástica e da ginástica geral, identificando a presença desses elementos em distintas práticas corporais." }
];
const H12_DANCAS = [
    { codigo: "EF12EF11", descricao: "Experimentar e fruir diferentes danças do contexto comunitário e regional (rodas cantadas, brincadeiras rítmicas e expressivas), e recriá-las, respeitando as diferenças individuais e de desempenho corporal." },
    { codigo: "EF12EF12", descricao: "Identificar os elementos constitutivos (ritmo, espaço, gestos) das danças do contexto comunitário e regional, valorizando e respeitando as manifestações de diferentes culturas." }
];

function unidadesBloco12() {
    return {
        "Brincadeiras e Jogos": { "Brincadeiras e Jogos da Cultura Popular": H12_BRINCADEIRAS },
        "Esportes": { "Esportes de Marca": H12_ESPORTES, "Esportes de Precisão": H12_ESPORTES },
        "Ginásticas": { "Ginástica Geral": H12_GINASTICAS },
        "Danças": { "Danças do Contexto Comunitário e Regional": H12_DANCAS }
    };
}

// ===== Bloco 3º-5º ano (EF35EF01-15) =====
const H35_BRINCADEIRAS = [
    { codigo: "EF35EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural." },
    { codigo: "EF35EF02", descricao: "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
    { codigo: "EF35EF03", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas." },
    { codigo: "EF35EF04", descricao: "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis." }
];
const H35_ESPORTES = [
    { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
    { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
];
const H35_GINASTICAS = [
    { codigo: "EF35EF07", descricao: "Experimentar e fruir, de forma coletiva, combinações de diferentes elementos da ginástica geral (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais), propondo coreografias com diferentes temas do cotidiano." },
    { codigo: "EF35EF08", descricao: "Planejar e utilizar estratégias para resolver desafios na execução de elementos básicos de apresentações coletivas de ginástica geral, reconhecendo as potencialidades e os limites do corpo e adotando procedimentos de segurança." }
];
const H35_DANCAS = [
    { codigo: "EF35EF09", descricao: "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem." },
    { codigo: "EF35EF10", descricao: "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana." },
    { codigo: "EF35EF11", descricao: "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana." },
    { codigo: "EF35EF12", descricao: "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las." }
];
const H35_LUTAS = [
    { codigo: "EF35EF13", descricao: "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana." },
    { codigo: "EF35EF14", descricao: "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança." },
    { codigo: "EF35EF15", descricao: "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais." }
];

function unidadesBloco35() {
    return {
        "Brincadeiras e Jogos": {
            "Brincadeiras e Jogos Populares do Brasil e do Mundo": H35_BRINCADEIRAS,
            "Brincadeiras e Jogos de Matriz Indígena e Africana": H35_BRINCADEIRAS
        },
        "Esportes": {
            "Esportes de Campo e Taco": H35_ESPORTES,
            "Esportes de Rede/Parede": H35_ESPORTES,
            "Esportes de Invasão": H35_ESPORTES
        },
        "Ginásticas": { "Ginástica Geral": H35_GINASTICAS },
        "Danças": {
            "Danças do Brasil e do Mundo": H35_DANCAS,
            "Danças de Matriz Indígena e Africana": H35_DANCAS
        },
        "Lutas": {
            "Lutas do Contexto Comunitário e Regional": H35_LUTAS,
            "Lutas de Matriz Indígena e Africana": H35_LUTAS
        }
    };
}

// ===== Bloco 6º-7º ano (EF67EF01-21) =====
const H67_BRINCADEIRAS = [
    { codigo: "EF67EF01", descricao: "Experimentar e fruir, na escola e fora dela, jogos eletrônicos diversos, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais e etários." },
    { codigo: "EF67EF02", descricao: "Identificar as transformações nas características dos jogos eletrônicos em função dos avanços das tecnologias e nas respectivas exigências corporais colocadas por esses diferentes tipos de jogos." }
];
const H67_ESPORTES = [
    { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
    { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
    { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
    { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
    { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
];
const H67_GINASTICAS = [
    { codigo: "EF67EF08", descricao: "Experimentar e fruir exercícios físicos que solicitem diferentes capacidades físicas, identificando seus tipos (força, velocidade, resistência, flexibilidade) e as sensações corporais provocadas pela sua prática." },
    { codigo: "EF67EF09", descricao: "Construir, coletivamente, procedimentos e normas de convívio que viabilizem a participação de todos na prática de exercícios físicos, com o objetivo de promover a saúde." },
    { codigo: "EF67EF10", descricao: "Diferenciar exercício físico de atividade física e propor alternativas para a prática de exercícios físicos dentro e fora do ambiente escolar." }
];
const H67_DANCAS = [
    { codigo: "EF67EF11", descricao: "Experimentar, fruir e recriar danças urbanas, identificando seus elementos constitutivos (ritmo, espaço, gestos)." },
    { codigo: "EF67EF12", descricao: "Planejar e utilizar estratégias para aprender elementos constitutivos das danças urbanas." },
    { codigo: "EF67EF13", descricao: "Diferenciar as danças urbanas das demais manifestações da dança, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais." }
];
const H67_LUTAS = [
    { codigo: "EF67EF14", descricao: "Experimentar, fruir e recriar diferentes lutas do Brasil, valorizando a própria segurança e integridade física, bem como as dos demais." },
    { codigo: "EF67EF15", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil, respeitando o colega como oponente." },
    { codigo: "EF67EF16", descricao: "Identificar as características (códigos, rituais, elementos técnico-táticos, indumentária, materiais, instalações, instituições) das lutas do Brasil." },
    { codigo: "EF67EF17", descricao: "Problematizar preconceitos e estereótipos relacionados ao universo das lutas e demais práticas corporais, propondo alternativas para superá-los, com base na solidariedade, na justiça, na equidade e no respeito." }
];
const H67_AVENTURA = [
    { codigo: "EF67EF18", descricao: "Experimentar e fruir diferentes práticas corporais de aventura urbanas, valorizando a própria segurança e integridade física, bem como as dos demais." },
    { codigo: "EF67EF19", descricao: "Identificar os riscos durante a realização de práticas corporais de aventura urbanas e planejar estratégias para sua superação." },
    { codigo: "EF67EF20", descricao: "Executar práticas corporais de aventura urbanas, respeitando o patrimônio público e utilizando alternativas para a prática segura em diversos espaços." },
    { codigo: "EF67EF21", descricao: "Identificar a origem das práticas corporais de aventura e as possibilidades de recriá-las, reconhecendo as características (instrumentos, equipamentos de segurança, indumentária, organização) e seus tipos de práticas." }
];

function unidadesBloco67() {
    return {
        "Brincadeiras e Jogos": { "Jogos Eletrônicos": H67_BRINCADEIRAS },
        "Esportes": {
            "Esportes de Marca": H67_ESPORTES,
            "Esportes de Precisão": H67_ESPORTES,
            "Esportes de Invasão": H67_ESPORTES,
            "Esportes Técnico-Combinatórios": H67_ESPORTES
        },
        "Ginásticas": { "Ginástica de Condicionamento Físico": H67_GINASTICAS },
        "Danças": { "Danças Urbanas": H67_DANCAS },
        "Lutas": { "Lutas do Brasil": H67_LUTAS },
        "Práticas Corporais de Aventura": { "Práticas de Aventura Urbanas": H67_AVENTURA }
    };
}

// ===== Bloco 8º-9º ano (EF89EF01-21) =====
const H89_ESPORTES = [
    { codigo: "EF89EF01", descricao: "Experimentar diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
    { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
    { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de campo e taco, rede/parede, invasão e combate como nas modalidades esportivas escolhidas para praticar de forma específica." },
    { codigo: "EF89EF04", descricao: "Identificar os elementos técnicos ou técnico-táticos individuais, combinações táticas, sistemas de jogo e regras das modalidades esportivas praticadas, bem como diferenciar as modalidades esportivas com base nos critérios da lógica interna das categorias de esporte: rede/parede, campo e taco, invasão e combate." },
    { codigo: "EF89EF05", descricao: "Identificar as transformações históricas do fenômeno esportivo e discutir alguns de seus problemas (doping, corrupção, violência etc.) e a forma como as mídias os apresentam." },
    { codigo: "EF89EF06", descricao: "Verificar locais disponíveis na comunidade para a prática de esportes e das demais práticas corporais tematizadas na escola, propondo e produzindo alternativas para utilizá-los no tempo livre." }
];
const H89_GINASTICA_CONDICIONAMENTO = [
    { codigo: "EF89EF07", descricao: "Experimentar e fruir um ou mais programas de exercícios físicos, identificando as exigências corporais desses diferentes programas e reconhecendo a importância de uma prática individualizada, adequada às características e necessidades de cada sujeito." },
    { codigo: "EF89EF08", descricao: "Discutir as transformações históricas dos padrões de desempenho, saúde e beleza, considerando a forma como são apresentados nos diferentes meios (científico, midiático etc.)." },
    { codigo: "EF89EF09", descricao: "Problematizar a prática excessiva de exercícios físicos e o uso de medicamentos para a ampliação do rendimento ou potencialização das transformações corporais." }
];
const H89_GINASTICA_CONSCIENTIZACAO = [
    { codigo: "EF89EF10", descricao: "Experimentar e fruir um ou mais tipos de ginástica de conscientização corporal, identificando as exigências corporais dos mesmos." },
    { codigo: "EF89EF11", descricao: "Identificar as diferenças e semelhanças entre a ginástica de conscientização corporal e as de condicionamento físico e discutir como a prática de cada uma dessas manifestações pode contribuir para a melhoria das condições de vida, saúde, bem-estar e cuidado consigo mesmo." }
];
const H89_DANCAS = [
    { codigo: "EF89EF12", descricao: "Experimentar, fruir e recriar danças de salão, valorizando a diversidade cultural e respeitando a tradição dessas culturas." },
    { codigo: "EF89EF13", descricao: "Planejar e utilizar estratégias para se apropriar dos elementos constitutivos (ritmo, espaço, gestos) das danças de salão." },
    { codigo: "EF89EF14", descricao: "Discutir estereótipos e preconceitos relativos às danças de salão e demais práticas corporais e propor alternativas para sua superação." },
    { codigo: "EF89EF15", descricao: "Analisar as características (ritmos, gestos, coreografias e músicas) das danças de salão, bem como suas transformações históricas e os grupos de origem." }
];
const H89_LUTAS = [
    { codigo: "EF89EF16", descricao: "Experimentar e fruir a execução dos movimentos pertencentes às lutas do mundo, adotando procedimentos de segurança e respeitando o oponente." },
    { codigo: "EF89EF17", descricao: "Planejar e utilizar estratégias básicas das lutas experimentadas, reconhecendo as suas características técnico-táticas." },
    { codigo: "EF89EF18", descricao: "Discutir as transformações históricas, o processo de esportivização e a midiatização de uma ou mais lutas, valorizando e respeitando as culturas de origem." }
];
const H89_AVENTURA = [
    { codigo: "EF89EF19", descricao: "Experimentar e fruir diferentes práticas corporais de aventura na natureza, valorizando a própria segurança e integridade física, bem como as dos demais, respeitando o patrimônio natural e minimizando os impactos de degradação ambiental." },
    { codigo: "EF89EF20", descricao: "Identificar riscos, formular estratégias e observar normas de segurança para superar os desafios na realização de práticas corporais de aventura na natureza." },
    { codigo: "EF89EF21", descricao: "Identificar as características (equipamentos de segurança, instrumentos, indumentária, organização) das práticas corporais de aventura na natureza, bem como suas transformações históricas." }
];

function unidadesBloco89() {
    return {
        "Esportes": {
            "Esportes de Rede/Parede": H89_ESPORTES,
            "Esportes de Campo e Taco": H89_ESPORTES,
            "Esportes de Invasão": H89_ESPORTES,
            "Esportes de Combate": H89_ESPORTES
        },
        // Único ponto do currículo em que uma unidade temática tem 2 objetos
        // de conhecimento com habilidades DIFERENTES entre si (as demais
        // unidades multi-objeto do arquivo compartilham a mesma habilidade).
        "Ginásticas": {
            "Ginástica de Condicionamento Físico": H89_GINASTICA_CONDICIONAMENTO,
            "Ginástica de Conscientização Corporal": H89_GINASTICA_CONSCIENTIZACAO
        },
        "Danças": { "Danças de Salão": H89_DANCAS },
        "Lutas": { "Lutas do Mundo": H89_LUTAS },
        "Práticas Corporais de Aventura": { "Práticas de Aventura na Natureza": H89_AVENTURA }
    };
}

// === BANCO DE HABILIDADES COMPLETO DA BNCC - EDUCAÇÃO FÍSICA ===
export const habilidadesBNCC = {
    "1º Ano": unidadesBloco12(),
    "2º Ano": unidadesBloco12(),
    "3º Ano": unidadesBloco35(),
    "4º Ano": unidadesBloco35(),
    "5º Ano": unidadesBloco35(),
    "6º Ano": unidadesBloco67(),
    "7º Ano": unidadesBloco67(),
    "8º Ano": unidadesBloco89(),
    "9º Ano": unidadesBloco89()
};
