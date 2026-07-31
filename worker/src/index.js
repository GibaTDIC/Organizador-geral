// Prof GB — Worker do Assistente Pedagógico (IA).
// Único endpoint: recebe prompt + contexto do frontend, confirma que quem
// chamou é um usuário Firebase autenticado de verdade (evita estranho
// drenar a cota gratuita do Gemini), repassa pro Gemini, devolve a resposta.
// Sem streaming — request/response simples, suficiente pro MVP.

const FIREBASE_WEB_API_KEY = "AIzaSyBnwbnCSPLH8yjkYrgLgK5Q8g1Q8RoDz1s"; // pública, não é segredo
const GEMINI_MODEL = "gemini-2.0-flash"; // conferir se o nome/versão do modelo ainda é o atual no dia do deploy

const CORS_HEADERS = {
    "Access-Control-Allow-Origin": "*", // restringir à origem real do site publicado depois do primeiro deploy
    "Access-Control-Allow-Methods": "POST, OPTIONS",
    "Access-Control-Allow-Headers": "Content-Type, Authorization",
};

export default {
    async fetch(request, env) {
        if (request.method === "OPTIONS") {
            return new Response(null, { headers: CORS_HEADERS });
        }
        if (request.method !== "POST") {
            return jsonError("Método não permitido.", 405);
        }

        const authHeader = request.headers.get("Authorization") || "";
        const idToken = authHeader.replace(/^Bearer\s+/i, "");
        if (!idToken) {
            return jsonError("Token de autenticação ausente.", 401);
        }

        const uid = await verificarIdToken(idToken);
        if (!uid) {
            return jsonError("Token inválido ou expirado.", 401);
        }

        let body;
        try {
            body = await request.json();
        } catch {
            return jsonError("Corpo da requisição inválido.", 400);
        }

        const { prompt, contexto } = body || {};
        if (!prompt || typeof prompt !== "string") {
            return jsonError("Campo 'prompt' é obrigatório.", 400);
        }

        try {
            const texto = await chamarGemini(env, prompt, contexto);
            return new Response(JSON.stringify({ resposta: texto }), {
                headers: { "Content-Type": "application/json", ...CORS_HEADERS },
            });
        } catch (erro) {
            console.error("Falha ao chamar Gemini:", erro);
            return jsonError("Não foi possível gerar a resposta agora. Tente novamente.", 502);
        }
    },
};

async function verificarIdToken(idToken) {
    const resp = await fetch(
        `https://identitytoolkit.googleapis.com/v1/accounts:lookup?key=${FIREBASE_WEB_API_KEY}`,
        {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ idToken }),
        }
    );
    if (!resp.ok) return null;
    const data = await resp.json();
    return data?.users?.[0]?.localId || null;
}

async function chamarGemini(env, prompt, contexto) {
    const promptCompleto = montarPrompt(prompt, contexto);
    const url = `https://generativelanguage.googleapis.com/v1beta/models/${GEMINI_MODEL}:generateContent?key=${env.GEMINI_API_KEY}`;
    const resp = await fetch(url, {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({
            contents: [{ parts: [{ text: promptCompleto }] }],
        }),
    });
    if (!resp.ok) {
        const erroTexto = await resp.text();
        throw new Error(`Gemini respondeu ${resp.status}: ${erroTexto}`);
    }
    const data = await resp.json();
    return data?.candidates?.[0]?.content?.parts?.[0]?.text || "";
}

function montarPrompt(prompt, contexto) {
    if (!contexto) return prompt;
    return `Contexto do professor e da turma (use para personalizar a resposta, não repita literalmente):\n${JSON.stringify(contexto, null, 2)}\n\nPedido do professor:\n${prompt}`;
}

function jsonError(mensagem, status) {
    return new Response(JSON.stringify({ erro: mensagem }), {
        status,
        headers: { "Content-Type": "application/json", ...CORS_HEADERS },
    });
}
