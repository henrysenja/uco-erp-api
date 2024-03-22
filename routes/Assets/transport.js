const express = require('express');
const router = express.Router();

const TransportController = require('@controllers/assets/TransportController');

router.get('/', TransportController.getTransports);
router.post('/', TransportController.createTransport);
router.get('/:id', TransportController.getTransportById);
router.put('/:id', TransportController.updateTransportById);
router.delete('/:id', TransportController.deleteTransportById);



module.exports = router;