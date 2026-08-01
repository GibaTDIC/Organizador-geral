// Prof GB — Dados fixos da BNCC (Geografia), Ensino Fundamental 1º-9º ano.
// Fonte: BNCC (MEC, versão final), seção 4.4.1 Geografia — texto das
// habilidades e nomes dos objetos de conhecimento são verbatim do documento
// oficial (conferidos código a código e objeto a objeto contra o PDF em 2026-08).
//
// Como Ciências, a BNCC define Geografia ANO A ANO. As 5 unidades temáticas
// (O sujeito e seu lugar no mundo, Conexões e escalas, Mundo do trabalho,
// Formas de representação e pensamento espacial, Natureza, ambientes e
// qualidade de vida) são as MESMAS em todos os anos — só os objetos de
// conhecimento e as habilidades mudam ano a ano.
//
// O documento não separa visualmente, dentro de uma unidade com múltiplos
// objetos, qual habilidade pertence a qual objeto específico — só a ordem
// unidade a unidade é clara. Por isso, como em Ensino Religioso, todos os
// objetos de uma mesma unidade (no mesmo ano) compartilham o conjunto
// completo de habilidades daquela unidade nesse ano.

const U1 = "O sujeito e seu lugar no mundo";
const U2 = "Conexões e escalas";
const U3 = "Mundo do trabalho";
const U4 = "Formas de representação e pensamento espacial";
const U5 = "Natureza, ambientes e qualidade de vida";

export const unidadesPorAno = {
    "1º Ano": [U1, U2, U3, U4, U5],
    "2º Ano": [U1, U2, U3, U4, U5],
    "3º Ano": [U1, U2, U3, U4, U5],
    "4º Ano": [U1, U2, U3, U4, U5],
    "5º Ano": [U1, U2, U3, U4, U5],
    "6º Ano": [U1, U2, U3, U4, U5],
    "7º Ano": [U1, U2, U3, U4, U5],
    "8º Ano": [U1, U2, U3, U4, U5],
    "9º Ano": [U1, U2, U3, U4, U5]
};

