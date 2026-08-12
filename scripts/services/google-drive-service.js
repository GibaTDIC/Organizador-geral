// Prof GB — Importação de atividades a partir do Google Drive (versão enxuta:
// conectar conta → escolher 1 arquivo via Google Picker → baixar conteúdo).
// Sem backend próprio além do Worker de IA, então tudo aqui roda no
// navegador: Google Identity Services pro OAuth e o Picker carregados por
// CDN como <script> UMD, igual já se faz com docxtemplater/pizzip em
// pei-docx-export.js (mesmo padrão de carregarScript + cache em variável
// de módulo). Client ID e API Key não são segredo — ficam expostos no
// código do navegador mesmo em produção; a proteção real é a lista de
// origens JavaScript autorizadas configurada no Google Cloud Console.
const GOOGLE_DRIVE_CLIENT_ID = '677589777900-onp7v7v0uoib0orlmr5r8altngu6id8p.apps.googleusercontent.com';
const GOOGLE_DRIVE_API_KEY = 'AIzaSyDh9mjvhWmdwDaSBTZ0ym5ZNf2osSxheQc';
const GOOGLE_DRIVE_SCOPE = 'https://www.googleapis.com/auth/drive.readonly';

const MIME_TYPES_SUPORTADOS = [
    'application/vnd.google-apps.document',
    'application/vnd.openxmlformats-officedocument.wordprocessingml.document',
    'application/pdf'
];

function carregarScript(src) {
    return new Promise((resolve, reject) => {
        const script = document.createElement('script');
        script.src = src;
        script.onload = resolve;
        script.onerror = () => reject(new Error(`Falha ao carregar ${src}`));
        document.head.appendChild(script);
    });
}

let carregamentoLibs = null;

function garantirGoogleLibs() {
    if (!carregamentoLibs) {
        carregamentoLibs = (async () => {
            if (!window.google?.accounts?.oauth2) await carregarScript('https://accounts.google.com/gsi/client');
            if (!window.gapi) await carregarScript('https://apis.google.com/js/api.js');
            await new Promise((resolve) => window.gapi.load('picker', resolve));
        })();
    }
    return carregamentoLibs;
}

let tokenClient = null;
let accessTokenAtual = null;

function inicializarTokenClient() {
    if (!tokenClient) {
        tokenClient = window.google.accounts.oauth2.initTokenClient({
            client_id: GOOGLE_DRIVE_CLIENT_ID,
            scope: GOOGLE_DRIVE_SCOPE,
            callback: () => {} // sobrescrito a cada chamada de conectarGoogleDrive
        });
    }
    return tokenClient;
}

// forcar:true ignora o token em cache e pede um novo — usado no retry
// automático de fetchDrive quando o token expira em pleno uso.
export async function conectarGoogleDrive(forcar = false) {
    if (accessTokenAtual && !forcar) return accessTokenAtual;
    await garantirGoogleLibs();
    const cliente = inicializarTokenClient();
    return new Promise((resolve, reject) => {
        cliente.callback = (resposta) => {
            if (resposta.error) {
                reject(new Error('Não foi possível conectar ao Google Drive.'));
                return;
            }
            accessTokenAtual = resposta.access_token;
            resolve(accessTokenAtual);
        };
        cliente.error_callback = () => reject(new Error('Conexão com o Google Drive cancelada.'));
        // select_account: sem isso, o Google Identity Services pode reusar
        // silenciosamente a conta já logada no navegador (comum em
        // dispositivo compartilhado entre professores) em vez de perguntar
        // qual conta usar — cada professor precisa escolher a própria.
        cliente.requestAccessToken({ prompt: 'select_account' });
    });
}

// Resolve com {id, name, mimeType, url} do arquivo escolhido, ou null se o
// professor cancelar o seletor.
export async function abrirSeletorDrive(token) {
    await garantirGoogleLibs();
    return new Promise((resolve) => {
        const view = new window.google.picker.DocsView()
            .setMimeTypes(MIME_TYPES_SUPORTADOS.join(','))
            .setIncludeFolders(false);
        const picker = new window.google.picker.PickerBuilder()
            .addView(view)
            .setOAuthToken(token)
            .setDeveloperKey(GOOGLE_DRIVE_API_KEY)
            .setCallback((dados) => {
                if (dados.action === window.google.picker.Action.PICKED) {
                    const arquivo = dados.docs[0];
                    resolve({ id: arquivo.id, name: arquivo.name, mimeType: arquivo.mimeType, url: arquivo.url });
                } else if (dados.action === window.google.picker.Action.CANCEL) {
                    resolve(null);
                }
            })
            .build();
        picker.setVisible(true);
    });
}

async function fetchDrive(url, token) {
    let resposta = await fetch(url, { headers: { Authorization: `Bearer ${token}` } });
    if (resposta.status === 401) {
        const novoToken = await conectarGoogleDrive(true);
        resposta = await fetch(url, { headers: { Authorization: `Bearer ${novoToken}` } });
    }
    if (!resposta.ok) {
        throw new Error(`Não foi possível baixar o arquivo do Drive (status ${resposta.status}).`);
    }
    return resposta;
}

// Só pra Google Docs nativos (mimeType application/vnd.google-apps.document)
// — exporta como texto puro via endpoint /export do Drive.
export async function baixarConteudoGoogleDoc(fileId, token) {
    const resposta = await fetchDrive(`https://www.googleapis.com/drive/v3/files/${fileId}/export?mimeType=text/plain`, token);
    return resposta.text();
}

// Pra .docx/.pdf soltos no Drive (não são Google Docs nativos) — baixa o
// binário original via alt=media.
export async function baixarArquivoBinarioDrive(fileId, token) {
    const resposta = await fetchDrive(`https://www.googleapis.com/drive/v3/files/${fileId}?alt=media`, token);
    return resposta.blob();
}

// Única função pura deste arquivo (sem DOM/OAuth/rede) — decide qual
// caminho de extração usar a partir do mimeType do arquivo escolhido no
// Picker. Mantida isolada especificamente pra ser testável com fixture Node.
export function tipoDeProcessamentoDrive(mimeType) {
    if (mimeType === 'application/vnd.google-apps.document') return 'google-doc';
    if (mimeType === 'application/vnd.openxmlformats-officedocument.wordprocessingml.document') return 'docx';
    if (mimeType === 'application/pdf') return 'pdf';
    return 'nao-suportado';
}
