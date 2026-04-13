const { calculateLaborCost } = require('../services/laborCalculator');

describe('Labor Calculator', () => {
    describe('Cas normaux', () => {
        test('devrait calculer correctement le tarif normal', () => {
            const result = calculateLaborCost('Freins', 3, false);
            expect(result.cost).toBe(150);
            expect(result.details.hourlyRate).toBe(50);
            expect(result.details.hours).toBe(3);
        });

        test('devrait appliquer le tarif urgent', () => {
            const result = calculateLaborCost('Freins', 3, true);
            expect(result.cost).toBe(225);
            expect(result.details.hourlyRate).toBe(75);
        });
    });

    describe('Règle moteur', () => {
        test('devrait appliquer forfait 5h si heures < 5', () => {
            const result = calculateLaborCost('Moteur', 2, false);
            expect(result.cost).toBe(250);
            expect(result.details.hours).toBe(5);
            expect(result.details.appliedRule).toContain('Forfait');
        });

        test('devrait utiliser heures réelles si > 5 pour moteur', () => {
            const result = calculateLaborCost('Moteur', 7, false);
            expect(result.cost).toBe(350);
            expect(result.details.hours).toBe(7);
        });
    });

describe('Cas limites', () => {
        test('devrait gérer problemType manquant', () => {
            const result = calculateLaborCost(null, 3, false);
            expect(result.cost).toBe(0);
            expect(result.details.error).toBe('problemType required');
        });

        test('devrait gérer heures non spécifiées pour non-moteur', () => {
            const result = calculateLaborCost('Freins', null, false);
            expect(result.cost).toBe(0);
            expect(result.details.hours).toBe(0);
        });

        test('devrait combiner moteur + urgent', () => {
            const result = calculateLaborCost('Moteur', 3, true);
            expect(result.cost).toBe(375);
            expect(result.details.hourlyRate).toBe(75);
        });
    });
});