const OBJ_1ANO = {
    [U1]: ["O modo de vida das crianças em diferentes lugares", "Situações de convívio em diferentes lugares"],
    [U2]: ["Ciclos naturais e a vida cotidiana"],
    [U3]: ["Diferentes tipos de trabalho existentes no seu dia a dia"],
    [U4]: ["Pontos de referência"],
    [U5]: ["Condições de vida nos lugares de vivência"]
};
const OBJ_2ANO = {
    [U1]: ["Convivência e interações entre pessoas na comunidade"],
    [U2]: ["Riscos e cuidados nos meios de transporte e de comunicação"],
    [U3]: ["Experiências da comunidade no tempo e no espaço", "Mudanças e permanências", "Tipos de trabalho em lugares e tempos diferentes"],
    [U4]: ["Localização, orientação e representação espacial"],
    [U5]: ["Os usos dos recursos naturais: solo e água no campo e na cidade"]
};
const OBJ_3ANO = {
    [U1]: ["A cidade e o campo: aproximações e diferenças"],
    [U2]: ["Paisagens naturais e antrópicas em transformação"],
    [U3]: ["Matéria-prima e indústria"],
    [U4]: ["Representações cartográficas"],
    [U5]: ["Produção, circulação e consumo", "Impactos das atividades humanas"]
};
const OBJ_4ANO = {
    [U1]: ["Território e diversidade cultural"],
    [U2]: ["Processos migratórios no Brasil", "Instâncias do poder público e canais de participação social", "Relação campo e cidade", "Unidades político-administrativas do Brasil", "Territórios étnico-culturais"],
    [U3]: ["Trabalho no campo e na cidade", "Produção, circulação e consumo"],
    [U4]: ["Sistema de orientação", "Elementos constitutivos dos mapas"],
    [U5]: ["Conservação e degradação da natureza"]
};
const OBJ_5ANO = {
    [U1]: ["Dinâmica populacional"],
    [U2]: ["Diferenças étnico-raciais e étnico-culturais e desigualdades sociais", "Território, redes e urbanização"],
    [U3]: ["Trabalho e inovação tecnológica"],
    [U4]: ["Mapas e imagens de satélite", "Representação das cidades e do espaço urbano"],
    [U5]: ["Qualidade ambiental", "Diferentes tipos de poluição", "Gestão pública da qualidade de vida"]
};
const OBJ_6ANO = {
    [U1]: ["Identidade sociocultural"],
    [U2]: ["Relações entre os componentes físico-naturais"],
    [U3]: ["Transformação das paisagens naturais e antrópicas"],
    [U4]: ["Fenômenos naturais e sociais representados de diferentes maneiras"],
    [U5]: ["Biodiversidade e ciclo hidrológico", "Atividades humanas e dinâmica climática"]
};
const OBJ_7ANO = {
    [U1]: ["Ideias e concepções sobre a formação territorial do Brasil"],
    [U2]: ["Formação territorial do Brasil"],
    [U3]: ["Características da população brasileira", "Produção, circulação e consumo de mercadorias", "Desigualdade social e o trabalho"],
    [U4]: ["Mapas temáticos do Brasil"],
    [U5]: ["Biodiversidade brasileira"]
};
const OBJ_8ANO = {
    [U1]: ["Distribuição da população mundial e deslocamentos populacionais", "Diversidade e dinâmica da população mundial e local"],
    [U2]: ["Corporações e organismos internacionais e do Brasil na ordem econômica mundial"],
    [U3]: ["Os diferentes contextos e os meios técnico e tecnológico na produção", "Transformações do espaço na sociedade urbano-industrial na América Latina"],
    [U4]: ["Cartografia: anamorfose, croquis e mapas temáticos da América e África"],
    [U5]: ["Identidades e interculturalidades regionais: Estados Unidos da América, América espanhola e portuguesa e África", "Diversidade ambiental e as transformações nas paisagens na América Latina"]
};
const OBJ_9ANO = {
    [U1]: ["A hegemonia europeia na economia, na política e na cultura", "Corporações e organismos internacionais", "As manifestações culturais na formação populacional"],
    [U2]: ["Integração mundial e suas interpretações: globalização e mundialização", "A divisão do mundo em Ocidente e Oriente", "Intercâmbios históricos e culturais entre Europa, Ásia e Oceania"],
    [U3]: ["Transformações do espaço na sociedade urbano-industrial", "Cadeias industriais e inovação no uso dos recursos naturais e matérias-primas"],
    [U4]: ["Leitura e elaboração de mapas temáticos, croquis e outras formas de representação para analisar informações geográficas"],
    [U5]: ["Diversidade ambiental e as transformações nas paisagens na Europa, na Ásia e na Oceania"]
};

export const especificacoesPorUnidade = {
    "1º Ano": OBJ_1ANO, "2º Ano": OBJ_2ANO, "3º Ano": OBJ_3ANO,
    "4º Ano": OBJ_4ANO, "5º Ano": OBJ_5ANO, "6º Ano": OBJ_6ANO,
    "7º Ano": OBJ_7ANO, "8º Ano": OBJ_8ANO, "9º Ano": OBJ_9ANO
};

// --- Habilidades por ano, agrupadas por unidade temática (na ordem em que
// aparecem no documento) ---

const H_1ANO = {
    [U1]: [
        { codigo: "EF01GE01", descricao: "Descrever características observadas de seus lugares de vivência (moradia, escola etc.) e identificar semelhanças e diferenças entre esses lugares." },
        { codigo: "EF01GE02", descricao: "Identificar semelhanças e diferenças entre jogos e brincadeiras de diferentes épocas e lugares." },
        { codigo: "EF01GE03", descricao: "Identificar e relatar semelhanças e diferenças de usos do espaço público (praças, parques) para o lazer e diferentes manifestações." },
        { codigo: "EF01GE04", descricao: "Discutir e elaborar, coletivamente, regras de convívio em diferentes espaços (sala de aula, escola etc.)." }
    ],
    [U2]: [
        { codigo: "EF01GE05", descricao: "Observar e descrever ritmos naturais (dia e noite, variação de temperatura e umidade etc.) em diferentes escalas espaciais e temporais, comparando a sua realidade com outras." }
    ],
    [U3]: [
        { codigo: "EF01GE06", descricao: "Descrever e comparar diferentes tipos de moradia ou objetos de uso cotidiano (brinquedos, roupas, mobiliários), considerando técnicas e materiais utilizados em sua produção." },
        { codigo: "EF01GE07", descricao: "Descrever atividades de trabalho relacionadas com o dia a dia da sua comunidade." }
    ],
    [U4]: [
        { codigo: "EF01GE08", descricao: "Criar mapas mentais e desenhos com base em itinerários, contos literários, histórias inventadas e brincadeiras." },
        { codigo: "EF01GE09", descricao: "Elaborar e utilizar mapas simples para localizar elementos do local de vivência, considerando referenciais espaciais (frente e atrás, esquerda e direita, em cima e embaixo, dentro e fora) e tendo o corpo como referência." }
    ],
    [U5]: [
        { codigo: "EF01GE10", descricao: "Descrever características de seus lugares de vivência relacionadas aos ritmos da natureza (chuva, vento, calor etc.)." },
        { codigo: "EF01GE11", descricao: "Associar mudanças de vestuário e hábitos alimentares em sua comunidade ao longo do ano, decorrentes da variação de temperatura e umidade no ambiente." }
    ]
};

