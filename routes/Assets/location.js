const express = require('express');
const router = express.Router();

const LocationController = require('@controllers/assets/LocationController');

router.get('/', LocationController.getLocations);
router.post('/', LocationController.createLocation);
router.get('/:id', LocationController.getLocationById);
router.put('/:id', LocationController.updateLocationById);
router.delete('/:id', LocationController.deleteLocationById);



module.exports = router;