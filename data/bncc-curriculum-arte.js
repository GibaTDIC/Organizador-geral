// Prof GB — Dados fixos da BNCC (Arte), Ensino Fundamental 1º-9º ano.
// Fonte: BNCC (MEC, versão final), seção 4.1.2 Arte — texto das habilidades
// e nomes dos objetos de conhecimento são verbatim do documento oficial
// (conferidos código a código e objeto a objeto contra o PDF em 2026-08).
//
// A BNCC organiza Arte em 5 unidades temáticas (Artes visuais, Dança,
// Música, Teatro, Artes integradas) — as MESMAS em todos os anos, do 1º ao
// 9º — e em só 2 blocos de série (1º ao 5º ano e 6º ao 9º ano), diferente
// de Educação Física (4 blocos). Cada unidade temática lista VÁRIOS objetos
// de conhecimento (ex.: "Contextos e práticas", "Elementos da linguagem")
// e, assim como a maioria das unidades de Educação Física, todos os objetos
// de uma mesma unidade+bloco compartilham o MESMO conjunto de habilidades —
// por isso os arrays de habilidade (H15_*/H69_*) são definidos uma única
// vez e reaproveitados por referência entre os objetos que os compartilham,
// mesmo padrão já usado em bncc-curriculum.js.

export const unidadesPorAno = {
    "1º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "2º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "3º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "4º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "5º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "6º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "7º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "8º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"],
    "9º Ano": ["Artes visuais", "Dança", "Música", "Teatro", "Artes integradas"]
};

// especificacoesPorUnidade guarda os objetos de conhecimento de cada
// unidade temática — nomeação herdada de bncc-curriculum.js, mas aqui
// "especificação" é literalmente o objeto de conhecimento oficial da BNCC
// (não um recorte adicional como em Educação Física). Usado só pra
// destacar, no formulário, quais objetos foram planejados pro bimestre em
// Configurações — a lista de opções do campo em si vem direto das chaves de
// habilidadesBNCC (ver atualizarEspecificacoes em modules/planejamento).
const OBJ_ARTES_VISUAIS_15 = ["Contextos e práticas", "Elementos da linguagem", "Matrizes estéticas e culturais", "Materialidades", "Processos de criação"];
const OBJ_DANCA_15 = ["Sistemas da linguagem", "Contextos e práticas", "Elementos da linguagem", "Processos de criação"];
const OBJ_MUSICA_15 = ["Contexto e práticas", "Elementos da linguagem", "Materialidades", "Notação e registro musical", "Processos de criação"];
const OBJ_TEATRO_15 = ["Contextos e práticas", "Elementos da linguagem", "Processos de criação"];
const OBJ_ARTES_INTEGRADAS_15 = ["Processos de criação", "Matrizes estéticas culturais", "Patrimônio cultural", "Arte e tecnologia"];

const OBJ_ARTES_VISUAIS_69 = ["Contextos e práticas", "Elementos da linguagem", "Materialidades", "Processos de criação", "Sistemas da linguagem"];
const OBJ_DANCA_69 = ["Contextos e práticas", "Elementos da linguagem", "Processos de criação"];
const OBJ_MUSICA_69 = ["Contextos e práticas", "Elementos da linguagem", "Materialidades", "Notação e registro musical", "Processos de criação"];
const OBJ_TEATRO_69 = ["Contextos e práticas", "Elementos da linguagem", "Processos de criação"];
const OBJ_ARTES_INTEGRADAS_69 = ["Contextos e práticas", "Processos de criação", "Matrizes estéticas e culturais", "Patrimônio cultural", "Arte e tecnologia"];

function especPorBloco15() {
    return {
        "Artes visuais": OBJ_ARTES_VISUAIS_15,
        "Dança": OBJ_DANCA_15,
        "Música": OBJ_MUSICA_15,
        "Teatro": OBJ_TEATRO_15,
        "Artes integradas": OBJ_ARTES_INTEGRADAS_15
    };
}
function especPorBloco69() {
    return {
        "Artes visuais": OBJ_ARTES_VISUAIS_69,
        "Dança": OBJ_DANCA_69,
        "Música": OBJ_MUSICA_69,
        "Teatro": OBJ_TEATRO_69,
        "Artes integradas": OBJ_ARTES_INTEGRADAS_69
    };
}