const H_2ANO = {
    [U1]: [
        { codigo: "EF02GE01", descricao: "Descrever a história das migrações no bairro ou comunidade em que vive." },
        { codigo: "EF02GE02", descricao: "Comparar costumes e tradições de diferentes populações inseridas no bairro ou comunidade em que vive, reconhecendo a importância do respeito às diferenças." }
    ],
    [U2]: [
        { codigo: "EF02GE03", descricao: "Comparar diferentes meios de transporte e de comunicação, indicando o seu papel na conexão entre lugares, e discutir os riscos para a vida e para o ambiente e seu uso responsável." }
    ],
    [U3]: [
        { codigo: "EF02GE04", descricao: "Reconhecer semelhanças e diferenças nos hábitos, nas relações com a natureza e no modo de viver de pessoas em diferentes lugares." },
        { codigo: "EF02GE05", descricao: "Analisar mudanças e permanências, comparando imagens de um mesmo lugar em diferentes tempos." },
        { codigo: "EF02GE06", descricao: "Relacionar o dia e a noite a diferentes tipos de atividades sociais (horário escolar, comercial, sono etc.)." },
        { codigo: "EF02GE07", descricao: "Descrever as atividades extrativas (minerais, agropecuárias e industriais) de diferentes lugares, identificando os impactos ambientais." }
    ],
    [U4]: [
        { codigo: "EF02GE08", descricao: "Identificar e elaborar diferentes formas de representação (desenhos, mapas mentais, maquetes) para representar componentes da paisagem dos lugares de vivência." },
        { codigo: "EF02GE09", descricao: "Identificar objetos e lugares de vivência (escola e moradia) em imagens aéreas e mapas (visão vertical) e fotografias (visão oblíqua)." },
        { codigo: "EF02GE10", descricao: "Aplicar princípios de localização e posição de objetos (referenciais espaciais, como frente e atrás, esquerda e direita, em cima e embaixo, dentro e fora) por meio de representações espaciais da sala de aula e da escola." }
    ],
    [U5]: [
        { codigo: "EF02GE11", descricao: "Reconhecer a importância do solo e da água para a vida, identificando seus diferentes usos (plantação e extração de materiais, entre outras possibilidades) e os impactos desses usos no cotidiano da cidade e do campo." }
    ]
};

const H_3ANO = {
    [U1]: [
        { codigo: "EF03GE01", descricao: "Identificar e comparar aspectos culturais dos grupos sociais de seus lugares de vivência, seja na cidade, seja no campo." },
        { codigo: "EF03GE02", descricao: "Identificar, em seus lugares de vivência, marcas de contribuição cultural e econômica de grupos de diferentes origens." },
        { codigo: "EF03GE03", descricao: "Reconhecer os diferentes modos de vida de povos e comunidades tradicionais em distintos lugares." }
    ],
    [U2]: [
        { codigo: "EF03GE04", descricao: "Explicar como os processos naturais e históricos atuam na produção e na mudança das paisagens naturais e antrópicas nos seus lugares de vivência, comparando-os a outros lugares." }
    ],
    [U3]: [
        { codigo: "EF03GE05", descricao: "Identificar alimentos, minerais e outros produtos cultivados e extraídos da natureza, comparando as atividades de trabalho em diferentes lugares." }
    ],
    [U4]: [
        { codigo: "EF03GE06", descricao: "Identificar e interpretar imagens bidimensionais e tridimensionais em diferentes tipos de representação cartográfica." },
        { codigo: "EF03GE07", descricao: "Reconhecer e elaborar legendas com símbolos de diversos tipos de representações em diferentes escalas cartográficas." }
    ],
    [U5]: [
        { codigo: "EF03GE08", descricao: "Relacionar a produção de lixo doméstico ou da escola aos problemas causados pelo consumo excessivo e construir propostas para o consumo consciente, considerando a ampliação de hábitos de redução, reúso e reciclagem/descarte de materiais consumidos em casa, na escola e/ou no entorno." },
        { codigo: "EF03GE09", descricao: "Investigar os usos dos recursos naturais, com destaque para os usos da água em atividades cotidianas (alimentação, higiene, cultivo de plantas etc.), e discutir os problemas ambientais provocados por esses usos." },
        { codigo: "EF03GE10", descricao: "Identificar os cuidados necessários para utilização da água na agricultura e na geração de energia de modo a garantir a manutenção do provimento de água potável." },
        { codigo: "EF03GE11", descricao: "Comparar impactos das atividades econômicas urbanas e rurais sobre o ambiente físico natural, assim como os riscos provenientes do uso de ferramentas e máquinas." }
    ]
};

