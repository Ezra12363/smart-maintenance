const { calculateLaborCost } = require('./laborCalculator');
const { calculatePartsCost } = require('./partsCalculator');

/**
 * Calcule le devis complet
 * @param {Object} request - Requête utilisateur
 * @returns {Object} Devis complet
 */
function calculateRepairEstimate(request) {
    const {
        problemType,
        hoursWorked,
        partsReplaced,
        isUrgent,
        vehicleAge
    } = request;

    // Validation des entrées
    if (!problemType || typeof problemType !== 'string') {
        throw new Error('Le type de problème est requis');
    }

    // Calcul main-d'œuvre
    const labor = calculateLaborCost(problemType, hoursWorked, isUrgent);

    // Calcul pièces
    const parts = calculatePartsCost(partsReplaced, vehicleAge);

    const total = labor.cost + parts.cost;

    return {
        estimate: Math.round(total * 100) / 100,
        details: {
            laborCost: labor.cost,
            partsCost: parts.cost,
            laborDetails: labor.details,
            partsDetails: parts.details
        }
    };
}

module.exports = { calculateRepairEstimate };
