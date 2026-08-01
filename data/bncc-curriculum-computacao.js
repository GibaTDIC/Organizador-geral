// Prof GB — Dados fixos da BNCC Computação (complemento à BNCC oficial),
// Ensino Fundamental 1º-9º ano. Fonte: documento complementar de Computação
// (CIEB/MEC), seção "A Etapa do Ensino Fundamental" — texto das habilidades
// e nomes dos objetos de conhecimento são verbatim do documento (conferidos
// código a código e objeto a objeto em 2026-08).
//
// Estrutura igual à da BNCC principal: EIXO faz o papel de "unidade" no
// cascade do Planejamento (Unidade → Turma → Objeto de Conhecimento →
// Habilidade). Do 1º ao 5º ano são 3 eixos (Pensamento Computacional, Mundo
// Digital, Cultura Digital); do 6º ao 9º ano o documento acrescenta um 4º
// eixo, Programação. O documento também define códigos de "resumo por
// etapa" (EF15CO.., EF69CO..) que restatam palavra por palavra o mesmo
// conteúdo já coberto pelos códigos de ano individual — por isso não são
// usados aqui, evitando duplicar habilidades já cobertas pelo ano
// específico. Como o documento não separa visualmente qual habilidade
// pertence a qual objeto específico dentro de um eixo com múltiplos
// objetos, todos os objetos de um mesmo eixo (no mesmo ano) compartilham o
// conjunto completo de habilidades daquele eixo.

const U1 = "Pensamento Computacional";
const U2 = "Mundo Digital";
const U3 = "Cultura Digital";
const U4 = "Programação";

export const unidadesPorAno = {
    "1º Ano": [U1, U2, U3],
    "2º Ano": [U1, U2, U3],
    "3º Ano": [U1, U2, U3],
    "4º Ano": [U1, U2, U3],
    "5º Ano": [U1, U2, U3],
    "6º Ano": [U1, U4, U2, U3],
    "7º Ano": [U1, U4, U2, U3],
    "8º Ano": [U1, U4, U2, U3],
    "9º Ano": [U1, U4, U2, U3]
};

const OBJ_1ANO = {
    [U1]: ["Organização de objetos", "Conceituação de Algoritmos"],
    [U2]: ["Codificação da informação"],
    [U3]: ["Uso de artefatos computacionais", "Segurança e responsabilidade no uso de tecnologia computacional"]
};
const OBJ_2ANO = {
    [U1]: ["Modelagem de objetos", "Algoritmos com repetições simples"],
    [U2]: ["Instrução de máquina", "Hardware e software"],
    [U3]: ["Uso de artefatos computacionais", "Segurança e responsabilidade no uso de tecnologia computacional"]
};
const OBJ_3ANO = {
    [U1]: ["Lógica computacional", "Algoritmos com repetições condicionais simples", "Decomposição"],
    [U2]: ["Codificação da informação", "Interface física"],
    [U3]: ["Uso de tecnologias computacionais", "Segurança e responsabilidade no uso da tecnologia"]
};
const OBJ_4ANO = {
    [U1]: ["Matrizes e registros", "Algoritmos com repetições simples e aninhadas"],
    [U2]: ["Codificação da informação", "Uso de tecnologias computacionais"],
    [U3]: ["Segurança e responsabilidade no uso da tecnologia"]
};
const OBJ_5ANO = {
    [U1]: ["Listas e grafos", "Lógica computacional", "Algoritmos com seleção condicional"],
    [U2]: ["Arquitetura de computadores", "Armazenamento de dados", "Sistema operacional"],
    [U3]: ["Segurança e responsabilidade no uso da tecnologia", "Uso de tecnologias computacionais"]
};
const OBJ_6ANO = {
    [U1]: ["Decomposição", "Estratégias de solução de problemas/Generalização"],
    [U4]: ["Tipos de dados", "Linguagem de programação"],
    [U2]: ["Armazenamento e transmissão de dados/Fundamentos de transmissão de dados", "Gestão de dados"],
    [U3]: ["Segurança e responsabilidade no uso da tecnologia/Tecnologia digital e sociedade", "Uso de tecnologias computacionais/Tecnologia digital e sustentabilidade"]
};
const OBJ_7ANO = {
    [U1]: ["Propriedades de grafos", "Estratégias de solução de problemas/Reúso"],
    [U4]: ["Programação usando registros e matrizes/Análise de programas/Projetos com programação"],
    [U2]: ["Protocolos de comunicação em redes/Armazenamento e transmissão de dados/Fundamentos de segurança cibernética"],
    [U3]: ["Segurança e responsabilidade no uso da tecnologia/Cyberbullying", "Uso de tecnologias computacionais/Impactos da tecnologia digital/Produção digital"]
};
const OBJ_8ANO = {
    [U1]: [],
    [U4]: ["Programação com listas e recursão/Algoritmos clássicos/Projetos com programação"],
    [U2]: ["Sistemas distribuídos e internet/Fundamentos de sistemas distribuídos", "Internet"],
    [U3]: ["Redes sociais e segurança da informação/Segurança e responsabilidade no uso da tecnologia", "Segurança em ambientes virtuais", "Uso de tecnologias computacionais/Uso crítico das mídias digitais"]
};
const OBJ_9ANO = {
    [U1]: [],
    [U4]: ["Programação usando grafos e árvores/Projetos com programação/Autômatos e linguagens baseadas em eventos"],
    [U2]: ["Sistemas distribuídos e internet", "Segurança cibernética"],
    [U3]: ["Segurança e responsabilidade no uso da tecnologia/Tecnologia digital e sociedade", "Autoria em meio digital", "Uso de tecnologias computacionais/Qualidade da informação"]
};