const H_4ANO = {
    [U1]: [
        { codigo: "EF04GE01", descricao: "Selecionar, em seus lugares de vivência e em suas histórias familiares e/ou da comunidade, elementos de distintas culturas (indígenas, afro-brasileiras, de outras regiões do país, latino-americanas, europeias, asiáticas etc.), valorizando o que é próprio em cada uma delas e sua contribuição para a formação da cultura local, regional e brasileira." }
    ],
    [U2]: [
        { codigo: "EF04GE02", descricao: "Descrever processos migratórios e suas contribuições para a formação da sociedade brasileira." },
        { codigo: "EF04GE03", descricao: "Distinguir funções e papéis dos órgãos do poder público municipal e canais de participação social na gestão do Município, incluindo a Câmara de Vereadores e Conselhos Municipais." },
        { codigo: "EF04GE04", descricao: "Reconhecer especificidades e analisar a interdependência do campo e da cidade, considerando fluxos econômicos, de informações, de ideias e de pessoas." },
        { codigo: "EF04GE05", descricao: "Distinguir unidades político-administrativas oficiais nacionais (Distrito, Município, Unidade da Federação e grande região), suas fronteiras e sua hierarquia, localizando seus lugares de vivência." },
        { codigo: "EF04GE06", descricao: "Identificar e descrever territórios étnico-culturais existentes no Brasil, tais como terras indígenas e de comunidades remanescentes de quilombos, reconhecendo a legitimidade da demarcação desses territórios." }
    ],
    [U3]: [
        { codigo: "EF04GE07", descricao: "Comparar as características do trabalho no campo e na cidade." },
        { codigo: "EF04GE08", descricao: "Descrever e discutir o processo de produção (transformação de matérias-primas), circulação e consumo de diferentes produtos." }
    ],
    [U4]: [
        { codigo: "EF04GE09", descricao: "Utilizar as direções cardeais na localização de componentes físicos e humanos nas paisagens rurais e urbanas." },
        { codigo: "EF04GE10", descricao: "Comparar tipos variados de mapas, identificando suas características, elaboradores, finalidades, diferenças e semelhanças." }
    ],
    [U5]: [
        { codigo: "EF04GE11", descricao: "Identificar as características das paisagens naturais e antrópicas (relevo, cobertura vegetal, rios etc.) no ambiente em que vive, bem como a ação humana na conservação ou degradação dessas áreas." }
    ]
};

