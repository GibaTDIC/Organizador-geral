// Prof GB — Dados fixos da BNCC (Matemática), Ensino Fundamental 1º-9º ano.
// Fonte: BNCC (MEC, versão final), seção 4.2.1 Matemática — texto das
// habilidades é extraído programaticamente do documento oficial e verificado
// verbatim (247/247 descrições batem, conferido em 2026-08). Os nomes dos
// objetos de conhecimento foram transcritos das tabelas oficiais.
//
// As 5 unidades temáticas (Números, Álgebra, Geometria, Grandezas e medidas,
// Probabilidade e estatística) são as MESMAS em todos os anos — só os objetos
// de conhecimento e as habilidades mudam ano a ano (padrão igual ao de
// Geografia). Como o documento não separa visualmente qual habilidade
// pertence a qual objeto específico dentro de uma unidade com múltiplos
// objetos, todos os objetos de uma mesma unidade (no mesmo ano) compartilham
// o conjunto completo de habilidades daquela unidade.

const U1 = "Números";
const U2 = "Álgebra";
const U3 = "Geometria";
const U4 = "Grandezas e medidas";
const U5 = "Probabilidade e estatística";

export const unidadesPorAno = {
    "1º Ano": [U1, U2, U3, U4, U5],
    "2º Ano": [U1, U2, U3, U4, U5],
    "3º Ano": [U1, U2, U3, U4, U5],
    "4º Ano": [U1, U2, U3, U4, U5],
    "5º Ano": [U1, U2, U3, U4, U5],
    "6º Ano": [U1, U2, U3, U4, U5],
    "7º Ano": [U1, U2, U3, U4, U5],
    "8º Ano": [U1, U2, U3, U4, U5],
    "9º Ano": [U1, U2, U3, U4, U5],
};

