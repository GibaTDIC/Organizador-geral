// Prof GB — Dados fixos da BNCC (Educação Física) usados pelo módulo de Planejamento.
// Extraído de dentro de planejamento.html, sem nenhuma alteração de conteúdo.

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

        // NOVO: Especificações por unidade temática
export const especificacoesPorUnidade = {
            "Esportes": [
                "Esportes de Marca",
                "Esportes de Precisão",
                "Esportes de Invasão",
                "Esportes de Rede/Parede",
                "Esportes de Campo e Taco",
                "Esportes Técnico-Combinatórios",
                "Esportes de Combate"
            ],
            "Ginásticas": [
                "Ginástica Geral",
                "Ginástica de Condicionamento Físico",
                "Ginástica de Conscientização Corporal",
                "Ginástica Artística",
                "Ginástica Rítmica"
            ],
            "Danças": [
                "Danças do Contexto Comunitário e Regional",
                "Danças do Brasil e do Mundo",
                "Danças de Matriz Indígena e Africana",
                "Danças Urbanas",
                "Danças de Salão"
            ],
            "Lutas": [
                "Lutas do Contexto Comunitário e Regional",
                "Lutas de Matriz Indígena e Africana",
                "Lutas do Brasil e do Mundo"
            ],
            "Práticas Corporais de Aventura": [
                "Práticas de Aventura Urbanas",
                "Práticas de Aventura na Natureza"
            ],
            "Brincadeiras e Jogos": [
                "Brincadeiras e Jogos Populares",
                "Brincadeiras e Jogos de Matriz Indígena e Africana",
                "Jogos Eletrônicos"
            ]
        };

        // === BANCO DE HABILIDADES COMPLETO DA BNCC - EDUCAÇÃO FÍSICA ===
