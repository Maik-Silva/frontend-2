module.exports = {

"[externals]/next/dist/compiled/@opentelemetry/api [external] (next/dist/compiled/@opentelemetry/api, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/@opentelemetry/api", () => require("next/dist/compiled/@opentelemetry/api"));

module.exports = mod;
}}),
"[externals]/next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js [external] (next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js, cjs)": ((__turbopack_context__) => {

var { m: module, e: exports } = __turbopack_context__;
{
const mod = __turbopack_context__.x("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js", () => require("next/dist/compiled/next-server/pages-api-turbo.runtime.dev.js"));

module.exports = mod;
}}),
"[project]/pages/api/proxyForm.ts [api] (ecmascript)": ((__turbopack_context__) => {
"use strict";

// pages/api/proxyForm.ts
__turbopack_context__.s({
    "default": ()=>handler
});
async function handler(req, res) {
    if (req.method !== "POST") {
        return res.status(405).json({
            error: "Método não permitido"
        });
    }
    try {
        const { alimento } = req.body;
        // URL do formulário do Google Forms
        const formUrl = "https://docs.google.com/forms/d/e/1FAIpQLSfDi33Amzo6L_j7X_YCSuEhZJxZohNazm3e7rDYX23Mm7kLnA/formResponse";
        // Campo do formulário (ajuste se necessário)
        const formData = new URLSearchParams();
        formData.append("entry.1297131437", alimento);
        const response = await fetch(formUrl, {
            method: "POST",
            headers: {
                "Content-Type": "application/x-www-form-urlencoded"
            },
            body: formData.toString()
        });
        if (!response.ok) {
            return res.status(500).json({
                error: "Erro ao enviar para Google Forms"
            });
        }
        return res.status(200).json({
            message: "Sugestão enviada com sucesso"
        });
    } catch (error) {
        console.error("Erro ao enviar sugestão:", error);
        return res.status(500).json({
            error: "Erro interno do servidor"
        });
    }
}
}),

};

//# sourceMappingURL=%5Broot-of-the-server%5D__2a931b25._.js.map