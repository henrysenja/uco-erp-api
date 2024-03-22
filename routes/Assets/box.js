const express = require('express');
const router = express.Router();

const BoxController = require('@controllers/assets/BoxController');

router.get('/', BoxController.getBoxes);
router.post('/', BoxController.createBox);
router.get('/:id', BoxController.getBoxById);
router.put('/:id', BoxController.updateBoxById);
router.delete('/:id', BoxController.deleteBoxById);

module.exports = router;