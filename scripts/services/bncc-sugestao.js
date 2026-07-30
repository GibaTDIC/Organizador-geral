// Prof GB — Sugestão de classificação BNCC a partir de códigos de habilidade
// soltos (ex: extraídos de um documento importado). Fica separado do parser
// de DOCX porque não é exclusivo dele — qualquer fluxo que precise resolver
// "que código é esse" pode reusar.
//
// Um código como EF67EF03 (6º-7º ano combinados) aparece DUPLICADO no
// dataset, uma vez por série, e cruzando várias especificações da mesma
// unidade — não existe uma combinação (série, unidade, especificação) única
// pra um código isolado. Por isso a função devolve uma LISTA de candidatos,
// não uma resposta certa — quem chama decide (normalmente: uma tela de
// revisão onde o professor escolhe).
import { habilidadesBNCC } from '../../data/bncc-curriculum.js';

let indiceCodigos = null;

function construirIndice() {
    const indice = new Map();
    Object.entries(habilidadesBNCC).forEach(([serie, unidades]) => {
        Object.entries(unidades).forEach(([unidade, especs]) => {
            Object.entries(especs).forEach(([especificacao, lista]) => {
                lista.forEach(h => {
                    if (!indice.has(h.codigo)) indice.set(h.codigo, []);
                    indice.get(h.codigo).push({ serie, unidade, especificacao });
                });
            });
        });
    });
    return indice;
}

function obterIndice() {
    if (!indiceCodigos) indiceCodigos = construirIndice();
    return indiceCodigos;
}

function mesmaCombinacao(a, b) {
    return a.serie === b.serie && a.unidade === b.unidade && a.especificacao === b.especificacao;
}

// codigos: array de strings (ex: ["EF67EF03", "EF67EF04"]).
// especificacoesExtraidas: textos livres pra estreitar os candidatos —
// muitos modelos de planejamento chamam de "Unidade Temática" o que no
// nosso dataset é o nível "especificação" (ex: "Esportes de Precisão" é
// uma especificação da unidade "Esportes"), então o filtro compara contra
// especificacao, não unidade.
export function sugerirClassificacaoBNCC(codigos, especificacoesExtraidas) {
    const indice = obterIndice();
    let candidatos = null;

    (codigos || []).forEach(codigo => {
        const lista = indice.get(codigo) || [];
        if (candidatos === null) {
            candidatos = lista.slice();
        } else {
            candidatos = candidatos.filter(c => lista.some(l => mesmaCombinacao(c, l)));
        }
    });
    candidatos = candidatos || [];

    if (especificacoesExtraidas && especificacoesExtraidas.length > 0) {
        const alvos = especificacoesExtraidas.map(s => s.toLowerCase().trim()).filter(Boolean);
        const filtrados = candidatos.filter(c => {
            const especLower = c.especificacao.toLowerCase();
            return alvos.some(a => especLower.includes(a) || a.includes(especLower));
        });
        if (filtrados.length > 0) candidatos = filtrados;
    }

    return candidatos;
}
