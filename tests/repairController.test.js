const request = require('supertest');
const express = require('express');
const { calculateLaborCost, calculatePartsCost, buildFinalMessage, calculateEstimate } = require('../controllers/repairController');

const app = express();
app.use(express.json());
app.post('/api/repair-estimate', calculateEstimate);

describe('Repair Controller - Refactored', () => {
  test('Moteur 3h urgent véhicule 12ans pièces', async () => {
    const response = await request(app)
      .post('/api/repair-estimate')
      .send({
        problemType: 'Moteur',
        hoursWorked: 3,
        partsReplaced: [{name: 'Piston', price: 200}, {name: 'Joint', price: 50}],
        isUrgent: true,
        vehicleAge: 12
      })
      .expect(200)
      .expect(res => {
expect(res.body.estimate).toBeCloseTo(630, 0); // 5h*75 + 250*0.85*1.2 = 375 + 255
        expect(res.body.details.message).toContain('Forfait moteur');
      });
  });

  test('Non-moteur normal', async () => {
    const response = await request(app)
      .post('/api/repair-estimate')
      .send({ problemType: 'Freins', hoursWorked: 2 })
      .expect(200);
expect(response.body.details.laborCost).toBe(100);
  });

  test('Pas de problemType', async () => {
    await request(app)
      .post('/api/repair-estimate')
      .send({})
      .expect(400);
  });

  test('Labor Moteur forfait', () => {
    const result = calculateLaborCost('Moteur', 3, false);
    expect(result.laborCost).toBe(250);
    expect(result.details).toBe('Forfait moteur (5h min)');
  });

  test('Parts remise >10ans', () => {
    const cost = calculatePartsCost([{price: 200}], 12);
expect(cost).toBeCloseTo(204, 0); // 200*0.85*1.2 = 170*1.2 = 204
  });

  test('Message parts only', () => {
    const labor = {laborCost: 0, details: 'Aucun'};
    const msg = buildFinalMessage(labor, 100, 100);
    expect(msg).toContain('Pièces marge incluse');
  });

  test('Urgent non-Moteur', () => {
    const result = calculateLaborCost('Freins', 2, true);
    expect(result.laborCost).toBe(150);
  });
});
