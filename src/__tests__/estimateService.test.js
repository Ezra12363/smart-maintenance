const { calculateRepairEstimate } = require('../services/estimateService');

describe('Repair Estimate Service', () => {
    test('devis complet standard', () => {
        const request = {
            problemType: 'Freins',
            hoursWorked: 3,
            partsReplaced: [{ name: 'Plaquettes', price: 80 }],
            isUrgent: false,
            vehicleAge: 5
        };

        const result = calculateRepairEstimate(request);
        expect(result.estimate).toBe(246);
        expect(result.details.laborCost).toBe(150);
        expect(result.details.partsCost).toBe(96);
    });

    test('devis moteur urgent avec remise', () => {
        const request = {
            problemType: 'Moteur',
            hoursWorked: 3,
            partsReplaced: [{ name: 'Kit distribution', price: 500 }],
            isUrgent: true,
            vehicleAge: 12
        };

        const result = calculateRepairEstimate(request);
        expect(result.estimate).toBe(885);
    });

    test('devrait lever erreur si pas de problemType', () => {
        expect(() => {
            calculateRepairEstimate({ hoursWorked: 3 });
        }).toThrow('Le type de problème est requis');
    });
});
