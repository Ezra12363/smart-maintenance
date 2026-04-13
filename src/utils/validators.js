// Validation utilitaire
function validateEstimateRequest(reqBody) {
    const required = ['problemType'];
    const missing = required.filter(field => !reqBody[field]);
    if (missing.length) {
        throw new Error(`Champs manquants: ${missing.join(', ')}`);
    }
    return true;
}

module.exports = { validateEstimateRequest };
