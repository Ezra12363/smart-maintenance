const express = require('express');
const router = express.Router();
const { calculateEstimate } = require('../controllers/repairController');

/**
 * @swagger
 * /api/repair-estimate:
 *   post:
 *     summary: Calcule devis réparation
 *     tags: [Repair]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               problemType:
 *                 type: string
 *                 enum: [Moteur, Freins, Suspension]
 *                 example: Moteur
 *               hoursWorked:
 *                 type: number
 *                 example: 3
 *               partsReplaced:
 *                 type: array
 *                 items:
 *                   type: object
 *                   properties:
 *                     name: { type: string }
 *                     price: { type: number }
 *               isUrgent: { type: boolean, default: false }
 *               vehicleAge: { type: number, default: 0 }
 *     responses:
 *       200:
 *         description: Devis calculé
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 estimate: { type: number }
 *                 details: { laborCost, partsCost, message }
 *       400:
 *         description: Erreur validation
 */
router.post('/repair-estimate', calculateEstimate);

module.exports = router;