export const especificacoesPorUnidade = {
    "1º Ano": especPorBloco15(),
    "2º Ano": especPorBloco15(),
    "3º Ano": especPorBloco15(),
    "4º Ano": especPorBloco15(),
    "5º Ano": especPorBloco15(),
    "6º Ano": especPorBloco69(),
    "7º Ano": especPorBloco69(),
    "8º Ano": especPorBloco69(),
    "9º Ano": especPorBloco69()
};

// ===== Bloco 1º ao 5º ano (EF15AR01-26) =====
const H15_ARTES_VISUAIS = [
    { codigo: "EF15AR01", descricao: "Identificar e apreciar formas distintas das artes visuais tradicionais e contemporâneas, cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório imagético." },
    { codigo: "EF15AR02", descricao: "Explorar e reconhecer elementos constitutivos das artes visuais (ponto, linha, forma, cor, espaço, movimento etc.)." },
    { codigo: "EF15AR03", descricao: "Reconhecer e analisar a influência de distintas matrizes estéticas e culturais das artes visuais nas manifestações artísticas das culturas locais, regionais e nacionais." },
    { codigo: "EF15AR04", descricao: "Experimentar diferentes formas de expressão artística (desenho, pintura, colagem, quadrinhos, dobradura, escultura, modelagem, instalação, vídeo, fotografia etc.), fazendo uso sustentável de materiais, instrumentos, recursos e técnicas convencionais e não convencionais." },
    { codigo: "EF15AR05", descricao: "Experimentar a criação em artes visuais de modo individual, coletivo e colaborativo, explorando diferentes espaços da escola e da comunidade." },
    { codigo: "EF15AR06", descricao: "Dialogar sobre a sua criação e as dos colegas, para alcançar sentidos plurais." },
    { codigo: "EF15AR07", descricao: "Reconhecer algumas categorias do sistema das artes visuais (museus, galerias, instituições, artistas, artesãos, curadores etc.)." }
];

const H15_DANCA = [
    { codigo: "EF15AR08", descricao: "Experimentar e apreciar formas distintas de manifestações da dança presentes em diferentes contextos, cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório corporal." },
    { codigo: "EF15AR09", descricao: "Estabelecer relações entre as partes do corpo e destas com o todo corporal na construção do movimento dançado." },
    { codigo: "EF15AR10", descricao: "Experimentar diferentes formas de orientação no espaço (deslocamentos, planos, direções, caminhos etc.) e ritmos de movimento (lento, moderado e rápido) na construção do movimento dançado." },
    { codigo: "EF15AR11", descricao: "Criar e improvisar movimentos dançados de modo individual, coletivo e colaborativo, considerando os aspectos estruturais, dinâmicos e expressivos dos elementos constitutivos do movimento, com base nos códigos de dança." },
    { codigo: "EF15AR12", descricao: "Discutir, com respeito e sem preconceito, as experiências pessoais e coletivas em dança vivenciadas na escola, como fonte para a construção de vocabulários e repertórios próprios." }
];

const H15_MUSICA = [
    { codigo: "EF15AR13", descricao: "Identificar e apreciar criticamente diversas formas e gêneros de expressão musical, reconhecendo e analisando os usos e as funções da música em diversos contextos de circulação, em especial, aqueles da vida cotidiana." },
    { codigo: "EF15AR14", descricao: "Perceber e explorar os elementos constitutivos da música (altura, intensidade, timbre, melodia, ritmo etc.), por meio de jogos, brincadeiras, canções e práticas diversas de composição/criação, execução e apreciação musical." },
    { codigo: "EF15AR15", descricao: "Explorar fontes sonoras diversas, como as existentes no próprio corpo (palmas, voz, percussão corporal), na natureza e em objetos cotidianos, reconhecendo os elementos constitutivos da música e as características de instrumentos musicais variados." },
    { codigo: "EF15AR16", descricao: "Explorar diferentes formas de registro musical não convencional (representação gráfica de sons, partituras criativas etc.), bem como procedimentos e técnicas de registro em áudio e audiovisual, e reconhecer a notação musical convencional." },
    { codigo: "EF15AR17", descricao: "Experimentar improvisações, composições e sonorização de histórias, entre outros, utilizando vozes, sons corporais e/ou instrumentos musicais convencionais ou não convencionais, de modo individual, coletivo e colaborativo." }
];