const OBJ_01 = {
    [U1]: ["Contagem de rotina", "Contagem ascendente e descendente", "Reconhecimento de números no contexto diário: indicação de quantidades, indicação de ordem ou indicação de código para a organização de informações", "Quantificação de elementos de uma coleção: estimativas, contagem um a um, pareamento ou outros agrupamentos e comparação"],
    [U2]: ["Leitura, escrita e comparação de números naturais (até 100)", "Reta numérica", "Construção de fatos básicos da adição", "Composição e decomposição de números naturais", "Problemas envolvendo diferentes significados da adição e da subtração (juntar, acrescentar, separar, retirar)", "Padrões figurais e numéricos: investigação de regularidades ou padrões em sequências", "Sequências recursivas: observação de regras usadas utilizadas em seriações numéricas (mais 1, mais 2, menos 1, menos 2, por exemplo)"],
    [U3]: ["Localização de objetos e de pessoas no espaço, utilizando diversos pontos de referência e vocabulário apropriado", "Figuras geométricas espaciais: reconhecimento e relações com objetos familiares do mundo físico", "Figuras geométricas planas: reconhecimento do formato das faces de figuras geométricas espaciais"],
    [U4]: ["Medidas de comprimento, massa e capacidade: comparações e unidades de medida não convencionais", "Medidas de tempo: unidades de medida de tempo, suas relações e o uso do calendário"],
    [U5]: ["Sistema monetário brasileiro: reconhecimento de cédulas e moedas", "Noção de acaso", "Leitura de tabelas e de gráficos de colunas simples", "Coleta e organização de informações", "Registros pessoais para comunicação de informações coletadas"],
};
const OBJ_02 = {
    [U1]: ["Leitura, escrita, comparação e ordenação de números de até três ordens pela compreensão de características do sistema de numeração decimal (valor posicional e papel do zero)"],
    [U2]: ["Composição e decomposição de números naturais (até 1000)", "Construção de fatos fundamentais da adição e da subtração", "Problemas envolvendo diferentes significados da adição e da subtração (juntar, acrescentar, separar, retirar)", "Problemas envolvendo adição de parcelas iguais (multiplicação)", "Problemas envolvendo significados de dobro, metade, triplo e terça parte", "Construção de sequências repetitivas e de sequências recursivas", "Identificação de regularidade de sequências e determinação de elementos ausentes na sequência"],
    [U3]: ["Localização e movimentação de pessoas e objetos no espaço, segundo pontos de referência, e indicação de mudanças de direção e sentido", "Esboço de roteiros e de plantas simples", "Figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera): reconhecimento e características", "Figuras geométricas planas (círculo, quadrado, retângulo e triângulo): reconhecimento e características"],
    [U4]: ["Medida de comprimento: unidades não padronizadas e padronizadas (metro, centímetro e milímetro)", "Medida de capacidade e de massa: unidades de medida não convencionais e convencionais (litro, mililitro, cm3, grama e quilograma)", "Medidas de tempo: intervalo de tempo, uso do calendário, leitura de horas em relógios digitais e ordenação de datas"],
    [U5]: ["Sistema monetário brasileiro: reconhecimento de cédulas e moedas e equivalência de valores", "Análise da ideia de aleatório em situações do cotidiano", "Coleta, classificação e representação de dados em tabelas simples e de dupla entrada e em gráficos de colunas"],
};
const OBJ_03 = {
    [U1]: ["Leitura, escrita, comparação e ordenação de números naturais de quatro ordens", "Composição e decomposição de números naturais", "Construção de fatos fundamentais da adição, subtração e multiplicação", "Reta numérica", "Procedimentos de cálculo (mental e escrito) com números naturais: adição e subtração", "Problemas envolvendo significados da adição e da subtração: juntar, acrescentar, separar, retirar, comparar e completar quantidades", "Problemas envolvendo diferentes significados da multiplicação e da divisão: adição de parcelas iguais, configuração retangular, repartição em partes iguais e medida"],
    [U2]: ["Significados de metade, terça parte, quarta parte, quinta parte e décima parte", "Identificação e descrição de regularidades em sequências numéricas recursivas", "Relação de igualdade"],
    [U3]: ["Localização e movimentação: representação de objetos e pontos de referência", "Figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera): reconhecimento, análise de características e planificações", "Figuras geométricas planas (triângulo, quadrado, retângulo, trapézio e paralelogramo): reconhecimento e análise de características", "Congruência de figuras geométricas planas"],
    [U4]: ["Significado de medida e de unidade de medida", "Medidas de comprimento (unidades não convencionais e convencionais): registro, instrumentos de medida, estimativas e comparações", "Medidas de capacidade e de massa (unidades não convencionais e convencionais): registro, estimativas e comparações", "Comparação de áreas por superposição", "Medidas de tempo: leitura de horas em relógios digitais e analógicos, duração de eventos e reconhecimento de relações entre unidades de medida de tempo", "Sistema monetário brasileiro: estabelecimento de equivalências de um mesmo valor na utilização de diferentes cédulas e moedas"],
    [U5]: ["Análise da ideia de acaso em situações do cotidiano: espaço amostral", "Leitura, interpretação e representação de dados em tabelas de dupla entrada e gráficos de barras", "Coleta, classificação e representação de dados referentes a variáveis categóricas, por meio de tabelas e gráficos"],
};
const OBJ_04 = {
    [U1]: ["Sistema de numeração decimal: leitura, escrita, comparação e ordenação de números naturais de até cinco ordens", "Composição e decomposição de um número natural de até cinco ordens, por meio de adições e multiplicações por potências de 10", "Propriedades das operações para o desenvolvimento de diferentes estratégias de cálculo com números naturais"],
    [U2]: ["Problemas envolvendo diferentes significados da multiplicação e da divisão: adição de parcelas iguais, configuração retangular, proporcionalidade, repartição equitativa e medida", "Problemas de contagem", "Números racionais: frações unitárias mais usuais (1/2, 1/3, 1/4, 1/5, 1/10 e 1/100)", "Números racionais: representação decimal para escrever valores do sistema monetário brasileiro", "Sequência numérica recursiva formada por múltiplos de um número natural", "Sequência numérica recursiva formada por números que deixam o mesmo resto ao ser divididos por um mesmo número natural diferente de zero", "Relações entre adição e subtração e entre multiplicação e divisão", "Propriedades da igualdade"],
    [U3]: ["Localização e movimentação: pontos de referência, direção e sentido", "Paralelismo e perpendicularismo", "Figuras geométricas espaciais (prismas e pirâmides): reconhecimento, representações, planificações e características", "Ângulos retos e não retos: uso de dobraduras, esquadros e softwares", "Simetria de reflexão"],
    [U4]: ["Medidas de comprimento, massa e capacidade: estimativas, utilização de instrumentos de medida e de unidades de medida convencionais mais usuais", "Áreas de figuras construídas em malhas quadriculadas", "Medidas de tempo: leitura de horas em relógios digitais e analógicos, duração de eventos e relações entre unidades de medida de tempo", "Medidas de temperatura em grau Celsius: construção de gráficos para indicar a variação da temperatura (mínima e máxima) medida em um dado dia ou em uma semana"],
    [U5]: ["Problemas utilizando o sistema monetário brasileiro", "Análise de chances de eventos aleatórios", "Leitura, interpretação e representação de dados em tabelas de dupla entrada, gráficos de colunas simples e agrupadas, gráficos de barras e colunas e gráficos pictóricos", "Diferenciação entre variáveis categóricas e variáveis numéricas", "Coleta, classificação e representação de dados de pesquisa realizada"],
};
const OBJ_05 = {
    [U1]: ["Sistema de numeração decimal: leitura, escrita e ordenação de números naturais (de até seis ordens)", "Números racionais expressos na forma decimal e sua representação na reta numérica", "Representação fracionária dos números racionais: reconhecimento, significados, leitura e representação na reta numérica", "Comparação e ordenação de números racionais na representação decimal e na fracionária utilizando a noção de equivalência", "Cálculo de porcentagens e representação fracionária"],
    [U2]: ["Problemas: adição e subtração de números naturais e números racionais cuja representação decimal é finita", "Problemas: multiplicação e divisão de números racionais cuja representação decimal é finita por números naturais", "Problemas de contagem do tipo: \"Se cada objeto de uma coleção A for combinado com todos os elementos de uma coleção B, quantos agrupamentos desse tipo podem ser formados?\"", "Propriedades da igualdade e noção de equivalência", "Grandezas diretamente proporcionais", "Problemas envolvendo a partição de um todo em duas partes proporcionais"],
    [U3]: ["Plano cartesiano: coordenadas cartesianas (1º quadrante) e representação de deslocamentos no plano cartesiano", "Figuras geométricas espaciais: reconhecimento, representações, planificações e características", "Figuras geométricas planas: características, representações e ângulos", "Ampliação e redução de figuras poligonais em malhas quadriculadas: reconhecimento da congruência dos ângulos e da proporcionalidade dos lados correspondentes"],
    [U4]: ["Medidas de comprimento, área, massa, tempo, temperatura e capacidade: utilização de unidades convencionais e relações entre as unidades de medida mais usuais", "Áreas e perímetros de figuras poligonais: algumas relações", "Noção de volume"],
    [U5]: ["Espaço amostral: análise de chances de eventos aleatórios", "Cálculo de probabilidade de eventos equiprováveis", "Leitura, coleta, classificação interpretação e representação de dados em tabelas de dupla entrada, gráfico de colunas agrupadas, gráficos pictóricos e gráfico de linhas"],
};
const OBJ_06 = {
    [U1]: ["Sistema de numeração decimal: características, leitura, escrita e comparação de números naturais e de números racionais representados na forma decimal", "Operações (adição, subtração, multiplicação, divisão e potenciação) com números naturais", "Divisão euclidiana", "Fluxograma para determinar a paridade de um número natural", "Múltiplos e divisores de um número natural", "Números primos e compostos", "Frações: significados (parte/todo, quociente), equivalência, comparação, adição e subtração; cálculo da fração de um número natural; adição e subtração de frações", "Operações (adição, subtração, multiplicação, divisão e potenciação) com números racionais", "Aproximação de números para múltiplos de potências de 10", "Cálculo de porcentagens por meio de estratégias diversas, sem fazer uso da \"regra de três\""],
    [U2]: ["Propriedades da igualdade"],
    [U3]: ["Problemas que tratam da partição de um todo em duas partes desiguais, envolvendo razões entre as partes e entre uma das partes e o todo", "Plano cartesiano: associação dos vértices de um polígono a pares ordenados", "Prismas e pirâmides: planificações e relações entre seus elementos (vértices, faces e arestas)", "Polígonos: classificações quanto ao número de vértices, às medidas de lados e ângulos e ao paralelismo e perpendicularismo dos lados"],
    [U4]: ["Construção de figuras semelhantes: ampliação e redução de figuras planas em malhas quadriculadas", "Construção de retas paralelas e perpendiculares, fazendo uso de réguas, esquadros e softwares", "Problemas sobre medidas envolvendo grandezas como comprimento, massa, tempo, temperatura, área, capacidade e volume", "Ângulos: noção, usos e medida", "Plantas baixas e vistas aéreas", "Perímetro de um quadrado como grandeza proporcional à medida do lado"],
    [U5]: ["Cálculo de probabilidade como a razão entre o número de resultados favoráveis e o total de resultados possíveis em um espaço amostral equiprovável", "Cálculo de probabilidade por meio de muitas repetições de um experimento (frequências de ocorrências e probabilidade frequentista)", "Leitura e interpretação de tabelas e gráficos (de colunas ou barras simples ou múltiplas) referentes a variáveis categóricas e variáveis numéricas", "Coleta de dados, organização e registro", "Construção de diferentes tipos de gráficos para representá-los e interpretação das informações", "Diferentes tipos de representação de informações: gráficos e fluxogramas"],
};
const OBJ_07 = {
    [U1]: ["Múltiplos e divisores de um número natural", "Cálculo de porcentagens e de acréscimos e decréscimos simples", "Números inteiros: usos, história, ordenação, associação com pontos da reta numérica e operações", "Fração e seus significados: como parte de inteiros, resultado da divisão, razão e operador"],
    [U2]: ["Números racionais na representação fracionária e na decimal: usos, ordenação e associação com pontos da reta numérica e operações", "Linguagem algébrica: variável e incógnita", "Equivalência de expressões algébricas: identificação da regularidade de uma sequência numérica", "Problemas envolvendo grandezas diretamente proporcionais e grandezas inversamente proporcionais", "Equações polinomiais do 1º grau"],
    [U3]: ["Transformações geométricas de polígonos no plano cartesiano: multiplicação das coordenadas por um número inteiro e obtenção de simétricos em relação aos eixos e à origem", "Simetrias de translação, rotação e reflexão", "A circunferência como lugar geométrico", "Relações entre os ângulos formados por retas paralelas intersectadas por uma transversal", "Triângulos: construção, condição de existência e soma das medidas dos ângulos internos"],
    [U4]: ["Polígonos regulares: quadrado e triângulo equilátero", "Problemas envolvendo medições", "Cálculo de volume de blocos retangulares, utilizando unidades de medida convencionais mais usuais", "Equivalência de área de figuras planas: cálculo de áreas de figuras que podem ser decompostas por outras, cujas áreas podem ser facilmente determinadas como triângulos e quadriláteros", "Medida do comprimento da circunferência"],
    [U5]: ["Experimentos aleatórios: espaço amostral e estimativa de probabilidade por meio de frequência de ocorrências", "Estatística: média e amplitude de um conjunto de dados", "Pesquisa amostral e pesquisa censitária", "Planejamento de pesquisa, coleta e organização dos dados, construção de tabelas e gráficos e interpretação das informações", "Gráficos de setores: interpretação, pertinência e construção para representar conjunto de dados"],
};
const OBJ_08 = {
    [U1]: ["Notação científica", "Potenciação e radiciação"],
    [U2]: ["O princípio multiplicativo da contagem", "Porcentagens", "Dízimas periódicas: fração geratriz", "Valor numérico de expressões algébricas", "Associação de uma equação linear de 1º grau a uma reta no plano cartesiano", "Sistema de equações polinomiais de 1º grau: resolução algébrica e representação no plano cartesiano", "Equação polinomial de 2º grau do tipo ax2 = b", "Sequências recursivas e não recursivas", "Variação de grandezas: diretamente proporcionais, inversamente proporcionais ou não proporcionais"],
    [U3]: ["Congruência de triângulos e demonstrações de propriedades de quadriláteros", "Construções geométricas: ângulos de 90°, 60°, 45° e 30° e polígonos regulares", "Mediatriz e bissetriz como lugares geométricos: construção e problemas", "Transformações geométricas: simetrias de translação, reflexão e rotação"],
    [U4]: ["Área de figuras planas", "Área do círculo e comprimento de sua circunferência", "Volume de bloco retangular", "Medidas de capacidade"],
    [U5]: ["Princípio multiplicativo da contagem", "Soma das probabilidades de todos os elementos de um espaço amostral", "Gráficos de barras, colunas, linhas ou setores e seus elementos constitutivos e adequação para determinado conjunto de dados", "Organização dos dados de uma variável contínua em classes", "Medidas de tendência central e de dispersão", "Pesquisas censitária ou amostral", "Planejamento e execução de pesquisa amostral"],
};
const OBJ_09 = {
    [U1]: ["Necessidade dos números reais para medir qualquer segmento de reta", "Números irracionais: reconhecimento e localização de alguns na reta numérica"],
    [U2]: ["Potências com expoentes negativos e fracionários", "Números reais: notação científica e problemas", "Porcentagens: problemas que envolvem cálculo de percentuais sucessivos", "Funções: representações numérica, algébrica e gráfica", "Razão entre grandezas de espécies diferentes", "Grandezas diretamente proporcionais e grandezas inversamente proporcionais", "Expressões algébricas: fatoração e produtos notáveis", "Resolução de equações polinomiais do 2º grau por meio de fatorações"],
    [U3]: ["Demonstrações de relações entre os ângulos formados por retas paralelas intersectadas por uma transversal", "Relações entre arcos e ângulos na circunferência de um círculo", "Semelhança de triângulos", "Relações métricas no triângulo retângulo", "Teorema de Pitágoras: verificações experimentais e demonstração", "Retas paralelas cortadas por transversais: teoremas de proporcionalidade e verificações experimentais", "Polígonos regulares", "Distância entre pontos no plano cartesiano"],
    [U4]: ["Vistas ortogonais de figuras espaciais", "Unidades de medida para medir distâncias muito grandes e muito pequenas", "Unidades de medida utilizadas na informática", "Volume de prismas e cilindros"],
    [U5]: ["Análise de probabilidade de eventos aleatórios: eventos dependentes e independentes", "Análise de gráficos divulgados pela mídia: elementos que podem induzir a erros de leitura ou de interpretação", "Leitura, interpretação e representação de dados de pesquisa expressos em tabelas de dupla entrada, gráficos de colunas simples e agrupadas, gráficos de barras e de setores e gráficos pictóricos", "Planejamento e execução de pesquisa amostral e apresentação de relatório"],
};

export const especificacoesPorUnidade = {
    "1º Ano": OBJ_01,
    "2º Ano": OBJ_02,
    "3º Ano": OBJ_03,
    "4º Ano": OBJ_04,
    "5º Ano": OBJ_05,
    "6º Ano": OBJ_06,
    "7º Ano": OBJ_07,
    "8º Ano": OBJ_08,
    "9º Ano": OBJ_09,
};

