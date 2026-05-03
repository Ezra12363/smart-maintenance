const request = require('supertest');
const express = require('express');
const { calculateEstimate } = require('../../src/controllers/repairController');

describe('API Integration - Repair Estimate', () => {
  let app;
  let consoleLogSpy;

  beforeAll(() => {
    consoleLogSpy = jest.spyOn(console, 'log').mockImplementation(() => {});
  });

  beforeEach(() => {
    app = express();
    app.use(express.json());
    
    app.post('/api/repair-estimate', (req, res) => {
      calculateEstimate(req, res);
    });
  });

  afterEach(() => {
    jest.clearAllMocks();
  });

  afterAll(() => {
    consoleLogSpy.mockRestore();
  });

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
    const response = await request(app)
      .post('/api/repair-estimate')
      .send({})
      .expect(400);

    expect(response.body.error).toBeDefined();
  });
});
