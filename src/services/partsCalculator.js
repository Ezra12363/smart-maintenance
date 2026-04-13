/**
 * Calcule le coût des pièces avec marge et remises
 * @param {Array} parts - Liste des pièces [{name, price}]
 * @param {number} vehicleAge - Âge du véhicule en années
 * @returns {Object} { cost, details }
 */
function calculatePartsCost(parts, vehicleAge) {
    if (!parts || parts.length === 0) {
        return { cost: 0, details: { partsCount: 0, discount: 0, margin: 0 } };
    }

    const hasSeniorDiscount = vehicleAge > 10;
    const discountRate = hasSeniorDiscount ? 0.15 : 0;
    const marginRate = 0.20;

    let totalBeforeDiscount = 0;
    const partsDetails = [];

    for (const part of parts) {
        if (part.price && part.price > 0) {
            totalBeforeDiscount += part.price;
            partsDetails.push({
                name: part.name,
                originalPrice: part.price,
                discountedPrice: hasSeniorDiscount ? part.price * 0.85 : part.price
            });
        }
    }

    const discountAmount = totalBeforeDiscount * discountRate;
    const priceAfterDiscount = totalBeforeDiscount - discountAmount;
    const finalCost = priceAfterDiscount * (1 + marginRate);

    return {
        cost: Math.round(finalCost * 100) / 100,
        details: {
            partsCount: parts.length,
            totalBeforeDiscount,
            discountAmount,
            discountRate,
            marginRate,
            finalCostBeforeMargin: priceAfterDiscount,
            hasSeniorDiscount,
            parts: partsDetails
        }
    };
}

module.exports = { calculatePartsCost };
