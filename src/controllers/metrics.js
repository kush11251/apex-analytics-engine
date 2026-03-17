const express = require('express');
const router = express.Router();
const metricsService = require('../services/metrics');
router.get('/data', (req, res) => {
    metricsService.getData().then(data => res.json(data));
});
module.exports = router;