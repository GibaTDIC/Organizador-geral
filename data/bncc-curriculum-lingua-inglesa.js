// Prof GB — Dados fixos da BNCC (Língua Inglesa), Ensino Fundamental 6º-9º ano.
// Fonte: BNCC (MEC, versão final), seção 4.1.4 Língua Inglesa — texto das
// habilidades e nomes dos objetos de conhecimento são verbatim do documento
// oficial (conferidos código a código e objeto a objeto contra o PDF em 2026-08).
//
// A BNCC só define Língua Inglesa a partir do 6º ano (Anos Finais) — não há
// habilidades oficiais de Língua Inglesa para 1º-5º ano. Diferente dos
// outros componentes, aqui a BNCC organiza o conteúdo por EIXOS (Oralidade,
// Leitura, Escrita, Conhecimentos Linguísticos, Dimensão Intercultural), não
// por "unidades temáticas" — mas a estrutura de dados é a mesma usada nos
// outros componentes: cada eixo funciona como a "unidade" do cascade do
// Planejamento (Unidade → Turma → Objeto de Conhecimento → Habilidade). Os 5
// eixos são os mesmos em todos os anos; só os objetos de conhecimento e as
// habilidades mudam ano a ano. O documento também intercala uma subdivisão
// intermediária dentro de cada eixo (ex.: "Interação discursiva", "Compreensão
// oral", "Produção oral" dentro do eixo Oralidade) que não tem equivalente no
// cascade atual — por isso os objetos de conhecimento de cada eixo, no mesmo
// ano, compartilham o conjunto completo de habilidades daquele eixo (mesmo
// padrão usado em Ensino Religioso/Geografia/História).

const U1 = "Oralidade";
const U2 = "Leitura";
const U3 = "Escrita";
const U4 = "Conhecimentos Linguísticos";
const U5 = "Dimensão Intercultural";

export const unidadesPorAno = {
    "6º Ano": [U1, U2, U3, U4, U5],
    "7º Ano": [U1, U2, U3, U4, U5],
    "8º Ano": [U1, U2, U3, U4, U5],
    "9º Ano": [U1, U2, U3, U4, U5]
};