export const especificacoesPorUnidade = {
    "1º Ano": OBJ_1ANO, "2º Ano": OBJ_2ANO, "3º Ano": OBJ_3ANO,
    "4º Ano": OBJ_4ANO, "5º Ano": OBJ_5ANO, "6º Ano": OBJ_6ANO,
    "7º Ano": OBJ_7ANO, "8º Ano": OBJ_8ANO, "9º Ano": OBJ_9ANO
};

const H_1ANO = {
    [U1]: [
        { codigo: "EF01CO01", descricao: "Organizar objetos físicos ou digitais considerando diferentes características para esta organização, explicitando semelhanças (padrões) e diferenças." },
        { codigo: "EF01CO02", descricao: "Identificar e seguir sequências de passos aplicados no dia a dia para resolver problemas." },
        { codigo: "EF01CO03", descricao: "Reorganizar e criar sequências de passos em meios físicos ou digitais, relacionando essas sequências à palavra 'Algoritmos'." }
    ],
    [U2]: [
        { codigo: "EF01CO04", descricao: "Reconhecer o que é a informação, que ela pode ser armazenada, transmitida como mensagem por diversos meios e descrita em várias linguagens." },
        { codigo: "EF01CO05", descricao: "Representar informação usando diferentes codificações." }
    ],
    [U3]: [
        { codigo: "EF01CO06", descricao: "Reconhecer e explorar artefatos computacionais voltados a atender necessidades pessoais ou coletivas." },
        { codigo: "EF01CO07", descricao: "Conhecer as possibilidades de uso seguro das tecnologias computacionais para proteção dos dados pessoais e para garantir a própria segurança." }
    ]
};

