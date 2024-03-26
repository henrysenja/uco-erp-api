const Transport = require('@models/transportModel');
const {
  createModel,
  getModelById,
  updateModelById,
  deleteModelById,
} = require('../commonCrud');

async function createTransport(req, res) {
    try {
      const newTransport = await createModel(Transport, req.body);
      res.json(newTransport);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function getTransportById(req, res) {
    try {
      const transport = await getModelById(Transport, req.params.id);
      res.json(transport);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function updateTransportById(req, res) {
    try {
      const updatedTransport = await updateModelById(Transport, req.params.id, req.body);
      res.json(updatedTransport);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function deleteTransportById(req, res) {
    try {
      const deletedTransport = await deleteModelById(Transport, req.params.id);
      res.json(deletedTransport);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function getTransports(req,res) {
    try {
      const transports = await Transport.find({active:true});
      res.json(transports);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
module.exports = {
    createTransport,
    getTransportById,
    updateTransportById,
    deleteTransportById,
    getTransports
}  