// Refactored - Étape 4 Qualimétrie : nesting réduit, fonctions pures
function calculateLaborCost(problemType, hoursWorked, isUrgent) {
  let laborCost = 0;
  let details = '';

  const hourlyRate = isUrgent ? 75 : 50;

  if (problemType === 'Moteur') {
    const effectiveHours = hoursWorked && hoursWorked >= 5 ? hoursWorked : 5;
    laborCost = effectiveHours * hourlyRate;
    details = effectiveHours === 5 ? 'Forfait moteur (5h min)' : 'Tarif horaire';
  } else {
    laborCost = hoursWorked ? hoursWorked * hourlyRate : 0;
    details = hoursWorked ? 'Tarif horaire' : 'Heures non spécifiées';
  }

  if (isUrgent) details += ' + Urgent';
  return { laborCost, details };
}

function calculatePartsCost(partsReplaced, vehicleAge) {
  let totalParts = 0;

  for (const part of partsReplaced) {
    if (part.price > 0) {
      const discount = vehicleAge > 10 ? 0.85 : 1.0;
      totalParts += part.price * discount;
    }
  }

  return totalParts * 1.20; // Marge 20%
}

function buildFinalMessage(labor, partsCost, totalEstimate) {
  let message = `${labor.details}`;
  if (partsCost > 0) message += ' - Pièces marge incluse';

  if (totalEstimate === 0) message = 'Aucun coût calculé';
  return message;
}

function calculateEstimate(req, res) {
  try {
    const { problemType, hoursWorked, partsReplaced = [], isUrgent = false, vehicleAge = 0 } = req.body;

    if (!problemType) {
      return res.status(400).json({ error: "Type de problème requis" });
    }

    const labor = calculateLaborCost(problemType, hoursWorked, isUrgent);
    const partsCost = calculatePartsCost(partsReplaced, vehicleAge);
    const totalEstimate = labor.laborCost + partsCost;
    const message = buildFinalMessage(labor, partsCost, totalEstimate);

    return res.json({
      estimate: totalEstimate,
      details: {
        laborCost: labor.laborCost,
        partsCost,
        message
      }
    });
  } catch (error) {
    return res.status(500).json({ error: "Erreur interne du serveur" });
  }
}


module.exports = { 
  calculateEstimate, 
  calculateLaborCost, 
  calculatePartsCost, 
  buildFinalMessage 
};
