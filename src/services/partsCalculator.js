/**
 * Calcule le coût des pièces
 */
function calculatePartsCost(parts, vehicleAge) {
  if (!parts || parts.length === 0) {
    return { cost: 0, details: { partsCount: 0 } };
  }

  const hasDiscount = vehicleAge > 10;
  const discountMultiplier = hasDiscount ? 0.85 : 1.0;
  const margin = 1.20;

  let total = 0;
  const details = { partsCount: 0, hasDiscount };

  for (const part of parts) {
    if (part.price && part.price > 0) {
      total += part.price * discountMultiplier;
      details.partsCount++;
    }
  }

  return {
    cost: Math.round(total * margin * 100) / 100,
    details
  };
}

module.exports = { calculatePartsCost };
