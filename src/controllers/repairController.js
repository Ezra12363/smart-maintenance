const { calculateRepairEstimate } = require('../services/estimateService');

async function calculateEstimate(req, res) {
    try {
        const estimate = calculateRepairEstimate(req.body);
        res.status(200).json(estimate);
    } catch (error) {
        res.status(400).json({
            error: 'Erreur de calcul',
            message: error.message
        });
    }
}

module.exports = { calculateEstimate };
