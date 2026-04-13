const request = require('supertest');
const app = require('../../server');

describe('API Integration - Repair Estimate', () => {
  test('should return valid estimate for complete request', async () => {
    const response = await request(app)
      .post('/api/repair-estimate')
      .send({
        problemType: 'Moteur',
        hoursWorked: 3,
        partsReplaced: [{ name: 'Piston', price: 200 }],
        isUrgent: true,
        vehicleAge: 12
      })
      .expect(200);

    expect(response.body.estimate).toBeGreaterThan(0);
    expect(response.body.details).toBeDefined();
  });

  test('should return 400 for missing problemType', async () => {
    await request(app)
      .post('/api/repair-estimate')
      .send({})
      .expect(400);
  });
});
