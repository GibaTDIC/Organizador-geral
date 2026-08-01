// Prof GB — Dados fixos da BNCC (Ensino Religioso), Ensino Fundamental 1º-9º ano.
// Fonte: BNCC (MEC, versão final), seção 4.5.1 Ensino Religioso — texto das
// habilidades e nomes dos objetos de conhecimento são verbatim do documento
// oficial (conferidos código a código e objeto a objeto contra o PDF em 2026-08).
//
// Diferente de Educação Física e Arte (organizadas em blocos de vários anos
// compartilhando as mesmas unidades/objetos), a BNCC define Ensino Religioso
// ANO A ANO — cada um dos 9 anos tem seu próprio conjunto de unidades
// temáticas, objetos de conhecimento e habilidades, sem repetição entre anos.
// Dentro de um mesmo ano, todos os objetos de conhecimento listados
// compartilham o MESMO conjunto de habilidades (mesmo padrão de
// bncc-curriculum.js/bncc-curriculum-arte.js — só muda a unidade de
// repetição, que aqui é o ano, não um bloco de anos).

export const unidadesPorAno = {
    "1º Ano": ["Identidades e alteridades", "Manifestações religiosas"],
    "2º Ano": ["Identidades e alteridades", "Manifestações religiosas"],
    "3º Ano": ["Identidades e alteridades", "Manifestações religiosas"],
    "4º Ano": ["Manifestações religiosas", "Crenças religiosas e filosofias de vida"],
    "5º Ano": ["Crenças religiosas e filosofias de vida"],
    "6º Ano": ["Crenças religiosas e filosofias de vida"],
    "7º Ano": ["Manifestações religiosas", "Crenças religiosas e filosofias de vida"],
    "8º Ano": ["Crenças religiosas e filosofias de vida"],
    "9º Ano": ["Crenças religiosas e filosofias de vida"]
};

// especificacoesPorUnidade guarda os objetos de conhecimento de cada
// unidade temática, por ano — usado pra alimentar a sugestão de bimestre
// (ver especificacoesSugeridasBimestre em modules/planejamento). A lista de
// opções do campo em si vem direto das chaves de habilidadesBNCC.
const OBJ_1ANO = {
    "Identidades e alteridades": ["O eu, o outro e o nós"],
    "Manifestações religiosas": ["Imanência e transcendência", "Sentimentos, lembranças, memórias e saberes"]
};
const OBJ_2ANO = {
    "Identidades e alteridades": ["O eu, a família e o ambiente de convivência", "Memórias e símbolos"],
    "Manifestações religiosas": ["Símbolos religiosos", "Alimentos sagrados"]
};
const OBJ_3ANO = {
    "Identidades e alteridades": ["Espaços e territórios religiosos"],
    "Manifestações religiosas": ["Práticas celebrativas", "Indumentárias religiosas"]
};
const OBJ_4ANO = {
    "Manifestações religiosas": ["Ritos religiosos", "Representações religiosas na arte"],
    "Crenças religiosas e filosofias de vida": ["Ideia(s) de divindade(s)"]
};
const OBJ_5ANO = {
    "Crenças religiosas e filosofias de vida": ["Narrativas religiosas", "Mitos nas tradições religiosas", "Ancestralidade e tradição oral"]
};
const OBJ_6ANO = {
    "Crenças religiosas e filosofias de vida": ["Tradição escrita: registro dos ensinamentos sagrados", "Ensinamentos da tradição escrita", "Símbolos, ritos e mitos religiosos"]
};
const OBJ_7ANO = {
    "Manifestações religiosas": ["Místicas e espiritualidades", "Lideranças religiosas"],
    "Crenças religiosas e filosofias de vida": ["Princípios éticos e valores religiosos", "Liderança e direitos humanos"]
};
const OBJ_8ANO = {
    "Crenças religiosas e filosofias de vida": ["Crenças, convicções e atitudes", "Doutrinas religiosas", "Crenças, filosofias de vida e esfera pública", "Tradições religiosas, mídias e tecnologias"]
};
const OBJ_9ANO = {
    "Crenças religiosas e filosofias de vida": ["Imanência e transcendência", "Vida e morte", "Princípios e valores éticos"]
};