const H_5ANO = {
    [U1]: [
        { codigo: "EF05GE01", descricao: "Descrever e analisar dinâmicas populacionais na Unidade da Federação em que vive, estabelecendo relações entre migrações e condições de infraestrutura." }
    ],
    [U2]: [
        { codigo: "EF05GE02", descricao: "Identificar diferenças étnico-raciais e étnico-culturais e desigualdades sociais entre grupos em diferentes territórios." },
        { codigo: "EF05GE03", descricao: "Identificar as formas e funções das cidades e analisar as mudanças sociais, econômicas e ambientais provocadas pelo seu crescimento." },
        { codigo: "EF05GE04", descricao: "Reconhecer as características da cidade e analisar as interações entre a cidade e o campo e entre cidades na rede urbana." }
    ],
    [U3]: [
        { codigo: "EF05GE05", descricao: "Identificar e comparar as mudanças dos tipos de trabalho e desenvolvimento tecnológico na agropecuária, na indústria, no comércio e nos serviços." },
        { codigo: "EF05GE06", descricao: "Identificar e comparar transformações dos meios de transporte e de comunicação." },
        { codigo: "EF05GE07", descricao: "Identificar os diferentes tipos de energia utilizados na produção industrial, agrícola e extrativa e no cotidiano das populações." }
    ],
    [U4]: [
        { codigo: "EF05GE08", descricao: "Analisar transformações de paisagens nas cidades, comparando sequência de fotografias, fotografias aéreas e imagens de satélite de épocas diferentes." },
        { codigo: "EF05GE09", descricao: "Estabelecer conexões e hierarquias entre diferentes cidades, utilizando mapas temáticos e representações gráficas." }
    ],
    [U5]: [
        { codigo: "EF05GE10", descricao: "Reconhecer e comparar atributos da qualidade ambiental e algumas formas de poluição dos cursos de água e dos oceanos (esgotos, efluentes industriais, marés negras etc.)." },
        { codigo: "EF05GE11", descricao: "Identificar e descrever problemas ambientais que ocorrem no entorno da escola e da residência (lixões, indústrias poluentes, destruição do patrimônio histórico etc.), propondo soluções (inclusive tecnológicas) para esses problemas." },
        { codigo: "EF05GE12", descricao: "Identificar órgãos do poder público e canais de participação social responsáveis por buscar soluções para a melhoria da qualidade de vida (em áreas como meio ambiente, mobilidade, moradia e direito à cidade) e discutir as propostas implementadas por esses órgãos que afetam a comunidade em que vive." }
    ]
};

const H_6ANO = {
    [U1]: [
        { codigo: "EF06GE01", descricao: "Comparar modificações das paisagens nos lugares de vivência e os usos desses lugares em diferentes tempos." },
        { codigo: "EF06GE02", descricao: "Analisar modificações de paisagens por diferentes tipos de sociedade, com destaque para os povos originários." }
    ],
    [U2]: [
        { codigo: "EF06GE03", descricao: "Descrever os movimentos do planeta e sua relação com a circulação geral da atmosfera, o tempo atmosférico e os padrões climáticos." },
        { codigo: "EF06GE04", descricao: "Descrever o ciclo da água, comparando o escoamento superficial no ambiente urbano e rural, reconhecendo os principais componentes da morfologia das bacias e das redes hidrográficas e a sua localização no modelado da superfície terrestre e da cobertura vegetal." },
        { codigo: "EF06GE05", descricao: "Relacionar padrões climáticos, tipos de solo, relevo e formações vegetais." }
    ],
    [U3]: [
        { codigo: "EF06GE06", descricao: "Identificar as características das paisagens transformadas pelo trabalho humano a partir do desenvolvimento da agropecuária e do processo de industrialização." },
        { codigo: "EF06GE07", descricao: "Explicar as mudanças na interação humana com a natureza a partir do surgimento das cidades." }
    ],
    [U4]: [
        { codigo: "EF06GE08", descricao: "Medir distâncias na superfície pelas escalas gráficas e numéricas dos mapas." },
        { codigo: "EF06GE09", descricao: "Elaborar modelos tridimensionais, blocos-diagramas e perfis topográficos e de vegetação, visando à representação de elementos e estruturas da superfície terrestre." }
    ],
    [U5]: [
        { codigo: "EF06GE10", descricao: "Explicar as diferentes formas de uso do solo (rotação de terras, terraceamento, aterros etc.) e de apropriação dos recursos hídricos (sistema de irrigação, tratamento e redes de distribuição), bem como suas vantagens e desvantagens em diferentes épocas e lugares." },
        { codigo: "EF06GE11", descricao: "Analisar distintas interações das sociedades com a natureza, com base na distribuição dos componentes físico-naturais, incluindo as transformações da biodiversidade local e do mundo." },
        { codigo: "EF06GE12", descricao: "Identificar o consumo dos recursos hídricos e o uso das principais bacias hidrográficas no Brasil e no mundo, enfatizando as transformações nos ambientes urbanos." },
        { codigo: "EF06GE13", descricao: "Analisar consequências, vantagens e desvantagens das práticas humanas na dinâmica climática (ilha de calor etc.)." }
    ]
};

