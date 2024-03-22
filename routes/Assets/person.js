const express = require('express');
const router = express.Router();

const PersonController = require('@controllers/assets/PersonController');


router.get('/', PersonController.getPersons);
router.post('/', PersonController.createPerson);
router.get('/:id', PersonController.getPersonById);
router.put('/:id', PersonController.updatePersonById);
router.delete('/:id', PersonController.deletePersonById);

module.exports = router;