const H_01 = {
    [U1]: [
        { codigo: "EF01MA01", descricao: "Utilizar números naturais como indicador de quantidade ou de ordem em diferentes situações cotidianas e reconhecer situações em que os números não indicam contagem nem ordem, mas sim código de identificação." },
        { codigo: "EF01MA02", descricao: "Contar de maneira exata ou aproximada, utilizando diferentes estratégias como o pareamento e outros agrupamentos." },
        { codigo: "EF01MA03", descricao: "Estimar e comparar quantidades de objetos de dois conjuntos (em torno de 20 elementos), por estimativa e/ou por correspondência (um a um, dois a dois) para indicar \"tem mais\", \"tem menos\" ou \"tem a mesma quantidade\"." },
        { codigo: "EF01MA04", descricao: "Contar a quantidade de objetos de coleções até 100 unidades e apresentar o resultado por registros verbais e simbólicos, em situações de seu interesse, como jogos, brincadeiras, materiais da sala de aula, entre outros." },
    ],
    [U2]: [
        { codigo: "EF01MA05", descricao: "Comparar números naturais de até duas ordens em situações cotidianas, com e sem suporte da reta numérica." },
        { codigo: "EF01MA06", descricao: "Construir fatos básicos da adição e utilizá-los em procedimentos de cálculo para resolver problemas." },
        { codigo: "EF01MA07", descricao: "Compor e decompor número de até duas ordens, por meio de diferentes adições, com o suporte de material manipulável, contribuindo para a compreensão de características do sistema de numeração decimal e o desenvolvimento de estratégias de cálculo." },
        { codigo: "EF01MA08", descricao: "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até dois algarismos, com os significados de juntar, acrescentar, separar e retirar, com o suporte de imagens e/ou material manipulável, utilizando estratégias e formas de registro pessoais." },
        { codigo: "EF01MA09", descricao: "Organizar e ordenar objetos familiares ou representações por figuras, por meio de atributos, tais como cor, forma e medida." },
        { codigo: "EF01MA10", descricao: "Descrever, após o reconhecimento e a explicitação de um padrão (ou regularidade), os elementos ausentes em sequências recursivas de números naturais, objetos ou figuras." },
    ],
    [U3]: [
        { codigo: "EF01MA11", descricao: "Descrever a localização de pessoas e de objetos no espaço em relação à sua própria posição, utilizando termos como à direita, à esquerda, em frente, atrás." },
        { codigo: "EF01MA12", descricao: "Descrever a localização de pessoas e de objetos no espaço segundo um dado ponto de referência, compreendendo que, para a utilização de termos que se referem à posição, como direita, esquerda, em cima, em baixo, é necessário explicitar-se o referencial." },
        { codigo: "EF01MA13", descricao: "Relacionar figuras geométricas espaciais (cones, cilindros, esferas e blocos retangulares) a objetos familiares do mundo físico." },
        { codigo: "EF01MA14", descricao: "Identificar e nomear figuras planas (círculo, quadrado, retângulo e triângulo) em desenhos apresentados em diferentes disposições ou em contornos de faces de sólidos geométricos." },
    ],
    [U4]: [
        { codigo: "EF01MA15", descricao: "Comparar comprimentos, capacidades ou massas, utilizando termos como mais alto, mais baixo, mais comprido, mais curto, mais grosso, mais fino, mais largo, mais pesado, mais leve, cabe mais, cabe menos, entre outros, para ordenar objetos de uso cotidiano." },
        { codigo: "EF01MA16", descricao: "Relatar em linguagem verbal ou não verbal sequência de acontecimentos relativos a um dia, utilizando, quando possível, os horários dos eventos." },
        { codigo: "EF01MA17", descricao: "Reconhecer e relacionar períodos do dia, dias da semana e meses do ano, utilizando calendário, quando necessário." },
        { codigo: "EF01MA18", descricao: "Produzir a escrita de uma data, apresentando o dia, o mês e o ano, e indicar o dia da semana de uma data, consultando calendários." },
    ],
    [U5]: [
        { codigo: "EF01MA19", descricao: "Reconhecer e relacionar valores de moedas e cédulas do sistema monetário brasileiro para resolver situações simples do cotidiano do estudante." },
        { codigo: "EF01MA20", descricao: "Classificar eventos envolvendo o acaso, tais como \"acontecerá com certeza\", \"talvez aconteça\" e \"é impossível acontecer\", em situações do cotidiano." },
        { codigo: "EF01MA21", descricao: "Ler dados expressos em tabelas e em gráficos de colunas simples." },
        { codigo: "EF01MA22", descricao: "Realizar pesquisa, envolvendo até duas variáveis categóricas de seu interesse e universo de até 30 elementos, e organizar dados por meio de representações pessoais." },
    ],
};
const H_02 = {
    [U1]: [
        { codigo: "EF02MA01", descricao: "Comparar e ordenar números naturais (até a ordem de centenas) pela compreensão de características do sistema de numeração decimal (valor posicional e função do zero)." },
    ],
    [U2]: [
        { codigo: "EF02MA02", descricao: "Fazer estimativas por meio de estratégias diversas a respeito da quantidade de objetos de coleções e registrar o resultado da contagem desses objetos (até 1000 unidades)." },
        { codigo: "EF02MA03", descricao: "Comparar quantidades de objetos de dois conjuntos, por estimativa e/ou por correspondência (um a um, dois a dois, entre outros), para indicar \"tem mais\", \"tem menos\" ou \"tem a mesma quantidade\", indicando, quando for o caso, quantos a mais e quantos a menos." },
        { codigo: "EF02MA04", descricao: "Compor e decompor números naturais de até três ordens, com suporte de material manipulável, por meio de diferentes adições." },
        { codigo: "EF02MA05", descricao: "Construir fatos básicos da adição e subtração e utilizá-los no cálculo mental ou escrito." },
        { codigo: "EF02MA06", descricao: "Resolver e elaborar problemas de adição e de subtração, envolvendo números de até três ordens, com os significados de juntar, acrescentar, separar, retirar, utilizando estratégias pessoais." },
        { codigo: "EF02MA07", descricao: "Resolver e elaborar problemas de multiplicação (por 2, 3, 4 e 5) com a ideia de adição de parcelas iguais por meio de estratégias e formas de registro pessoais, utilizando ou não suporte de imagens e/ou material manipulável." },
        { codigo: "EF02MA08", descricao: "Resolver e elaborar problemas envolvendo dobro, metade, triplo e terça parte, com o suporte de imagens ou material manipulável, utilizando estratégias pessoais." },
        { codigo: "EF02MA09", descricao: "Construir sequências de números naturais em ordem crescente ou decrescente a partir de um número qualquer, utilizando uma regularidade estabelecida." },
        { codigo: "EF02MA10", descricao: "Descrever um padrão (ou regularidade) de sequências repetitivas e de sequências recursivas, por meio de palavras, símbolos ou desenhos." },
        { codigo: "EF02MA11", descricao: "Descrever os elementos ausentes em sequências repetitivas e em sequências recursivas de números naturais, objetos ou figuras." },
    ],
    [U3]: [
        { codigo: "EF02MA12", descricao: "Identificar e registrar, em linguagem verbal ou não verbal, a localização e os deslocamentos de pessoas e de objetos no espaço, considerando mais de um ponto de referência, e indicar as mudanças de direção e de sentido." },
        { codigo: "EF02MA13", descricao: "Esboçar roteiros a ser seguidos ou plantas de ambientes familiares, assinalando entradas, saídas e alguns pontos de referência." },
        { codigo: "EF02MA14", descricao: "Reconhecer, nomear e comparar figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera), relacionando-as com objetos do mundo físico." },
        { codigo: "EF02MA15", descricao: "Reconhecer, comparar e nomear figuras planas (círculo, quadrado, retângulo e triângulo), por meio de características comuns, em desenhos apresentados em diferentes disposições ou em sólidos geométricos." },
    ],
    [U4]: [
        { codigo: "EF02MA16", descricao: "Estimar, medir e comparar comprimentos de lados de salas (incluindo contorno) e de polígonos, utilizando unidades de medida não padronizadas e padronizadas (metro, centímetro e milímetro) e instrumentos adequados." },
        { codigo: "EF02MA17", descricao: "Estimar, medir e comparar capacidade e massa, utilizando estratégias pessoais e unidades de medida não padronizadas ou padronizadas (litro, mililitro, grama e quilograma)." },
        { codigo: "EF02MA18", descricao: "Indicar a duração de intervalos de tempo entre duas datas, como dias da semana e meses do ano, utilizando calendário, para planejamentos e organização de agenda." },
        { codigo: "EF02MA19", descricao: "Medir a duração de um intervalo de tempo por meio de relógio digital e registrar o horário do início e do fim do intervalo." },
    ],
    [U5]: [
        { codigo: "EF02MA20", descricao: "Estabelecer a equivalência de valores entre moedas e cédulas do sistema monetário brasileiro para resolver situações cotidianas." },
        { codigo: "EF02MA21", descricao: "Classificar resultados de eventos cotidianos aleatórios como \"pouco prováveis\", \"muito prováveis\", \"improváveis\" e \"impossíveis\"." },
        { codigo: "EF02MA22", descricao: "Comparar informações de pesquisas apresentadas por meio de tabelas de dupla entrada e em gráficos de colunas simples ou barras, para melhor compreender aspectos da realidade próxima." },
        { codigo: "EF02MA23", descricao: "Realizar pesquisa em universo de até 30 elementos, escolhendo até três variáveis categóricas de seu interesse, organizando os dados coletados em listas, tabelas e gráficos de colunas simples." },
    ],
};
const H_03 = {
    [U1]: [
        { codigo: "EF03MA01", descricao: "Ler, escrever e comparar números naturais de até a ordem de unidade de milhar, estabelecendo relações entre os registros numéricos e em língua materna." },
        { codigo: "EF03MA02", descricao: "Identificar características do sistema de numeração decimal, utilizando a composição e a decomposição de número natural de até quatro ordens." },
        { codigo: "EF03MA03", descricao: "Construir e utilizar fatos básicos da adição e da multiplicação para o cálculo mental ou escrito." },
        { codigo: "EF03MA04", descricao: "Estabelecer a relação entre números naturais e pontos da reta numérica para utilizá-la na ordenação dos números naturais e também na construção de fatos da adição e da subtração, relacionando-os com deslocamentos para a direita ou para a esquerda." },
        { codigo: "EF03MA05", descricao: "Utilizar diferentes procedimentos de cálculo mental e escrito, inclusive os convencionais, para resolver problemas significativos envolvendo adição e subtração com números naturais." },
        { codigo: "EF03MA06", descricao: "Resolver e elaborar problemas de adição e subtração com os significados de juntar, acrescentar, separar, retirar, comparar e completar quantidades, utilizando diferentes estratégias de cálculo exato ou aproximado, incluindo cálculo mental." },
        { codigo: "EF03MA07", descricao: "Resolver e elaborar problemas de multiplicação (por 2, 3, 4, 5 e 10) com os significados de adição de parcelas iguais e elementos apresentados em disposição retangular, utilizando diferentes estratégias de cálculo e registros." },
        { codigo: "EF03MA08", descricao: "Resolver e elaborar problemas de divisão de um número natural por outro (até 10), com resto zero e com resto diferente de zero, com os significados de repartição equitativa e de medida, por meio de estratégias e registros pessoais." },
    ],
    [U2]: [
        { codigo: "EF03MA09", descricao: "Associar o quociente de uma divisão com resto zero de um número natural por 2, 3, 4, 5 e 10 às ideias de metade, terça, quarta, quinta e décima partes." },
        { codigo: "EF03MA10", descricao: "Identificar regularidades em sequências ordenadas de números naturais, resultantes da realização de adições ou subtrações sucessivas, por um mesmo número, descrever uma regra de formação da sequência e determinar elementos faltantes ou seguintes." },
        { codigo: "EF03MA11", descricao: "Compreender a ideia de igualdade para escrever diferentes sentenças de adições ou de subtrações de dois números naturais que resultem na mesma soma ou diferença." },
    ],
    [U3]: [
        { codigo: "EF03MA12", descricao: "Descrever e representar, por meio de esboços de trajetos ou utilizando croquis e maquetes, a movimentação de pessoas ou de objetos no espaço, incluindo mudanças de direção e sentido, com base em diferentes pontos de referência." },
        { codigo: "EF03MA13", descricao: "Associar figuras geométricas espaciais (cubo, bloco retangular, pirâmide, cone, cilindro e esfera) a objetos do mundo físico e nomear essas figuras." },
        { codigo: "EF03MA14", descricao: "Descrever características de algumas figuras geométricas espaciais (prismas retos, pirâmides, cilindros, cones), relacionando-as com suas planificações." },
        { codigo: "EF03MA15", descricao: "Classificar e comparar figuras planas (triângulo, quadrado, retângulo, trapézio e paralelogramo) em relação a seus lados (quantidade, posições relativas e comprimento) e vértices." },
        { codigo: "EF03MA16", descricao: "Reconhecer figuras congruentes, usando sobreposição e desenhos em malhas quadriculadas ou triangulares, incluindo o uso de tecnologias digitais." },
    ],
    [U4]: [
        { codigo: "EF03MA17", descricao: "Reconhecer que o resultado de uma medida depende da unidade de medida utilizada." },
        { codigo: "EF03MA18", descricao: "Escolher a unidade de medida e o instrumento mais apropriado para medições de comprimento, tempo e capacidade." },
        { codigo: "EF03MA19", descricao: "Estimar, medir e comparar comprimentos, utilizando unidades de medida não padronizadas e padronizadas mais usuais (metro, centímetro e milímetro) e diversos instrumentos de medida." },
        { codigo: "EF03MA20", descricao: "Estimar e medir capacidade e massa, utilizando unidades de medida não padronizadas e padronizadas mais usuais (litro, mililitro, quilograma, grama e miligrama), reconhecendo-as em leitura de rótulos e embalagens, entre outros." },
        { codigo: "EF03MA21", descricao: "Comparar, visualmente ou por superposição, áreas de faces de objetos, de figuras planas ou de desenhos." },
        { codigo: "EF03MA22", descricao: "Ler e registrar medidas e intervalos de tempo, utilizando relógios (analógico e digital) para informar os horários de início e término de realização de uma atividade e sua duração." },
        { codigo: "EF03MA23", descricao: "Ler horas em relógios digitais e em relógios analógicos e reconhecer a relação entre hora e minutos e entre minuto e segundos." },
        { codigo: "EF03MA24", descricao: "Resolver e elaborar problemas que envolvam a comparação e a equivalência de valores monetários do sistema brasileiro em situações de compra, venda e troca." },
    ],
    [U5]: [
        { codigo: "EF03MA25", descricao: "Identificar, em eventos familiares aleatórios, todos os resultados possíveis, estimando os que têm maiores ou menores chances de ocorrência." },
        { codigo: "EF03MA26", descricao: "Resolver problemas cujos dados estão apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas." },
        { codigo: "EF03MA27", descricao: "Ler, interpretar e comparar dados apresentados em tabelas de dupla entrada, gráficos de barras ou de colunas, envolvendo resultados de pesquisas significativas, utilizando termos como maior e menor frequência, apropriando-se desse tipo de linguagem para compreender aspectos da realidade sociocultural significativos." },
        { codigo: "EF03MA28", descricao: "Realizar pesquisa envolvendo variáveis categóricas em um universo de até 50 elementos, organizar os dados coletados utilizando listas, tabelas simples ou de dupla entrada e representá-los em gráficos de colunas simples, com e sem uso de tecnologias digitais." },
    ],
};
const H_04 = {
    [U1]: [
        { codigo: "EF04MA01", descricao: "Ler, escrever e ordenar números naturais até a ordem de dezenas de milhar." },
        { codigo: "EF04MA02", descricao: "Mostrar, por decomposição e composição, que todo número natural pode ser escrito por meio de adições e multiplicações por potências de dez, para compreender o sistema de numeração decimal e desenvolver estratégias de cálculo." },
        { codigo: "EF04MA03", descricao: "Resolver e elaborar problemas com números naturais envolvendo adição e subtração, utilizando estratégias diversas, como cálculo, cálculo mental e algoritmos, além de fazer estimativas do resultado." },
    ],
    [U2]: [
        { codigo: "EF04MA04", descricao: "Utilizar as relações entre adição e subtração, bem como entre multiplicação e divisão, para ampliar as estratégias de cálculo." },
        { codigo: "EF04MA05", descricao: "Utilizar as propriedades das operações para desenvolver estratégias de cálculo." },
        { codigo: "EF04MA06", descricao: "Resolver e elaborar problemas envolvendo diferentes significados da multiplicação (adição de parcelas iguais, organização retangular e proporcionalidade), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos." },
        { codigo: "EF04MA07", descricao: "Resolver e elaborar problemas de divisão cujo divisor tenha no máximo dois algarismos, envolvendo os significados de repartição equitativa e de medida, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos." },
        { codigo: "EF04MA08", descricao: "Resolver, com o suporte de imagem e/ou material manipulável, problemas simples de contagem, como a determinação do número de agrupamentos possíveis ao se combinar cada elemento de uma coleção com todos os elementos de outra, utilizando estratégias e formas de registro pessoais." },
        { codigo: "EF04MA09", descricao: "Reconhecer as frações unitárias mais usuais (1/2, 1/3, 1/4, 1/5, 1/10 e 1/100) como unidades de medida menores do que uma unidade, utilizando a reta numérica como recurso." },
        { codigo: "EF04MA10", descricao: "Reconhecer que as regras do sistema de numeração decimal podem ser estendidas para a representação decimal de um número racional e relacionar décimos e centésimos com a representação do sistema monetário brasileiro." },
        { codigo: "EF04MA11", descricao: "Identificar regularidades em sequências numéricas compostas por múltiplos de um número natural." },
        { codigo: "EF04MA12", descricao: "Reconhecer, por meio de investigações, que há grupos de números naturais para os quais as divisões por um determinado número resultam em restos iguais, identificando regularidades." },
        { codigo: "EF04MA13", descricao: "Reconhecer, por meio de investigações, utilizando a calculadora quando necessário, as relações inversas entre as operações de adição e de subtração e de multiplicação e de divisão, para aplicá-las na resolução de problemas." },
        { codigo: "EF04MA14", descricao: "Reconhecer e mostrar, por meio de exemplos, que a relação de igualdade existente entre dois termos permanece quando se adiciona ou se subtrai um mesmo número a cada um desses termos." },
        { codigo: "EF04MA15", descricao: "Determinar o número desconhecido que torna verdadeira uma igualdade que envolve as operações fundamentais com números naturais." },
    ],
    [U3]: [
        { codigo: "EF04MA16", descricao: "Descrever deslocamentos e localização de pessoas e de objetos no espaço, por meio de malhas quadriculadas e representações como desenhos, mapas, planta baixa e croquis, empregando termos como direita e esquerda, mudanças de direção e sentido, intersecção, transversais, paralelas e perpendiculares." },
        { codigo: "EF04MA17", descricao: "Associar prismas e pirâmides a suas planificações e analisar, nomear e comparar seus atributos, estabelecendo relações entre as representações planas e espaciais." },
        { codigo: "EF04MA18", descricao: "Reconhecer ângulos retos e não retos em figuras poligonais com o uso de dobraduras, esquadros ou softwares de geometria." },
        { codigo: "EF04MA19", descricao: "Reconhecer simetria de reflexão em figuras e em pares de figuras geométricas planas e utilizá-la na construção de figuras congruentes, com o uso de malhas quadriculadas e de softwares de geometria." },
    ],
    [U4]: [
        { codigo: "EF04MA20", descricao: "Medir e estimar comprimentos (incluindo perímetros), massas e capacidades, utilizando unidades de medida padronizadas mais usuais, valorizando e respeitando a cultura local." },
        { codigo: "EF04MA21", descricao: "Medir, comparar e estimar área de figuras planas desenhadas em malha quadriculada, pela contagem dos quadradinhos ou de metades de quadradinho, reconhecendo que duas figuras com formatos diferentes podem ter a mesma medida de área." },
        { codigo: "EF04MA22", descricao: "Ler e registrar medidas e intervalos de tempo em horas, minutos e segundos em situações relacionadas ao seu cotidiano, como informar os horários de início e término de realização de uma tarefa e sua duração." },
        { codigo: "EF04MA23", descricao: "Reconhecer temperatura como grandeza e o grau Celsius como unidade de medida a ela associada e utilizá-lo em comparações de temperaturas em diferentes regiões do Brasil ou no exterior ou, ainda, em discussões que envolvam problemas relacionados ao aquecimento global." },
        { codigo: "EF04MA24", descricao: "Registrar as temperaturas máxima e mínima diárias, em locais do seu cotidiano, e elaborar gráficos de colunas com as variações diárias da temperatura, utilizando, inclusive, planilhas eletrônicas." },
    ],
    [U5]: [
        { codigo: "EF04MA25", descricao: "Resolver e elaborar problemas que envolvam situações de compra e venda e formas de pagamento, utilizando termos como troco e desconto, enfatizando o consumo ético, consciente e responsável." },
        { codigo: "EF04MA26", descricao: "Identificar, entre eventos aleatórios cotidianos, aqueles que têm maior chance de ocorrência, reconhecendo características de resultados mais prováveis, sem utilizar frações." },
        { codigo: "EF04MA27", descricao: "Analisar dados apresentados em tabelas simples ou de dupla entrada e em gráficos de colunas ou pictóricos, com base em informações das diferentes áreas do conhecimento, e produzir texto com a síntese de sua análise." },
        { codigo: "EF04MA28", descricao: "Realizar pesquisa envolvendo variáveis categóricas e numéricas e organizar dados coletados por meio de tabelas e gráficos de colunas simples ou agrupadas, com e sem uso de tecnologias digitais." },
    ],
};
const H_05 = {
    [U1]: [
        { codigo: "EF05MA01", descricao: "Ler, escrever e ordenar números naturais até a ordem das centenas de milhar com compreensão das principais características do sistema de numeração decimal." },
        { codigo: "EF05MA02", descricao: "Ler, escrever e ordenar números racionais na forma decimal com compreensão das principais características do sistema de numeração decimal, utilizando, como recursos, a composição e decomposição e a reta numérica." },
        { codigo: "EF05MA03", descricao: "Identificar e representar frações (menores e maiores que a unidade), associando-as ao resultado de uma divisão ou à ideia de parte de um todo, utilizando a reta numérica como recurso." },
        { codigo: "EF05MA04", descricao: "Identificar frações equivalentes." },
        { codigo: "EF05MA05", descricao: "Comparar e ordenar números racionais positivos (representações fracionária e decimal), relacionando-os a pontos na reta numérica." },
        { codigo: "EF05MA06", descricao: "Associar as representações 10%, 25%, 50%, 75% e 100% respectivamente à décima parte, quarta parte, metade, três quartos e um inteiro, para calcular porcentagens, utilizando estratégias pessoais, cálculo mental e calculadora, em contextos de educação financeira, entre outros." },
    ],
    [U2]: [
        { codigo: "EF05MA07", descricao: "Resolver e elaborar problemas de adição e subtração com números naturais e com números racionais, cuja representação decimal seja finita, utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos." },
        { codigo: "EF05MA08", descricao: "Resolver e elaborar problemas de multiplicação e divisão com números naturais e com números racionais cuja representação decimal é finita (com multiplicador natural e divisor natural e diferente de zero), utilizando estratégias diversas, como cálculo por estimativa, cálculo mental e algoritmos." },
        { codigo: "EF05MA09", descricao: "Resolver e elaborar problemas simples de contagem envolvendo o princípio multiplicativo, como a determinação do número de agrupamentos possíveis ao se combinar cada elemento de uma coleção com todos os elementos de outra coleção, por meio de diagramas de árvore ou por tabelas." },
        { codigo: "EF05MA10", descricao: "Concluir, por meio de investigações, que a relação de igualdade existente entre dois membros permanece ao adicionar, subtrair, multiplicar ou dividir cada um desses membros por um mesmo número, para construir a noção de equivalência." },
        { codigo: "EF05MA11", descricao: "Resolver e elaborar problemas cuja conversão em sentença matemática seja uma igualdade com uma operação em que um dos termos é desconhecido." },
        { codigo: "EF05MA12", descricao: "Resolver problemas que envolvam variação de proporcionalidade direta entre duas grandezas, para associar a quantidade de um produto ao valor a pagar, alterar as quantidades de ingredientes de receitas, ampliar ou reduzir escala em mapas, entre outros." },
        { codigo: "EF05MA13", descricao: "Resolver problemas envolvendo a partilha de uma quantidade em duas partes desiguais, tais como dividir uma quantidade em duas partes, de modo que uma seja o dobro da outra, com compreensão da ideia de razão entre as partes e delas com o todo." },
    ],
    [U3]: [
        { codigo: "EF05MA14", descricao: "Utilizar e compreender diferentes representações para a localização de objetos no plano, como mapas, células em planilhas eletrônicas e coordenadas geográficas, a fim de desenvolver as primeiras noções de coordenadas cartesianas." },
        { codigo: "EF05MA15", descricao: "Interpretar, descrever e representar a localização ou movimentação de objetos no plano cartesiano (1º quadrante), utilizando coordenadas cartesianas, indicando mudanças de direção e de sentido e giros." },
        { codigo: "EF05MA16", descricao: "Associar figuras espaciais a suas planificações (prismas, pirâmides, cilindros e cones) e analisar, nomear e comparar seus atributos." },
        { codigo: "EF05MA17", descricao: "Reconhecer, nomear e comparar polígonos, considerando lados, vértices e ângulos, e desenhá-los, utilizando material de desenho ou tecnologias digitais." },
        { codigo: "EF05MA18", descricao: "Reconhecer a congruência dos ângulos e a proporcionalidade entre os lados correspondentes de figuras poligonais em situações de ampliação e de redução em malhas quadriculadas e usando tecnologias digitais." },
    ],
    [U4]: [
        { codigo: "EF05MA19", descricao: "Resolver e elaborar problemas envolvendo medidas das grandezas comprimento, área, massa, tempo, temperatura e capacidade, recorrendo a transformações entre as unidades mais usuais em contextos socioculturais." },
        { codigo: "EF05MA20", descricao: "Concluir, por meio de investigações, que figuras de perímetros iguais podem ter áreas diferentes e que, também, figuras que têm a mesma área podem ter perímetros diferentes." },
        { codigo: "EF05MA21", descricao: "Reconhecer volume como grandeza associada a sólidos geométricos e medir volumes por meio de empilhamento de cubos, utilizando, preferencialmente, objetos concretos." },
    ],
    [U5]: [
        { codigo: "EF05MA22", descricao: "Apresentar todos os possíveis resultados de um experimento aleatório, estimando se esses resultados são igualmente prováveis ou não." },
        { codigo: "EF05MA23", descricao: "Determinar a probabilidade de ocorrência de um resultado em eventos aleatórios, quando todos os resultados possíveis têm a mesma chance de ocorrer (equiprováveis)." },
        { codigo: "EF05MA24", descricao: "Interpretar dados estatísticos apresentados em textos, tabelas e gráficos (colunas ou linhas), referentes a outras áreas do conhecimento ou a outros contextos, como saúde e trânsito, e produzir textos com o objetivo de sintetizar conclusões." },
        { codigo: "EF05MA25", descricao: "Realizar pesquisa envolvendo variáveis categóricas e numéricas, organizar dados coletados por meio de tabelas, gráficos de colunas, pictóricos e de linhas, com e sem uso de tecnologias digitais, e apresentar texto escrito sobre a finalidade da pesquisa e a síntese dos resultados." },
    ],
};
const H_06 = {
    [U1]: [
        { codigo: "EF06MA01", descricao: "Comparar, ordenar, ler e escrever números naturais e números racionais cuja representação decimal é finita, fazendo uso da reta numérica." },
        { codigo: "EF06MA02", descricao: "Reconhecer o sistema de numeração decimal, como o que prevaleceu no mundo ocidental, e destacar semelhanças e diferenças com outros sistemas, de modo a sistematizar suas principais características (base, valor posicional e função do zero), utilizando, inclusive, a composição e decomposição de números naturais e números racionais em sua representação decimal." },
        { codigo: "EF06MA03", descricao: "Resolver e elaborar problemas que envolvam cálculos (mentais ou escritos, exatos ou aproximados) com números naturais, por meio de estratégias variadas, com compreensão dos processos neles envolvidos com e sem uso de calculadora." },
        { codigo: "EF06MA04", descricao: "Construir algoritmo em linguagem natural e representá-lo por fluxograma que indique a resolução de um problema simples (por exemplo, se um número natural qualquer é par)." },
        { codigo: "EF06MA05", descricao: "Classificar números naturais em primos e compostos, estabelecer relações entre números, expressas pelos termos \"é múltiplo de\", \"é divisor de\", \"é fator de\", e estabelecer, por meio de investigações, critérios de divisibilidade por 2, 3, 4, 5, 6, 8, 9, 10, 100 e 1000." },
        { codigo: "EF06MA06", descricao: "Resolver e elaborar problemas que envolvam as ideias de múltiplo e de divisor." },
        { codigo: "EF06MA07", descricao: "Compreender, comparar e ordenar frações associadas às ideias de partes de inteiros e resultado de divisão, identificando frações equivalentes." },
        { codigo: "EF06MA08", descricao: "Reconhecer que os números racionais positivos podem ser expressos nas formas fracionária e decimal, estabelecer relações entre essas representações, passando de uma representação para outra, e relacioná-los a pontos na reta numérica." },
        { codigo: "EF06MA09", descricao: "Resolver e elaborar problemas que envolvam o cálculo da fração de uma quantidade e cujo resultado seja um número natural, com e sem uso de calculadora." },
        { codigo: "EF06MA10", descricao: "Resolver e elaborar problemas que envolvam adição ou subtração com números racionais positivos na representação fracionária." },
        { codigo: "EF06MA11", descricao: "Resolver e elaborar problemas com números racionais positivos na representação decimal, envolvendo as quatro operações fundamentais e a potenciação, por meio de estratégias diversas, utilizando estimativas e arredondamentos para verificar a razoabilidade de respostas, com e sem uso de calculadora." },
        { codigo: "EF06MA12", descricao: "Fazer estimativas de quantidades e aproximar números para múltiplos da potência de 10 mais próxima." },
        { codigo: "EF06MA13", descricao: "Resolver e elaborar problemas que envolvam porcentagens, com base na ideia de proporcionalidade, sem fazer uso da \"regra de três\", utilizando estratégias pessoais, cálculo mental e calculadora, em contextos de educação financeira, entre outros." },
    ],
    [U2]: [
        { codigo: "EF06MA14", descricao: "Reconhecer que a relação de igualdade matemática não se altera ao adicionar, subtrair, multiplicar ou dividir os seus dois membros por um mesmo número e utilizar essa noção para determinar valores desconhecidos na resolução de problemas." },
    ],
    [U3]: [
        { codigo: "EF06MA15", descricao: "Resolver e elaborar problemas que envolvam a partilha de uma quantidade em duas partes desiguais, envolvendo relações aditivas e multiplicativas, bem como a razão entre as partes e entre uma das partes e o todo." },
        { codigo: "EF06MA16", descricao: "Associar pares ordenados de números a pontos do plano cartesiano do 1º quadrante, em situações como a localização dos vértices de um polígono." },
        { codigo: "EF06MA17", descricao: "Quantificar e estabelecer relações entre o número de vértices, faces e arestas de prismas e pirâmides, em função do seu polígono da base, para resolver problemas e desenvolver a percepção espacial." },
        { codigo: "EF06MA18", descricao: "Reconhecer, nomear e comparar polígonos, considerando lados, vértices e ângulos, e classificá-los em regulares e não regulares, tanto em suas representações no plano como em faces de poliedros." },
        { codigo: "EF06MA19", descricao: "Identificar características dos triângulos e classificá-los em relação às medidas dos lados e dos ângulos." },
        { codigo: "EF06MA20", descricao: "Identificar características dos quadriláteros, classificá-los em relação a lados e a ângulos e reconhecer a inclusão e a intersecção de classes entre eles." },
    ],
    [U4]: [
        { codigo: "EF06MA21", descricao: "Construir figuras planas semelhantes em situações de ampliação e de redução, com o uso de malhas quadriculadas, plano cartesiano ou tecnologias digitais." },
        { codigo: "EF06MA22", descricao: "Utilizar instrumentos, como réguas e esquadros, ou softwares para representações de retas paralelas e perpendiculares e construção de quadriláteros, entre outros." },
        { codigo: "EF06MA23", descricao: "Construir algoritmo para resolver situações passo a passo (como na construção de dobraduras ou na indicação de deslocamento de um objeto no plano segundo pontos de referência e distâncias fornecidas etc.)." },
        { codigo: "EF06MA24", descricao: "Resolver e elaborar problemas que envolvam as grandezas comprimento, massa, tempo, temperatura, área (triângulos e retângulos), capacidade e volume (sólidos formados por blocos retangulares), sem uso de fórmulas, inseridos, sempre que possível, em contextos oriundos de situações reais e/ou relacionadas às outras áreas do conhecimento." },
        { codigo: "EF06MA25", descricao: "Reconhecer a abertura do ângulo como grandeza associada às figuras geométricas." },
        { codigo: "EF06MA26", descricao: "Resolver problemas que envolvam a noção de ângulo em diferentes contextos e em situações reais, como ângulo de visão." },
        { codigo: "EF06MA27", descricao: "Determinar medidas da abertura de ângulos, por meio de transferidor e/ou tecnologias digitais." },
        { codigo: "EF06MA28", descricao: "Interpretar, descrever e desenhar plantas baixas simples de residências e vistas aéreas." },
        { codigo: "EF06MA29", descricao: "Analisar e descrever mudanças que ocorrem no perímetro e na área de um quadrado ao se ampliarem ou reduzirem, igualmente, as medidas de seus lados, para compreender que o perímetro é proporcional à medida do lado, o que não ocorre com a área." },
    ],
    [U5]: [
        { codigo: "EF06MA30", descricao: "Calcular a probabilidade de um evento aleatório, expressando-a por número racional (forma fracionária, decimal e percentual) e comparar esse número com a probabilidade obtida por meio de experimentos sucessivos." },
        { codigo: "EF06MA31", descricao: "Identificar as variáveis e suas frequências e os elementos constitutivos (título, eixos, legendas, fontes e datas) em diferentes tipos de gráfico." },
        { codigo: "EF06MA32", descricao: "Interpretar e resolver situações que envolvam dados de pesquisas sobre contextos ambientais, sustentabilidade, trânsito, consumo responsável, entre outros, apresentadas pela mídia em tabelas e em diferentes tipos de gráficos e redigir textos escritos com o objetivo de sintetizar conclusões." },
        { codigo: "EF06MA33", descricao: "Planejar e coletar dados de pesquisa referente a práticas sociais escolhidas pelos alunos e fazer uso de planilhas eletrônicas para registro, representação e interpretação das informações, em tabelas, vários tipos de gráficos e texto." },
        { codigo: "EF06MA34", descricao: "Interpretar e desenvolver fluxogramas simples, identificando as relações entre os objetos representados (por exemplo, posição de cidades considerando as estradas que as unem, hierarquia dos funcionários de uma empresa etc.)." },
    ],
};
const H_07 = {
    [U1]: [
        { codigo: "EF07MA01", descricao: "Resolver e elaborar problemas com números naturais, envolvendo as noções de divisor e de múltiplo, podendo incluir máximo divisor comum ou mínimo múltiplo comum, por meio de estratégias diversas, sem a aplicação de algoritmos." },
        { codigo: "EF07MA02", descricao: "Resolver e elaborar problemas que envolvam porcentagens, como os que lidam com acréscimos e decréscimos simples, utilizando estratégias pessoais, cálculo mental e calculadora, no contexto de educação financeira, entre outros." },
        { codigo: "EF07MA03", descricao: "Comparar e ordenar números inteiros em diferentes contextos, incluindo o histórico, associá-los a pontos da reta numérica e utilizá-los em situações que envolvam adição e subtração." },
        { codigo: "EF07MA04", descricao: "Resolver e elaborar problemas que envolvam operações com números inteiros." },
        { codigo: "EF07MA05", descricao: "Resolver um mesmo problema utilizando diferentes algoritmos." },
        { codigo: "EF07MA06", descricao: "Reconhecer que as resoluções de um grupo de problemas que têm a mesma estrutura podem ser obtidas utilizando os mesmos procedimentos." },
        { codigo: "EF07MA07", descricao: "Representar por meio de um fluxograma os passos utilizados para resolver um grupo de problemas." },
        { codigo: "EF07MA08", descricao: "Comparar e ordenar frações associadas às ideias de partes de inteiros, resultado da divisão, razão e operador." },
        { codigo: "EF07MA09", descricao: "Utilizar, na resolução de problemas, a associação entre razão e fração, como a fração 2/3 para expressar a razão de duas partes de uma grandeza para três partes da mesma ou três partes de outra grandeza." },
    ],
    [U2]: [
        { codigo: "EF07MA10", descricao: "Comparar e ordenar números racionais em diferentes contextos e associá-los a pontos da reta numérica." },
        { codigo: "EF07MA11", descricao: "Compreender e utilizar a multiplicação e a divisão de números racionais, a relação entre elas e suas propriedades operatórias." },
        { codigo: "EF07MA12", descricao: "Resolver e elaborar problemas que envolvam as operações com números racionais." },
        { codigo: "EF07MA13", descricao: "Compreender a ideia de variável, representada por letra ou símbolo, para expressar relação entre duas grandezas, diferenciando-a da ideia de incógnita." },
        { codigo: "EF07MA14", descricao: "Classificar sequências em recursivas e não recursivas, reconhecendo que o conceito de recursão está presente não apenas na matemática, mas também nas artes e na literatura." },
        { codigo: "EF07MA15", descricao: "Utilizar a simbologia algébrica para expressar regularidades encontradas em sequências numéricas." },
        { codigo: "EF07MA16", descricao: "Reconhecer se duas expressões algébricas obtidas para descrever a regularidade de uma mesma sequência numérica são ou não equivalentes." },
        { codigo: "EF07MA17", descricao: "Resolver e elaborar problemas que envolvam variação de proporcionalidade direta e de proporcionalidade inversa entre duas grandezas, utilizando sentença algébrica para expressar a relação entre elas." },
        { codigo: "EF07MA18", descricao: "Resolver e elaborar problemas que possam ser representados por equações polinomiais de 1º grau, redutíveis à forma ax + b = c, fazendo uso das propriedades da igualdade." },
    ],
    [U3]: [
        { codigo: "EF07MA19", descricao: "Realizar transformações de polígonos representados no plano cartesiano, decorrentes da multiplicação das coordenadas de seus vértices por um número inteiro." },
        { codigo: "EF07MA20", descricao: "Reconhecer e representar, no plano cartesiano, o simétrico de figuras em relação aos eixos e à origem." },
        { codigo: "EF07MA21", descricao: "Reconhecer e construir figuras obtidas por simetrias de translação, rotação e reflexão, usando instrumentos de desenho ou softwares de geometria dinâmica e vincular esse estudo a representações planas de obras de arte, elementos arquitetônicos, entre outros." },
        { codigo: "EF07MA22", descricao: "Construir circunferências, utilizando compasso, reconhecê-las como lugar geométrico e utilizá-las para fazer composições artísticas e resolver problemas que envolvam objetos equidistantes." },
        { codigo: "EF07MA23", descricao: "Verificar relações entre os ângulos formados por retas paralelas cortadas por uma transversal, com e sem uso de softwares de geometria dinâmica." },
        { codigo: "EF07MA24", descricao: "Construir triângulos, usando régua e compasso, reconhecer a condição de existência do triângulo quanto à medida dos lados e verificar que a soma das medidas dos ângulos internos de um triângulo é 180°." },
        { codigo: "EF07MA25", descricao: "Reconhecer a rigidez geométrica dos triângulos e suas aplicações, como na construção de estruturas arquitetônicas (telhados, estruturas metálicas e outras) ou nas artes plásticas." },
        { codigo: "EF07MA26", descricao: "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um triângulo qualquer, conhecidas as medidas dos três lados." },
        { codigo: "EF07MA27", descricao: "Calcular medidas de ângulos internos de polígonos regulares, sem o uso de fórmulas, e estabelecer relações entre ângulos internos e externos de polígonos, preferencialmente vinculadas à construção de mosaicos e de ladrilhamentos." },
        { codigo: "EF07MA28", descricao: "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um polígono regular (como quadrado e triângulo equilátero), conhecida a medida de seu lado." },
    ],
    [U4]: [
        { codigo: "EF07MA29", descricao: "Resolver e elaborar problemas que envolvam medidas de grandezas inseridos em contextos oriundos de situações cotidianas ou de outras áreas do conhecimento, reconhecendo que toda medida empírica é aproximada." },
        { codigo: "EF07MA30", descricao: "Resolver e elaborar problemas de cálculo de medida do volume de blocos retangulares, envolvendo as unidades usuais (metro cúbico, decímetro cúbico e centímetro cúbico)." },
        { codigo: "EF07MA31", descricao: "Estabelecer expressões de cálculo de área de triângulos e de quadriláteros." },
        { codigo: "EF07MA32", descricao: "Resolver e elaborar problemas de cálculo de medida de área de figuras planas que podem ser decompostas por quadrados, retângulos e/ou triângulos, utilizando a equivalência entre áreas." },
        { codigo: "EF07MA33", descricao: "Estabelecer o número como a razão entre a medida de uma circunferência e seu diâmetro, para compreender e resolver problemas, inclusive os de natureza histórica." },
    ],
    [U5]: [
        { codigo: "EF07MA34", descricao: "Planejar e realizar experimentos aleatórios ou simulações que envolvem cálculo de probabilidades ou estimativas por meio de frequência de ocorrências." },
        { codigo: "EF07MA35", descricao: "Compreender, em contextos significativos, o significado de média estatística como indicador da tendência de uma pesquisa, calcular seu valor e relacioná-lo, intuitivamente, com a amplitude do conjunto de dados." },
        { codigo: "EF07MA36", descricao: "Planejar e realizar pesquisa envolvendo tema da realidade social, identificando a necessidade de ser censitária ou de usar amostra, e interpretar os dados para comunicá-los por meio de relatório escrito, tabelas e gráficos, com o apoio de planilhas eletrônicas." },
        { codigo: "EF07MA37", descricao: "Interpretar e analisar dados apresentados em gráfico de setores divulgados pela mídia e compreender quando é possível ou conveniente sua utilização." },
    ],
};
const H_08 = {
    [U1]: [
        { codigo: "EF08MA01", descricao: "Efetuar cálculos com potências de expoentes inteiros e aplicar esse conhecimento na representação de números em notação científica." },
        { codigo: "EF08MA02", descricao: "Resolver e elaborar problemas usando a relação entre potenciação e radiciação, para representar uma raiz como potência de expoente fracionário." },
    ],
    [U2]: [
        { codigo: "EF08MA03", descricao: "Resolver e elaborar problemas de contagem cuja resolução envolva a aplicação do princípio multiplicativo." },
        { codigo: "EF08MA04", descricao: "Resolver e elaborar problemas, envolvendo cálculo de porcentagens, incluindo o uso de tecnologias digitais." },
        { codigo: "EF08MA05", descricao: "Reconhecer e utilizar procedimentos para a obtenção de uma fração geratriz para uma dízima periódica." },
        { codigo: "EF08MA06", descricao: "Resolver e elaborar problemas que envolvam cálculo do valor numérico de expressões algébricas, utilizando as propriedades das operações." },
        { codigo: "EF08MA07", descricao: "Associar uma equação linear de 1º grau com duas incógnitas a uma reta no plano cartesiano." },
        { codigo: "EF08MA08", descricao: "Resolver e elaborar problemas relacionados ao seu contexto próximo, que possam ser representados por sistemas de equações de 1º grau com duas incógnitas e interpretá-los, utilizando, inclusive, o plano cartesiano como recurso." },
        { codigo: "EF08MA09", descricao: "Resolver e elaborar, com e sem uso de tecnologias, problemas que possam ser representados por equações polinomiais de 2º grau do tipo ax2 = b." },
        { codigo: "EF08MA10", descricao: "Identificar a regularidade de uma sequência numérica ou figural não recursiva e construir um algoritmo por meio de um fluxograma que permita indicar os números ou as figuras seguintes." },
        { codigo: "EF08MA11", descricao: "Identificar a regularidade de uma sequência numérica recursiva e construir um algoritmo por meio de um fluxograma que permita indicar os números seguintes." },
        { codigo: "EF08MA12", descricao: "Identificar a natureza da variação de duas grandezas, diretamente, inversamente proporcionais ou não proporcionais, expressando a relação existente por meio de sentença algébrica e representá-la no plano cartesiano." },
        { codigo: "EF08MA13", descricao: "Resolver e elaborar problemas que envolvam grandezas diretamente ou inversamente proporcionais, por meio de estratégias variadas." },
    ],
    [U3]: [
        { codigo: "EF08MA14", descricao: "Demonstrar propriedades de quadriláteros por meio da identificação da congruência de triângulos." },
        { codigo: "EF08MA15", descricao: "Construir, utilizando instrumentos de desenho ou softwares de geometria dinâmica, mediatriz, bissetriz, ângulos de 90°, 60°, 45° e 30° e polígonos regulares." },
        { codigo: "EF08MA16", descricao: "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um hexágono regular de qualquer área, a partir da medida do ângulo central e da utilização de esquadros e compasso." },
        { codigo: "EF08MA17", descricao: "Aplicar os conceitos de mediatriz e bissetriz como lugares geométricos na resolução de problemas." },
        { codigo: "EF08MA18", descricao: "Reconhecer e construir figuras obtidas por composições de transformações geométricas (translação, reflexão e rotação), com o uso de instrumentos de desenho ou de softwares de geometria dinâmica." },
    ],
    [U4]: [
        { codigo: "EF08MA19", descricao: "Resolver e elaborar problemas que envolvam medidas de área de figuras geométricas, utilizando expressões de cálculo de área (quadriláteros, triângulos e círculos), em situações como determinar medida de terrenos." },
        { codigo: "EF08MA20", descricao: "Reconhecer a relação entre um litro e um decímetro cúbico e a relação entre litro e metro cúbico, para resolver problemas de cálculo de capacidade de recipientes." },
        { codigo: "EF08MA21", descricao: "Resolver e elaborar problemas que envolvam o cálculo do volume de recipiente cujo formato é o de um bloco retangular." },
    ],
    [U5]: [
        { codigo: "EF08MA22", descricao: "Calcular a probabilidade de eventos, com base na construção do espaço amostral, utilizando o princípio multiplicativo, e reconhecer que a soma das probabilidades de todos os elementos do espaço amostral é igual a 1." },
        { codigo: "EF08MA23", descricao: "Avaliar a adequação de diferentes tipos de gráficos para representar um conjunto de dados de uma pesquisa." },
        { codigo: "EF08MA24", descricao: "Classificar as frequências de uma variável contínua de uma pesquisa em classes, de modo que resumam os dados de maneira adequada para a tomada de decisões." },
        { codigo: "EF08MA25", descricao: "Obter os valores de medidas de tendência central de uma pesquisa estatística (média, moda e mediana) com a compreensão de seus significados e relacioná-los com a dispersão de dados, indicada pela amplitude." },
        { codigo: "EF08MA26", descricao: "Selecionar razões, de diferentes naturezas (física, ética ou econômica), que justificam a realização de pesquisas amostrais e não censitárias, e reconhecer que a seleção da amostra pode ser feita de diferentes maneiras (amostra casual simples, sistemática e estratificada)." },
        { codigo: "EF08MA27", descricao: "Planejar e executar pesquisa amostral, selecionando uma técnica de amostragem adequada, e escrever relatório que contenha os gráficos apropriados para representar os conjuntos de dados, destacando aspectos como as medidas de tendência central, a amplitude e as conclusões." },
    ],
};
const H_09 = {
    [U1]: [
        { codigo: "EF09MA01", descricao: "Reconhecer que, uma vez fixada uma unidade de comprimento, existem segmentos de reta cujo comprimento não é expresso por número racional (como as medidas de diagonais de um polígono e alturas de um triângulo, quando se toma a medida de cada lado como unidade)." },
        { codigo: "EF09MA02", descricao: "Reconhecer um número irracional como um número real cuja representação decimal é infinita e não periódica, e estimar a localização de alguns deles na reta numérica." },
    ],
    [U2]: [
        { codigo: "EF09MA03", descricao: "Efetuar cálculos com números reais, inclusive potências com expoentes fracionários." },
        { codigo: "EF09MA04", descricao: "Resolver e elaborar problemas com números reais, inclusive em notação científica, envolvendo diferentes operações." },
        { codigo: "EF09MA05", descricao: "Resolver e elaborar problemas que envolvam porcentagens, com a ideia de aplicação de percentuais sucessivos e a determinação das taxas percentuais, preferencialmente com o uso de tecnologias digitais, no contexto da educação financeira." },
        { codigo: "EF09MA06", descricao: "Compreender as funções como relações de dependência unívoca entre duas variáveis e suas representações numérica, algébrica e gráfica e utilizar esse conceito para analisar situações que envolvam relações funcionais entre duas variáveis." },
        { codigo: "EF09MA07", descricao: "Resolver problemas que envolvam a razão entre duas grandezas de espécies diferentes, como velocidade e densidade demográfica." },
        { codigo: "EF09MA08", descricao: "Resolver e elaborar problemas que envolvam relações de proporcionalidade direta e inversa entre duas ou mais grandezas, inclusive escalas, divisão em partes proporcionais e taxa de variação, em contextos socioculturais, ambientais e de outras áreas." },
        { codigo: "EF09MA09", descricao: "Compreender os processos de fatoração de expressões algébricas, com base em suas relações com os produtos notáveis, para resolver e elaborar problemas que possam ser representados por equações polinomiais do 2º grau." },
    ],
    [U3]: [
        { codigo: "EF09MA10", descricao: "Demonstrar relações simples entre os ângulos formados por retas paralelas cortadas por uma transversal." },
        { codigo: "EF09MA11", descricao: "Resolver problemas por meio do estabelecimento de relações entre arcos, ângulos centrais e ângulos inscritos na circunferência, fazendo uso, inclusive, de softwares de geometria dinâmica." },
        { codigo: "EF09MA12", descricao: "Reconhecer as condições necessárias e suficientes para que dois triângulos sejam semelhantes." },
        { codigo: "EF09MA13", descricao: "Demonstrar relações métricas do triângulo retângulo, entre elas o teorema de Pitágoras, utilizando, inclusive, a semelhança de triângulos." },
        { codigo: "EF09MA14", descricao: "Resolver e elaborar problemas de aplicação do teorema de Pitágoras ou das relações de proporcionalidade envolvendo retas paralelas cortadas por secantes." },
        { codigo: "EF09MA15", descricao: "Descrever, por escrito e por meio de um fluxograma, um algoritmo para a construção de um polígono regular cuja medida do lado é conhecida, utilizando régua e compasso, como também softwares." },
        { codigo: "EF09MA16", descricao: "Determinar o ponto médio de um segmento de reta e a distância entre dois pontos quaisquer, dadas as coordenadas desses pontos no plano cartesiano, sem o uso de fórmulas, e utilizar esse conhecimento para calcular, por exemplo, medidas de perímetros e áreas de figuras planas construídas no plano." },
    ],
    [U4]: [
        { codigo: "EF09MA17", descricao: "Reconhecer vistas ortogonais de figuras espaciais e aplicar esse conhecimento para desenhar objetos em perspectiva." },
        { codigo: "EF09MA18", descricao: "Reconhecer e empregar unidades usadas para expressar medidas muito grandes ou muito pequenas, tais como distância entre planetas e sistemas solares, tamanho de vírus ou de células, capacidade de armazenamento de computadores, entre outros." },
        { codigo: "EF09MA19", descricao: "Resolver e elaborar problemas que envolvam medidas de volumes de prismas e de cilindros retos, inclusive com uso de expressões de cálculo, em situações cotidianas." },
    ],
    [U5]: [
        { codigo: "EF09MA20", descricao: "Reconhecer, em experimentos aleatórios, eventos independentes e dependentes e calcular a probabilidade de sua ocorrência, nos dois casos." },
        { codigo: "EF09MA21", descricao: "Analisar e identificar, em gráficos divulgados pela mídia, os elementos que podem induzir, às vezes propositadamente, erros de leitura, como escalas inapropriadas, legendas não explicitadas corretamente, omissão de informações importantes (fontes e datas), entre outros." },
        { codigo: "EF09MA22", descricao: "Escolher e construir o gráfico mais adequado (colunas, setores, linhas), com ou sem uso de planilhas eletrônicas, para apresentar um determinado conjunto de dados, destacando aspectos como as medidas de tendência central." },
        { codigo: "EF09MA23", descricao: "Planejar e executar pesquisa amostral envolvendo tema da realidade social e comunicar os resultados por meio de relatório contendo avaliação de medidas de tendência central e da amplitude, tabelas e gráficos adequados, construídos com o apoio de planilhas eletrônicas. 319 CIÊNCIAS DA NATUREZA ENSINO FUNDAMENTAL 4.3. A ÁREA DE CIÊNCIAS DA NATUREZA A sociedade contemporânea está fortemente organizada com base no desenvolvimento científico e tecnológico. Da metalurgia, que produziu ferramentas e armas, passando por máquinas e motores automati- zados, até os atuais chips semicondutores, ciência e tecnologia vêm se desenvolvendo de forma integrada com os modos de vida que as diversas sociedades humanas organizaram ao longo da história. No entanto, o mesmo desenvolvimento científico e tecnológico que resulta em novos ou melhores produtos e serviços também pode promover desequilíbrios na natureza e na sociedade. Para debater e tomar posição sobre alimentos, medicamentos, com- bustíveis, transportes, comunicações, contracepção, saneamento e manutenção da vida na Terra, entre muitos outros temas, são impres- cindíveis tanto conhecimentos éticos, políticos e culturais quanto científicos. Isso por si só já justifica, na educação formal, a presença da área de Ciências da Natureza, e de seu compromisso com a formação integral dos alunos. Portanto, ao longo do Ensino Fundamental, a área de Ciências da Natu- reza tem um compromisso com o desenvolvimento do letramento científico, que envolve a capacidade de compreender e interpretar o mundo (natural, social e tecnológico), mas também de transformá-lo com base nos aportes teóricos e processuais das ciências. Em outras palavras, apreender ciência não é a finalidade última do letramento, mas, sim, o desenvolvimento da capacidade de atuação no e sobre o mundo, importante ao exercício pleno da cidadania. Nessa perspectiva, a área de Ciências da Natureza, por meio de um olhar articulado de diversos campos do saber, precisa assegurar aos alunos do Ensino Fundamental o acesso à diversidade de conhe- cimentos científicos produzidos ao longo da história, bem como a aproximação gradativa aos principais processos, práticas e proce- dimentos da investigação científica. Espera-se, desse modo, possibilitar que esses alunos tenham um novo olhar sobre o mundo que os cerca, como também façam escolhas e intervenções conscientes e pautadas nos princípios da sustentabili- dade e do bem comum." },
    ],
};