const H_7ANO = {
    [U1]: [
        { codigo: "EF07GE01", descricao: "Avaliar, por meio de exemplos extraídos dos meios de comunicação, ideias e estereótipos acerca das paisagens e da formação territorial do Brasil." }
    ],
    [U2]: [
        { codigo: "EF07GE02", descricao: "Analisar a influência dos fluxos econômicos e populacionais na formação socioeconômica e territorial do Brasil, compreendendo os conflitos e as tensões históricas e contemporâneas." },
        { codigo: "EF07GE03", descricao: "Selecionar argumentos que reconheçam as territorialidades dos povos indígenas originários, das comunidades remanescentes de quilombos, de povos das florestas e do cerrado, de ribeirinhos e caiçaras, entre outros grupos sociais do campo e da cidade, como direitos legais dessas comunidades." }
    ],
    [U3]: [
        { codigo: "EF07GE04", descricao: "Analisar a distribuição territorial da população brasileira, considerando a diversidade étnico-cultural (indígena, africana, europeia e asiática), assim como aspectos de renda, sexo e idade nas regiões brasileiras." },
        { codigo: "EF07GE05", descricao: "Analisar fatos e situações representativas das alterações ocorridas entre o período mercantilista e o advento do capitalismo." },
        { codigo: "EF07GE06", descricao: "Discutir em que medida a produção, a circulação e o consumo de mercadorias provocam impactos ambientais, assim como influem na distribuição de riquezas, em diferentes lugares." },
        { codigo: "EF07GE07", descricao: "Analisar a influência e o papel das redes de transporte e comunicação na configuração do território brasileiro." },
        { codigo: "EF07GE08", descricao: "Estabelecer relações entre os processos de industrialização e inovação tecnológica com as transformações socioeconômicas do território brasileiro." }
    ],
    [U4]: [
        { codigo: "EF07GE09", descricao: "Interpretar e elaborar mapas temáticos e históricos, inclusive utilizando tecnologias digitais, com informações demográficas e econômicas do Brasil (cartogramas), identificando padrões espaciais, regionalizações e analogias espaciais." },
        { codigo: "EF07GE10", descricao: "Elaborar e interpretar gráficos de barras, gráficos de setores e histogramas, com base em dados socioeconômicos das regiões brasileiras." }
    ],
    [U5]: [
        { codigo: "EF07GE11", descricao: "Caracterizar dinâmicas dos componentes físico-naturais no território nacional, bem como sua distribuição e biodiversidade (Florestas Tropicais, Cerrados, Caatingas, Campos Sulinos e Matas de Araucária)." },
        { codigo: "EF07GE12", descricao: "Comparar unidades de conservação existentes no Município de residência e em outras localidades brasileiras, com base na organização do Sistema Nacional de Unidades de Conservação (SNUC)." }
    ]
};

