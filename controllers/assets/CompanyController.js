const Company = require('@models/companyModel');
const {
  createModel,
  getModelById,
  updateModelById,
  deleteModelById,
} = require('./commonCrud');


async function createCompany(req, res) {
    try {
      const newCompany = await createModel(Company, req.body);
      res.json(newCompany);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function getCompanyById(req, res) {
    try {
      const company = await getModelById(Company, req.params.id);
      res.json(company);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function updateCompanyById(req, res) {
    try {
      const updatedCompany = await updateModelById(Company, req.params.id, req.body);
      res.json(updatedCompany);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function deleteCompanyById(req, res) {
    try {
      const deletedCompany = await deleteModelById(Company, req.params.id);
      res.json(deletedCompany);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getCompanies(req, res) {
    try {
      const companies = await Company.find({active:true});
      res.json(companies);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
module.export = {
    createCompany,
    getCompanyById,
    updateCompanyById,
    deleteCompanyById,
    getCompanies
}  