export const habilidadesBNCC = {
            "1º Ano": {
                "Brincadeiras e Jogos": {
                    "Brincadeiras e Jogos Populares": [
                        { codigo: "EF12EF01", descricao: "Experimentar, fruir e recriar diferentes brincadeiras e jogos da cultura popular presentes no contexto comunitário e regional, reconhecendo e respeitando as diferenças individuais de desempenho dos colegas." },
                        { codigo: "EF12EF02", descricao: "Explicar, por meio de múltiplas linguagens (corporal, visual, oral e escrita), as brincadeiras e os jogos populares do contexto comunitário e regional, reconhecendo e valorizando a importância desses jogos e brincadeiras para suas culturas de origem." },
                        { codigo: "EF12EF03", descricao: "Planejar e utilizar estratégias para resolver desafios de brincadeiras e jogos populares do contexto comunitário e regional, com base no reconhecimento das características dessas práticas." },
                        { codigo: "EF12EF04", descricao: "Colaborar na proposição e na produção de alternativas para a prática, em outros momentos e espaços, de brincadeiras e jogos e demais práticas corporais tematizadas na escola, produzindo textos (orais, escritos, audiovisuais) para divulgá-las na escola e na comunidade." }
                    ],
                    "Brincadeiras e Jogos de Matriz Indígena e Africana": [
                        { codigo: "EF12EF01", descricao: "Experimentar, fruir e recriar diferentes brincadeiras e jogos da cultura popular presentes no contexto comunitário e regional, reconhecendo e respeitando as diferenças individuais de desempenho dos colegas." },
                        { codigo: "EF12EF02", descricao: "Explicar, por meio de múltiplas linguagens (corporal, visual, oral e escrita), as brincadeiras e os jogos populares do contexto comunitário e regional, reconhecendo e valorizando a importância desses jogos e brincadeiras para suas culturas de origem." },
                        { codigo: "EF12EF03", descricao: "Planejar e utilizar estratégias para resolver desafios de brincadeiras e jogos populares do contexto comunitário e regional, com base no reconhecimento das características dessas práticas." }
                    ]
                },
                "Esportes": {
                    "Esportes de Marca": [
                        { codigo: "EF12EF05", descricao: "Experimentar e fruir, prezando pelo trabalho coletivo e pelo protagonismo, a prática de esportes de marca e de precisão, identificando os elementos comuns a esses esportes." },
                        { codigo: "EF12EF06", descricao: "Discutir a importância da observação das normas e das regras dos esportes de marca e de precisão para assegurar a integridade própria e as dos demais participantes." }
                    ],
                    "Esportes de Precisão": [
                        { codigo: "EF12EF05", descricao: "Experimentar e fruir, prezando pelo trabalho coletivo e pelo protagonismo, a prática de esportes de marca e de precisão, identificando os elementos comuns a esses esportes." },
                        { codigo: "EF12EF06", descricao: "Discutir a importância da observação das normas e das regras dos esportes de marca e de precisão para assegurar a integridade própria e as dos demais participantes." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica Geral": [
                        { codigo: "EF12EF07", descricao: "Experimentar, fruir e identificar diferentes elementos básicos da ginástica (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais) e da ginástica geral, de forma individual e em pequenos grupos, adotando procedimentos de segurança." },
                        { codigo: "EF12EF08", descricao: "Planejar e utilizar estratégias para a execução de diferentes elementos básicos da ginástica e da ginástica geral." },
                        { codigo: "EF12EF09", descricao: "Participar da ginástica geral, identificando as potencialidades e os limites do corpo, e respeitando as diferenças individuais e de desempenho corporal." },
                        { codigo: "EF12EF10", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita e audiovisual), as características dos elementos básicos da ginástica e da ginástica geral, identificando a presença desses elementos em distintas práticas corporais." }
                    ]
                },
                "Danças": {
                    "Danças do Contexto Comunitário e Regional": [
                        { codigo: "EF12EF11", descricao: "Experimentar e fruir diferentes danças do contexto comunitário e regional (rodas cantadas, brincadeiras rítmicas e expressivas), e recriá-las, respeitando as diferenças individuais e de desempenho corporal." },
                        { codigo: "EF12EF12", descricao: "Identificar os elementos constitutivos (ritmo, espaço, gestos) das danças do contexto comunitário e regional, valorizando e respeitando as manifestações de diferentes culturas." }
                    ],
                    "Danças de Matriz Indígena e Africana": [
                        { codigo: "EF12EF11", descricao: "Experimentar e fruir diferentes danças do contexto comunitário e regional (rodas cantadas, brincadeiras rítmicas e expressivas), e recriá-las, respeitando as diferenças individuais e de desempenho corporal." },
                        { codigo: "EF12EF12", descricao: "Identificar os elementos constitutivos (ritmo, espaço, gestos) das danças do contexto comunitário e regional, valorizando e respeitando as manifestações de diferentes culturas." }
                    ]
                }
            },
            "2º Ano": {
                "Brincadeiras e Jogos": {
                    "Brincadeiras e Jogos Populares": [
                        { codigo: "EF12EF01", descricao: "Experimentar, fruir e recriar diferentes brincadeiras e jogos da cultura popular presentes no contexto comunitário e regional, reconhecendo e respeitando as diferenças individuais de desempenho dos colegas." },
                        { codigo: "EF12EF02", descricao: "Explicar, por meio de múltiplas linguagens (corporal, visual, oral e escrita), as brincadeiras e os jogos populares do contexto comunitário e regional, reconhecendo e valorizando a importância desses jogos e brincadeiras para suas culturas de origem." },
                        { codigo: "EF12EF03", descricao: "Planejar e utilizar estratégias para resolver desafios de brincadeiras e jogos populares do contexto comunitário e regional, com base no reconhecimento das características dessas práticas." },
                        { codigo: "EF12EF04", descricao: "Colaborar na proposição e na produção de alternativas para a prática, em outros momentos e espaços, de brincadeiras e jogos e demais práticas corporais tematizadas na escola, produzindo textos (orais, escritos, audiovisuais) para divulgá-las na escola e na comunidade." }
                    ],
                    "Brincadeiras e Jogos de Matriz Indígena e Africana": [
                        { codigo: "EF12EF01", descricao: "Experimentar, fruir e recriar diferentes brincadeiras e jogos da cultura popular presentes no contexto comunitário e regional, reconhecendo e respeitando as diferenças individuais de desempenho dos colegas." },
                        { codigo: "EF12EF02", descricao: "Explicar, por meio de múltiplas linguagens (corporal, visual, oral e escrita), as brincadeiras e os jogos populares do contexto comunitário e regional, reconhecendo e valorizando a importância desses jogos e brincadeiras para suas culturas de origem." },
                        { codigo: "EF12EF03", descricao: "Planejar e utilizar estratégias para resolver desafios de brincadeiras e jogos populares do contexto comunitário e regional, com base no reconhecimento das características dessas práticas." }
                    ]
                },
                "Esportes": {
                    "Esportes de Marca": [
                        { codigo: "EF12EF05", descricao: "Experimentar e fruir, prezando pelo trabalho coletivo e pelo protagonismo, a prática de esportes de marca e de precisão, identificando os elementos comuns a esses esportes." },
                        { codigo: "EF12EF06", descricao: "Discutir a importância da observação das normas e das regras dos esportes de marca e de precisão para assegurar a integridade própria e as dos demais participantes." }
                    ],
                    "Esportes de Precisão": [
                        { codigo: "EF12EF05", descricao: "Experimentar e fruir, prezando pelo trabalho coletivo e pelo protagonismo, a prática de esportes de marca e de precisão, identificando os elementos comuns a esses esportes." },
                        { codigo: "EF12EF06", descricao: "Discutir a importância da observação das normas e das regras dos esportes de marca e de precisão para assegurar a integridade própria e as dos demais participantes." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica Geral": [
                        { codigo: "EF12EF07", descricao: "Experimentar, fruir e identificar diferentes elementos básicos da ginástica (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais) e da ginástica geral, de forma individual e em pequenos grupos, adotando procedimentos de segurança." },
                        { codigo: "EF12EF08", descricao: "Planejar e utilizar estratégias para a execução de diferentes elementos básicos da ginástica e da ginástica geral." },
                        { codigo: "EF12EF09", descricao: "Participar da ginástica geral, identificando as potencialidades e os limites do corpo, e respeitando as diferenças individuais e de desempenho corporal." },
                        { codigo: "EF12EF10", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita e audiovisual), as características dos elementos básicos da ginástica e da ginástica geral, identificando a presença desses elementos em distintas práticas corporais." }
                    ]
                },
                "Danças": {
                    "Danças do Contexto Comunitário e Regional": [
                        { codigo: "EF12EF11", descricao: "Experimentar e fruir diferentes danças do contexto comunitário e regional (rodas cantadas, brincadeiras rítmicas e expressivas), e recriá-las, respeitando as diferenças individuais e de desempenho corporal." },
                        { codigo: "EF12EF12", descricao: "Identificar os elementos constitutivos (ritmo, espaço, gestos) das danças do contexto comunitário e regional, valorizando e respeitando as manifestações de diferentes culturas." }
                    ],
                    "Danças de Matriz Indígena e Africana": [
                        { codigo: "EF12EF11", descricao: "Experimentar e fruir diferentes danças do contexto comunitário e regional (rodas cantadas, brincadeiras rítmicas e expressivas), e recriá-las, respeitando as diferenças individuais e de desempenho corporal." },
                        { codigo: "EF12EF12", descricao: "Identificar os elementos constitutivos (ritmo, espaço, gestos) das danças do contexto comunitário e regional, valorizando e respeitando as manifestações de diferentes culturas." }
                    ]
                }
            },
            "3º Ano": {
                "Brincadeiras e Jogos": {
                    "Brincadeiras e Jogos Populares": [
                        { codigo: "EF35EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural." },
                        { codigo: "EF35EF02", descricao: "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
                        { codigo: "EF35EF03", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas." },
                        { codigo: "EF35EF04", descricao: "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis." }
                    ],
                    "Brincadeiras e Jogos de Matriz Indígena e Africana": [
                        { codigo: "EF35EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural." },
                        { codigo: "EF35EF02", descricao: "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
                        { codigo: "EF35EF03", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas." },
                        { codigo: "EF35EF04", descricao: "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis." }
                    ]
                },
                "Esportes": {
                    "Esportes de Campo e Taco": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ],
                    "Esportes de Rede/Parede": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ],
                    "Esportes de Invasão": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica Geral": [
                        { codigo: "EF35EF07", descricao: "Experimentar e fruir, de forma coletiva, combinações de diferentes elementos da ginástica geral (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais), propondo coreografias com diferentes temas do cotidiano." },
                        { codigo: "EF35EF08", descricao: "Planejar e utilizar estratégias para resolver desafios na execução de elementos básicos de apresentações coletivas de ginástica geral, reconhecendo as potencialidades e os limites do corpo e adotando procedimentos de segurança." }
                    ]
                },
                "Danças": {
                    "Danças do Brasil e do Mundo": [
                        { codigo: "EF35EF09", descricao: "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem." },
                        { codigo: "EF35EF10", descricao: "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana." },
                        { codigo: "EF35EF11", descricao: "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana." },
                        { codigo: "EF35EF12", descricao: "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las." }
                    ],
                    "Danças de Matriz Indígena e Africana": [
                        { codigo: "EF35EF09", descricao: "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem." },
                        { codigo: "EF35EF10", descricao: "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana." },
                        { codigo: "EF35EF11", descricao: "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana." },
                        { codigo: "EF35EF12", descricao: "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las." }
                    ]
                },
                "Lutas": {
                    "Lutas do Contexto Comunitário e Regional": [
                        { codigo: "EF35EF13", descricao: "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana." },
                        { codigo: "EF35EF14", descricao: "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF35EF15", descricao: "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais." }
                    ],
                    "Lutas de Matriz Indígena e Africana": [
                        { codigo: "EF35EF13", descricao: "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana." },
                        { codigo: "EF35EF14", descricao: "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF35EF15", descricao: "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais." }
                    ]
                }
            },
            "4º Ano": {
                "Brincadeiras e Jogos": {
                    "Brincadeiras e Jogos Populares": [
                        { codigo: "EF35EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural." },
                        { codigo: "EF35EF02", descricao: "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
                        { codigo: "EF35EF03", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas." },
                        { codigo: "EF35EF04", descricao: "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis." }
                    ],
                    "Brincadeiras e Jogos de Matriz Indígena e Africana": [
                        { codigo: "EF35EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural." },
                        { codigo: "EF35EF02", descricao: "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
                        { codigo: "EF35EF03", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas." },
                        { codigo: "EF35EF04", descricao: "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis." }
                    ]
                },
                "Esportes": {
                    "Esportes de Campo e Taco": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ],
                    "Esportes de Rede/Parede": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ],
                    "Esportes de Invasão": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica Geral": [
                        { codigo: "EF35EF07", descricao: "Experimentar e fruir, de forma coletiva, combinações de diferentes elementos da ginástica geral (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais), propondo coreografias com diferentes temas do cotidiano." },
                        { codigo: "EF35EF08", descricao: "Planejar e utilizar estratégias para resolver desafios na execução de elementos básicos de apresentações coletivas de ginástica geral, reconhecendo as potencialidades e os limites do corpo e adotando procedimentos de segurança." }
                    ]
                },
                "Danças": {
                    "Danças do Brasil e do Mundo": [
                        { codigo: "EF35EF09", descricao: "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem." },
                        { codigo: "EF35EF10", descricao: "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana." },
                        { codigo: "EF35EF11", descricao: "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana." },
                        { codigo: "EF35EF12", descricao: "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las." }
                    ],
                    "Danças de Matriz Indígena e Africana": [
                        { codigo: "EF35EF09", descricao: "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem." },
                        { codigo: "EF35EF10", descricao: "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana." },
                        { codigo: "EF35EF11", descricao: "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana." },
                        { codigo: "EF35EF12", descricao: "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las." }
                    ]
                },
                "Lutas": {
                    "Lutas do Contexto Comunitário e Regional": [
                        { codigo: "EF35EF13", descricao: "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana." },
                        { codigo: "EF35EF14", descricao: "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF35EF15", descricao: "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais." }
                    ],
                    "Lutas de Matriz Indígena e Africana": [
                        { codigo: "EF35EF13", descricao: "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana." },
                        { codigo: "EF35EF14", descricao: "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF35EF15", descricao: "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais." }
                    ]
                }
            },
            "5º Ano": {
                "Brincadeiras e Jogos": {
                    "Brincadeiras e Jogos Populares": [
                        { codigo: "EF35EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural." },
                        { codigo: "EF35EF02", descricao: "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
                        { codigo: "EF35EF03", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas." },
                        { codigo: "EF35EF04", descricao: "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis." }
                    ],
                    "Brincadeiras e Jogos de Matriz Indígena e Africana": [
                        { codigo: "EF35EF01", descricao: "Experimentar e fruir brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e recriá-los, valorizando a importância desse patrimônio histórico cultural." },
                        { codigo: "EF35EF02", descricao: "Planejar e utilizar estratégias para possibilitar a participação segura de todos os alunos em brincadeiras e jogos populares do Brasil e de matriz indígena e africana." },
                        { codigo: "EF35EF03", descricao: "Descrever, por meio de múltiplas linguagens (corporal, oral, escrita, audiovisual), as brincadeiras e os jogos populares do Brasil e de matriz indígena e africana, explicando suas características e a importância desse patrimônio histórico cultural na preservação das diferentes culturas." },
                        { codigo: "EF35EF04", descricao: "Recriar, individual e coletivamente, e experimentar, na escola e fora dela, brincadeiras e jogos populares do Brasil e do mundo, incluindo aqueles de matriz indígena e africana, e demais práticas corporais tematizadas na escola, adequando-as aos espaços públicos disponíveis." }
                    ]
                },
                "Esportes": {
                    "Esportes de Campo e Taco": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ],
                    "Esportes de Rede/Parede": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ],
                    "Esportes de Invasão": [
                        { codigo: "EF35EF05", descricao: "Experimentar e fruir diversos tipos de esportes de campo e taco, rede/parede e invasão, identificando seus elementos comuns e criando estratégias individuais e coletivas básicas para sua execução, prezando pelo trabalho coletivo e pelo protagonismo." },
                        { codigo: "EF35EF06", descricao: "Diferenciar os conceitos de jogo e esporte, identificando as características que os constituem na contemporaneidade e suas manifestações (profissional e comunitária/lazer)." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica Geral": [
                        { codigo: "EF35EF07", descricao: "Experimentar e fruir, de forma coletiva, combinações de diferentes elementos da ginástica geral (equilíbrios, saltos, giros, rotações, acrobacias, com e sem materiais), propondo coreografias com diferentes temas do cotidiano." },
                        { codigo: "EF35EF08", descricao: "Planejar e utilizar estratégias para resolver desafios na execução de elementos básicos de apresentações coletivas de ginástica geral, reconhecendo as potencialidades e os limites do corpo e adotando procedimentos de segurança." }
                    ]
                },
                "Danças": {
                    "Danças do Brasil e do Mundo": [
                        { codigo: "EF35EF09", descricao: "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem." },
                        { codigo: "EF35EF10", descricao: "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana." },
                        { codigo: "EF35EF11", descricao: "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana." },
                        { codigo: "EF35EF12", descricao: "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las." }
                    ],
                    "Danças de Matriz Indígena e Africana": [
                        { codigo: "EF35EF09", descricao: "Experimentar, recriar e fruir danças populares do Brasil e do mundo e danças de matriz indígena e africana, valorizando e respeitando os diferentes sentidos e significados dessas danças em suas culturas de origem." },
                        { codigo: "EF35EF10", descricao: "Comparar e identificar os elementos constitutivos comuns e diferentes (ritmo, espaço, gestos) em danças populares do Brasil e do mundo e danças de matriz indígena e africana." },
                        { codigo: "EF35EF11", descricao: "Formular e utilizar estratégias para a execução de elementos constitutivos das danças populares do Brasil e do mundo, e das danças de matriz indígena e africana." },
                        { codigo: "EF35EF12", descricao: "Identificar situações de injustiça e preconceito geradas e/ou presentes no contexto das danças e demais práticas corporais e discutir alternativas para superá-las." }
                    ]
                },
                "Lutas": {
                    "Lutas do Contexto Comunitário e Regional": [
                        { codigo: "EF35EF13", descricao: "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana." },
                        { codigo: "EF35EF14", descricao: "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF35EF15", descricao: "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais." }
                    ],
                    "Lutas de Matriz Indígena e Africana": [
                        { codigo: "EF35EF13", descricao: "Experimentar, fruir e recriar diferentes lutas presentes no contexto comunitário e regional e lutas de matriz indígena e africana." },
                        { codigo: "EF35EF14", descricao: "Planejar e utilizar estratégias básicas das lutas do contexto comunitário e regional e lutas de matriz indígena e africana experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF35EF15", descricao: "Identificar as características das lutas do contexto comunitário e regional e lutas de matriz indígena e africana, reconhecendo as diferenças entre lutas e brigas e entre lutas e as demais práticas corporais." }
                    ]
                }
            },
            "6º Ano": {
                "Brincadeiras e Jogos": {
                    "Jogos Eletrônicos": [
                        { codigo: "EF67EF01", descricao: "Experimentar e fruir, na escola e fora dela, jogos eletrônicos diversos, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais e etários." },
                        { codigo: "EF67EF02", descricao: "Identificar as transformações nas características dos jogos eletrônicos em função dos avanços das tecnologias e nas respectivas exigências corporais colocadas por esses diferentes tipos de jogos." }
                    ]
                },
                "Esportes": {
                    "Esportes de Marca": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ],
                    "Esportes de Precisão": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ],
                    "Esportes de Invasão": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ],
                    "Esportes Técnico-Combinatórios": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica de Condicionamento Físico": [
                        { codigo: "EF67EF08", descricao: "Experimentar e fruir exercícios físicos que solicitem diferentes capacidades físicas, identificando seus tipos (força, velocidade, resistência, flexibilidade) e as sensações corporais provocadas pela sua prática." },
                        { codigo: "EF67EF09", descricao: "Construir, coletivamente, procedimentos e normas de convívio que viabilizem a participação de todos na prática de exercícios físicos, com o objetivo de promover a saúde." },
                        { codigo: "EF67EF10", descricao: "Diferenciar exercício físico de atividade física e propor alternativas para a prática de exercícios físicos dentro e fora do ambiente escolar." }
                    ]
                },
                "Danças": {
                    "Danças Urbanas": [
                        { codigo: "EF67EF11", descricao: "Experimentar, fruir e recriar danças urbanas, identificando seus elementos constitutivos (ritmo, espaço, gestos)." },
                        { codigo: "EF67EF12", descricao: "Planejar e utilizar estratégias para aprender elementos constitutivos das danças urbanas." },
                        { codigo: "EF67EF13", descricao: "Diferenciar as danças urbanas das demais manifestações da dança, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais." }
                    ]
                },
                "Lutas": {
                    "Lutas do Brasil": [
                        { codigo: "EF67EF14", descricao: "Experimentar, fruir e recriar diferentes lutas do Brasil, valorizando a própria segurança e integridade física, bem como as dos demais." },
                        { codigo: "EF67EF15", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil, respeitando o colega como oponente." },
                        { codigo: "EF67EF16", descricao: "Identificar as características (códigos, rituais, elementos técnico-táticos, indumentária, materiais, instalações, instituições) das lutas do Brasil." },
                        { codigo: "EF67EF17", descricao: "Problematizar preconceitos e estereótipos relacionados ao universo das lutas e demais práticas corporais, propondo alternativas para superá-los, com base na solidariedade, na justiça, na equidade e no respeito." }
                    ]
                },
                "Práticas Corporais de Aventura": {
                    "Práticas de Aventura Urbanas": [
                        { codigo: "EF67EF18", descricao: "Experimentar e fruir diferentes práticas corporais de aventura urbanas, valorizando a própria segurança e integridade física, bem como as dos demais." },
                        { codigo: "EF67EF19", descricao: "Identificar os riscos durante a realização de práticas corporais de aventura urbanas e planejar estratégias para sua superação." },
                        { codigo: "EF67EF20", descricao: "Executar práticas corporais de aventura urbanas, respeitando o patrimônio público e utilizando alternativas para a prática segura em diversos espaços." },
                        { codigo: "EF67EF21", descricao: "Identificar a origem das práticas corporais de aventura e as possibilidades de recriá-las, reconhecendo as características (instrumentos, equipamentos de segurança, indumentária, organização) e seus tipos de práticas." }
                    ]
                }
            },
            "7º Ano": {
                "Brincadeiras e Jogos": {
                    "Jogos Eletrônicos": [
                        { codigo: "EF67EF01", descricao: "Experimentar e fruir, na escola e fora dela, jogos eletrônicos diversos, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais e etários." },
                        { codigo: "EF67EF02", descricao: "Identificar as transformações nas características dos jogos eletrônicos em função dos avanços das tecnologias e nas respectivas exigências corporais colocadas por esses diferentes tipos de jogos." }
                    ]
                },
                "Esportes": {
                    "Esportes de Marca": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ],
                    "Esportes de Precisão": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ],
                    "Esportes de Invasão": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ],
                    "Esportes Técnico-Combinatórios": [
                        { codigo: "EF67EF03", descricao: "Experimentar e fruir esportes de marca, precisão, invasão e técnico-combinatórios, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF67EF04", descricao: "Praticar um ou mais esportes de marca, precisão, invasão e técnico-combinatórios oferecidos pela escola, usando habilidades técnico-táticas básicas e respeitando regras." },
                        { codigo: "EF67EF05", descricao: "Planejar e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de marca, precisão, invasão e técnico-combinatórios como nas modalidades esportivas escolhidas para praticar de forma específica." },
                        { codigo: "EF67EF06", descricao: "Analisar as transformações na organização e na prática dos esportes em suas diferentes manifestações (profissional e comunitário/lazer)." },
                        { codigo: "EF67EF07", descricao: "Propor e produzir alternativas para experimentação dos esportes não disponíveis e/ou acessíveis na comunidade e das demais práticas corporais tematizadas na escola." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica de Condicionamento Físico": [
                        { codigo: "EF67EF08", descricao: "Experimentar e fruir exercícios físicos que solicitem diferentes capacidades físicas, identificando seus tipos (força, velocidade, resistência, flexibilidade) e as sensações corporais provocadas pela sua prática." },
                        { codigo: "EF67EF09", descricao: "Construir, coletivamente, procedimentos e normas de convívio que viabilizem a participação de todos na prática de exercícios físicos, com o objetivo de promover a saúde." },
                        { codigo: "EF67EF10", descricao: "Diferenciar exercício físico de atividade física e propor alternativas para a prática de exercícios físicos dentro e fora do ambiente escolar." }
                    ],
                    "Ginástica de Conscientização Corporal": [
                        { codigo: "EF67EF08", descricao: "Experimentar e fruir exercícios físicos que solicitem diferentes capacidades físicas, identificando seus tipos (força, velocidade, resistência, flexibilidade) e as sensações corporais provocadas pela sua prática." },
                        { codigo: "EF67EF09", descricao: "Construir, coletivamente, procedimentos e normas de convívio que viabilizem a participação de todos na prática de exercícios físicos, com o objetivo de promover a saúde." },
                        { codigo: "EF67EF10", descricao: "Diferenciar exercício físico de atividade física e propor alternativas para a prática de exercícios físicos dentro e fora do ambiente escolar." }
                    ]
                },
                "Danças": {
                    "Danças Urbanas": [
                        { codigo: "EF67EF11", descricao: "Experimentar, fruir e recriar danças urbanas, identificando seus elementos constitutivos (ritmo, espaço, gestos)." },
                        { codigo: "EF67EF12", descricao: "Planejar e utilizar estratégias para aprender elementos constitutivos das danças urbanas." },
                        { codigo: "EF67EF13", descricao: "Diferenciar as danças urbanas das demais manifestações da dança, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais." }
                    ],
                    "Danças de Salão": [
                        { codigo: "EF67EF11", descricao: "Experimentar, fruir e recriar danças urbanas, identificando seus elementos constitutivos (ritmo, espaço, gestos)." },
                        { codigo: "EF67EF12", descricao: "Planejar e utilizar estratégias para aprender elementos constitutivos das danças urbanas." },
                        { codigo: "EF67EF13", descricao: "Diferenciar as danças urbanas das demais manifestações da dança, valorizando e respeitando os sentidos e significados atribuídos a eles por diferentes grupos sociais." }
                    ]
                },
                "Lutas": {
                    "Lutas do Brasil": [
                        { codigo: "EF67EF14", descricao: "Experimentar, fruir e recriar diferentes lutas do Brasil, valorizando a própria segurança e integridade física, bem como as dos demais." },
                        { codigo: "EF67EF15", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil, respeitando o colega como oponente." },
                        { codigo: "EF67EF16", descricao: "Identificar as características (códigos, rituais, elementos técnico-táticos, indumentária, materiais, instalações, instituições) das lutas do Brasil." },
                        { codigo: "EF67EF17", descricao: "Problematizar preconceitos e estereótipos relacionados ao universo das lutas e demais práticas corporais, propondo alternativas para superá-los, com base na solidariedade, na justiça, na equidade e no respeito." }
                    ],
                    "Lutas de Matriz Indígena e Africana": [
                        { codigo: "EF67EF14", descricao: "Experimentar, fruir e recriar diferentes lutas do Brasil, valorizando a própria segurança e integridade física, bem como as dos demais." },
                        { codigo: "EF67EF15", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil, respeitando o colega como oponente." },
                        { codigo: "EF67EF16", descricao: "Identificar as características (códigos, rituais, elementos técnico-táticos, indumentária, materiais, instalações, instituições) das lutas do Brasil." },
                        { codigo: "EF67EF17", descricao: "Problematizar preconceitos e estereótipos relacionados ao universo das lutas e demais práticas corporais, propondo alternativas para superá-los, com base na solidariedade, na justiça, na equidade e no respeito." }
                    ]
                },
                "Práticas Corporais de Aventura": {
                    "Práticas de Aventura Urbanas": [
                        { codigo: "EF67EF18", descricao: "Experimentar e fruir diferentes práticas corporais de aventura urbanas, valorizando a própria segurança e integridade física, bem como as dos demais." },
                        { codigo: "EF67EF19", descricao: "Identificar os riscos durante a realização de práticas corporais de aventura urbanas e planejar estratégias para sua superação." },
                        { codigo: "EF67EF20", descricao: "Executar práticas corporais de aventura urbanas, respeitando o patrimônio público e utilizando alternativas para a prática segura em diversos espaços." },
                        { codigo: "EF67EF21", descricao: "Identificar a origem das práticas corporais de aventura e as possibilidades de recriá-las, reconhecendo as características (instrumentos, equipamentos de segurança, indumentária, organização) e seus tipos de práticas." }
                    ]
                }
            },
            "8º Ano": {
                "Esportes": {
                    "Esportes de Rede/Parede": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ],
                    "Esportes de Campo e Taco": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ],
                    "Esportes de Invasão": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ],
                    "Esportes de Combate": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica de Conscientização Corporal": [
                        { codigo: "EF89EF05", descricao: "Experimentar e fruir diferentes tipos de ginásticas de conscientização corporal, identificando as exigências corporais dos mesmos e reconhecendo a importância de uma prática individualizada, adequada às características e necessidades de cada aluno." },
                        { codigo: "EF89EF06", descricao: "Identificar as características das ginásticas de conscientização corporal, discutindo como a prática pode contribuir para a melhoria das condições de vida, saúde, bem-estar e cuidado consigo mesmo." }
                    ]
                },
                "Danças": {
                    "Danças de Salão": [
                        { codigo: "EF89EF07", descricao: "Experimentar e fruir um ou mais programas de exercícios físicos, identificando as exigências corporais dos mesmos e reconhecendo a importância de uma prática individualizada, adequada às características e necessidades de cada aluno." },
                        { codigo: "EF89EF08", descricao: "Discutir as transformações históricas dos padrões de desempenho, saúde e beleza, considerando a forma como são apresentados nos diferentes meios (científico, midiático etc.)." }
                    ]
                },
                "Lutas": {
                    "Lutas do Brasil e do Mundo": [
                        { codigo: "EF89EF09", descricao: "Experimentar e fruir diferentes lutas do Brasil e do mundo (lutas de matriz indígena e africana), prezando pelo trabalho coletivo, pelo respeito e pela integridade física e emocional." },
                        { codigo: "EF89EF10", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil e do mundo (lutas de matriz indígena e africana) experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF89EF11", descricao: "Identificar e debater as transformações históricas das lutas e suas diferentes manifestações, considerando a forma como são apresentadas nos diferentes meios (científico, midiático etc.)." }
                    ],
                    "Lutas de Matriz Indígena e Africana": [
                        { codigo: "EF89EF09", descricao: "Experimentar e fruir diferentes lutas do Brasil e do mundo (lutas de matriz indígena e africana), prezando pelo trabalho coletivo, pelo respeito e pela integridade física e emocional." },
                        { codigo: "EF89EF10", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil e do mundo (lutas de matriz indígena e africana) experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF89EF11", descricao: "Identificar e debater as transformações históricas das lutas e suas diferentes manifestações, considerando a forma como são apresentadas nos diferentes meios (científico, midiático etc.)." }
                    ]
                },
                "Práticas Corporais de Aventura": {
                    "Práticas de Aventura na Natureza": [
                        { codigo: "EF89EF12", descricao: "Experimentar e fruir diferentes práticas corporais de aventura na natureza, valorizando a própria segurança e integridade física, bem como as dos demais, respeitando o patrimônio natural e minimizando os impactos de degradação ambiental." },
                        { codigo: "EF89EF13", descricao: "Planejar e utilizar estratégias para a prática segura e inclusiva das práticas corporais de aventura na natureza." },
                        { codigo: "EF89EF14", descricao: "Identificar e discutir os riscos durante a realização de práticas corporais de aventura na natureza e planejar estratégias para sua superação." }
                    ]
                }
            },
            "9º Ano": {
                "Esportes": {
                    "Esportes de Rede/Parede": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ],
                    "Esportes de Campo e Taco": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ],
                    "Esportes de Invasão": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ],
                    "Esportes de Combate": [
                        { codigo: "EF89EF01", descricao: "Experimentar e fruir diferentes papéis (jogador, árbitro e técnico) e fruir os esportes de rede/parede, campo e taco, invasão e combate, valorizando o trabalho coletivo e o protagonismo." },
                        { codigo: "EF89EF02", descricao: "Praticar um ou mais esportes de rede/parede, campo e taco, invasão e combate oferecidos pela escola, usando habilidades técnico-táticas básicas." },
                        { codigo: "EF89EF03", descricao: "Formular e utilizar estratégias para solucionar os desafios técnicos e táticos, tanto nos esportes de rede/parede, campo e taco, invasão e combate como nas modalidades esportivas escolhidas para praticar." },
                        { codigo: "EF89EF04", descricao: "Investigar as transformações na organização e na prática dos esportes de rede/parede, campo e taco, invasão e combate em diferentes épocas e lugares." }
                    ]
                },
                "Ginásticas": {
                    "Ginástica de Conscientização Corporal": [
                        { codigo: "EF89EF05", descricao: "Experimentar e fruir diferentes tipos de ginásticas de conscientização corporal, identificando as exigências corporais dos mesmos e reconhecendo a importância de uma prática individualizada, adequada às características e necessidades de cada aluno." },
                        { codigo: "EF89EF06", descricao: "Identificar as características das ginásticas de conscientização corporal, discutindo como a prática pode contribuir para a melhoria das condições de vida, saúde, bem-estar e cuidado consigo mesmo." }
                    ]
                },
                "Danças": {
                    "Danças de Salão": [
                        { codigo: "EF89EF07", descricao: "Experimentar e fruir um ou mais programas de exercícios físicos, identificando as exigências corporais dos mesmos e reconhecendo a importância de uma prática individualizada, adequada às características e necessidades de cada aluno." },
                        { codigo: "EF89EF08", descricao: "Discutir as transformações históricas dos padrões de desempenho, saúde e beleza, considerando a forma como são apresentados nos diferentes meios (científico, midiático etc.)." }
                    ]
                },
                "Lutas": {
                    "Lutas do Brasil e do Mundo": [
                        { codigo: "EF89EF09", descricao: "Experimentar e fruir diferentes lutas do Brasil e do mundo (lutas de matriz indígena e africana), prezando pelo trabalho coletivo, pelo respeito e pela integridade física e emocional." },
                        { codigo: "EF89EF10", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil e do mundo (lutas de matriz indígena e africana) experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF89EF11", descricao: "Identificar e debater as transformações históricas das lutas e suas diferentes manifestações, considerando a forma como são apresentadas nos diferentes meios (científico, midiático etc.)." }
                    ],
                    "Lutas de Matriz Indígena e Africana": [
                        { codigo: "EF89EF09", descricao: "Experimentar e fruir diferentes lutas do Brasil e do mundo (lutas de matriz indígena e africana), prezando pelo trabalho coletivo, pelo respeito e pela integridade física e emocional." },
                        { codigo: "EF89EF10", descricao: "Planejar e utilizar estratégias básicas das lutas do Brasil e do mundo (lutas de matriz indígena e africana) experimentadas, respeitando o colega como oponente e as normas de segurança." },
                        { codigo: "EF89EF11", descricao: "Identificar e debater as transformações históricas das lutas e suas diferentes manifestações, considerando a forma como são apresentadas nos diferentes meios (científico, midiático etc.)." }
                    ]
                },
                "Práticas Corporais de Aventura": {
                    "Práticas de Aventura na Natureza": [
                        { codigo: "EF89EF12", descricao: "Experimentar e fruir diferentes práticas corporais de aventura na natureza, valorizando a própria segurança e integridade física, bem como as dos demais, respeitando o patrimônio natural e minimizando os impactos de degradação ambiental." },
                        { codigo: "EF89EF13", descricao: "Planejar e utilizar estratégias para a prática segura e inclusiva das práticas corporais de aventura na natureza." },
                        { codigo: "EF89EF14", descricao: "Identificar e discutir os riscos durante a realização de práticas corporais de aventura na natureza e planejar estratégias para sua superação." }
                    ]
                }
            }
        };