const OBJ_6ANO = {
    [U1]: ["Construção de laços afetivos e convívio social", "Funções e usos da língua inglesa em sala de aula (Classroom language)", "Estratégias de compreensão de textos orais: palavras cognatas e pistas do contexto discursivo", "Produção de textos orais, com a mediação do professor"],
    [U2]: ["Hipóteses sobre a finalidade de um texto", "Compreensão geral e específica: leitura rápida (skimming, scanning)", "Construção de repertório lexical e autonomia leitora", "Partilha de leitura, com mediação do professor"],
    [U3]: ["Planejamento do texto: brainstorming", "Planejamento do texto: organização de ideias", "Produção de textos escritos, em formatos diversos, com a mediação do professor"],
    [U4]: ["Construção de repertório lexical", "Pronúncia", "Presente simples e contínuo (formas afirmativa, negativa e interrogativa)", "Imperativo", "Caso genitivo (`s)", "Adjetivos possessivos"],
    [U5]: ["Países que têm a língua inglesa como língua materna e/ou oficial", "Presença da língua inglesa no cotidiano"]
};
const OBJ_7ANO = {
    [U1]: ["Funções e usos da língua inglesa: convivência e colaboração em sala de aula", "Práticas investigativas", "Estratégias de compreensão de textos orais: conhecimentos prévios", "Compreensão de textos orais de cunho descritivo ou narrativo", "Produção de textos orais, com mediação do professor"],
    [U2]: ["Compreensão geral e específica: leitura rápida (skimming, scanning)", "Construção do sentido global do texto", "Objetivos de leitura", "Leitura de textos digitais para estudo", "Partilha de leitura"],
    [U3]: ["Pré-escrita: planejamento de produção escrita, com mediação do professor", "Escrita: organização em parágrafos ou tópicos, com mediação do professor", "Produção de textos escritos, em formatos diversos, com mediação do professor"],
    [U4]: ["Construção de repertório lexical", "Pronúncia", "Polissemia", "Passado simples e contínuo (formas afirmativa, negativa e interrogativa)", "Pronomes do caso reto e do caso oblíquo", "Verbo modal can (presente e passado)"],
    [U5]: ["A língua inglesa como língua global na sociedade contemporânea", "Variação linguística"]
};
const OBJ_8ANO = {
    [U1]: ["Negociação de sentidos (mal-entendidos no uso da língua inglesa e conflito de opiniões)", "Usos de recursos linguísticos e paralinguísticos no intercâmbio oral", "Compreensão de textos orais, multimodais, de cunho informativo/jornalístico", "Produção de textos orais com autonomia"],
    [U2]: ["Construção de sentidos por meio de inferências e reconhecimento de implícitos", "Leitura de textos de cunho artístico/literário", "Reflexão pós-leitura"],
    [U3]: ["Revisão de textos com a mediação do professor", "Produção de textos escritos com mediação do professor/colegas"],
    [U4]: ["Construção de repertório lexical", "Formação de palavras: prefixos e sufixos", "Verbos para indicar o futuro", "Comparativos e superlativos", "Quantificadores", "Pronomes relativos"],
    [U5]: ["Construção de repertório artístico-cultural", "Impacto de aspectos culturais na comunicação"]
};
const OBJ_9ANO = {
    [U1]: ["Funções e usos da língua inglesa: persuasão", "Compreensão de textos orais, multimodais, de cunho argumentativo", "Produção de textos orais com autonomia"],
    [U2]: ["Recursos de persuasão", "Recursos de argumentação", "Informações em ambientes virtuais", "Reflexão pós-leitura"],
    [U3]: ["Escrita: construção da argumentação", "Escrita: construção da persuasão", "Produção de textos escritos, com mediação do professor/colegas"],
    [U4]: ["Usos de linguagem em meio digital: \"internetês\"", "Conectores (linking words)", "Orações condicionais (tipos 1 e 2)", "Verbos modais: should, must, have to, may e might"],
    [U5]: ["Expansão da língua inglesa: contexto histórico", "A língua inglesa e seu papel no intercâmbio científico, econômico e político", "Construção de identidades no mundo globalizado"]
};

export const especificacoesPorUnidade = {
    "6º Ano": OBJ_6ANO, "7º Ano": OBJ_7ANO, "8º Ano": OBJ_8ANO, "9º Ano": OBJ_9ANO
};

