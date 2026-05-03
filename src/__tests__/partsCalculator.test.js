const { calculatePartsCost } = require('../services/partsCalculator');

// Ajout test line 6
describe('Parts Calculator - Line 6 100%', () => {
  test('line 6 - parts null', () => {
    const result = calculatePartsCost(null, 5);
    expect(result.cost).toBe(0);
    expect(result.details.partsCount).toBe(0);
  });
});