export const especificacoesPorUnidade = {
    "1º Ano": OBJ_1ANO,
    "2º Ano": OBJ_2ANO,
    "3º Ano": OBJ_3ANO,
    "4º Ano": OBJ_4ANO,
    "5º Ano": OBJ_5ANO,
    "6º Ano": OBJ_6ANO,
    "7º Ano": OBJ_7ANO,
    "8º Ano": OBJ_8ANO,
    "9º Ano": OBJ_9ANO
};

const H_1ANO = [
    { codigo: "EF01ER01", descricao: "Identificar e acolher as semelhanças e diferenças entre o eu, o outro e o nós." },
    { codigo: "EF01ER02", descricao: "Reconhecer que o seu nome e o das demais pessoas os identificam e os diferenciam." },
    { codigo: "EF01ER03", descricao: "Reconhecer e respeitar as características físicas e subjetivas de cada um." },
    { codigo: "EF01ER04", descricao: "Valorizar a diversidade de formas de vida." },
    { codigo: "EF01ER05", descricao: "Identificar e acolher sentimentos, lembranças, memórias e saberes de cada um." },
    { codigo: "EF01ER06", descricao: "Identificar as diferentes formas pelas quais as pessoas manifestam sentimentos, ideias, memórias, gostos e crenças em diferentes espaços." }
];

const H_2ANO = [
    { codigo: "EF02ER01", descricao: "Reconhecer os diferentes espaços de convivência." },
    { codigo: "EF02ER02", descricao: "Identificar costumes, crenças e formas diversas de viver em variados ambientes de convivência." },
    { codigo: "EF02ER03", descricao: "Identificar as diferentes formas de registro das memórias pessoais, familiares e escolares (fotos, músicas, narrativas, álbuns...)." },
    { codigo: "EF02ER04", descricao: "Identificar os símbolos presentes nos variados espaços de convivência." },
    { codigo: "EF02ER05", descricao: "Identificar, distinguir e respeitar símbolos religiosos de distintas manifestações, tradições e instituições religiosas." },
    { codigo: "EF02ER06", descricao: "Exemplificar alimentos considerados sagrados por diferentes culturas, tradições e expressões religiosas." },
    { codigo: "EF02ER07", descricao: "Identificar significados atribuídos a alimentos em diferentes manifestações e tradições religiosas." }
];

const H_3ANO = [
    { codigo: "EF03ER01", descricao: "Identificar e respeitar os diferentes espaços e territórios religiosos de diferentes tradições e movimentos religiosos." },
    { codigo: "EF03ER02", descricao: "Caracterizar os espaços e territórios religiosos como locais de realização das práticas celebrativas." },
    { codigo: "EF03ER03", descricao: "Identificar e respeitar práticas celebrativas (cerimônias, orações, festividades, peregrinações, entre outras) de diferentes tradições religiosas." },
    { codigo: "EF03ER04", descricao: "Caracterizar as práticas celebrativas como parte integrante do conjunto das manifestações religiosas de diferentes culturas e sociedades." },
    { codigo: "EF03ER05", descricao: "Reconhecer as indumentárias (roupas, acessórios, símbolos, pinturas corporais) utilizadas em diferentes manifestações e tradições religiosas." },
    { codigo: "EF03ER06", descricao: "Caracterizar as indumentárias como elementos integrantes das identidades religiosas." }
];

const H_4ANO = [
    { codigo: "EF04ER01", descricao: "Identificar ritos presentes no cotidiano pessoal, familiar, escolar e comunitário." },
    { codigo: "EF04ER02", descricao: "Identificar ritos e suas funções em diferentes manifestações e tradições religiosas." },
    { codigo: "EF04ER03", descricao: "Caracterizar ritos de iniciação e de passagem em diversos grupos religiosos (nascimento, casamento e morte)." },
    { codigo: "EF04ER04", descricao: "Identificar as diversas formas de expressão da espiritualidade (orações, cultos, gestos, cantos, dança, meditação) nas diferentes tradições religiosas." },
    { codigo: "EF04ER05", descricao: "Identificar representações religiosas em diferentes expressões artísticas (pinturas, arquitetura, esculturas, ícones, símbolos, imagens), reconhecendo-as como parte da identidade de diferentes culturas e tradições religiosas." },
    { codigo: "EF04ER06", descricao: "Identificar nomes, significados e representações de divindades nos contextos familiar e comunitário." },
    { codigo: "EF04ER07", descricao: "Reconhecer e respeitar as ideias de divindades de diferentes manifestações e tradições religiosas." }
];

