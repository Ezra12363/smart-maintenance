const { calculateLaborCost } = require('../services/laborCalculator');

// Ajout tests pour branch 100% line 13,38
describe('Labor Calculator - Branches 100%', () => {
  test('branch line 13 - non Moteur urgent null hours', () => {
    const result = calculateLaborCost('Freins', null, true);
    expect(result.details.hourlyRate).toBe(75);
    expect(result.details.hours).toBe(0);
  });

  test('branch line 38 - Moteur hours=0 urgent', () => {
    const result = calculateLaborCost('Moteur', 0, true);
    expect(result.details.hours).toBe(5);
    expect(result.details.hourlyRate).toBe(75);
  });
});