const H15_TEATRO = [
    { codigo: "EF15AR18", descricao: "Reconhecer e apreciar formas distintas de manifestações do teatro presentes em diferentes contextos, aprendendo a ver e a ouvir histórias dramatizadas e cultivando a percepção, o imaginário, a capacidade de simbolizar e o repertório ficcional." },
    { codigo: "EF15AR19", descricao: "Descobrir teatralidades na vida cotidiana, identificando elementos teatrais (variadas entonações de voz, diferentes fisicalidades, diversidade de personagens e narrativas etc.)." },
    { codigo: "EF15AR20", descricao: "Experimentar o trabalho colaborativo, coletivo e autoral em improvisações teatrais e processos narrativos criativos em teatro, explorando desde a teatralidade dos gestos e das ações do cotidiano até elementos de diferentes matrizes estéticas e culturais." },
    { codigo: "EF15AR21", descricao: "Exercitar a imitação e o faz de conta, ressignificando objetos e fatos e experimentando-se no lugar do outro, ao compor e encenar acontecimentos cênicos, por meio de músicas, imagens, textos ou outros pontos de partida, de forma intencional e reflexiva." },
    { codigo: "EF15AR22", descricao: "Experimentar possibilidades criativas de movimento e de voz na criação de um personagem teatral, discutindo estereótipos." }
];

const H15_ARTES_INTEGRADAS = [
    { codigo: "EF15AR23", descricao: "Reconhecer e experimentar, em projetos temáticos, as relações processuais entre diversas linguagens artísticas." },
    { codigo: "EF15AR24", descricao: "Caracterizar e experimentar brinquedos, brincadeiras, jogos, danças, canções e histórias de diferentes matrizes estéticas e culturais." },
    { codigo: "EF15AR25", descricao: "Conhecer e valorizar o patrimônio cultural, material e imaterial, de culturas diversas, em especial a brasileira, incluindo-se suas matrizes indígenas, africanas e europeias, de diferentes épocas, favorecendo a construção de vocabulário e repertório relativos às diferentes linguagens artísticas." },
    { codigo: "EF15AR26", descricao: "Explorar diferentes tecnologias e recursos digitais (multimeios, animações, jogos eletrônicos, gravações em áudio e vídeo, fotografia, softwares etc.) nos processos de criação artística." }
];

// Cada objeto de conhecimento da unidade aponta pro MESMO array de
// habilidades — a BNCC não desdobra habilidades por objeto dentro de uma
// unidade temática de Arte (diferente de Educação Física, onde alguns casos
// como Ginásticas 8º/9º ano têm habilidades distintas por objeto).
function unidadesBloco15() {
    const artesVisuais = {};
    OBJ_ARTES_VISUAIS_15.forEach(o => { artesVisuais[o] = H15_ARTES_VISUAIS; });
    const danca = {};
    OBJ_DANCA_15.forEach(o => { danca[o] = H15_DANCA; });
    const musica = {};
    OBJ_MUSICA_15.forEach(o => { musica[o] = H15_MUSICA; });
    const teatro = {};
    OBJ_TEATRO_15.forEach(o => { teatro[o] = H15_TEATRO; });
    const artesIntegradas = {};
    OBJ_ARTES_INTEGRADAS_15.forEach(o => { artesIntegradas[o] = H15_ARTES_INTEGRADAS; });
    return {
        "Artes visuais": artesVisuais,
        "Dança": danca,
        "Música": musica,
        "Teatro": teatro,
        "Artes integradas": artesIntegradas
    };
}