const H_8ANO = {
    [U1]: [
        { codigo: "EF08GE01", descricao: "Descrever as rotas de dispersão da população humana pelo planeta e os principais fluxos migratórios em diferentes períodos da história, discutindo os fatores históricos e condicionantes físico-naturais associados à distribuição da população humana pelos continentes." },
        { codigo: "EF08GE02", descricao: "Relacionar fatos e situações representativas da história das famílias do Município em que se localiza a escola, considerando a diversidade e os fluxos migratórios da população mundial." },
        { codigo: "EF08GE03", descricao: "Analisar aspectos representativos da dinâmica demográfica, considerando características da população (perfil etário, crescimento vegetativo e mobilidade espacial)." },
        { codigo: "EF08GE04", descricao: "Compreender os fluxos de migração na América Latina (movimentos voluntários e forçados, assim como fatores e áreas de expulsão e atração) e as principais políticas migratórias da região." }
    ],
    [U2]: [
        { codigo: "EF08GE05", descricao: "Aplicar os conceitos de Estado, nação, território, governo e país para o entendimento de conflitos e tensões na contemporaneidade, com destaque para as situações geopolíticas na América e na África e suas múltiplas regionalizações a partir do pós-guerra." },
        { codigo: "EF08GE06", descricao: "Analisar a atuação das organizações mundiais nos processos de integração cultural e econômica nos contextos americano e africano, reconhecendo, em seus lugares de vivência, marcas desses processos." },
        { codigo: "EF08GE07", descricao: "Analisar os impactos geoeconômicos, geoestratégicos e geopolíticos da ascensão dos Estados Unidos da América no cenário internacional em sua posição de liderança global e na relação com a China e o Brasil." },
        { codigo: "EF08GE08", descricao: "Analisar a situação do Brasil e de outros países da América Latina e da África, assim como da potência estadunidense na ordem mundial do pós-guerra." },
        { codigo: "EF08GE09", descricao: "Analisar os padrões econômicos mundiais de produção, distribuição e intercâmbio dos produtos agrícolas e industrializados, tendo como referência os Estados Unidos da América e os países denominados de Brics (Brasil, Rússia, Índia, China e África do Sul)." },
        { codigo: "EF08GE10", descricao: "Distinguir e analisar conflitos e ações dos movimentos sociais brasileiros, no campo e na cidade, comparando com outros movimentos sociais existentes nos países latino-americanos." },
        { codigo: "EF08GE11", descricao: "Analisar áreas de conflito e tensões nas regiões de fronteira do continente latino-americano e o papel de organismos internacionais e regionais de cooperação nesses cenários." },
        { codigo: "EF08GE12", descricao: "Compreender os objetivos e analisar a importância dos organismos de integração do território americano (Mercosul, OEA, OEI, Nafta, Unasul, Alba, Comunidade Andina, Aladi, entre outros)." }
    ],
    [U3]: [
        { codigo: "EF08GE13", descricao: "Analisar a influência do desenvolvimento científico e tecnológico na caracterização dos tipos de trabalho e na economia dos espaços urbanos e rurais da América e da África." },
        { codigo: "EF08GE14", descricao: "Analisar os processos de desconcentração, descentralização e recentralização das atividades econômicas a partir do capital estadunidense e chinês em diferentes regiões no mundo, com destaque para o Brasil." },
        { codigo: "EF08GE15", descricao: "Analisar a importância dos principais recursos hídricos da America Latina (Aquífero Guarani, Bacias do rio da Prata, do Amazonas e do Orinoco, sistemas de nuvens na Amazônia e nos Andes, entre outros) e discutir os desafios relacionados à gestão e comercialização da água." },
        { codigo: "EF08GE16", descricao: "Analisar as principais problemáticas comuns às grandes cidades latino-americanas, particularmente aquelas relacionadas à distribuição, estrutura e dinâmica da população e às condições de vida e trabalho." },
        { codigo: "EF08GE17", descricao: "Analisar a segregação socioespacial em ambientes urbanos da América Latina, com atenção especial ao estudo de favelas, alagados e zona de riscos." }
    ],
    [U4]: [
        { codigo: "EF08GE18", descricao: "Elaborar mapas ou outras formas de representação cartográfica para analisar as redes e as dinâmicas urbanas e rurais, ordenamento territorial, contextos culturais, modo de vida e usos e ocupação de solos da África e América." },
        { codigo: "EF08GE19", descricao: "Interpretar cartogramas, mapas esquemáticos (croquis) e anamorfoses geográficas com informações geográficas acerca da África e América." }
    ],
    [U5]: [
        { codigo: "EF08GE20", descricao: "Analisar características de países e grupos de países da América e da África no que se refere aos aspectos populacionais, urbanos, políticos e econômicos, e discutir as desigualdades sociais e econômicas e as pressões sobre a natureza e suas riquezas (sua apropriação e valoração na produção e circulação), o que resulta na espoliação desses povos." },
        { codigo: "EF08GE21", descricao: "Analisar o papel ambiental e territorial da Antártica no contexto geopolítico, sua relevância para os países da América do Sul e seu valor como área destinada à pesquisa e à compreensão do ambiente global." },
        { codigo: "EF08GE22", descricao: "Identificar os principais recursos naturais dos países da América Latina, analisando seu uso para a produção de matéria-prima e energia e sua relevância para a cooperação entre os países do Mercosul." },
        { codigo: "EF08GE23", descricao: "Identificar paisagens da América Latina e associá-las, por meio da cartografia, aos diferentes povos da região, com base em aspectos da geomorfologia, da biogeografia e da climatologia." },
        { codigo: "EF08GE24", descricao: "Analisar as principais características produtivas dos países latino-americanos (como exploração mineral na Venezuela; agricultura de alta especialização e exploração mineira no Chile; circuito da carne nos pampas argentinos e no Brasil; circuito da cana-de-açúcar em Cuba; polígono industrial do sudeste brasileiro e plantações de soja no centro-oeste; maquiladoras mexicanas, entre outros)." }
    ]
};

