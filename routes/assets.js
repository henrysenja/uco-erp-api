const express = require('express');
const router = express.Router();
const assetsBoxRoute = require('@routes/Assets/box');
const assetsCompanyRoute = require('@routes/Assets/company');
const assetsLocationRoute = require('@routes/Assets/location');
const assetsPersonRoute = require('@routes/Assets/person');
const assetsTankRoute = require('@routes/Assets/tank');
const assetTransportRoute = require('@routes/Assets/transport');

router.use('/box', assetsBoxRoute);
router.use('/company', assetsCompanyRoute);
router.use('/location', assetsLocationRoute);
router.use('/person', assetsPersonRoute);
router.use('/tank', assetsTankRoute);
router.use('/transport', assetTransportRoute);

module.exports = router;