const H_6ANO = {
    [U1]: [
        { codigo: "EF06LI01", descricao: "Interagir em situações de intercâmbio oral, demonstrando iniciativa para utilizar a língua inglesa." },
        { codigo: "EF06LI02", descricao: "Coletar informações do grupo, perguntando e respondendo sobre a família, os amigos, a escola e a comunidade." },
        { codigo: "EF06LI03", descricao: "Solicitar esclarecimentos em língua inglesa sobre o que não entendeu e o significado de palavras ou expressões desconhecidas." },
        { codigo: "EF06LI04", descricao: "Reconhecer, com o apoio de palavras cognatas e pistas do contexto discursivo, o assunto e as informações principais em textos orais sobre temas familiares." },
        { codigo: "EF06LI05", descricao: "Aplicar os conhecimentos da língua inglesa para falar de si e de outras pessoas, explicitando informações pessoais e características relacionadas a gostos, preferências e rotinas." },
        { codigo: "EF06LI06", descricao: "Planejar apresentação sobre a família, a comunidade e a escola, compartilhando-a oralmente com o grupo." }
    ],
    [U2]: [
        { codigo: "EF06LI07", descricao: "Formular hipóteses sobre a finalidade de um texto em língua inglesa, com base em sua estrutura, organização textual e pistas gráficas." },
        { codigo: "EF06LI08", descricao: "Identificar o assunto de um texto, reconhecendo sua organização textual e palavras cognatas." },
        { codigo: "EF06LI09", descricao: "Localizar informações específicas em texto." },
        { codigo: "EF06LI10", descricao: "Conhecer a organização de um dicionário bilíngue (impresso e/ou on-line) para construir repertório lexical." },
        { codigo: "EF06LI11", descricao: "Explorar ambientes virtuais e/ou aplicativos para construir repertório lexical na língua inglesa." },
        { codigo: "EF06LI12", descricao: "Interessar-se pelo texto lido, compartilhando suas ideias sobre o que o texto informa/comunica." }
    ],
    [U3]: [
        { codigo: "EF06LI13", descricao: "Listar ideias para a produção de textos, levando em conta o tema e o assunto." },
        { codigo: "EF06LI14", descricao: "Organizar ideias, selecionando-as em função da estrutura e do objetivo do texto." },
        { codigo: "EF06LI15", descricao: "Produzir textos escritos em língua inglesa (histórias em quadrinhos, cartazes, chats, blogues, agendas, fotolegendas, entre outros), sobre si mesmo, sua família, seus amigos, gostos, preferências e rotinas, sua comunidade e seu contexto escolar." }
    ],
    [U4]: [
        { codigo: "EF06LI16", descricao: "Construir repertório relativo às expressões usadas para o convívio social e o uso da língua inglesa em sala de aula." },
        { codigo: "EF06LI17", descricao: "Construir repertório lexical relativo a temas familiares (escola, família, rotina diária, atividades de lazer, esportes, entre outros)." },
        { codigo: "EF06LI18", descricao: "Reconhecer semelhanças e diferenças na pronúncia de palavras da língua inglesa e da língua materna e/ou outras línguas conhecidas." },
        { codigo: "EF06LI19", descricao: "Utilizar o presente do indicativo para identificar pessoas (verbo to be) e descrever rotinas diárias." },
        { codigo: "EF06LI20", descricao: "Utilizar o presente contínuo para descrever ações em progresso." },
        { codigo: "EF06LI21", descricao: "Reconhecer o uso do imperativo em enunciados de atividades, comandos e instruções." },
        { codigo: "EF06LI22", descricao: "Descrever relações por meio do uso de apóstrofo (') + s." },
        { codigo: "EF06LI23", descricao: "Empregar, de forma inteligível, os adjetivos possessivos." }
    ],
    [U5]: [
        { codigo: "EF06LI24", descricao: "Investigar o alcance da língua inglesa no mundo: como língua materna e/ou oficial (primeira ou segunda língua)." },
        { codigo: "EF06LI25", descricao: "Identificar a presença da língua inglesa na sociedade brasileira/comunidade (palavras, expressões, suportes e esferas de circulação e consumo) e seu significado." },
        { codigo: "EF06LI26", descricao: "Avaliar, problematizando elementos/produtos culturais de países de língua inglesa absorvidos pela sociedade brasileira/comunidade." }
    ]
};

