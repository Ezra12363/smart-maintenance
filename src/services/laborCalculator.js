/**
 * Calcule le coût de main-d'œuvre
 * @param {string} problemType - Type de problème ('Moteur' ou autre)
 * @param {number} hoursWorked - Heures travaillées
 * @param {boolean} isUrgent - Option urgente
 * @returns {Object} { cost, details }
 */
function calculateLaborCost(problemType, hoursWorked, isUrgent) {
    const baseRate = isUrgent ? 75 : 50;
    let effectiveHours = hoursWorked || 0;
    let appliedRule = 'Tarif horaire normal';

    // Règle forfait moteur (5h minimum)
    if (problemType === 'Moteur' && (!hoursWorked || hoursWorked < 5)) {
        effectiveHours = 5;
        appliedRule = 'Forfait moteur (5h minimum)';
    }

    const cost = effectiveHours * baseRate;

    return {
        cost,
        details: {
            hours: effectiveHours,
            hourlyRate: baseRate,
            appliedRule,
            originalHours: hoursWorked || null
        }
    };
}

module.exports = { calculateLaborCost };