function mapaObjetos(objetos, habilidades) {
    const mapa = {};
    objetos.forEach(o => { mapa[o] = habilidades; });
    return mapa;
}

function habilidadesDoAno(objetosPorUnidade, habilidadesPorUnidade) {
    const resultado = {};
    Object.entries(objetosPorUnidade).forEach(([unidade, objetos]) => {
        resultado[unidade] = mapaObjetos(objetos, habilidadesPorUnidade[unidade]);
    });
    return resultado;
}

// === BANCO DE HABILIDADES COMPLETO DA BNCC - MATEMÁTICA ===
export const habilidadesBNCC = {
    "1º Ano": habilidadesDoAno(OBJ_01, H_01),
    "2º Ano": habilidadesDoAno(OBJ_02, H_02),
    "3º Ano": habilidadesDoAno(OBJ_03, H_03),
    "4º Ano": habilidadesDoAno(OBJ_04, H_04),
    "5º Ano": habilidadesDoAno(OBJ_05, H_05),
    "6º Ano": habilidadesDoAno(OBJ_06, H_06),
    "7º Ano": habilidadesDoAno(OBJ_07, H_07),
    "8º Ano": habilidadesDoAno(OBJ_08, H_08),
    "9º Ano": habilidadesDoAno(OBJ_09, H_09),
};