const H_5ANO = [
    { codigo: "EF05ER01", descricao: "Identificar e respeitar acontecimentos sagrados de diferentes culturas e tradições religiosas como recurso para preservar a memória." },
    { codigo: "EF05ER02", descricao: "Identificar mitos de criação em diferentes culturas e tradições religiosas." },
    { codigo: "EF05ER03", descricao: "Reconhecer funções e mensagens religiosas contidas nos mitos de criação (concepções de mundo, natureza, ser humano, divindades, vida e morte)." },
    { codigo: "EF05ER04", descricao: "Reconhecer a importância da tradição oral para preservar memórias e acontecimentos religiosos." },
    { codigo: "EF05ER05", descricao: "Identificar elementos da tradição oral nas culturas e religiosidades indígenas, afro-brasileiras, ciganas, entre outras." },
    { codigo: "EF05ER06", descricao: "Identificar o papel dos sábios e anciãos na comunicação e preservação da tradição oral." },
    { codigo: "EF05ER07", descricao: "Reconhecer, em textos orais, ensinamentos relacionados a modos de ser e viver." }
];

const H_6ANO = [
    { codigo: "EF06ER01", descricao: "Reconhecer o papel da tradição escrita na preservação de memórias, acontecimentos e ensinamentos religiosos." },
    { codigo: "EF06ER02", descricao: "Reconhecer e valorizar a diversidade de textos religiosos escritos (textos do Budismo, Cristianismo, Espiritismo, Hinduísmo, Islamismo, Judaísmo, entre outros)." },
    { codigo: "EF06ER03", descricao: "Reconhecer, em textos escritos, ensinamentos relacionados a modos de ser e viver." },
    { codigo: "EF06ER04", descricao: "Reconhecer que os textos escritos são utilizados pelas tradições religiosas de maneiras diversas." },
    { codigo: "EF06ER05", descricao: "Discutir como o estudo e a interpretação dos textos religiosos influenciam os adeptos a vivenciarem os ensinamentos das tradições religiosas." },
    { codigo: "EF06ER06", descricao: "Reconhecer a importância dos mitos, ritos, símbolos e textos na estruturação das diferentes crenças, tradições e movimentos religiosos." },
    { codigo: "EF06ER07", descricao: "Exemplificar a relação entre mito, rito e símbolo nas práticas celebrativas de diferentes tradições religiosas." }
];

const H_7ANO = [
    { codigo: "EF07ER01", descricao: "Reconhecer e respeitar as práticas de comunicação com as divindades em distintas manifestações e tradições religiosas." },
    { codigo: "EF07ER02", descricao: "Identificar práticas de espiritualidade utilizadas pelas pessoas em determinadas situações (acidentes, doenças, fenômenos climáticos)." },
    { codigo: "EF07ER03", descricao: "Reconhecer os papéis atribuídos às lideranças de diferentes tradições religiosas." },
    { codigo: "EF07ER04", descricao: "Exemplificar líderes religiosos que se destacaram por suas contribuições à sociedade." },
    { codigo: "EF07ER05", descricao: "Discutir estratégias que promovam a convivência ética e respeitosa entre as religiões." },
    { codigo: "EF07ER06", descricao: "Identificar princípios éticos em diferentes tradições religiosas e filosofias de vida, discutindo como podem influenciar condutas pessoais e práticas sociais." },
    { codigo: "EF07ER07", descricao: "Identificar e discutir o papel das lideranças religiosas e seculares na defesa e promoção dos direitos humanos." },
    { codigo: "EF07ER08", descricao: "Reconhecer o direito à liberdade de consciência, crença ou convicção, questionando concepções e práticas sociais que a violam." }
];

