const express = require('express');
const router = express.Router();
const repairController = require('../controllers/repairController');

// Route POST /api/repair-estimate
router.post('/repair-estimate', repairController.calculateEstimate);

module.exports = router;
