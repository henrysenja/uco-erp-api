const express = require('express');
const router = express.Router();

const TankController = require('@controllers/assets/TankController');

router.get('/', TankController.getTanks);
router.post('/', TankController.createTank);
router.get('/:id', TankController.getTankById);
router.put('/:id', TankController.updateTankById);
router.delete('/:id', TankController.deleteTankById);

module.exports = router;