// ===== Bloco 6º ao 9º ano (EF69AR01-35) =====
const H69_ARTES_VISUAIS = [
    { codigo: "EF69AR01", descricao: "Pesquisar, apreciar e analisar formas distintas das artes visuais tradicionais e contemporâneas, em obras de artistas brasileiros e estrangeiros de diferentes épocas e em diferentes matrizes estéticas e culturais, de modo a ampliar a experiência com diferentes contextos e práticas artístico-visuais e cultivar a percepção, o imaginário, a capacidade de simbolizar e o repertório imagético." },
    { codigo: "EF69AR02", descricao: "Pesquisar e analisar diferentes estilos visuais, contextualizando-os no tempo e no espaço." },
    { codigo: "EF69AR03", descricao: "Analisar situações nas quais as linguagens das artes visuais se integram às linguagens audiovisuais (cinema, animações, vídeos etc.), gráficas (capas de livros, ilustrações de textos diversos etc.), cenográficas, coreográficas, musicais etc." },
    { codigo: "EF69AR04", descricao: "Analisar os elementos constitutivos das artes visuais (ponto, linha, forma, direção, cor, tom, escala, dimensão, espaço, movimento etc.) na apreciação de diferentes produções artísticas." },
    { codigo: "EF69AR05", descricao: "Experimentar e analisar diferentes formas de expressão artística (desenho, pintura, colagem, quadrinhos, dobradura, escultura, modelagem, instalação, vídeo, fotografia, performance etc.)." },
    { codigo: "EF69AR06", descricao: "Desenvolver processos de criação em artes visuais, com base em temas ou interesses artísticos, de modo individual, coletivo e colaborativo, fazendo uso de materiais, instrumentos e recursos convencionais, alternativos e digitais." },
    { codigo: "EF69AR07", descricao: "Dialogar com princípios conceituais, proposições temáticas, repertórios imagéticos e processos de criação nas suas produções visuais." },
    { codigo: "EF69AR08", descricao: "Diferenciar as categorias de artista, artesão, produtor cultural, curador, designer, entre outras, estabelecendo relações entre os profissionais do sistema das artes visuais." }
];

const H69_DANCA = [
    { codigo: "EF69AR09", descricao: "Pesquisar e analisar diferentes formas de expressão, representação e encenação da dança, reconhecendo e apreciando composições de dança de artistas e grupos brasileiros e estrangeiros de diferentes épocas." },
    { codigo: "EF69AR10", descricao: "Explorar elementos constitutivos do movimento cotidiano e do movimento dançado, abordando, criticamente, o desenvolvimento das formas da dança em sua história tradicional e contemporânea." },
    { codigo: "EF69AR11", descricao: "Experimentar e analisar os fatores de movimento (tempo, peso, fluência e espaço) como elementos que, combinados, geram as ações corporais e o movimento dançado." },
    { codigo: "EF69AR12", descricao: "Investigar e experimentar procedimentos de improvisação e criação do movimento como fonte para a construção de vocabulários e repertórios próprios." },
    { codigo: "EF69AR13", descricao: "Investigar brincadeiras, jogos, danças coletivas e outras práticas de dança de diferentes matrizes estéticas e culturais como referência para a criação e a composição de danças autorais, individualmente e em grupo." },
    { codigo: "EF69AR14", descricao: "Analisar e experimentar diferentes elementos (figurino, iluminação, cenário, trilha sonora etc.) e espaços (convencionais e não convencionais) para composição cênica e apresentação coreográfica." },
    { codigo: "EF69AR15", descricao: "Discutir as experiências pessoais e coletivas em dança vivenciadas na escola e em outros contextos, problematizando estereótipos e preconceitos." }
];

const H69_MUSICA = [
    { codigo: "EF69AR16", descricao: "Analisar criticamente, por meio da apreciação musical, usos e funções da música em seus contextos de produção e circulação, relacionando as práticas musicais às diferentes dimensões da vida social, cultural, política, histórica, econômica, estética e ética." },
    { codigo: "EF69AR17", descricao: "Explorar e analisar, criticamente, diferentes meios e equipamentos culturais de circulação da música e do conhecimento musical." },
    { codigo: "EF69AR18", descricao: "Reconhecer e apreciar o papel de músicos e grupos de música brasileiros e estrangeiros que contribuíram para o desenvolvimento de formas e gêneros musicais." },
    { codigo: "EF69AR19", descricao: "Identificar e analisar diferentes estilos musicais, contextualizando-os no tempo e no espaço, de modo a aprimorar a capacidade de apreciação da estética musical." },
    { codigo: "EF69AR20", descricao: "Explorar e analisar elementos constitutivos da música (altura, intensidade, timbre, melodia, ritmo etc.), por meio de recursos tecnológicos (games e plataformas digitais), jogos, canções e práticas diversas de composição/criação, execução e apreciação musicais." },
    { codigo: "EF69AR21", descricao: "Explorar e analisar fontes e materiais sonoros em práticas de composição/criação, execução e apreciação musical, reconhecendo timbres e características de instrumentos musicais diversos." },
    { codigo: "EF69AR22", descricao: "Explorar e identificar diferentes formas de registro musical (notação musical tradicional, partituras criativas e procedimentos da música contemporânea), bem como procedimentos e técnicas de registro em áudio e audiovisual." },
    { codigo: "EF69AR23", descricao: "Explorar e criar improvisações, composições, arranjos, jingles, trilhas sonoras, entre outros, utilizando vozes, sons corporais e/ou instrumentos acústicos ou eletrônicos, convencionais ou não convencionais, expressando ideias musicais de maneira individual, coletiva e colaborativa." }
];

