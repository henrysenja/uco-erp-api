const Tank = require('@models/tanksModel');
const {
  createModel,
  getModelById,
  updateModelById,
  deleteModelById,
} = require('./commonCrud');

async function createTank(req, res) {
    try {
      const newTank = await createModel(Tank, req.body);
      res.json(newTank);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function getTankById(req, res) {
    try {
      const tank = await getModelById(Tank, req.params.id);
      res.json(tank);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function updateTankById(req, res) {
    try {
      const updatedTank = await updateModelById(Tank, req.params.id, req.body);
      res.json(updatedTank);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function deleteTankById(req, res) {
    try {
      const deletedTank = await deleteModelById(Tank, req.params.id);
      res.json(deletedTank);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getTanks(req,res) {
    try {
      const tanks = await Tank.find();
      res.json(tanks);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
module.export = {
    createTank,
    getTankById,
    updateTankById,
    deleteTankById,
    getTanks
}  