const H_7ANO = {
    [U1]: [
        { codigo: "EF07LI01", descricao: "Interagir em situações de intercâmbio oral para realizar as atividades em sala de aula, de forma respeitosa e colaborativa, trocando ideias e engajando-se em brincadeiras e jogos." },
        { codigo: "EF07LI02", descricao: "Entrevistar os colegas para conhecer suas histórias de vida." },
        { codigo: "EF07LI03", descricao: "Mobilizar conhecimentos prévios para compreender texto oral." },
        { codigo: "EF07LI04", descricao: "Identificar o contexto, a finalidade, o assunto e os interlocutores em textos orais presentes no cinema, na internet, na televisão, entre outros." },
        { codigo: "EF07LI05", descricao: "Compor, em língua inglesa, narrativas orais sobre fatos, acontecimentos e personalidades marcantes do passado." }
    ],
    [U2]: [
        { codigo: "EF07LI06", descricao: "Antecipar o sentido global de textos em língua inglesa por inferências, com base em leitura rápida, observando títulos, primeiras e últimas frases de parágrafos e palavras-chave repetidas." },
        { codigo: "EF07LI07", descricao: "Identificar a(s) informação(ões)-chave de partes de um texto em língua inglesa (parágrafos)." },
        { codigo: "EF07LI08", descricao: "Relacionar as partes de um texto (parágrafos) para construir seu sentido global." },
        { codigo: "EF07LI09", descricao: "Selecionar, em um texto, a informação desejada como objetivo de leitura." },
        { codigo: "EF07LI10", descricao: "Escolher, em ambientes virtuais, textos em língua inglesa, de fontes confiáveis, para estudos/pesquisas escolares." },
        { codigo: "EF07LI11", descricao: "Participar de troca de opiniões e informações sobre textos, lidos na sala de aula ou em outros ambientes." }
    ],
    [U3]: [
        { codigo: "EF07LI12", descricao: "Planejar a escrita de textos em função do contexto (público, finalidade, layout e suporte)." },
        { codigo: "EF07LI13", descricao: "Organizar texto em unidades de sentido, dividindo-o em parágrafos ou tópicos e subtópicos, explorando as possibilidades de organização gráfica, de suporte e de formato do texto." },
        { codigo: "EF07LI14", descricao: "Produzir textos diversos sobre fatos, acontecimentos e personalidades do passado (linha do tempo/timelines, biografias, verbetes de enciclopédias, blogues, entre outros)." }
    ],
    [U4]: [
        { codigo: "EF07LI15", descricao: "Construir repertório lexical relativo a verbos regulares e irregulares (formas no passado), preposições de tempo (in, on, at) e conectores (and, but, because, then, so, before, after, entre outros)." },
        { codigo: "EF07LI16", descricao: "Reconhecer a pronúncia de verbos regulares no passado (-ed)." },
        { codigo: "EF07LI17", descricao: "Explorar o caráter polissêmico de palavras de acordo com o contexto de uso." },
        { codigo: "EF07LI18", descricao: "Utilizar o passado simples e o passado contínuo para produzir textos orais e escritos, mostrando relações de sequência e causalidade." },
        { codigo: "EF07LI19", descricao: "Discriminar sujeito de objeto utilizando pronomes a eles relacionados." },
        { codigo: "EF07LI20", descricao: "Empregar, de forma inteligível, o verbo modal can para descrever habilidades (no presente e no passado)." }
    ],
    [U5]: [
        { codigo: "EF07LI21", descricao: "Analisar o alcance da língua inglesa e os seus contextos de uso no mundo globalizado." },
        { codigo: "EF07LI22", descricao: "Explorar modos de falar em língua inglesa, refutando preconceitos e reconhecendo a variação linguística como fenômeno natural das línguas." },
        { codigo: "EF07LI23", descricao: "Reconhecer a variação linguística como manifestação de formas de pensar e expressar o mundo." }
    ]
};