const H_9ANO = {
    [U1]: [
        { codigo: "EF09GE01", descricao: "Analisar criticamente de que forma a hegemonia europeia foi exercida em várias regiões do planeta, notadamente em situações de conflito, intervenções militares e/ou influência cultural em diferentes tempos e lugares." },
        { codigo: "EF09GE02", descricao: "Analisar a atuação das corporações internacionais e das organizações econômicas mundiais na vida da população em relação ao consumo, à cultura e à mobilidade." },
        { codigo: "EF09GE03", descricao: "Identificar diferentes manifestações culturais de minorias étnicas como forma de compreender a multiplicidade cultural na escala mundial, defendendo o princípio do respeito às diferenças." },
        { codigo: "EF09GE04", descricao: "Relacionar diferenças de paisagens aos modos de viver de diferentes povos na Europa, Ásia e Oceania, valorizando identidades e interculturalidades regionais." }
    ],
    [U2]: [
        { codigo: "EF09GE05", descricao: "Analisar fatos e situações para compreender a integração mundial (econômica, política e cultural), comparando as diferentes interpretações: globalização e mundialização." },
        { codigo: "EF09GE06", descricao: "Associar o critério de divisão do mundo em Ocidente e Oriente com o Sistema Colonial implantado pelas potências europeias." },
        { codigo: "EF09GE07", descricao: "Analisar os componentes físico-naturais da Eurásia e os determinantes histórico-geográficos de sua divisão em Europa e Ásia." },
        { codigo: "EF09GE08", descricao: "Analisar transformações territoriais, considerando o movimento de fronteiras, tensões, conflitos e múltiplas regionalidades na Europa, na Ásia e na Oceania." },
        { codigo: "EF09GE09", descricao: "Analisar características de países e grupos de países europeus, asiáticos e da Oceania em seus aspectos populacionais, urbanos, políticos e econômicos, e discutir suas desigualdades sociais e econômicas e pressões sobre seus ambientes físico-naturais." }
    ],
    [U3]: [
        { codigo: "EF09GE10", descricao: "Analisar os impactos do processo de industrialização na produção e circulação de produtos e culturas na Europa, na Ásia e na Oceania." },
        { codigo: "EF09GE11", descricao: "Relacionar as mudanças técnicas e científicas decorrentes do processo de industrialização com as transformações no trabalho em diferentes regiões do mundo e suas consequências no Brasil." },
        { codigo: "EF09GE12", descricao: "Relacionar o processo de urbanização às transformações da produção agropecuária, à expansão do desemprego estrutural e ao papel crescente do capital financeiro em diferentes países, com destaque para o Brasil." },
        { codigo: "EF09GE13", descricao: "Analisar a importância da produção agropecuária na sociedade urbano-industrial ante o problema da desigualdade mundial de acesso aos recursos alimentares e à matéria-prima." }
    ],
    [U4]: [
        { codigo: "EF09GE14", descricao: "Elaborar e interpretar gráficos de barras e de setores, mapas temáticos e esquemáticos (croquis) e anamorfoses geográficas para analisar, sintetizar e apresentar dados e informações sobre diversidade, diferenças e desigualdades sociopolíticas e geopolíticas mundiais." },
        { codigo: "EF09GE15", descricao: "Comparar e classificar diferentes regiões do mundo com base em informações populacionais, econômicas e socioambientais representadas em mapas temáticos e com diferentes projeções cartográficas." }
    ],
    [U5]: [
        { codigo: "EF09GE16", descricao: "Identificar e comparar diferentes domínios morfoclimáticos da Europa, da Ásia e da Oceania." },
        { codigo: "EF09GE17", descricao: "Explicar as características físico-naturais e a forma de ocupação e usos da terra em diferentes regiões da Europa, da Ásia e da Oceania." },
        { codigo: "EF09GE18", descricao: "Identificar e analisar as cadeias industriais e de inovação e as consequências dos usos de recursos naturais e das diferentes fontes de energia (tais como termoelétrica, hidrelétrica, eólica e nuclear) em diferentes países." }
    ]
};

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

// === BANCO DE HABILIDADES COMPLETO DA BNCC - GEOGRAFIA ===
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
