const { calculatePartsCost } = require('../services/partsCalculator');

describe('Parts Calculator', () => {
    const sampleParts = [
        { name: 'Piston', price: 200 },
        { name: 'Joint', price: 50 }
    ];

    describe('Calcul standard', () => {

        test('devrait calculer avec marge 20% sans remise', () => {
            const result = calculatePartsCost(sampleParts, 5);
            expect(result.cost).toBe(300);
            expect(result.details.hasDiscount).toBe(false);
            expect(result.details.partsCount).toBe(2);
        });

    });

    describe('Remise véhicule ancien', () => {
        test('devrait appliquer 15% remise si >10 ans', () => {
            const result = calculatePartsCost(sampleParts, 12);
            expect(result.cost).toBe(255);
expect(result.details.hasDiscount).toBe(true);
            expect(result.details.partsCount).toBe(2);
        });
    });

    describe('Cas particuliers', () => {
        test('devrait retourner 0 si pas de pièces', () => {
            const result = calculatePartsCost([], 5);
            expect(result.cost).toBe(0);
            expect(result.details.partsCount).toBe(0);
        });

        test('devrait ignorer pièces avec prix 0 ou null', () => {
            const partsWithZero = [
                { name: 'Valide', price: 100 },
                { name: 'Invalide', price: 0 },
                { name: 'Null', price: null }
            ];
            const result = calculatePartsCost(partsWithZero, 5);
            expect(result.cost).toBe(120);
        });
    });
});
