const express = require('express');
const router = express.Router();
const assetsRoute = require('@routes/assets.js');

router.use('/assets', assetsRoute);

module.exports = router;