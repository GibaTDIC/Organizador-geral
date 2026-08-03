// Prof GB — Extração de texto puro de .docx pra importação de Atividades.
// Reaproveita só a mecânica de descompactação (JSZip + word/document.xml +
// DOMParser) de docx-planejamento-parser.js — não os rótulos específicos do
// modelo de Planejamento, porque documentos de atividade têm layout livre e
// imprevisível. O texto extraído aqui é enviado à IA (formatoResposta:'json')
// pra estruturar os campos, em vez de reconhecimento de rótulo local.
import JSZip from "https://cdn.jsdelivr.net/npm/jszip@3.10.1/+esm";

export async function extrairTextoDocxAtividade(file) {
    const zip = await JSZip.loadAsync(await file.arrayBuffer());
    const arquivoXml = zip.file('word/document.xml');
    if (!arquivoXml) {
        throw new Error('Arquivo .docx inválido ou corrompido (word/document.xml não encontrado).');
    }
    const xmlTexto = await arquivoXml.async('string');
    const xmlDoc = new DOMParser().parseFromString(xmlTexto, 'application/xml');
    if (xmlDoc.getElementsByTagName('parsererror').length > 0) {
        throw new Error('Não foi possível ler o conteúdo do arquivo .docx.');
    }

    const paragrafos = [];
    const ps = xmlDoc.getElementsByTagName('w:p');
    for (let i = 0; i < ps.length; i++) {
        const nos = ps[i].getElementsByTagName('w:t');
        let texto = '';
        for (let j = 0; j < nos.length; j++) {
            texto += nos[j].textContent || '';
        }
        if (texto.trim()) paragrafos.push(texto.trim());
    }
    return paragrafos.join('\n');
}