const H_8ANO = [
    { codigo: "EF08ER01", descricao: "Discutir como as crenças e convicções podem influenciar escolhas e atitudes pessoais e coletivas." },
    { codigo: "EF08ER02", descricao: "Analisar filosofias de vida, manifestações e tradições religiosas destacando seus princípios éticos." },
    { codigo: "EF08ER03", descricao: "Analisar doutrinas das diferentes tradições religiosas e suas concepções de mundo, vida e morte." },
    { codigo: "EF08ER04", descricao: "Discutir como filosofias de vida, tradições e instituições religiosas podem influenciar diferentes campos da esfera pública (política, saúde, educação, economia)." },
    { codigo: "EF08ER05", descricao: "Debater sobre as possibilidades e os limites da interferência das tradições religiosas na esfera pública." },
    { codigo: "EF08ER06", descricao: "Analisar práticas, projetos e políticas públicas que contribuem para a promoção da liberdade de pensamento, crenças e convicções." },
    { codigo: "EF08ER07", descricao: "Analisar as formas de uso das mídias e tecnologias pelas diferentes denominações religiosas." }
];

const H_9ANO = [
    { codigo: "EF09ER01", descricao: "Analisar princípios e orientações para o cuidado da vida e nas diversas tradições religiosas e filosofias de vida." },
    { codigo: "EF09ER02", descricao: "Discutir as diferentes expressões de valorização e de desrespeito à vida, por meio da análise de matérias nas diferentes mídias." },
    { codigo: "EF09ER03", descricao: "Identificar sentidos do viver e do morrer em diferentes tradições religiosas, através do estudo de mitos fundantes." },
    { codigo: "EF09ER04", descricao: "Identificar concepções de vida e morte em diferentes tradições religiosas e filosofias de vida, por meio da análise de diferentes ritos fúnebres." },
    { codigo: "EF09ER05", descricao: "Analisar as diferentes ideias de imortalidade elaboradas pelas tradições religiosas (ancestralidade, reencarnação, transmigração e ressurreição)." },
    { codigo: "EF09ER06", descricao: "Reconhecer a coexistência como uma atitude ética de respeito à vida e à dignidade humana." },
    { codigo: "EF09ER07", descricao: "Identificar princípios éticos (familiares, religiosos e culturais) que possam alicerçar a construção de projetos de vida." },
    { codigo: "EF09ER08", descricao: "Construir projetos de vida assentados em princípios e valores éticos." }
];

// Todo objeto de conhecimento de um mesmo ano compartilha o MESMO conjunto
// de habilidades (a BNCC não desdobra habilidades por objeto dentro de um
// ano de Ensino Religioso).
function habilidadesPorObjetos(objetosPorUnidade, habilidades) {
    const resultado = {};
    Object.entries(objetosPorUnidade).forEach(([unidade, objetos]) => {
        const mapaObjetos = {};
        objetos.forEach(o => { mapaObjetos[o] = habilidades; });
        resultado[unidade] = mapaObjetos;
    });
    return resultado;
}

// === BANCO DE HABILIDADES COMPLETO DA BNCC - ENSINO RELIGIOSO ===
export const habilidadesBNCC = {
    "1º Ano": habilidadesPorObjetos(OBJ_1ANO, H_1ANO),
    "2º Ano": habilidadesPorObjetos(OBJ_2ANO, H_2ANO),
    "3º Ano": habilidadesPorObjetos(OBJ_3ANO, H_3ANO),
    "4º Ano": habilidadesPorObjetos(OBJ_4ANO, H_4ANO),
    "5º Ano": habilidadesPorObjetos(OBJ_5ANO, H_5ANO),
    "6º Ano": habilidadesPorObjetos(OBJ_6ANO, H_6ANO),
    "7º Ano": habilidadesPorObjetos(OBJ_7ANO, H_7ANO),
    "8º Ano": habilidadesPorObjetos(OBJ_8ANO, H_8ANO),
    "9º Ano": habilidadesPorObjetos(OBJ_9ANO, H_9ANO)
};