const H69_TEATRO = [
    { codigo: "EF69AR24", descricao: "Reconhecer e apreciar artistas e grupos de teatro brasileiros e estrangeiros de diferentes épocas, investigando os modos de criação, produção, divulgação, circulação e organização da atuação profissional em teatro." },
    { codigo: "EF69AR25", descricao: "Identificar e analisar diferentes estilos cênicos, contextualizando-os no tempo e no espaço de modo a aprimorar a capacidade de apreciação da estética teatral." },
    { codigo: "EF69AR26", descricao: "Explorar diferentes elementos envolvidos na composição dos acontecimentos cênicos (figurinos, adereços, cenário, iluminação e sonoplastia) e reconhecer seus vocabulários." },
    { codigo: "EF69AR27", descricao: "Pesquisar e criar formas de dramaturgias e espaços cênicos para o acontecimento teatral, em diálogo com o teatro contemporâneo." },
    { codigo: "EF69AR28", descricao: "Investigar e experimentar diferentes funções teatrais e discutir os limites e desafios do trabalho artístico coletivo e colaborativo." },
    { codigo: "EF69AR29", descricao: "Experimentar a gestualidade e as construções corporais e vocais de maneira imaginativa na improvisação teatral e no jogo cênico." },
    { codigo: "EF69AR30", descricao: "Compor improvisações e acontecimentos cênicos com base em textos dramáticos ou outros estímulos (música, imagens, objetos etc.), caracterizando personagens (com figurinos e adereços), cenário, iluminação e sonoplastia e considerando a relação com o espectador." }
];

const H69_ARTES_INTEGRADAS = [
    { codigo: "EF69AR31", descricao: "Relacionar as práticas artísticas às diferentes dimensões da vida social, cultural, política, histórica, econômica, estética e ética." },
    { codigo: "EF69AR32", descricao: "Analisar e explorar, em projetos temáticos, as relações processuais entre diversas linguagens artísticas." },
    { codigo: "EF69AR33", descricao: "Analisar aspectos históricos, sociais e políticos da produção artística, problematizando as narrativas eurocêntricas e as diversas categorizações da arte (arte, artesanato, folclore, design etc.)." },
    { codigo: "EF69AR34", descricao: "Analisar e valorizar o patrimônio cultural, material e imaterial, de culturas diversas, em especial a brasileira, incluindo suas matrizes indígenas, africanas e europeias, de diferentes épocas, e favorecendo a construção de vocabulário e repertório relativos às diferentes linguagens artísticas." },
    { codigo: "EF69AR35", descricao: "Identificar e manipular diferentes tecnologias e recursos digitais para acessar, apreciar, produzir, registrar e compartilhar práticas e repertórios artísticos, de modo reflexivo, ético e responsável." }
];

function unidadesBloco69() {
    const artesVisuais = {};
    OBJ_ARTES_VISUAIS_69.forEach(o => { artesVisuais[o] = H69_ARTES_VISUAIS; });
    const danca = {};
    OBJ_DANCA_69.forEach(o => { danca[o] = H69_DANCA; });
    const musica = {};
    OBJ_MUSICA_69.forEach(o => { musica[o] = H69_MUSICA; });
    const teatro = {};
    OBJ_TEATRO_69.forEach(o => { teatro[o] = H69_TEATRO; });
    const artesIntegradas = {};
    OBJ_ARTES_INTEGRADAS_69.forEach(o => { artesIntegradas[o] = H69_ARTES_INTEGRADAS; });
    return {
        "Artes visuais": artesVisuais,
        "Dança": danca,
        "Música": musica,
        "Teatro": teatro,
        "Artes integradas": artesIntegradas
    };
}

// === BANCO DE HABILIDADES COMPLETO DA BNCC - ARTE ===
export const habilidadesBNCC = {
    "1º Ano": unidadesBloco15(),
    "2º Ano": unidadesBloco15(),
    "3º Ano": unidadesBloco15(),
    "4º Ano": unidadesBloco15(),
    "5º Ano": unidadesBloco15(),
    "6º Ano": unidadesBloco69(),
    "7º Ano": unidadesBloco69(),
    "8º Ano": unidadesBloco69(),
    "9º Ano": unidadesBloco69()
};