const H_8ANO = {
    [U1]: [
        { codigo: "EF08LI01", descricao: "Fazer uso da língua inglesa para resolver mal-entendidos, emitir opiniões e esclarecer informações por meio de paráfrases ou justificativas." },
        { codigo: "EF08LI02", descricao: "Explorar o uso de recursos linguísticos (frases incompletas, hesitações, entre outros) e paralinguísticos (gestos, expressões faciais, entre outros) em situações de interação oral." },
        { codigo: "EF08LI03", descricao: "Construir o sentido global de textos orais, relacionando suas partes, o assunto principal e informações relevantes." },
        { codigo: "EF08LI04", descricao: "Utilizar recursos e repertório linguísticos apropriados para informar/comunicar/falar do futuro: planos, previsões, possibilidades e probabilidades." }
    ],
    [U2]: [
        { codigo: "EF08LI05", descricao: "Inferir informações e relações que não aparecem de modo explícito no texto para construção de sentidos." },
        { codigo: "EF08LI06", descricao: "Apreciar textos narrativos em língua inglesa (contos, romances, entre outros, em versão original ou simplificada), como forma de valorizar o patrimônio cultural produzido em língua inglesa." },
        { codigo: "EF08LI07", descricao: "Explorar ambientes virtuais e/ou aplicativos para acessar e usufruir do patrimônio artístico literário em língua inglesa." },
        { codigo: "EF08LI08", descricao: "Analisar, criticamente, o conteúdo de textos, comparando diferentes perspectivas apresentadas sobre um mesmo assunto." }
    ],
    [U3]: [
        { codigo: "EF08LI09", descricao: "Avaliar a própria produção escrita e a de colegas, com base no contexto de comunicação (finalidade e adequação ao público, conteúdo a ser comunicado, organização textual, legibilidade, estrutura de frases)." },
        { codigo: "EF08LI10", descricao: "Reconstruir o texto, com cortes, acréscimos, reformulações e correções, para aprimoramento, edição e publicação final." },
        { codigo: "EF08LI11", descricao: "Produzir textos (comentários em fóruns, relatos pessoais, mensagens instantâneas, tweets, reportagens, histórias de ficção, blogues, entre outros), com o uso de estratégias de escrita (planejamento, produção de rascunho, revisão e edição final), apontando sonhos e projetos para o futuro (pessoal, da família, da comunidade ou do planeta)." }
    ],
    [U4]: [
        { codigo: "EF08LI12", descricao: "Construir repertório lexical relativo a planos, previsões e expectativas para o futuro." },
        { codigo: "EF08LI13", descricao: "Reconhecer sufixos e prefixos comuns utilizados na formação de palavras em língua inglesa." },
        { codigo: "EF08LI14", descricao: "Utilizar formas verbais do futuro para descrever planos e expectativas e fazer previsões." },
        { codigo: "EF08LI15", descricao: "Utilizar, de modo inteligível, as formas comparativas e superlativas de adjetivos para comparar qualidades e quantidades." },
        { codigo: "EF08LI16", descricao: "Utilizar, de modo inteligível, corretamente, some, any, many, much." },
        { codigo: "EF08LI17", descricao: "Empregar, de modo inteligível, os pronomes relativos (who, which, that, whose) para construir períodos compostos por subordinação." }
    ],
    [U5]: [
        { codigo: "EF08LI18", descricao: "Construir repertório cultural por meio do contato com manifestações artístico-culturais vinculadas à língua inglesa (artes plásticas e visuais, literatura, música, cinema, dança, festividades, entre outros), valorizando a diversidade entre culturas." },
        { codigo: "EF08LI19", descricao: "Investigar de que forma expressões, gestos e comportamentos são interpretados em função de aspectos culturais." },
        { codigo: "EF08LI20", descricao: "Examinar fatores que podem impedir o entendimento entre pessoas de culturas diferentes que falam a língua inglesa." }
    ]
};

