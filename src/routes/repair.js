const express = require('express');
const router = express.Router();
const { calculateEstimate } = require('../controllers/repairController');

// Route POST /api/repair-estimate
router.post('/repair-estimate', calculateEstimate);

module.exports = router;
