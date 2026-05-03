const { validateEstimateRequest } = require('../utils/validators');

describe('Validators - 100% coverage', () => {
  test('validate full request', () => {
    expect(validateEstimateRequest({problemType: 'Freins'})).toBe(true);
  });

  test('validate missing', () => {
    expect(() => validateEstimateRequest({})).toThrow('Champs manquants');
  });
});
