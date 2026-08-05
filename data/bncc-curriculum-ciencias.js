// Prof GB — Dados da BNCC (Ciências), Ensino Fundamental.
// Fonte: API pública do bncc.dev (https://bncc.dev, https://api.bncc.dev),
// dados verificados contra os documentos oficiais do MEC. Gerado
// programaticamente em 2026-08-05 a partir de
// /v1/habilidades?etapa=EF&componente=CI (111 habilidades).
// Cada Objeto de Conhecimento carrega só as habilidades que realmente
// pertencem a ele (mapeamento vindo direto da API) — diferente da versão
// anterior, extraída manualmente do PDF, que não conseguia separar
// habilidade por objeto dentro de uma mesma Unidade Temática e por isso
// repetia a lista inteira da unidade em cada objeto.

export const unidadesPorAno = {
    "1º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "2º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "3º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "4º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "5º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "6º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "7º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "8º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ],
    "9º Ano": [
        "Matéria e energia",
        "Vida e evolução",
        "Terra e Universo"
    ]
};

export const especificacoesPorUnidade = {
    "1º Ano": {
        "Matéria e energia": [
            "Características dos materiais"
        ],
        "Vida e evolução": [
            "Corpo humano",
            "Respeito à diversidade"
        ],
        "Terra e Universo": [
            "Escalas de tempo"
        ]
    },
    "2º Ano": {
        "Matéria e energia": [
            "Propriedades e usos dos materiais",
            "Prevenção de acidentes domésticos"
        ],
        "Vida e evolução": [
            "Seres vivos no ambiente",
            "Plantas"
        ],
        "Terra e Universo": [
            "Movimento aparente do Sol no céu",
            "O Sol como fonte de luz e calor"
        ]
    },
    "3º Ano": {
        "Matéria e energia": [
            "Produção de som",
            "Efeitos da luz nos materiais",
            "Saúde auditiva e visual"
        ],
        "Vida e evolução": [
            "Características e desenvolvimento dos animais"
        ],
        "Terra e Universo": [
            "Características da Terra",
            "Observação do céu",
            "Usos do solo"
        ]
    },
    "4º Ano": {
        "Matéria e energia": [
            "Misturas",
            "Transformações reversíveis e não reversíveis"
        ],
        "Vida e evolução": [
            "Cadeias alimentares simples",
            "Microrganismos"
        ],
        "Terra e Universo": [
            "Pontos cardeais",
            "Calendários, fenômenos cíclicos e cultura"
        ]
    },
    "5º Ano": {
        "Matéria e energia": [
            "Propriedades físicas dos materiais",
            "Ciclo hidrológico",
            "Consumo consciente",
            "Reciclagem"
        ],
        "Vida e evolução": [
            "Nutrição do organismo",
            "Hábitos alimentares",
            "Integração entre os sistemas digestório, respiratório e circulatório"
        ],
        "Terra e Universo": [
            "Constelações e mapas celestes",
            "Movimento de rotação da Terra",
            "Periodicidade das fases da Lua",
            "Instrumentos óticos"
        ]
    },
    "6º Ano": {
        "Matéria e energia": [
            "Misturas homogêneas e heterogêneas",
            "Separação de materiais",
            "Materiais sintéticos",
            "Transformações químicas"
        ],
        "Vida e evolução": [
            "Célula como unidade da vida",
            "Interação entre os sistemas locomotor e nervoso",
            "Lentes corretivas"
        ],
        "Terra e Universo": [
            "Forma, estrutura e movimentos da Terra"
        ]
    },
    "7º Ano": {
        "Matéria e energia": [
            "Máquinas simples",
            "Formas de propagação do calor",
            "Equilíbrio termodinâmico e vida na Terra",
            "História dos combustíveis e das máquinas térmicas"
        ],
        "Vida e evolução": [
            "Diversidade de ecossistemas",
            "Fenômenos naturais e impactos ambientais",
            "Programas e indicadores de saúde pública"
        ],
        "Terra e Universo": [
            "Composição do ar",
            "Efeito estufa",
            "Camada de ozônio",
            "Fenômenos naturais (vulcões, terremotos e",
            "tsunamis)",
            "Placas tectônicas e deriva continental"
        ]
    },
    "8º Ano": {
        "Matéria e energia": [
            "Fontes e tipos de energia",
            "Transformação de energia",
            "Cálculo de consumo de energia elétrica",
            "Circuitos elétricos",
            "Uso consciente de energia elétrica"
        ],
        "Vida e evolução": [
            "Mecanismos reprodutivos",
            "Sexualidade"
        ],
        "Terra e Universo": [
            "Sistema Sol, Terra e Lua",
            "Clima"
        ]
    },
    "9º Ano": {
        "Matéria e energia": [
            "Aspectos quantitativos das transformações químicas",
            "Estrutura da matéria",
            "Radiações e suas aplicações na saúde"
        ],
        "Vida e evolução": [
            "Hereditariedade",
            "Ideias evolucionistas",
            "Preservação da biodiversidade"
        ],
        "Terra e Universo": [
            "Composição, estrutura e localização do Sistema Solar no Universo",
            "Astronomia e cultura",
            "Vida humana fora da Terra",
            "Ordem de grandeza astronômica",
            "Evolução estelar"
        ]
    }
};