const H_9ANO = {
    [U1]: [
        { codigo: "EF09LI01", descricao: "Fazer uso da língua inglesa para expor pontos de vista, argumentos e contra-argumentos, considerando o contexto e os recursos linguísticos voltados para a eficácia da comunicação." },
        { codigo: "EF09LI02", descricao: "Compilar as ideias-chave de textos por meio de tomada de notas." },
        { codigo: "EF09LI03", descricao: "Analisar posicionamentos defendidos e refutados em textos orais sobre temas de interesse social e coletivo." },
        { codigo: "EF09LI04", descricao: "Expor resultados de pesquisa ou estudo com o apoio de recursos, tais como notas, gráficos, tabelas, entre outros, adequando as estratégias de construção do texto oral aos objetivos de comunicação e ao contexto." }
    ],
    [U2]: [
        { codigo: "EF09LI05", descricao: "Identificar recursos de persuasão (escolha e jogo de palavras, uso de cores e imagens, tamanho de letras), utilizados nos textos publicitários e de propaganda, como elementos de convencimento." },
        { codigo: "EF09LI06", descricao: "Distinguir fatos de opiniões em textos argumentativos da esfera jornalística." },
        { codigo: "EF09LI07", descricao: "Identificar argumentos principais e as evidências/exemplos que os sustentam." },
        { codigo: "EF09LI08", descricao: "Explorar ambientes virtuais de informação e socialização, analisando a qualidade e a validade das informações veiculadas." },
        { codigo: "EF09LI09", descricao: "Compartilhar, com os colegas, a leitura dos textos escritos pelo grupo, valorizando os diferentes pontos de vista defendidos, com ética e respeito." }
    ],
    [U3]: [
        { codigo: "EF09LI10", descricao: "Propor potenciais argumentos para expor e defender ponto de vista em texto escrito, refletindo sobre o tema proposto e pesquisando dados, evidências e exemplos para sustentar os argumentos, organizando-os em sequência lógica." },
        { codigo: "EF09LI11", descricao: "Utilizar recursos verbais e não verbais para construção da persuasão em textos da esfera publicitária, de forma adequada ao contexto de circulação (produção e compreensão)." },
        { codigo: "EF09LI12", descricao: "Produzir textos (infográficos, fóruns de discussão on-line, fotorreportagens, campanhas publicitárias, memes, entre outros) sobre temas de interesse coletivo local ou global, que revelem posicionamento crítico." }
    ],
    [U4]: [
        { codigo: "EF09LI13", descricao: "Reconhecer, nos novos gêneros digitais (blogues, mensagens instantâneas, tweets, entre outros), novas formas de escrita (abreviação de palavras, palavras com combinação de letras e números, pictogramas, símbolos gráficos, entre outros) na constituição das mensagens." },
        { codigo: "EF09LI14", descricao: "Utilizar conectores indicadores de adição, condição, oposição, contraste, conclusão e síntese como auxiliares na construção da argumentação e intencionalidade discursiva." },
        { codigo: "EF09LI15", descricao: "Empregar, de modo inteligível, as formas verbais em orações condicionais dos tipos 1 e 2 (If-clauses)." },
        { codigo: "EF09LI16", descricao: "Empregar, de modo inteligível, os verbos should, must, have to, may e might para indicar recomendação, necessidade ou obrigação e probabilidade." }
    ],
    [U5]: [
        { codigo: "EF09LI17", descricao: "Debater sobre a expansão da língua inglesa pelo mundo, em função do processo de colonização nas Américas, África, Ásia e Oceania." },
        { codigo: "EF09LI18", descricao: "Analisar a importância da língua inglesa para o desenvolvimento das ciências (produção, divulgação e discussão de novos conhecimentos), da economia e da política no cenário mundial." },
        { codigo: "EF09LI19", descricao: "Discutir a comunicação intercultural por meio da língua inglesa como mecanismo de valorização pessoal e de construção de identidades no mundo globalizado." }
    ]
};

// Todo objeto de conhecimento de um mesmo eixo, no mesmo ano,
// compartilha o MESMO conjunto de habilidades.
function habilidadesDoAno(objetosPorUnidade, habilidadesPorUnidade) {
    const resultado = {};
    Object.entries(objetosPorUnidade).forEach(([unidade, objetos]) => {
        const mapaObjetos = {};
        objetos.forEach(o => { mapaObjetos[o] = habilidadesPorUnidade[unidade]; });
        resultado[unidade] = mapaObjetos;
    });
    return resultado;
}

// === BANCO DE HABILIDADES COMPLETO DA BNCC - LÍNGUA INGLESA ===
export const habilidadesBNCC = {
    "6º Ano": habilidadesDoAno(OBJ_6ANO, H_6ANO),
    "7º Ano": habilidadesDoAno(OBJ_7ANO, H_7ANO),
    "8º Ano": habilidadesDoAno(OBJ_8ANO, H_8ANO),
    "9º Ano": habilidadesDoAno(OBJ_9ANO, H_9ANO)
};
