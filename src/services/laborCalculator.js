/**
 * Calcule le coût de main-d'œuvre
 */
function calculateLaborCost(problemType, hoursWorked, isUrgent) {
  if (!problemType) return { cost: 0, details: { error: 'problemType required' } };
  
  const baseRate = isUrgent ? 75 : 50;
  let effectiveHours = hoursWorked || 0;
  let appliedRule = 'Tarif horaire normal';

  // Early return pour cas simple
  if (problemType !== 'Moteur') {
    return {
      cost: effectiveHours * baseRate,
      details: {
        hours: effectiveHours,
        hourlyRate: baseRate,
        appliedRule,
        originalHours: hoursWorked || null
      }
    };
  }

  // Cas Moteur - forfait
  if (!hoursWorked || hoursWorked < 5) {
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
