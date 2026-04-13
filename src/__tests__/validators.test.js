const { validateEstimateRequest } = require('../utils/validators');

describe('validators', () => {
  test('should pass with problemType', () => {
    const result = validateEstimateRequest({ problemType: 'Moteur' });
    expect(result).toBe(true);
  });

  test('should throw error without problemType', () => {
    expect(() => validateEstimateRequest({})).toThrow('Champs manquants: problemType');
  });

  test('should pass with all fields', () => {
    const result = validateEstimateRequest({
      problemType: 'Moteur',
      hoursWorked: 3,
      isUrgent: true
    });
    expect(result).toBe(true);
  });
});