export const habilidadesBNCC = {
    "1º Ano": {
        "Matéria e energia": {
            "Características dos materiais": [
                {
                    "codigo": "EF01CI01",
                    "descricao": "Comparar características de diferentes materiais presentes em objetos de uso cotidiano, discutindo sua origem, os modos como são descartados e como podem ser usados de forma mais consciente."
                }
            ]
        },
        "Vida e evolução": {
            "Corpo humano": [
                {
                    "codigo": "EF01CI02",
                    "descricao": "Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções."
                },
                {
                    "codigo": "EF01CI03",
                    "descricao": "Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde."
                },
                {
                    "codigo": "EF01CI04",
                    "descricao": "Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças."
                }
            ],
            "Respeito à diversidade": [
                {
                    "codigo": "EF01CI02",
                    "descricao": "Localizar, nomear e representar graficamente (por meio de desenhos) partes do corpo humano e explicar suas funções."
                },
                {
                    "codigo": "EF01CI03",
                    "descricao": "Discutir as razões pelas quais os hábitos de higiene do corpo (lavar as mãos antes de comer, escovar os dentes, limpar os olhos, o nariz e as orelhas etc.) são necessários para a manutenção da saúde."
                },
                {
                    "codigo": "EF01CI04",
                    "descricao": "Comparar características físicas entre os colegas, reconhecendo a diversidade e a importância da valorização, do acolhimento e do respeito às diferenças."
                }
            ]
        },
        "Terra e Universo": {
            "Escalas de tempo": [
                {
                    "codigo": "EF01CI05",
                    "descricao": "Identificar e nomear diferentes escalas de tempo: os períodos diários (manhã, tarde, noite) e a sucessão de dias, semanas, meses e anos."
                },
                {
                    "codigo": "EF01CI06",
                    "descricao": "Selecionar exemplos de como a sucessão de dias e noites orienta o ritmo de atividades diárias de seres humanos e de outros seres vivos."
                }
            ]
        }
    },
    "2º Ano": {
        "Matéria e energia": {
            "Propriedades e usos dos materiais": [
                {
                    "codigo": "EF02CI01",
                    "descricao": "Identificar de que materiais (metais, madeira, vidro etc.) são feitos os objetos que fazem parte da vida cotidiana, como esses objetos são utilizados e com quais materiais eram produzidos no passado."
                },
                {
                    "codigo": "EF02CI02",
                    "descricao": "Propor o uso de diferentes materiais para a construção de objetos de uso cotidiano, tendo em vista algumas propriedades desses materiais (flexibilidade, dureza, transparência etc.)."
                },
                {
                    "codigo": "EF02CI03",
                    "descricao": "Discutir os cuidados necessários à prevenção de acidentes domésticos (objetos cortantes e inflamáveis, eletricidade, produtos de limpeza, medicamentos etc.)."
                }
            ],
            "Prevenção de acidentes domésticos": [
                {
                    "codigo": "EF02CI01",
                    "descricao": "Identificar de que materiais (metais, madeira, vidro etc.) são feitos os objetos que fazem parte da vida cotidiana, como esses objetos são utilizados e com quais materiais eram produzidos no passado."
                },
                {
                    "codigo": "EF02CI02",
                    "descricao": "Propor o uso de diferentes materiais para a construção de objetos de uso cotidiano, tendo em vista algumas propriedades desses materiais (flexibilidade, dureza, transparência etc.)."
                },
                {
                    "codigo": "EF02CI03",
                    "descricao": "Discutir os cuidados necessários à prevenção de acidentes domésticos (objetos cortantes e inflamáveis, eletricidade, produtos de limpeza, medicamentos etc.)."
                }
            ]
        },
        "Vida e evolução": {
            "Seres vivos no ambiente": [
                {
                    "codigo": "EF02CI04",
                    "descricao": "Descrever características de plantas e animais (tamanho, forma, cor, fase da vida, local onde se desenvolvem etc.) que fazem parte de seu cotidiano e relacioná-las ao ambiente em que eles vivem."
                },
                {
                    "codigo": "EF02CI05",
                    "descricao": "Investigar a importância da água e da luz para a manutenção da vida de plantas em geral."
                },
                {
                    "codigo": "EF02CI06",
                    "descricao": "Identificar as principais partes de uma planta (raiz, caule, folhas, flores e frutos) e a função desempenhada por cada uma delas, e analisar as relações entre as plantas, o ambiente e os demais seres vivos."
                }
            ],
            "Plantas": [
                {
                    "codigo": "EF02CI04",
                    "descricao": "Descrever características de plantas e animais (tamanho, forma, cor, fase da vida, local onde se desenvolvem etc.) que fazem parte de seu cotidiano e relacioná-las ao ambiente em que eles vivem."
                },
                {
                    "codigo": "EF02CI05",
                    "descricao": "Investigar a importância da água e da luz para a manutenção da vida de plantas em geral."
                },
                {
                    "codigo": "EF02CI06",
                    "descricao": "Identificar as principais partes de uma planta (raiz, caule, folhas, flores e frutos) e a função desempenhada por cada uma delas, e analisar as relações entre as plantas, o ambiente e os demais seres vivos."
                }
            ]
        },
        "Terra e Universo": {
            "Movimento aparente do Sol no céu": [
                {
                    "codigo": "EF02CI07",
                    "descricao": "Descrever as posições do Sol em diversos horários do dia e associá-las ao tamanho da sombra projetada."
                },
                {
                    "codigo": "EF02CI08",
                    "descricao": "Comparar o efeito da radiação solar (aquecimento e reflexão) em diferentes tipos de superfície (água, areia, solo, superfícies escura, clara e metálica etc.)."
                }
            ],
            "O Sol como fonte de luz e calor": [
                {
                    "codigo": "EF02CI07",
                    "descricao": "Descrever as posições do Sol em diversos horários do dia e associá-las ao tamanho da sombra projetada."
                },
                {
                    "codigo": "EF02CI08",
                    "descricao": "Comparar o efeito da radiação solar (aquecimento e reflexão) em diferentes tipos de superfície (água, areia, solo, superfícies escura, clara e metálica etc.)."
                }
            ]
        }
    },
    "3º Ano": {
        "Matéria e energia": {
            "Produção de som": [
                {
                    "codigo": "EF03CI01",
                    "descricao": "Produzir diferentes sons a partir da vibração de variados objetos e identificar variáveis que influem nesse fenômeno."
                },
                {
                    "codigo": "EF03CI02",
                    "descricao": "Experimentar e relatar o que ocorre com a passagem da luz através de objetos transparentes (copos, janelas de vidro, lentes, prismas, água etc.), no contato com superfícies polidas (espelhos) e na intersecção com objetos opacos (paredes, pratos, pessoas e outros objetos de uso cotidiano)."
                },
                {
                    "codigo": "EF03CI03",
                    "descricao": "Discutir hábitos necessários para a manutenção da saúde auditiva e visual considerando as condições do ambiente em termos de som e luz."
                }
            ],
            "Efeitos da luz nos materiais": [
                {
                    "codigo": "EF03CI01",
                    "descricao": "Produzir diferentes sons a partir da vibração de variados objetos e identificar variáveis que influem nesse fenômeno."
                },
                {
                    "codigo": "EF03CI02",
                    "descricao": "Experimentar e relatar o que ocorre com a passagem da luz através de objetos transparentes (copos, janelas de vidro, lentes, prismas, água etc.), no contato com superfícies polidas (espelhos) e na intersecção com objetos opacos (paredes, pratos, pessoas e outros objetos de uso cotidiano)."
                },
                {
                    "codigo": "EF03CI03",
                    "descricao": "Discutir hábitos necessários para a manutenção da saúde auditiva e visual considerando as condições do ambiente em termos de som e luz."
                }
            ],
            "Saúde auditiva e visual": [
                {
                    "codigo": "EF03CI01",
                    "descricao": "Produzir diferentes sons a partir da vibração de variados objetos e identificar variáveis que influem nesse fenômeno."
                },
                {
                    "codigo": "EF03CI02",
                    "descricao": "Experimentar e relatar o que ocorre com a passagem da luz através de objetos transparentes (copos, janelas de vidro, lentes, prismas, água etc.), no contato com superfícies polidas (espelhos) e na intersecção com objetos opacos (paredes, pratos, pessoas e outros objetos de uso cotidiano)."
                },
                {
                    "codigo": "EF03CI03",
                    "descricao": "Discutir hábitos necessários para a manutenção da saúde auditiva e visual considerando as condições do ambiente em termos de som e luz."
                }
            ]
        },
        "Vida e evolução": {
            "Características e desenvolvimento dos animais": [
                {
                    "codigo": "EF03CI04",
                    "descricao": "Identificar características sobre o modo de vida (o que comem, como se reproduzem, como se deslocam etc.) dos animais mais comuns no ambiente próximo."
                },
                {
                    "codigo": "EF03CI05",
                    "descricao": "Descrever e comunicar as alterações que ocorrem desde o nascimento em animais de diferentes meios terrestres ou aquáticos, inclusive o homem."
                },
                {
                    "codigo": "EF03CI06",
                    "descricao": "Comparar alguns animais e organizar grupos com base em características externas comuns (presença de penas, pelos, escamas, bico, garras, antenas, patas etc.)."
                }
            ]
        },
        "Terra e Universo": {
            "Características da Terra": [
                {
                    "codigo": "EF03CI07",
                    "descricao": "Identificar características da Terra (como seu formato esférico, a presença de água, solo etc.), com base na observação, manipulação e comparação de diferentes formas de representação do planeta (mapas, globos, fotografias etc.)."
                },
                {
                    "codigo": "EF03CI08",
                    "descricao": "Observar, identificar e registrar os períodos diários (dia e/ou noite) em que o Sol, demais estrelas, Lua e planetas estão visíveis no céu."
                },
                {
                    "codigo": "EF03CI09",
                    "descricao": "Comparar diferentes amostras de solo do entorno da escola com base em características como cor, textura, cheiro, tamanho das partículas, permeabilidade etc."
                },
                {
                    "codigo": "EF03CI10",
                    "descricao": "Identificar os diferentes usos do solo (plantação e extração de materiais, dentre outras possibilidades), reconhecendo a importância do solo para a agricultura e para a vida."
                }
            ],
            "Observação do céu": [
                {
                    "codigo": "EF03CI07",
                    "descricao": "Identificar características da Terra (como seu formato esférico, a presença de água, solo etc.), com base na observação, manipulação e comparação de diferentes formas de representação do planeta (mapas, globos, fotografias etc.)."
                },
                {
                    "codigo": "EF03CI08",
                    "descricao": "Observar, identificar e registrar os períodos diários (dia e/ou noite) em que o Sol, demais estrelas, Lua e planetas estão visíveis no céu."
                },
                {
                    "codigo": "EF03CI09",
                    "descricao": "Comparar diferentes amostras de solo do entorno da escola com base em características como cor, textura, cheiro, tamanho das partículas, permeabilidade etc."
                },
                {
                    "codigo": "EF03CI10",
                    "descricao": "Identificar os diferentes usos do solo (plantação e extração de materiais, dentre outras possibilidades), reconhecendo a importância do solo para a agricultura e para a vida."
                }
            ],
            "Usos do solo": [
                {
                    "codigo": "EF03CI07",
                    "descricao": "Identificar características da Terra (como seu formato esférico, a presença de água, solo etc.), com base na observação, manipulação e comparação de diferentes formas de representação do planeta (mapas, globos, fotografias etc.)."
                },
                {
                    "codigo": "EF03CI08",
                    "descricao": "Observar, identificar e registrar os períodos diários (dia e/ou noite) em que o Sol, demais estrelas, Lua e planetas estão visíveis no céu."
                },
                {
                    "codigo": "EF03CI09",
                    "descricao": "Comparar diferentes amostras de solo do entorno da escola com base em características como cor, textura, cheiro, tamanho das partículas, permeabilidade etc."
                },
                {
                    "codigo": "EF03CI10",
                    "descricao": "Identificar os diferentes usos do solo (plantação e extração de materiais, dentre outras possibilidades), reconhecendo a importância do solo para a agricultura e para a vida."
                }
            ]
        }
    },
    "4º Ano": {
        "Matéria e energia": {
            "Misturas": [
                {
                    "codigo": "EF04CI01",
                    "descricao": "Identificar misturas na vida diária, com base em suas propriedades físicas observáveis, reconhecendo sua composição."
                },
                {
                    "codigo": "EF04CI02",
                    "descricao": "Testar e relatar transformações nos materiais do dia a dia quando expostos a diferentes condições (aquecimento, resfriamento, luz e umidade)."
                },
                {
                    "codigo": "EF04CI03",
                    "descricao": "Concluir que algumas mudanças causadas por aquecimento ou resfriamento são reversíveis (como as mudanças de estado físico da água) e outras não (como o cozimento do ovo, a queima do papel etc.)."
                }
            ],
            "Transformações reversíveis e não reversíveis": [
                {
                    "codigo": "EF04CI01",
                    "descricao": "Identificar misturas na vida diária, com base em suas propriedades físicas observáveis, reconhecendo sua composição."
                },
                {
                    "codigo": "EF04CI02",
                    "descricao": "Testar e relatar transformações nos materiais do dia a dia quando expostos a diferentes condições (aquecimento, resfriamento, luz e umidade)."
                },
                {
                    "codigo": "EF04CI03",
                    "descricao": "Concluir que algumas mudanças causadas por aquecimento ou resfriamento são reversíveis (como as mudanças de estado físico da água) e outras não (como o cozimento do ovo, a queima do papel etc.)."
                }
            ]
        },
        "Vida e evolução": {
            "Cadeias alimentares simples": [
                {
                    "codigo": "EF04CI04",
                    "descricao": "Analisar e construir cadeias alimentares simples, reconhecendo a posição ocupada pelos seres vivos nessas cadeias e o papel do Sol como fonte primária de energia na produção de alimentos."
                },
                {
                    "codigo": "EF04CI05",
                    "descricao": "Descrever e destacar semelhanças e diferenças entre o ciclo da matéria e o fluxo de energia entre os componentes vivos e não vivos de um ecossistema."
                },
                {
                    "codigo": "EF04CI06",
                    "descricao": "Relacionar a participação de fungos e bactérias no processo de decomposição, reconhecendo a importância ambiental desse processo."
                },
                {
                    "codigo": "EF04CI07",
                    "descricao": "Verificar a participação de microrganismos na produção de alimentos, combustíveis, medicamentos, entre outros."
                },
                {
                    "codigo": "EF04CI08",
                    "descricao": "Propor, a partir do conhecimento das formas de transmissão de alguns microrganismos (vírus, bactérias e protozoários), atitudes e medidas adequadas para prevenção de doenças a eles associadas."
                }
            ],
            "Microrganismos": [
                {
                    "codigo": "EF04CI04",
                    "descricao": "Analisar e construir cadeias alimentares simples, reconhecendo a posição ocupada pelos seres vivos nessas cadeias e o papel do Sol como fonte primária de energia na produção de alimentos."
                },
                {
                    "codigo": "EF04CI05",
                    "descricao": "Descrever e destacar semelhanças e diferenças entre o ciclo da matéria e o fluxo de energia entre os componentes vivos e não vivos de um ecossistema."
                },
                {
                    "codigo": "EF04CI06",
                    "descricao": "Relacionar a participação de fungos e bactérias no processo de decomposição, reconhecendo a importância ambiental desse processo."
                },
                {
                    "codigo": "EF04CI07",
                    "descricao": "Verificar a participação de microrganismos na produção de alimentos, combustíveis, medicamentos, entre outros."
                },
                {
                    "codigo": "EF04CI08",
                    "descricao": "Propor, a partir do conhecimento das formas de transmissão de alguns microrganismos (vírus, bactérias e protozoários), atitudes e medidas adequadas para prevenção de doenças a eles associadas."
                }
            ]
        },
        "Terra e Universo": {
            "Pontos cardeais": [
                {
                    "codigo": "EF04CI09",
                    "descricao": "Identificar os pontos cardeais, com base no registro de diferentes posições relativas do Sol e da sombra de uma vara (gnômon)."
                },
                {
                    "codigo": "EF04CI10",
                    "descricao": "Comparar as indicações dos pontos cardeais resultantes da observação das sombras de uma vara (gnômon) com aquelas obtidas por meio de uma bússola."
                },
                {
                    "codigo": "EF04CI11",
                    "descricao": "Associar os movimentos cíclicos da Lua e da Terra a períodos de tempo regulares e ao uso desse conhecimento para a construção de calendários em diferentes culturas."
                }
            ],
            "Calendários, fenômenos cíclicos e cultura": [
                {
                    "codigo": "EF04CI09",
                    "descricao": "Identificar os pontos cardeais, com base no registro de diferentes posições relativas do Sol e da sombra de uma vara (gnômon)."
                },
                {
                    "codigo": "EF04CI10",
                    "descricao": "Comparar as indicações dos pontos cardeais resultantes da observação das sombras de uma vara (gnômon) com aquelas obtidas por meio de uma bússola."
                },
                {
                    "codigo": "EF04CI11",
                    "descricao": "Associar os movimentos cíclicos da Lua e da Terra a períodos de tempo regulares e ao uso desse conhecimento para a construção de calendários em diferentes culturas."
                }
            ]
        }
    },
    "5º Ano": {
        "Matéria e energia": {
            "Propriedades físicas dos materiais": [
                {
                    "codigo": "EF05CI01",
                    "descricao": "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais – como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras."
                },
                {
                    "codigo": "EF05CI02",
                    "descricao": "Aplicar os conhecimentos sobre as mudanças de estado físico da água para explicar o ciclo hidrológico e analisar suas implicações na agricultura, no clima, na geração de energia elétrica, no provimento de água potável e no equilíbrio dos ecossistemas regionais (ou locais)."
                },
                {
                    "codigo": "EF05CI03",
                    "descricao": "Selecionar argumentos que justifiquem a importância da cobertura vegetal para a manutenção do ciclo da água, a conservação dos solos, dos cursos de água e da qualidade do ar atmosférico."
                },
                {
                    "codigo": "EF05CI04",
                    "descricao": "Identificar os principais usos da água e de outros materiais nas atividades cotidianas para discutir e propor formas sustentáveis de utilização desses recursos."
                },
                {
                    "codigo": "EF05CI05",
                    "descricao": "Construir propostas coletivas para um consumo mais consciente e criar soluções tecnológicas para o descarte adequado e a reutilização ou reciclagem de materiais consumidos na escola e/ou na vida cotidiana."
                }
            ],
            "Ciclo hidrológico": [
                {
                    "codigo": "EF05CI01",
                    "descricao": "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais – como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras."
                },
                {
                    "codigo": "EF05CI02",
                    "descricao": "Aplicar os conhecimentos sobre as mudanças de estado físico da água para explicar o ciclo hidrológico e analisar suas implicações na agricultura, no clima, na geração de energia elétrica, no provimento de água potável e no equilíbrio dos ecossistemas regionais (ou locais)."
                },
                {
                    "codigo": "EF05CI03",
                    "descricao": "Selecionar argumentos que justifiquem a importância da cobertura vegetal para a manutenção do ciclo da água, a conservação dos solos, dos cursos de água e da qualidade do ar atmosférico."
                },
                {
                    "codigo": "EF05CI04",
                    "descricao": "Identificar os principais usos da água e de outros materiais nas atividades cotidianas para discutir e propor formas sustentáveis de utilização desses recursos."
                },
                {
                    "codigo": "EF05CI05",
                    "descricao": "Construir propostas coletivas para um consumo mais consciente e criar soluções tecnológicas para o descarte adequado e a reutilização ou reciclagem de materiais consumidos na escola e/ou na vida cotidiana."
                }
            ],
            "Consumo consciente": [
                {
                    "codigo": "EF05CI01",
                    "descricao": "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais – como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras."
                },
                {
                    "codigo": "EF05CI02",
                    "descricao": "Aplicar os conhecimentos sobre as mudanças de estado físico da água para explicar o ciclo hidrológico e analisar suas implicações na agricultura, no clima, na geração de energia elétrica, no provimento de água potável e no equilíbrio dos ecossistemas regionais (ou locais)."
                },
                {
                    "codigo": "EF05CI03",
                    "descricao": "Selecionar argumentos que justifiquem a importância da cobertura vegetal para a manutenção do ciclo da água, a conservação dos solos, dos cursos de água e da qualidade do ar atmosférico."
                },
                {
                    "codigo": "EF05CI04",
                    "descricao": "Identificar os principais usos da água e de outros materiais nas atividades cotidianas para discutir e propor formas sustentáveis de utilização desses recursos."
                },
                {
                    "codigo": "EF05CI05",
                    "descricao": "Construir propostas coletivas para um consumo mais consciente e criar soluções tecnológicas para o descarte adequado e a reutilização ou reciclagem de materiais consumidos na escola e/ou na vida cotidiana."
                }
            ],
            "Reciclagem": [
                {
                    "codigo": "EF05CI01",
                    "descricao": "Explorar fenômenos da vida cotidiana que evidenciem propriedades físicas dos materiais – como densidade, condutibilidade térmica e elétrica, respostas a forças magnéticas, solubilidade, respostas a forças mecânicas (dureza, elasticidade etc.), entre outras."
                },
                {
                    "codigo": "EF05CI02",
                    "descricao": "Aplicar os conhecimentos sobre as mudanças de estado físico da água para explicar o ciclo hidrológico e analisar suas implicações na agricultura, no clima, na geração de energia elétrica, no provimento de água potável e no equilíbrio dos ecossistemas regionais (ou locais)."
                },
                {
                    "codigo": "EF05CI03",
                    "descricao": "Selecionar argumentos que justifiquem a importância da cobertura vegetal para a manutenção do ciclo da água, a conservação dos solos, dos cursos de água e da qualidade do ar atmosférico."
                },
                {
                    "codigo": "EF05CI04",
                    "descricao": "Identificar os principais usos da água e de outros materiais nas atividades cotidianas para discutir e propor formas sustentáveis de utilização desses recursos."
                },
                {
                    "codigo": "EF05CI05",
                    "descricao": "Construir propostas coletivas para um consumo mais consciente e criar soluções tecnológicas para o descarte adequado e a reutilização ou reciclagem de materiais consumidos na escola e/ou na vida cotidiana."
                }
            ]
        },
        "Vida e evolução": {
            "Nutrição do organismo": [
                {
                    "codigo": "EF05CI06",
                    "descricao": "Selecionar argumentos que justifiquem por que os sistemas digestório e respiratório são considerados corresponsáveis pelo processo de nutrição do organismo, com base na identificação das funções desses sistemas."
                },
                {
                    "codigo": "EF05CI07",
                    "descricao": "Justificar a relação entre o funcionamento do sistema circulatório, a distribuição dos nutrientes pelo organismo e a eliminação dos resíduos produzidos."
                },
                {
                    "codigo": "EF05CI08",
                    "descricao": "Organizar um cardápio equilibrado com base nas características dos grupos alimentares (nutrientes e calorias) e nas necessidades individuais (atividades realizadas, idade, sexo etc.) para a manutenção da saúde do organismo."
                },
                {
                    "codigo": "EF05CI09",
                    "descricao": "Discutir a ocorrência de distúrbios nutricionais (como obesidade, subnutrição etc.) entre crianças e jovens a partir da análise de seus hábitos (tipos e quantidade de alimento ingerido, prática de atividade física etc.)."
                }
            ],
            "Hábitos alimentares": [
                {
                    "codigo": "EF05CI06",
                    "descricao": "Selecionar argumentos que justifiquem por que os sistemas digestório e respiratório são considerados corresponsáveis pelo processo de nutrição do organismo, com base na identificação das funções desses sistemas."
                },
                {
                    "codigo": "EF05CI07",
                    "descricao": "Justificar a relação entre o funcionamento do sistema circulatório, a distribuição dos nutrientes pelo organismo e a eliminação dos resíduos produzidos."
                },
                {
                    "codigo": "EF05CI08",
                    "descricao": "Organizar um cardápio equilibrado com base nas características dos grupos alimentares (nutrientes e calorias) e nas necessidades individuais (atividades realizadas, idade, sexo etc.) para a manutenção da saúde do organismo."
                },
                {
                    "codigo": "EF05CI09",
                    "descricao": "Discutir a ocorrência de distúrbios nutricionais (como obesidade, subnutrição etc.) entre crianças e jovens a partir da análise de seus hábitos (tipos e quantidade de alimento ingerido, prática de atividade física etc.)."
                }
            ],
            "Integração entre os sistemas digestório, respiratório e circulatório": [
                {
                    "codigo": "EF05CI06",
                    "descricao": "Selecionar argumentos que justifiquem por que os sistemas digestório e respiratório são considerados corresponsáveis pelo processo de nutrição do organismo, com base na identificação das funções desses sistemas."
                },
                {
                    "codigo": "EF05CI07",
                    "descricao": "Justificar a relação entre o funcionamento do sistema circulatório, a distribuição dos nutrientes pelo organismo e a eliminação dos resíduos produzidos."
                },
                {
                    "codigo": "EF05CI08",
                    "descricao": "Organizar um cardápio equilibrado com base nas características dos grupos alimentares (nutrientes e calorias) e nas necessidades individuais (atividades realizadas, idade, sexo etc.) para a manutenção da saúde do organismo."
                },
                {
                    "codigo": "EF05CI09",
                    "descricao": "Discutir a ocorrência de distúrbios nutricionais (como obesidade, subnutrição etc.) entre crianças e jovens a partir da análise de seus hábitos (tipos e quantidade de alimento ingerido, prática de atividade física etc.)."
                }
            ]
        },
        "Terra e Universo": {
            "Constelações e mapas celestes": [
                {
                    "codigo": "EF05CI10",
                    "descricao": "Identificar algumas constelações no céu, com o apoio de recursos (como mapas celestes e aplicativos digitais, entre outros), e os períodos do ano em que elas são visíveis no início da noite."
                },
                {
                    "codigo": "EF05CI11",
                    "descricao": "Associar o movimento diário do Sol e das demais estrelas no céu ao movimento de rotação da Terra."
                },
                {
                    "codigo": "EF05CI12",
                    "descricao": "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro das formas aparentes da Lua no céu ao longo de, pelo menos, dois meses."
                },
                {
                    "codigo": "EF05CI13",
                    "descricao": "Projetar e construir dispositivos para observação à distância (luneta, periscópio etc.), para observação ampliada de objetos (lupas, microscópios) ou para registro de imagens (máquinas fotográficas) e discutir usos sociais desses dispositivos."
                }
            ],
            "Movimento de rotação da Terra": [
                {
                    "codigo": "EF05CI10",
                    "descricao": "Identificar algumas constelações no céu, com o apoio de recursos (como mapas celestes e aplicativos digitais, entre outros), e os períodos do ano em que elas são visíveis no início da noite."
                },
                {
                    "codigo": "EF05CI11",
                    "descricao": "Associar o movimento diário do Sol e das demais estrelas no céu ao movimento de rotação da Terra."
                },
                {
                    "codigo": "EF05CI12",
                    "descricao": "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro das formas aparentes da Lua no céu ao longo de, pelo menos, dois meses."
                },
                {
                    "codigo": "EF05CI13",
                    "descricao": "Projetar e construir dispositivos para observação à distância (luneta, periscópio etc.), para observação ampliada de objetos (lupas, microscópios) ou para registro de imagens (máquinas fotográficas) e discutir usos sociais desses dispositivos."
                }
            ],
            "Periodicidade das fases da Lua": [
                {
                    "codigo": "EF05CI10",
                    "descricao": "Identificar algumas constelações no céu, com o apoio de recursos (como mapas celestes e aplicativos digitais, entre outros), e os períodos do ano em que elas são visíveis no início da noite."
                },
                {
                    "codigo": "EF05CI11",
                    "descricao": "Associar o movimento diário do Sol e das demais estrelas no céu ao movimento de rotação da Terra."
                },
                {
                    "codigo": "EF05CI12",
                    "descricao": "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro das formas aparentes da Lua no céu ao longo de, pelo menos, dois meses."
                },
                {
                    "codigo": "EF05CI13",
                    "descricao": "Projetar e construir dispositivos para observação à distância (luneta, periscópio etc.), para observação ampliada de objetos (lupas, microscópios) ou para registro de imagens (máquinas fotográficas) e discutir usos sociais desses dispositivos."
                }
            ],
            "Instrumentos óticos": [
                {
                    "codigo": "EF05CI10",
                    "descricao": "Identificar algumas constelações no céu, com o apoio de recursos (como mapas celestes e aplicativos digitais, entre outros), e os períodos do ano em que elas são visíveis no início da noite."
                },
                {
                    "codigo": "EF05CI11",
                    "descricao": "Associar o movimento diário do Sol e das demais estrelas no céu ao movimento de rotação da Terra."
                },
                {
                    "codigo": "EF05CI12",
                    "descricao": "Concluir sobre a periodicidade das fases da Lua, com base na observação e no registro das formas aparentes da Lua no céu ao longo de, pelo menos, dois meses."
                },
                {
                    "codigo": "EF05CI13",
                    "descricao": "Projetar e construir dispositivos para observação à distância (luneta, periscópio etc.), para observação ampliada de objetos (lupas, microscópios) ou para registro de imagens (máquinas fotográficas) e discutir usos sociais desses dispositivos."
                }
            ]
        }
    },
    "6º Ano": {
        "Matéria e energia": {
            "Misturas homogêneas e heterogêneas": [
                {
                    "codigo": "EF06CI01",
                    "descricao": "Classificar como homogênea ou heterogênea a mistura de dois ou mais materiais (água e sal, água e óleo, água e areia etc.)."
                },
                {
                    "codigo": "EF06CI02",
                    "descricao": "Identificar evidências de transformações químicas a partir do resultado de misturas de materiais que originam produtos diferentes dos que foram misturados (mistura de ingredientes para fazer um bolo, mistura de vinagre com bicarbonato de sódio etc.)."
                },
                {
                    "codigo": "EF06CI03",
                    "descricao": "Selecionar métodos mais adequados para a separação de diferentes sistemas heterogêneos a partir da identificação de processos de separação de materiais (como a produção de sal de cozinha, a destilação de petróleo, entre outros)."
                },
                {
                    "codigo": "EF06CI04",
                    "descricao": "Associar a produção de medicamentos e outros materiais sintéticos ao desenvolvimento científico e tecnológico, reconhecendo benefícios e avaliando impactos socioambientais."
                }
            ],
            "Separação de materiais": [
                {
                    "codigo": "EF06CI01",
                    "descricao": "Classificar como homogênea ou heterogênea a mistura de dois ou mais materiais (água e sal, água e óleo, água e areia etc.)."
                },
                {
                    "codigo": "EF06CI02",
                    "descricao": "Identificar evidências de transformações químicas a partir do resultado de misturas de materiais que originam produtos diferentes dos que foram misturados (mistura de ingredientes para fazer um bolo, mistura de vinagre com bicarbonato de sódio etc.)."
                },
                {
                    "codigo": "EF06CI03",
                    "descricao": "Selecionar métodos mais adequados para a separação de diferentes sistemas heterogêneos a partir da identificação de processos de separação de materiais (como a produção de sal de cozinha, a destilação de petróleo, entre outros)."
                },
                {
                    "codigo": "EF06CI04",
                    "descricao": "Associar a produção de medicamentos e outros materiais sintéticos ao desenvolvimento científico e tecnológico, reconhecendo benefícios e avaliando impactos socioambientais."
                }
            ],
            "Materiais sintéticos": [
                {
                    "codigo": "EF06CI01",
                    "descricao": "Classificar como homogênea ou heterogênea a mistura de dois ou mais materiais (água e sal, água e óleo, água e areia etc.)."
                },
                {
                    "codigo": "EF06CI02",
                    "descricao": "Identificar evidências de transformações químicas a partir do resultado de misturas de materiais que originam produtos diferentes dos que foram misturados (mistura de ingredientes para fazer um bolo, mistura de vinagre com bicarbonato de sódio etc.)."
                },
                {
                    "codigo": "EF06CI03",
                    "descricao": "Selecionar métodos mais adequados para a separação de diferentes sistemas heterogêneos a partir da identificação de processos de separação de materiais (como a produção de sal de cozinha, a destilação de petróleo, entre outros)."
                },
                {
                    "codigo": "EF06CI04",
                    "descricao": "Associar a produção de medicamentos e outros materiais sintéticos ao desenvolvimento científico e tecnológico, reconhecendo benefícios e avaliando impactos socioambientais."
                }
            ],
            "Transformações químicas": [
                {
                    "codigo": "EF06CI01",
                    "descricao": "Classificar como homogênea ou heterogênea a mistura de dois ou mais materiais (água e sal, água e óleo, água e areia etc.)."
                },
                {
                    "codigo": "EF06CI02",
                    "descricao": "Identificar evidências de transformações químicas a partir do resultado de misturas de materiais que originam produtos diferentes dos que foram misturados (mistura de ingredientes para fazer um bolo, mistura de vinagre com bicarbonato de sódio etc.)."
                },
                {
                    "codigo": "EF06CI03",
                    "descricao": "Selecionar métodos mais adequados para a separação de diferentes sistemas heterogêneos a partir da identificação de processos de separação de materiais (como a produção de sal de cozinha, a destilação de petróleo, entre outros)."
                },
                {
                    "codigo": "EF06CI04",
                    "descricao": "Associar a produção de medicamentos e outros materiais sintéticos ao desenvolvimento científico e tecnológico, reconhecendo benefícios e avaliando impactos socioambientais."
                }
            ]
        },
        "Vida e evolução": {
            "Célula como unidade da vida": [
                {
                    "codigo": "EF06CI05",
                    "descricao": "Explicar a organização básica das células e seu papel como unidade estrutural e funcional dos seres vivos."
                },
                {
                    "codigo": "EF06CI06",
                    "descricao": "Concluir, com base na análise de ilustrações e/ou modelos (físicos ou digitais), que os organismos são um complexo arranjo de sistemas com diferentes níveis de organização."
                },
                {
                    "codigo": "EF06CI07",
                    "descricao": "Justificar o papel do sistema nervoso na coordenação das ações motoras e sensoriais do corpo, com base na análise de suas estruturas básicas e respectivas funções."
                },
                {
                    "codigo": "EF06CI08",
                    "descricao": "Explicar a importância da visão (captação e interpretação das imagens) na interação do organismo com o meio e, com base no funcionamento do olho humano, selecionar lentes adequadas para a correção de diferentes defeitos da visão."
                },
                {
                    "codigo": "EF06CI09",
                    "descricao": "Deduzir que a estrutura, a sustentação e a movimentação dos animais resultam da interação entre os sistemas muscular, ósseo e nervoso."
                },
                {
                    "codigo": "EF06CI10",
                    "descricao": "Explicar como o funcionamento do sistema nervoso pode ser afetado por substâncias psicoativas."
                }
            ],
            "Interação entre os sistemas locomotor e nervoso": [
                {
                    "codigo": "EF06CI05",
                    "descricao": "Explicar a organização básica das células e seu papel como unidade estrutural e funcional dos seres vivos."
                },
                {
                    "codigo": "EF06CI06",
                    "descricao": "Concluir, com base na análise de ilustrações e/ou modelos (físicos ou digitais), que os organismos são um complexo arranjo de sistemas com diferentes níveis de organização."
                },
                {
                    "codigo": "EF06CI07",
                    "descricao": "Justificar o papel do sistema nervoso na coordenação das ações motoras e sensoriais do corpo, com base na análise de suas estruturas básicas e respectivas funções."
                },
                {
                    "codigo": "EF06CI08",
                    "descricao": "Explicar a importância da visão (captação e interpretação das imagens) na interação do organismo com o meio e, com base no funcionamento do olho humano, selecionar lentes adequadas para a correção de diferentes defeitos da visão."
                },
                {
                    "codigo": "EF06CI09",
                    "descricao": "Deduzir que a estrutura, a sustentação e a movimentação dos animais resultam da interação entre os sistemas muscular, ósseo e nervoso."
                },
                {
                    "codigo": "EF06CI10",
                    "descricao": "Explicar como o funcionamento do sistema nervoso pode ser afetado por substâncias psicoativas."
                }
            ],
            "Lentes corretivas": [
                {
                    "codigo": "EF06CI05",
                    "descricao": "Explicar a organização básica das células e seu papel como unidade estrutural e funcional dos seres vivos."
                },
                {
                    "codigo": "EF06CI06",
                    "descricao": "Concluir, com base na análise de ilustrações e/ou modelos (físicos ou digitais), que os organismos são um complexo arranjo de sistemas com diferentes níveis de organização."
                },
                {
                    "codigo": "EF06CI07",
                    "descricao": "Justificar o papel do sistema nervoso na coordenação das ações motoras e sensoriais do corpo, com base na análise de suas estruturas básicas e respectivas funções."
                },
                {
                    "codigo": "EF06CI08",
                    "descricao": "Explicar a importância da visão (captação e interpretação das imagens) na interação do organismo com o meio e, com base no funcionamento do olho humano, selecionar lentes adequadas para a correção de diferentes defeitos da visão."
                },
                {
                    "codigo": "EF06CI09",
                    "descricao": "Deduzir que a estrutura, a sustentação e a movimentação dos animais resultam da interação entre os sistemas muscular, ósseo e nervoso."
                },
                {
                    "codigo": "EF06CI10",
                    "descricao": "Explicar como o funcionamento do sistema nervoso pode ser afetado por substâncias psicoativas."
                }
            ]
        },
        "Terra e Universo": {
            "Forma, estrutura e movimentos da Terra": [
                {
                    "codigo": "EF06CI11",
                    "descricao": "Identificar as diferentes camadas que estruturam o planeta Terra (da estrutura interna à atmosfera) e suas principais características."
                },
                {
                    "codigo": "EF06CI12",
                    "descricao": "Identificar diferentes tipos de rocha, relacionando a formação de fósseis a rochas sedimentares em diferentes períodos geológicos."
                },
                {
                    "codigo": "EF06CI13",
                    "descricao": "Selecionar argumentos e evidências que demonstrem a esfericidade da Terra."
                },
                {
                    "codigo": "EF06CI14",
                    "descricao": "Inferir que as mudanças na sombra de uma vara (gnômon) ao longo do dia em diferentes períodos do ano são uma evidência dos movimentos relativos entre a Terra e o Sol, que podem ser explicados por meio dos movimentos de rotação e translação da Terra e da inclinação de seu eixo de rotação em relação ao plano de sua órbita em torno do Sol."
                }
            ]
        }
    },
    "7º Ano": {
        "Matéria e energia": {
            "Máquinas simples": [
                {
                    "codigo": "EF07CI01",
                    "descricao": "Discutir a aplicação, ao longo da história, das máquinas simples e propor soluções e invenções para a realização de tarefas mecânicas cotidianas."
                },
                {
                    "codigo": "EF07CI02",
                    "descricao": "Diferenciar temperatura, calor e sensação térmica nas diferentes situações de equilíbrio termodinâmico cotidianas."
                },
                {
                    "codigo": "EF07CI03",
                    "descricao": "Utilizar o conhecimento das formas de propagação do calor para justificar a utilização de determinados materiais (condutores e isolantes) na vida cotidiana, explicar o princípio de funcionamento de alguns equipamentos (garrafa térmica, coletor solar etc.) e/ou construir soluções tecnológicas a partir desse conhecimento."
                },
                {
                    "codigo": "EF07CI04",
                    "descricao": "Avaliar o papel do equilíbrio termodinâmico para a manutenção da vida na Terra, para o funcionamento de máquinas térmicas e em outras situações cotidianas."
                },
                {
                    "codigo": "EF07CI05",
                    "descricao": "Discutir o uso de diferentes tipos de combustível e máquinas térmicas ao longo do tempo, para avaliar avanços, questões econômicas e problemas socioambientais causados pela produção e uso desses materiais e máquinas."
                },
                {
                    "codigo": "EF07CI06",
                    "descricao": "Discutir e avaliar mudanças econômicas, culturais e sociais, tanto na vida cotidiana quanto no mundo do trabalho, decorrentes do desenvolvimento de novos materiais e tecnologias (como automação e informatização)."
                }
            ],
            "Formas de propagação do calor": [
                {
                    "codigo": "EF07CI01",
                    "descricao": "Discutir a aplicação, ao longo da história, das máquinas simples e propor soluções e invenções para a realização de tarefas mecânicas cotidianas."
                },
                {
                    "codigo": "EF07CI02",
                    "descricao": "Diferenciar temperatura, calor e sensação térmica nas diferentes situações de equilíbrio termodinâmico cotidianas."
                },
                {
                    "codigo": "EF07CI03",
                    "descricao": "Utilizar o conhecimento das formas de propagação do calor para justificar a utilização de determinados materiais (condutores e isolantes) na vida cotidiana, explicar o princípio de funcionamento de alguns equipamentos (garrafa térmica, coletor solar etc.) e/ou construir soluções tecnológicas a partir desse conhecimento."
                },
                {
                    "codigo": "EF07CI04",
                    "descricao": "Avaliar o papel do equilíbrio termodinâmico para a manutenção da vida na Terra, para o funcionamento de máquinas térmicas e em outras situações cotidianas."
                },
                {
                    "codigo": "EF07CI05",
                    "descricao": "Discutir o uso de diferentes tipos de combustível e máquinas térmicas ao longo do tempo, para avaliar avanços, questões econômicas e problemas socioambientais causados pela produção e uso desses materiais e máquinas."
                },
                {
                    "codigo": "EF07CI06",
                    "descricao": "Discutir e avaliar mudanças econômicas, culturais e sociais, tanto na vida cotidiana quanto no mundo do trabalho, decorrentes do desenvolvimento de novos materiais e tecnologias (como automação e informatização)."
                }
            ],
            "Equilíbrio termodinâmico e vida na Terra": [
                {
                    "codigo": "EF07CI01",
                    "descricao": "Discutir a aplicação, ao longo da história, das máquinas simples e propor soluções e invenções para a realização de tarefas mecânicas cotidianas."
                },
                {
                    "codigo": "EF07CI02",
                    "descricao": "Diferenciar temperatura, calor e sensação térmica nas diferentes situações de equilíbrio termodinâmico cotidianas."
                },
                {
                    "codigo": "EF07CI03",
                    "descricao": "Utilizar o conhecimento das formas de propagação do calor para justificar a utilização de determinados materiais (condutores e isolantes) na vida cotidiana, explicar o princípio de funcionamento de alguns equipamentos (garrafa térmica, coletor solar etc.) e/ou construir soluções tecnológicas a partir desse conhecimento."
                },
                {
                    "codigo": "EF07CI04",
                    "descricao": "Avaliar o papel do equilíbrio termodinâmico para a manutenção da vida na Terra, para o funcionamento de máquinas térmicas e em outras situações cotidianas."
                },
                {
                    "codigo": "EF07CI05",
                    "descricao": "Discutir o uso de diferentes tipos de combustível e máquinas térmicas ao longo do tempo, para avaliar avanços, questões econômicas e problemas socioambientais causados pela produção e uso desses materiais e máquinas."
                },
                {
                    "codigo": "EF07CI06",
                    "descricao": "Discutir e avaliar mudanças econômicas, culturais e sociais, tanto na vida cotidiana quanto no mundo do trabalho, decorrentes do desenvolvimento de novos materiais e tecnologias (como automação e informatização)."
                }
            ],
            "História dos combustíveis e das máquinas térmicas": [
                {
                    "codigo": "EF07CI01",
                    "descricao": "Discutir a aplicação, ao longo da história, das máquinas simples e propor soluções e invenções para a realização de tarefas mecânicas cotidianas."
                },
                {
                    "codigo": "EF07CI02",
                    "descricao": "Diferenciar temperatura, calor e sensação térmica nas diferentes situações de equilíbrio termodinâmico cotidianas."
                },
                {
                    "codigo": "EF07CI03",
                    "descricao": "Utilizar o conhecimento das formas de propagação do calor para justificar a utilização de determinados materiais (condutores e isolantes) na vida cotidiana, explicar o princípio de funcionamento de alguns equipamentos (garrafa térmica, coletor solar etc.) e/ou construir soluções tecnológicas a partir desse conhecimento."
                },
                {
                    "codigo": "EF07CI04",
                    "descricao": "Avaliar o papel do equilíbrio termodinâmico para a manutenção da vida na Terra, para o funcionamento de máquinas térmicas e em outras situações cotidianas."
                },
                {
                    "codigo": "EF07CI05",
                    "descricao": "Discutir o uso de diferentes tipos de combustível e máquinas térmicas ao longo do tempo, para avaliar avanços, questões econômicas e problemas socioambientais causados pela produção e uso desses materiais e máquinas."
                },
                {
                    "codigo": "EF07CI06",
                    "descricao": "Discutir e avaliar mudanças econômicas, culturais e sociais, tanto na vida cotidiana quanto no mundo do trabalho, decorrentes do desenvolvimento de novos materiais e tecnologias (como automação e informatização)."
                }
            ]
        },
        "Vida e evolução": {
            "Diversidade de ecossistemas": [
                {
                    "codigo": "EF07CI07",
                    "descricao": "Caracterizar os principais ecossistemas brasileiros quanto à paisagem, à quantidade de água, ao tipo de solo, à disponibilidade de luz solar, à temperatura etc., correlacionando essas características à flora e fauna específicas."
                },
                {
                    "codigo": "EF07CI08",
                    "descricao": "Avaliar como os impactos provocados por catástrofes naturais ou mudanças nos componentes físicos, biológicos ou sociais de um ecossistema afetam suas populações, podendo ameaçar ou provocar a extinção de espécies, alteração de hábitos, migração etc."
                },
                {
                    "codigo": "EF07CI09",
                    "descricao": "Interpretar as condições de saúde da comunidade, cidade ou estado, com base na análise e comparação de indicadores de saúde (como taxa de mortalidade infantil, cobertura de saneamento básico e incidência de doenças de veiculação hídrica, atmosférica entre outras) e dos resultados de políticas públicas destinadas à saúde."
                },
                {
                    "codigo": "EF07CI10",
                    "descricao": "Argumentar sobre a importância da vacinação para a saúde pública, com base em informações sobre a maneira como a vacina atua no organismo e o papel histórico da vacinação para a manutenção da saúde individual e coletiva e para a erradicação de doenças."
                },
                {
                    "codigo": "EF07CI11",
                    "descricao": "Analisar historicamente o uso da tecnologia, incluindo a digital, nas diferentes dimensões da vida humana, considerando indicadores ambientais e de qualidade de vida."
                }
            ],
            "Fenômenos naturais e impactos ambientais": [
                {
                    "codigo": "EF07CI07",
                    "descricao": "Caracterizar os principais ecossistemas brasileiros quanto à paisagem, à quantidade de água, ao tipo de solo, à disponibilidade de luz solar, à temperatura etc., correlacionando essas características à flora e fauna específicas."
                },
                {
                    "codigo": "EF07CI08",
                    "descricao": "Avaliar como os impactos provocados por catástrofes naturais ou mudanças nos componentes físicos, biológicos ou sociais de um ecossistema afetam suas populações, podendo ameaçar ou provocar a extinção de espécies, alteração de hábitos, migração etc."
                },
                {
                    "codigo": "EF07CI09",
                    "descricao": "Interpretar as condições de saúde da comunidade, cidade ou estado, com base na análise e comparação de indicadores de saúde (como taxa de mortalidade infantil, cobertura de saneamento básico e incidência de doenças de veiculação hídrica, atmosférica entre outras) e dos resultados de políticas públicas destinadas à saúde."
                },
                {
                    "codigo": "EF07CI10",
                    "descricao": "Argumentar sobre a importância da vacinação para a saúde pública, com base em informações sobre a maneira como a vacina atua no organismo e o papel histórico da vacinação para a manutenção da saúde individual e coletiva e para a erradicação de doenças."
                },
                {
                    "codigo": "EF07CI11",
                    "descricao": "Analisar historicamente o uso da tecnologia, incluindo a digital, nas diferentes dimensões da vida humana, considerando indicadores ambientais e de qualidade de vida."
                }
            ],
            "Programas e indicadores de saúde pública": [
                {
                    "codigo": "EF07CI07",
                    "descricao": "Caracterizar os principais ecossistemas brasileiros quanto à paisagem, à quantidade de água, ao tipo de solo, à disponibilidade de luz solar, à temperatura etc., correlacionando essas características à flora e fauna específicas."
                },
                {
                    "codigo": "EF07CI08",
                    "descricao": "Avaliar como os impactos provocados por catástrofes naturais ou mudanças nos componentes físicos, biológicos ou sociais de um ecossistema afetam suas populações, podendo ameaçar ou provocar a extinção de espécies, alteração de hábitos, migração etc."
                },
                {
                    "codigo": "EF07CI09",
                    "descricao": "Interpretar as condições de saúde da comunidade, cidade ou estado, com base na análise e comparação de indicadores de saúde (como taxa de mortalidade infantil, cobertura de saneamento básico e incidência de doenças de veiculação hídrica, atmosférica entre outras) e dos resultados de políticas públicas destinadas à saúde."
                },
                {
                    "codigo": "EF07CI10",
                    "descricao": "Argumentar sobre a importância da vacinação para a saúde pública, com base em informações sobre a maneira como a vacina atua no organismo e o papel histórico da vacinação para a manutenção da saúde individual e coletiva e para a erradicação de doenças."
                },
                {
                    "codigo": "EF07CI11",
                    "descricao": "Analisar historicamente o uso da tecnologia, incluindo a digital, nas diferentes dimensões da vida humana, considerando indicadores ambientais e de qualidade de vida."
                }
            ]
        },
        "Terra e Universo": {
            "Composição do ar": [
                {
                    "codigo": "EF07CI12",
                    "descricao": "Demonstrar que o ar é uma mistura de gases, identificando sua composição, e discutir fenômenos naturais ou antrópicos que podem alterar essa composição."
                },
                {
                    "codigo": "EF07CI13",
                    "descricao": "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro."
                },
                {
                    "codigo": "EF07CI14",
                    "descricao": "Justificar a importância da camada de ozônio para a vida na Terra, identificando os fatores que aumentam ou diminuem sua presença na atmosfera, e discutir propostas individuais e coletivas para sua preservação."
                },
                {
                    "codigo": "EF07CI15",
                    "descricao": "Interpretar fenômenos naturais (como vulcões, terremotos e tsunamis) e justificar a rara ocorrência desses fenômenos no Brasil, com base no modelo das placas tectônicas."
                },
                {
                    "codigo": "EF07CI16",
                    "descricao": "Justificar o formato das costas brasileira e africana com base na teoria da deriva dos continentes."
                }
            ],
            "Efeito estufa": [
                {
                    "codigo": "EF07CI12",
                    "descricao": "Demonstrar que o ar é uma mistura de gases, identificando sua composição, e discutir fenômenos naturais ou antrópicos que podem alterar essa composição."
                },
                {
                    "codigo": "EF07CI13",
                    "descricao": "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro."
                },
                {
                    "codigo": "EF07CI14",
                    "descricao": "Justificar a importância da camada de ozônio para a vida na Terra, identificando os fatores que aumentam ou diminuem sua presença na atmosfera, e discutir propostas individuais e coletivas para sua preservação."
                },
                {
                    "codigo": "EF07CI15",
                    "descricao": "Interpretar fenômenos naturais (como vulcões, terremotos e tsunamis) e justificar a rara ocorrência desses fenômenos no Brasil, com base no modelo das placas tectônicas."
                },
                {
                    "codigo": "EF07CI16",
                    "descricao": "Justificar o formato das costas brasileira e africana com base na teoria da deriva dos continentes."
                }
            ],
            "Camada de ozônio": [
                {
                    "codigo": "EF07CI12",
                    "descricao": "Demonstrar que o ar é uma mistura de gases, identificando sua composição, e discutir fenômenos naturais ou antrópicos que podem alterar essa composição."
                },
                {
                    "codigo": "EF07CI13",
                    "descricao": "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro."
                },
                {
                    "codigo": "EF07CI14",
                    "descricao": "Justificar a importância da camada de ozônio para a vida na Terra, identificando os fatores que aumentam ou diminuem sua presença na atmosfera, e discutir propostas individuais e coletivas para sua preservação."
                },
                {
                    "codigo": "EF07CI15",
                    "descricao": "Interpretar fenômenos naturais (como vulcões, terremotos e tsunamis) e justificar a rara ocorrência desses fenômenos no Brasil, com base no modelo das placas tectônicas."
                },
                {
                    "codigo": "EF07CI16",
                    "descricao": "Justificar o formato das costas brasileira e africana com base na teoria da deriva dos continentes."
                }
            ],
            "Fenômenos naturais (vulcões, terremotos e": [
                {
                    "codigo": "EF07CI12",
                    "descricao": "Demonstrar que o ar é uma mistura de gases, identificando sua composição, e discutir fenômenos naturais ou antrópicos que podem alterar essa composição."
                },
                {
                    "codigo": "EF07CI13",
                    "descricao": "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro."
                },
                {
                    "codigo": "EF07CI14",
                    "descricao": "Justificar a importância da camada de ozônio para a vida na Terra, identificando os fatores que aumentam ou diminuem sua presença na atmosfera, e discutir propostas individuais e coletivas para sua preservação."
                },
                {
                    "codigo": "EF07CI15",
                    "descricao": "Interpretar fenômenos naturais (como vulcões, terremotos e tsunamis) e justificar a rara ocorrência desses fenômenos no Brasil, com base no modelo das placas tectônicas."
                },
                {
                    "codigo": "EF07CI16",
                    "descricao": "Justificar o formato das costas brasileira e africana com base na teoria da deriva dos continentes."
                }
            ],
            "tsunamis)": [
                {
                    "codigo": "EF07CI12",
                    "descricao": "Demonstrar que o ar é uma mistura de gases, identificando sua composição, e discutir fenômenos naturais ou antrópicos que podem alterar essa composição."
                },
                {
                    "codigo": "EF07CI13",
                    "descricao": "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro."
                },
                {
                    "codigo": "EF07CI14",
                    "descricao": "Justificar a importância da camada de ozônio para a vida na Terra, identificando os fatores que aumentam ou diminuem sua presença na atmosfera, e discutir propostas individuais e coletivas para sua preservação."
                },
                {
                    "codigo": "EF07CI15",
                    "descricao": "Interpretar fenômenos naturais (como vulcões, terremotos e tsunamis) e justificar a rara ocorrência desses fenômenos no Brasil, com base no modelo das placas tectônicas."
                },
                {
                    "codigo": "EF07CI16",
                    "descricao": "Justificar o formato das costas brasileira e africana com base na teoria da deriva dos continentes."
                }
            ],
            "Placas tectônicas e deriva continental": [
                {
                    "codigo": "EF07CI12",
                    "descricao": "Demonstrar que o ar é uma mistura de gases, identificando sua composição, e discutir fenômenos naturais ou antrópicos que podem alterar essa composição."
                },
                {
                    "codigo": "EF07CI13",
                    "descricao": "Descrever o mecanismo natural do efeito estufa, seu papel fundamental para o desenvolvimento da vida na Terra, discutir as ações humanas responsáveis pelo seu aumento artificial (queima dos combustíveis fósseis, desmatamento, queimadas etc.) e selecionar e implementar propostas para a reversão ou controle desse quadro."
                },
                {
                    "codigo": "EF07CI14",
                    "descricao": "Justificar a importância da camada de ozônio para a vida na Terra, identificando os fatores que aumentam ou diminuem sua presença na atmosfera, e discutir propostas individuais e coletivas para sua preservação."
                },
                {
                    "codigo": "EF07CI15",
                    "descricao": "Interpretar fenômenos naturais (como vulcões, terremotos e tsunamis) e justificar a rara ocorrência desses fenômenos no Brasil, com base no modelo das placas tectônicas."
                },
                {
                    "codigo": "EF07CI16",
                    "descricao": "Justificar o formato das costas brasileira e africana com base na teoria da deriva dos continentes."
                }
            ]
        }
    },
    "8º Ano": {
        "Matéria e energia": {
            "Fontes e tipos de energia": [
                {
                    "codigo": "EF08CI01",
                    "descricao": "Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades."
                },
                {
                    "codigo": "EF08CI02",
                    "descricao": "Construir circuitos elétricos com pilha/bateria, fios e lâmpada ou outros dispositivos e compará-los a circuitos elétricos residenciais."
                },
                {
                    "codigo": "EF08CI03",
                    "descricao": "Classificar equipamentos elétricos residenciais (chuveiro, ferro, lâmpadas, TV, rádio, geladeira etc.) de acordo com o tipo de transformação de energia (da energia elétrica para a térmica, luminosa, sonora e mecânica, por exemplo)."
                },
                {
                    "codigo": "EF08CI04",
                    "descricao": "Calcular o consumo de eletrodomésticos a partir dos dados de potência (descritos no próprio equipamento) e tempo médio de uso para avaliar o impacto de cada equipamento no consumo doméstico mensal."
                },
                {
                    "codigo": "EF08CI05",
                    "descricao": "Propor ações coletivas para otimizar o uso de energia elétrica em sua escola e/ou comunidade, com base na seleção de equipamentos segundo critérios de sustentabilidade (consumo de energia e eficiência energética) e hábitos de consumo responsável."
                },
                {
                    "codigo": "EF08CI06",
                    "descricao": "Discutir e avaliar usinas de geração de energia elétrica (termelétricas, hidrelétricas, eólicas etc.), suas semelhanças e diferenças, seus impactos socioambientais, e como essa energia chega e é usada em sua cidade, comunidade, casa ou escola."
                }
            ],
            "Transformação de energia": [
                {
                    "codigo": "EF08CI01",
                    "descricao": "Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades."
                },
                {
                    "codigo": "EF08CI02",
                    "descricao": "Construir circuitos elétricos com pilha/bateria, fios e lâmpada ou outros dispositivos e compará-los a circuitos elétricos residenciais."
                },
                {
                    "codigo": "EF08CI03",
                    "descricao": "Classificar equipamentos elétricos residenciais (chuveiro, ferro, lâmpadas, TV, rádio, geladeira etc.) de acordo com o tipo de transformação de energia (da energia elétrica para a térmica, luminosa, sonora e mecânica, por exemplo)."
                },
                {
                    "codigo": "EF08CI04",
                    "descricao": "Calcular o consumo de eletrodomésticos a partir dos dados de potência (descritos no próprio equipamento) e tempo médio de uso para avaliar o impacto de cada equipamento no consumo doméstico mensal."
                },
                {
                    "codigo": "EF08CI05",
                    "descricao": "Propor ações coletivas para otimizar o uso de energia elétrica em sua escola e/ou comunidade, com base na seleção de equipamentos segundo critérios de sustentabilidade (consumo de energia e eficiência energética) e hábitos de consumo responsável."
                },
                {
                    "codigo": "EF08CI06",
                    "descricao": "Discutir e avaliar usinas de geração de energia elétrica (termelétricas, hidrelétricas, eólicas etc.), suas semelhanças e diferenças, seus impactos socioambientais, e como essa energia chega e é usada em sua cidade, comunidade, casa ou escola."
                }
            ],
            "Cálculo de consumo de energia elétrica": [
                {
                    "codigo": "EF08CI01",
                    "descricao": "Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades."
                },
                {
                    "codigo": "EF08CI02",
                    "descricao": "Construir circuitos elétricos com pilha/bateria, fios e lâmpada ou outros dispositivos e compará-los a circuitos elétricos residenciais."
                },
                {
                    "codigo": "EF08CI03",
                    "descricao": "Classificar equipamentos elétricos residenciais (chuveiro, ferro, lâmpadas, TV, rádio, geladeira etc.) de acordo com o tipo de transformação de energia (da energia elétrica para a térmica, luminosa, sonora e mecânica, por exemplo)."
                },
                {
                    "codigo": "EF08CI04",
                    "descricao": "Calcular o consumo de eletrodomésticos a partir dos dados de potência (descritos no próprio equipamento) e tempo médio de uso para avaliar o impacto de cada equipamento no consumo doméstico mensal."
                },
                {
                    "codigo": "EF08CI05",
                    "descricao": "Propor ações coletivas para otimizar o uso de energia elétrica em sua escola e/ou comunidade, com base na seleção de equipamentos segundo critérios de sustentabilidade (consumo de energia e eficiência energética) e hábitos de consumo responsável."
                },
                {
                    "codigo": "EF08CI06",
                    "descricao": "Discutir e avaliar usinas de geração de energia elétrica (termelétricas, hidrelétricas, eólicas etc.), suas semelhanças e diferenças, seus impactos socioambientais, e como essa energia chega e é usada em sua cidade, comunidade, casa ou escola."
                }
            ],
            "Circuitos elétricos": [
                {
                    "codigo": "EF08CI01",
                    "descricao": "Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades."
                },
                {
                    "codigo": "EF08CI02",
                    "descricao": "Construir circuitos elétricos com pilha/bateria, fios e lâmpada ou outros dispositivos e compará-los a circuitos elétricos residenciais."
                },
                {
                    "codigo": "EF08CI03",
                    "descricao": "Classificar equipamentos elétricos residenciais (chuveiro, ferro, lâmpadas, TV, rádio, geladeira etc.) de acordo com o tipo de transformação de energia (da energia elétrica para a térmica, luminosa, sonora e mecânica, por exemplo)."
                },
                {
                    "codigo": "EF08CI04",
                    "descricao": "Calcular o consumo de eletrodomésticos a partir dos dados de potência (descritos no próprio equipamento) e tempo médio de uso para avaliar o impacto de cada equipamento no consumo doméstico mensal."
                },
                {
                    "codigo": "EF08CI05",
                    "descricao": "Propor ações coletivas para otimizar o uso de energia elétrica em sua escola e/ou comunidade, com base na seleção de equipamentos segundo critérios de sustentabilidade (consumo de energia e eficiência energética) e hábitos de consumo responsável."
                },
                {
                    "codigo": "EF08CI06",
                    "descricao": "Discutir e avaliar usinas de geração de energia elétrica (termelétricas, hidrelétricas, eólicas etc.), suas semelhanças e diferenças, seus impactos socioambientais, e como essa energia chega e é usada em sua cidade, comunidade, casa ou escola."
                }
            ],
            "Uso consciente de energia elétrica": [
                {
                    "codigo": "EF08CI01",
                    "descricao": "Identificar e classificar diferentes fontes (renováveis e não renováveis) e tipos de energia utilizados em residências, comunidades ou cidades."
                },
                {
                    "codigo": "EF08CI02",
                    "descricao": "Construir circuitos elétricos com pilha/bateria, fios e lâmpada ou outros dispositivos e compará-los a circuitos elétricos residenciais."
                },
                {
                    "codigo": "EF08CI03",
                    "descricao": "Classificar equipamentos elétricos residenciais (chuveiro, ferro, lâmpadas, TV, rádio, geladeira etc.) de acordo com o tipo de transformação de energia (da energia elétrica para a térmica, luminosa, sonora e mecânica, por exemplo)."
                },
                {
                    "codigo": "EF08CI04",
                    "descricao": "Calcular o consumo de eletrodomésticos a partir dos dados de potência (descritos no próprio equipamento) e tempo médio de uso para avaliar o impacto de cada equipamento no consumo doméstico mensal."
                },
                {
                    "codigo": "EF08CI05",
                    "descricao": "Propor ações coletivas para otimizar o uso de energia elétrica em sua escola e/ou comunidade, com base na seleção de equipamentos segundo critérios de sustentabilidade (consumo de energia e eficiência energética) e hábitos de consumo responsável."
                },
                {
                    "codigo": "EF08CI06",
                    "descricao": "Discutir e avaliar usinas de geração de energia elétrica (termelétricas, hidrelétricas, eólicas etc.), suas semelhanças e diferenças, seus impactos socioambientais, e como essa energia chega e é usada em sua cidade, comunidade, casa ou escola."
                }
            ]
        },
        "Vida e evolução": {
            "Mecanismos reprodutivos": [
                {
                    "codigo": "EF08CI07",
                    "descricao": "Comparar diferentes processos reprodutivos em plantas e animais em relação aos mecanismos adaptativos e evolutivos."
                },
                {
                    "codigo": "EF08CI08",
                    "descricao": "Analisar e explicar as transformações que ocorrem na puberdade considerando a atuação dos hormônios sexuais e do sistema nervoso."
                },
                {
                    "codigo": "EF08CI09",
                    "descricao": "Comparar o modo de ação e a eficácia dos diversos métodos contraceptivos e justificar a necessidade de compartilhar a responsabilidade na escolha e na utilização do método mais adequado à prevenção da gravidez precoce e indesejada e de Doenças Sexualmente Transmissíveis (DST)."
                },
                {
                    "codigo": "EF08CI10",
                    "descricao": "Identificar os principais sintomas, modos de transmissão e tratamento de algumas DST (com ênfase na AIDS), e discutir estratégias e métodos de prevenção."
                },
                {
                    "codigo": "EF08CI11",
                    "descricao": "Selecionar argumentos que evidenciem as múltiplas dimensões da sexualidade humana (biológica, sociocultural, afetiva e ética)."
                }
            ],
            "Sexualidade": [
                {
                    "codigo": "EF08CI07",
                    "descricao": "Comparar diferentes processos reprodutivos em plantas e animais em relação aos mecanismos adaptativos e evolutivos."
                },
                {
                    "codigo": "EF08CI08",
                    "descricao": "Analisar e explicar as transformações que ocorrem na puberdade considerando a atuação dos hormônios sexuais e do sistema nervoso."
                },
                {
                    "codigo": "EF08CI09",
                    "descricao": "Comparar o modo de ação e a eficácia dos diversos métodos contraceptivos e justificar a necessidade de compartilhar a responsabilidade na escolha e na utilização do método mais adequado à prevenção da gravidez precoce e indesejada e de Doenças Sexualmente Transmissíveis (DST)."
                },
                {
                    "codigo": "EF08CI10",
                    "descricao": "Identificar os principais sintomas, modos de transmissão e tratamento de algumas DST (com ênfase na AIDS), e discutir estratégias e métodos de prevenção."
                },
                {
                    "codigo": "EF08CI11",
                    "descricao": "Selecionar argumentos que evidenciem as múltiplas dimensões da sexualidade humana (biológica, sociocultural, afetiva e ética)."
                }
            ]
        },
        "Terra e Universo": {
            "Sistema Sol, Terra e Lua": [
                {
                    "codigo": "EF08CI12",
                    "descricao": "Justificar, por meio da construção de modelos e da observação da Lua no céu, a ocorrência das fases da Lua e dos eclipses, com base nas posições relativas entre Sol, Terra e Lua."
                },
                {
                    "codigo": "EF08CI13",
                    "descricao": "Representar os movimentos de rotação e translação da Terra e analisar o papel da inclinação do eixo de rotação da Terra em relação à sua órbita na ocorrência das estações do ano, com a utilização de modelos tridimensionais."
                },
                {
                    "codigo": "EF08CI14",
                    "descricao": "Relacionar climas regionais aos padrões de circulação atmosférica e oceânica e ao aquecimento desigual causado pela forma e pelos movimentos da Terra."
                },
                {
                    "codigo": "EF08CI15",
                    "descricao": "Identificar as principais variáveis envolvidas na previsão do tempo e simular situações nas quais elas possam ser medidas."
                },
                {
                    "codigo": "EF08CI16",
                    "descricao": "Discutir iniciativas que contribuam para restabelecer o equilíbrio ambiental a partir da identificação de alterações climáticas regionais e globais provocadas pela intervenção humana."
                }
            ],
            "Clima": [
                {
                    "codigo": "EF08CI12",
                    "descricao": "Justificar, por meio da construção de modelos e da observação da Lua no céu, a ocorrência das fases da Lua e dos eclipses, com base nas posições relativas entre Sol, Terra e Lua."
                },
                {
                    "codigo": "EF08CI13",
                    "descricao": "Representar os movimentos de rotação e translação da Terra e analisar o papel da inclinação do eixo de rotação da Terra em relação à sua órbita na ocorrência das estações do ano, com a utilização de modelos tridimensionais."
                },
                {
                    "codigo": "EF08CI14",
                    "descricao": "Relacionar climas regionais aos padrões de circulação atmosférica e oceânica e ao aquecimento desigual causado pela forma e pelos movimentos da Terra."
                },
                {
                    "codigo": "EF08CI15",
                    "descricao": "Identificar as principais variáveis envolvidas na previsão do tempo e simular situações nas quais elas possam ser medidas."
                },
                {
                    "codigo": "EF08CI16",
                    "descricao": "Discutir iniciativas que contribuam para restabelecer o equilíbrio ambiental a partir da identificação de alterações climáticas regionais e globais provocadas pela intervenção humana."
                }
            ]
        }
    },
    "9º Ano": {
        "Matéria e energia": {
            "Aspectos quantitativos das transformações químicas": [
                {
                    "codigo": "EF09CI01",
                    "descricao": "Investigar as mudanças de estado físico da matéria e explicar essas transformações com base no modelo de constituição submicroscópica."
                },
                {
                    "codigo": "EF09CI02",
                    "descricao": "Comparar quantidades de reagentes e produtos envolvidos em transformações químicas, estabelecendo a proporção entre as suas massas."
                },
                {
                    "codigo": "EF09CI03",
                    "descricao": "Identificar modelos que descrevem a estrutura da matéria (constituição do átomo e composição de moléculas simples) e reconhecer sua evolução histórica."
                },
                {
                    "codigo": "EF09CI04",
                    "descricao": "Planejar e executar experimentos que evidenciem que todas as cores de luz podem ser formadas pela composição das três cores primárias da luz e que a cor de um objeto está relacionada também à cor da luz que o ilumina."
                },
                {
                    "codigo": "EF09CI05",
                    "descricao": "Investigar os principais mecanismos envolvidos na transmissão e recepção de imagem e som que revolucionaram os sistemas de comunicação humana."
                },
                {
                    "codigo": "EF09CI06",
                    "descricao": "Classificar as radiações eletromagnéticas por suas frequências, fontes e aplicações, discutindo e avaliando as implicações de seu uso em controle remoto, telefone celular, raio X, forno de micro-ondas, fotocélulas etc."
                },
                {
                    "codigo": "EF09CI07",
                    "descricao": "Discutir o papel do avanço tecnológico na aplicação das radiações na medicina diagnóstica (raio X, ultrassom, ressonância nuclear magnética) e no tratamento de doenças (radioterapia, cirurgia ótica a laser, infravermelho, ultravioleta etc.)."
                }
            ],
            "Estrutura da matéria": [
                {
                    "codigo": "EF09CI01",
                    "descricao": "Investigar as mudanças de estado físico da matéria e explicar essas transformações com base no modelo de constituição submicroscópica."
                },
                {
                    "codigo": "EF09CI02",
                    "descricao": "Comparar quantidades de reagentes e produtos envolvidos em transformações químicas, estabelecendo a proporção entre as suas massas."
                },
                {
                    "codigo": "EF09CI03",
                    "descricao": "Identificar modelos que descrevem a estrutura da matéria (constituição do átomo e composição de moléculas simples) e reconhecer sua evolução histórica."
                },
                {
                    "codigo": "EF09CI04",
                    "descricao": "Planejar e executar experimentos que evidenciem que todas as cores de luz podem ser formadas pela composição das três cores primárias da luz e que a cor de um objeto está relacionada também à cor da luz que o ilumina."
                },
                {
                    "codigo": "EF09CI05",
                    "descricao": "Investigar os principais mecanismos envolvidos na transmissão e recepção de imagem e som que revolucionaram os sistemas de comunicação humana."
                },
                {
                    "codigo": "EF09CI06",
                    "descricao": "Classificar as radiações eletromagnéticas por suas frequências, fontes e aplicações, discutindo e avaliando as implicações de seu uso em controle remoto, telefone celular, raio X, forno de micro-ondas, fotocélulas etc."
                },
                {
                    "codigo": "EF09CI07",
                    "descricao": "Discutir o papel do avanço tecnológico na aplicação das radiações na medicina diagnóstica (raio X, ultrassom, ressonância nuclear magnética) e no tratamento de doenças (radioterapia, cirurgia ótica a laser, infravermelho, ultravioleta etc.)."
                }
            ],
            "Radiações e suas aplicações na saúde": [
                {
                    "codigo": "EF09CI01",
                    "descricao": "Investigar as mudanças de estado físico da matéria e explicar essas transformações com base no modelo de constituição submicroscópica."
                },
                {
                    "codigo": "EF09CI02",
                    "descricao": "Comparar quantidades de reagentes e produtos envolvidos em transformações químicas, estabelecendo a proporção entre as suas massas."
                },
                {
                    "codigo": "EF09CI03",
                    "descricao": "Identificar modelos que descrevem a estrutura da matéria (constituição do átomo e composição de moléculas simples) e reconhecer sua evolução histórica."
                },
                {
                    "codigo": "EF09CI04",
                    "descricao": "Planejar e executar experimentos que evidenciem que todas as cores de luz podem ser formadas pela composição das três cores primárias da luz e que a cor de um objeto está relacionada também à cor da luz que o ilumina."
                },
                {
                    "codigo": "EF09CI05",
                    "descricao": "Investigar os principais mecanismos envolvidos na transmissão e recepção de imagem e som que revolucionaram os sistemas de comunicação humana."
                },
                {
                    "codigo": "EF09CI06",
                    "descricao": "Classificar as radiações eletromagnéticas por suas frequências, fontes e aplicações, discutindo e avaliando as implicações de seu uso em controle remoto, telefone celular, raio X, forno de micro-ondas, fotocélulas etc."
                },
                {
                    "codigo": "EF09CI07",
                    "descricao": "Discutir o papel do avanço tecnológico na aplicação das radiações na medicina diagnóstica (raio X, ultrassom, ressonância nuclear magnética) e no tratamento de doenças (radioterapia, cirurgia ótica a laser, infravermelho, ultravioleta etc.)."
                }
            ]
        },
        "Vida e evolução": {
            "Hereditariedade": [
                {
                    "codigo": "EF09CI08",
                    "descricao": "Associar os gametas à transmissão das características hereditárias, estabelecendo relações entre ancestrais e descendentes."
                },
                {
                    "codigo": "EF09CI09",
                    "descricao": "Discutir as ideias de Mendel sobre hereditariedade (fatores hereditários, segregação, gametas, fecundação), considerando-as para resolver problemas envolvendo a transmissão de características hereditárias em diferentes organismos."
                },
                {
                    "codigo": "EF09CI10",
                    "descricao": "Comparar as ideias evolucionistas de Lamarck e Darwin apresentadas em textos científicos e históricos, identificando semelhanças e diferenças entre essas ideias e sua importância para explicar a diversidade biológica."
                },
                {
                    "codigo": "EF09CI11",
                    "descricao": "Discutir a evolução e a diversidade das espécies com base na atuação da seleção natural sobre as variantes de uma mesma espécie, resultantes de processo reprodutivo."
                },
                {
                    "codigo": "EF09CI12",
                    "descricao": "Justificar a importância das unidades de conservação para a preservação da biodiversidade e do patrimônio nacional, considerando os diferentes tipos de unidades (parques, reservas e florestas nacionais), as populações humanas e as atividades a eles relacionados."
                },
                {
                    "codigo": "EF09CI13",
                    "descricao": "Propor iniciativas individuais e coletivas para a solução de problemas ambientais da cidade ou da comunidade, com base na análise de ações de consumo consciente e de sustentabilidade bem-sucedidas."
                }
            ],
            "Ideias evolucionistas": [
                {
                    "codigo": "EF09CI08",
                    "descricao": "Associar os gametas à transmissão das características hereditárias, estabelecendo relações entre ancestrais e descendentes."
                },
                {
                    "codigo": "EF09CI09",
                    "descricao": "Discutir as ideias de Mendel sobre hereditariedade (fatores hereditários, segregação, gametas, fecundação), considerando-as para resolver problemas envolvendo a transmissão de características hereditárias em diferentes organismos."
                },
                {
                    "codigo": "EF09CI10",
                    "descricao": "Comparar as ideias evolucionistas de Lamarck e Darwin apresentadas em textos científicos e históricos, identificando semelhanças e diferenças entre essas ideias e sua importância para explicar a diversidade biológica."
                },
                {
                    "codigo": "EF09CI11",
                    "descricao": "Discutir a evolução e a diversidade das espécies com base na atuação da seleção natural sobre as variantes de uma mesma espécie, resultantes de processo reprodutivo."
                },
                {
                    "codigo": "EF09CI12",
                    "descricao": "Justificar a importância das unidades de conservação para a preservação da biodiversidade e do patrimônio nacional, considerando os diferentes tipos de unidades (parques, reservas e florestas nacionais), as populações humanas e as atividades a eles relacionados."
                },
                {
                    "codigo": "EF09CI13",
                    "descricao": "Propor iniciativas individuais e coletivas para a solução de problemas ambientais da cidade ou da comunidade, com base na análise de ações de consumo consciente e de sustentabilidade bem-sucedidas."
                }
            ],
            "Preservação da biodiversidade": [
                {
                    "codigo": "EF09CI08",
                    "descricao": "Associar os gametas à transmissão das características hereditárias, estabelecendo relações entre ancestrais e descendentes."
                },
                {
                    "codigo": "EF09CI09",
                    "descricao": "Discutir as ideias de Mendel sobre hereditariedade (fatores hereditários, segregação, gametas, fecundação), considerando-as para resolver problemas envolvendo a transmissão de características hereditárias em diferentes organismos."
                },
                {
                    "codigo": "EF09CI10",
                    "descricao": "Comparar as ideias evolucionistas de Lamarck e Darwin apresentadas em textos científicos e históricos, identificando semelhanças e diferenças entre essas ideias e sua importância para explicar a diversidade biológica."
                },
                {
                    "codigo": "EF09CI11",
                    "descricao": "Discutir a evolução e a diversidade das espécies com base na atuação da seleção natural sobre as variantes de uma mesma espécie, resultantes de processo reprodutivo."
                },
                {
                    "codigo": "EF09CI12",
                    "descricao": "Justificar a importância das unidades de conservação para a preservação da biodiversidade e do patrimônio nacional, considerando os diferentes tipos de unidades (parques, reservas e florestas nacionais), as populações humanas e as atividades a eles relacionados."
                },
                {
                    "codigo": "EF09CI13",
                    "descricao": "Propor iniciativas individuais e coletivas para a solução de problemas ambientais da cidade ou da comunidade, com base na análise de ações de consumo consciente e de sustentabilidade bem-sucedidas."
                }
            ]
        },
        "Terra e Universo": {
            "Composição, estrutura e localização do Sistema Solar no Universo": [
                {
                    "codigo": "EF09CI14",
                    "descricao": "Descrever a composição e a estrutura do Sistema Solar (Sol, planetas rochosos, planetas gigantes gasosos e corpos menores), assim como a localização do Sistema Solar na nossa Galáxia (a Via Láctea) e dela no Universo (apenas uma galáxia dentre bilhões)."
                },
                {
                    "codigo": "EF09CI15",
                    "descricao": "Relacionar diferentes leituras do céu e explicações sobre a origem da Terra, do Sol ou do Sistema Solar às necessidades de distintas culturas (agricultura, caça, mito, orientação espacial e temporal etc.)."
                },
                {
                    "codigo": "EF09CI16",
                    "descricao": "Selecionar argumentos sobre a viabilidade da sobrevivência humana fora da Terra, com base nas condições necessárias à vida, nas características dos planetas e nas distâncias e nos tempos envolvidos em viagens interplanetárias e interestelares."
                },
                {
                    "codigo": "EF09CI17",
                    "descricao": "Analisar o ciclo evolutivo do Sol (nascimento, vida e morte) baseado no conhecimento das etapas de evolução de estrelas de diferentes dimensões e os efeitos desse processo no nosso planeta."
                }
            ],
            "Astronomia e cultura": [
                {
                    "codigo": "EF09CI14",
                    "descricao": "Descrever a composição e a estrutura do Sistema Solar (Sol, planetas rochosos, planetas gigantes gasosos e corpos menores), assim como a localização do Sistema Solar na nossa Galáxia (a Via Láctea) e dela no Universo (apenas uma galáxia dentre bilhões)."
                },
                {
                    "codigo": "EF09CI15",
                    "descricao": "Relacionar diferentes leituras do céu e explicações sobre a origem da Terra, do Sol ou do Sistema Solar às necessidades de distintas culturas (agricultura, caça, mito, orientação espacial e temporal etc.)."
                },
                {
                    "codigo": "EF09CI16",
                    "descricao": "Selecionar argumentos sobre a viabilidade da sobrevivência humana fora da Terra, com base nas condições necessárias à vida, nas características dos planetas e nas distâncias e nos tempos envolvidos em viagens interplanetárias e interestelares."
                },
                {
                    "codigo": "EF09CI17",
                    "descricao": "Analisar o ciclo evolutivo do Sol (nascimento, vida e morte) baseado no conhecimento das etapas de evolução de estrelas de diferentes dimensões e os efeitos desse processo no nosso planeta."
                }
            ],
            "Vida humana fora da Terra": [
                {
                    "codigo": "EF09CI14",
                    "descricao": "Descrever a composição e a estrutura do Sistema Solar (Sol, planetas rochosos, planetas gigantes gasosos e corpos menores), assim como a localização do Sistema Solar na nossa Galáxia (a Via Láctea) e dela no Universo (apenas uma galáxia dentre bilhões)."
                },
                {
                    "codigo": "EF09CI15",
                    "descricao": "Relacionar diferentes leituras do céu e explicações sobre a origem da Terra, do Sol ou do Sistema Solar às necessidades de distintas culturas (agricultura, caça, mito, orientação espacial e temporal etc.)."
                },
                {
                    "codigo": "EF09CI16",
                    "descricao": "Selecionar argumentos sobre a viabilidade da sobrevivência humana fora da Terra, com base nas condições necessárias à vida, nas características dos planetas e nas distâncias e nos tempos envolvidos em viagens interplanetárias e interestelares."
                },
                {
                    "codigo": "EF09CI17",
                    "descricao": "Analisar o ciclo evolutivo do Sol (nascimento, vida e morte) baseado no conhecimento das etapas de evolução de estrelas de diferentes dimensões e os efeitos desse processo no nosso planeta."
                }
            ],
            "Ordem de grandeza astronômica": [
                {
                    "codigo": "EF09CI14",
                    "descricao": "Descrever a composição e a estrutura do Sistema Solar (Sol, planetas rochosos, planetas gigantes gasosos e corpos menores), assim como a localização do Sistema Solar na nossa Galáxia (a Via Láctea) e dela no Universo (apenas uma galáxia dentre bilhões)."
                },
                {
                    "codigo": "EF09CI15",
                    "descricao": "Relacionar diferentes leituras do céu e explicações sobre a origem da Terra, do Sol ou do Sistema Solar às necessidades de distintas culturas (agricultura, caça, mito, orientação espacial e temporal etc.)."
                },
                {
                    "codigo": "EF09CI16",
                    "descricao": "Selecionar argumentos sobre a viabilidade da sobrevivência humana fora da Terra, com base nas condições necessárias à vida, nas características dos planetas e nas distâncias e nos tempos envolvidos em viagens interplanetárias e interestelares."
                },
                {
                    "codigo": "EF09CI17",
                    "descricao": "Analisar o ciclo evolutivo do Sol (nascimento, vida e morte) baseado no conhecimento das etapas de evolução de estrelas de diferentes dimensões e os efeitos desse processo no nosso planeta."
                }
            ],
            "Evolução estelar": [
                {
                    "codigo": "EF09CI14",
                    "descricao": "Descrever a composição e a estrutura do Sistema Solar (Sol, planetas rochosos, planetas gigantes gasosos e corpos menores), assim como a localização do Sistema Solar na nossa Galáxia (a Via Láctea) e dela no Universo (apenas uma galáxia dentre bilhões)."
                },
                {
                    "codigo": "EF09CI15",
                    "descricao": "Relacionar diferentes leituras do céu e explicações sobre a origem da Terra, do Sol ou do Sistema Solar às necessidades de distintas culturas (agricultura, caça, mito, orientação espacial e temporal etc.)."
                },
                {
                    "codigo": "EF09CI16",
                    "descricao": "Selecionar argumentos sobre a viabilidade da sobrevivência humana fora da Terra, com base nas condições necessárias à vida, nas características dos planetas e nas distâncias e nos tempos envolvidos em viagens interplanetárias e interestelares."
                },
                {
                    "codigo": "EF09CI17",
                    "descricao": "Analisar o ciclo evolutivo do Sol (nascimento, vida e morte) baseado no conhecimento das etapas de evolução de estrelas de diferentes dimensões e os efeitos desse processo no nosso planeta."
                }
            ]
        }
    }
};