const H_2ANO = {
    [U1]: [
        { codigo: "EF02CO01", descricao: "Criar e comparar modelos (representações) de objetos, identificando padrões e atributos essenciais." },
        { codigo: "EF02CO02", descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, construídos como sequências com repetições simples (iterações definidas) com base em instruções preestabelecidas ou criadas, analisando como a precisão da instrução impacta na execução do algoritmo." }
    ],
    [U2]: [
        { codigo: "EF02CO03", descricao: "Identificar que máquinas diferentes executam conjuntos próprios de instruções e que podem ser usadas para definir algoritmos." },
        { codigo: "EF02CO04", descricao: "Diferenciar componentes físicos (hardware) e programas que fornecem as instruções (software) para o hardware." }
    ],
    [U3]: [
        { codigo: "EF02CO05", descricao: "Reconhecer as características e usos das tecnologias computacionais no cotidiano dentro e fora da escola." },
        { codigo: "EF02CO06", descricao: "Reconhecer os cuidados com a segurança no uso de dispositivos computacionais." }
    ]
};

const H_3ANO = {
    [U1]: [
        { codigo: "EF03CO01", descricao: "Associar os valores 'verdadeiro' e 'falso' a sentenças lógicas que dizem respeito a situações do dia a dia, fazendo uso de termos que indicam negação." },
        { codigo: "EF03CO02", descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples com condição (iterações indefinidas), para resolver problemas de forma independente e em colaboração." },
        { codigo: "EF03CO03", descricao: "Aplicar a estratégia de decomposição para resolver problemas complexos, dividindo esse problema em partes menores, resolvendo-as e combinando suas soluções." }
    ],
    [U2]: [
        { codigo: "EF03CO04", descricao: "Relacionar o conceito de informação com o de dado." },
        { codigo: "EF03CO05", descricao: "Compreender que dados são estruturados em formatos específicos dependendo da informação armazenada." },
        { codigo: "EF03CO06", descricao: "Reconhecer que, para um computador realizar tarefas, ele se comunica com o mundo exterior com o uso de interfaces físicas (dispositivos de entrada e saída)." }
    ],
    [U3]: [
        { codigo: "EF03CO07", descricao: "Utilizar diferentes navegadores e ferramentas de busca para pesquisar e acessar informações." },
        { codigo: "EF03CO08", descricao: "Usar ferramentas computacionais em situações didáticas para se expressar em diferentes formatos digitais." },
        { codigo: "EF03CO09", descricao: "Reconhecer o potencial impacto do compartilhamento de informações pessoais ou de seus pares em meio digital." }
    ]
};

const H_4ANO = {
    [U1]: [
        { codigo: "EF04CO01", descricao: "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de matrizes que estabelecem uma organização na qual cada componente está em uma posição definida por coordenadas, fazendo manipulações simples sobre estas representações." },
        { codigo: "EF04CO02", descricao: "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de registros que estabelecem uma organização na qual cada componente é identificado por um nome, fazendo manipulações sobre estas representações." },
        { codigo: "EF04CO03", descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências e repetições simples e aninhadas (iterações definidas e indefinidas), para resolver problemas de forma independente e em colaboração." }
    ],
    [U2]: [
        { codigo: "EF04CO04", descricao: "Entender que para guardar, manipular e transmitir dados deve-se codificá-los de alguma forma que seja compreendida pela máquina (formato digital)." },
        { codigo: "EF04CO05", descricao: "Codificar diferentes informações para representação em computador (binária, ASCII, atributos de pixel, como RGB etc.)." },
        { codigo: "EF04CO06", descricao: "Usar diferentes ferramentas computacionais para criação de conteúdo (textos, apresentações, vídeos etc.)." }
    ],
    [U3]: [
        { codigo: "EF04CO07", descricao: "Demonstrar postura ética nas atividades de coleta, transferência, guarda e uso de dados." },
        { codigo: "EF04CO08", descricao: "Reconhecer a importância de verificar a confiabilidade das fontes de informações obtidas na Internet." }
    ]
};

const H_5ANO = {
    [U1]: [
        { codigo: "EF05CO01", descricao: "Reconhecer objetos do mundo real e/ou digital que podem ser representados através de listas que estabelecem uma organização na qual há um número variável de itens dispostos em sequência, fazendo manipulações simples sobre estas representações." },
        { codigo: "EF05CO02", descricao: "Reconhecer objetos do mundo real e digital que podem ser representados através de grafos que estabelecem uma organização com uma quantidade variável de vértices conectados por arestas, fazendo manipulações simples sobre estas representações." },
        { codigo: "EF05CO03", descricao: "Realizar operações de negação, conjunção e disjunção sobre sentenças lógicas e valores 'verdadeiro' e 'falso'." },
        { codigo: "EF05CO04", descricao: "Criar e simular algoritmos representados em linguagem oral, escrita ou pictográfica, que incluam sequências, repetições e seleções condicionais para resolver problemas de forma independente e em colaboração." }
    ],
    [U2]: [
        { codigo: "EF05CO05", descricao: "Identificar os componentes principais de um computador (dispositivos de entrada/saída, processadores e armazenamento)." },
        { codigo: "EF05CO06", descricao: "Reconhecer que os dados podem ser armazenados em um dispositivo local ou remoto." },
        { codigo: "EF05CO07", descricao: "Reconhecer a necessidade de um sistema operacional para a execução de programas e gerenciamento do hardware." }
    ],
    [U3]: [
        { codigo: "EF05CO08", descricao: "Acessar as informações na Internet de forma crítica para distinguir os conteúdos confiáveis de não confiáveis." },
        { codigo: "EF05CO09", descricao: "Usar informações considerando aplicações e limites dos direitos autorais em diferentes mídias digitais." },
        { codigo: "EF05CO10", descricao: "Expressar-se crítica e criativamente na compreensão das mudanças tecnológicas no mundo do trabalho e sobre a evolução da sociedade." },
        { codigo: "EF05CO11", descricao: "Identificar a adequação de diferentes tecnologias computacionais na resolução de problemas." }
    ]
};

const H_6ANO = {
    [U1]: [
        { codigo: "EF06CO04", descricao: "Construir soluções de problemas usando a técnica de decomposição e automatizar tais soluções usando uma linguagem de programação." },
        { codigo: "EF06CO05", descricao: "Identificar os recursos ou insumos necessários (entradas) para a resolução de problemas, bem como os resultados esperados (saídas), determinando os respectivos tipos de dados, e estabelecendo a definição de problema como uma relação entre entrada e saída." },
        { codigo: "EF06CO06", descricao: "Comparar diferentes casos particulares (instâncias) de um mesmo problema, identificando as semelhanças e diferenças entre eles, e criar um algoritmo para resolver todos, fazendo uso de variáveis (parâmetros) para permitir o tratamento de todos os casos de forma genérica." }
    ],
    [U4]: [
        { codigo: "EF06CO01", descricao: "Classificar informações, agrupando-as em coleções (conjuntos) e associando cada coleção a um 'tipo de dados'." },
        { codigo: "EF06CO02", descricao: "Elaborar algoritmos que envolvam instruções sequenciais, de repetição e de seleção usando uma linguagem de programação." },
        { codigo: "EF06CO03", descricao: "Descrever com precisão a solução de um problema, construindo o programa que implementa a solução descrita." }
    ],
    [U2]: [
        { codigo: "EF06CO07", descricao: "Entender o processo de transmissão de dados, como a informação é quebrada em pedaços, transmitida em pacotes através de múltiplos equipamentos, e reconstruída no destino." },
        { codigo: "EF06CO08", descricao: "Compreender e utilizar diferentes formas de armazenar, manipular, compactar e recuperar arquivos, documentos e metadados." }
    ],
    [U3]: [
        { codigo: "EF06CO09", descricao: "Apresentar conduta e linguagem apropriadas ao se comunicar em ambiente digital, considerando a ética e o respeito." },
        { codigo: "EF06CO10", descricao: "Analisar o consumo de tecnologia na sociedade, compreendendo criticamente o caminho da produção dos recursos bem como aspectos ligados à obsolescência e a sustentabilidade." }
    ]
};

const H_7ANO = {
    [U1]: [
        { codigo: "EF07CO04", descricao: "Explorar propriedades básicas de grafos." },
        { codigo: "EF07CO05", descricao: "Criar algoritmos fazendo uso da decomposição e do reúso no processo de solução de forma colaborativa e cooperativa e automatizá-los usando uma linguagem de programação." }
    ],
    [U4]: [
        { codigo: "EF07CO01", descricao: "Criar soluções de problemas para os quais seja adequado o uso de registros e matrizes unidimensionais para descrever suas informações e automatizá-las usando uma linguagem de programação." },
        { codigo: "EF07CO02", descricao: "Analisar programas para detectar e remover erros, ampliando a confiança na sua correção." },
        { codigo: "EF07CO03", descricao: "Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares." }
    ],
    [U2]: [
        { codigo: "EF07CO06", descricao: "Compreender o papel de protocolos para a transmissão de dados." },
        { codigo: "EF07CO07", descricao: "Identificar problemas de segurança cibernética e experimentar formas de proteção." }
    ],
    [U3]: [
        { codigo: "EF07CO08", descricao: "Demonstrar empatia sobre opiniões divergentes na web." },
        { codigo: "EF07CO09", descricao: "Reconhecer e debater sobre cyberbullying." },
        { codigo: "EF07CO10", descricao: "Identificar os impactos ambientais do descarte de peças de computadores e eletrônicos, bem como sua relação com a sustentabilidade." },
        { codigo: "EF07CO11", descricao: "Criar, documentar e publicar, de forma individual ou colaborativa, produtos (vídeos, podcasts, web sites) usando recursos de tecnologia." }
    ]
};

const H_8ANO = {
    [U1]: [],
    [U4]: [
        { codigo: "EF08CO01", descricao: "Construir soluções de problemas usando a técnica de recursão e automatizar tais soluções usando uma linguagem de programação." },
        { codigo: "EF08CO02", descricao: "Criar soluções de problemas para os quais seja adequado o uso de listas para descrever suas informações e automatizá-las usando uma linguagem de programação, empregando ou não a recursão como uma técnica de resolver o problema." },
        { codigo: "EF08CO03", descricao: "Utilizar algoritmos clássicos de manipulação sobre listas." },
        { codigo: "EF08CO04", descricao: "Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares." }
    ],
    [U2]: [
        { codigo: "EF08CO05", descricao: "Compreender os conceitos de paralelismo, concorrência e armazenamento/processamento distribuídos." },
        { codigo: "EF08CO06", descricao: "Entender como é a estrutura e funcionamento da internet." }
    ],
    [U3]: [
        { codigo: "EF08CO07", descricao: "Compartilhar informações por meio de redes sociais, compreendendo a sua dinâmica de funcionamento, de forma responsável e avaliando sua confiabilidade, considerando o respeito e a ética." },
        { codigo: "EF08CO08", descricao: "Distinguir os tipos de dados pessoais que são solicitados em espaços digitais e os riscos associados." },
        { codigo: "EF08CO09", descricao: "Analisar criticamente as políticas de termos de uso das redes sociais e demais plataformas." },
        { codigo: "EF08CO10", descricao: "Discutir questões sobre segurança e privacidade relacionadas ao uso dos ambientes virtuais." },
        { codigo: "EF08CO11", descricao: "Avaliar a precisão, relevância, adequação, abrangência e vieses que ocorrem em fontes de informação eletrônica." }
    ]
};

const H_9ANO = {
    [U1]: [],
    [U4]: [
        { codigo: "EF09CO01", descricao: "Criar soluções de problemas para os quais seja adequado o uso de árvores e grafos para descrever suas informações e automatizá-las usando uma linguagem de programação." },
        { codigo: "EF09CO02", descricao: "Construir soluções computacionais de problemas de diferentes áreas do conhecimento, de forma individual e colaborativa, selecionando as estruturas de dados e técnicas adequadas, aperfeiçoando e articulando saberes escolares." },
        { codigo: "EF09CO03", descricao: "Usar autômatos para descrever comportamentos de forma abstrata automatizando-os através de uma linguagem de programação baseada em eventos." }
    ],
    [U2]: [
        { codigo: "EF09CO04", descricao: "Compreender o funcionamento de malwares e outros ataques cibernéticos." },
        { codigo: "EF09CO05", descricao: "Analisar técnicas de criptografia para armazenamento e transmissão de dados." }
    ],
    [U3]: [
        { codigo: "EF09CO06", descricao: "Analisar problemas sociais de sua cidade e estado a partir de ambientes digitais, propondo soluções." },
        { codigo: "EF09CO07", descricao: "Avaliar aplicações e implicações políticas, socioambientais e culturais das tecnologias digitais para propor alternativas aos desafios do mundo contemporâneo, incluindo aqueles relativos ao mundo do trabalho." },
        { codigo: "EF09CO08", descricao: "Discutir como a distribuição desigual de recursos de computação em uma economia global levanta questões de equidade, acesso e poder." },
        { codigo: "EF09CO09", descricao: "Criar ou utilizar conteúdo em meio digital, compreendendo questões éticas relacionadas a direitos autorais e de uso de imagem." },
        { codigo: "EF09CO10", descricao: "Avaliar a veracidade, credibilidade e relevância da informação em seus diferentes formatos, sendo capaz de identificar o propósito pelo qual foi disseminada." }
    ]
};

// Todo objeto de conhecimento de um mesmo eixo, no mesmo ano,
// compartilha o MESMO conjunto de habilidades daquele eixo. Eixos sem
// nenhum objeto de conhecimento próprio (ex.: 8º/9º Ano "Pensamento
// Computacional", cujas habilidades foram todas reclassificadas para o
// eixo Programação) não entram no resultado.
function habilidadesDoAno(objetosPorUnidade, habilidadesPorUnidade) {
    const resultado = {};
    Object.entries(objetosPorUnidade).forEach(([unidade, objetos]) => {
        const habilidades = habilidadesPorUnidade[unidade] || [];
        if (objetos.length === 0 || habilidades.length === 0) return;
        const mapaObjetos = {};
        objetos.forEach(o => { mapaObjetos[o] = habilidades; });
        resultado[unidade] = mapaObjetos;
    });
    return resultado;
}

// === BANCO DE HABILIDADES COMPLETO DA BNCC COMPUTAÇÃO ===
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

// Ajusta unidadesPorAno pra remover eixos que, na prática, ficaram sem
// nenhum objeto de conhecimento próprio naquele ano (ver comentário acima).
Object.keys(unidadesPorAno).forEach(turma => {
    unidadesPorAno[turma] = unidadesPorAno[turma].filter(u => habilidadesBNCC[turma][u]);
});
