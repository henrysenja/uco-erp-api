const express = require('express');
const router = express.Router();

const Companycontroller = require('@controllers/assets/CompanyController');

router.get('/', Companycontroller.getCompanies);
router.post('/', Companycontroller.createCompany);
router.get('/:id', Companycontroller.getCompanyById);
router.put('/:id', Companycontroller.updateCompanyById);
router.delete('/:id', Companycontroller.deleteCompanyById);


module.exports = router;