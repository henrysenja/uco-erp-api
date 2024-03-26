const Box = require('@models/boxModel');
const {
  createModel,
  getModelById,
  updateModelById,
  deleteModelById,
} = require('../commonCrud');


async function createBox(req, res) {
    try {
      const newBox = await createModel(Box, req.body);
      res.json(newBox);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function getBoxById(req, res) {
    try {
      const box = await getModelById(Box, req.params.id);
      res.json(box);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function updateBoxById(req, res) {
    try {
      const updatedBox = await updateModelById(Box, req.params.id, req.body);
      res.json(updatedBox);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function deleteBoxById(req, res) {
    try {
      const deletedBox = await deleteModelById(Box, req.params.id);
      res.json(deletedBox);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getBoxes(req, res) {
    try {
      const boxes = await Box.find({active:true});
      res.json(boxes);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
module.exports = {
    createBox,
    getBoxById,
    updateBoxById,
    deleteBoxById,
    getBoxes
}  