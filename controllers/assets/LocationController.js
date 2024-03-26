const Location = require('@models/locationModel');
const {
  createModel,
  getModelById,
  updateModelById,
  deleteModelById,
} = require('../commonCrud');

async function createLocation(req, res) {
    try {
      const newLocation = await createModel(Location, req.body);
      res.json(newLocation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function getLocationById(req, res) {
    try {
      const location = await getModelById(Location, req.params.id);
      res.json(location);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function updateLocationById(req, res) {
    try {
      const updatedLocation = await updateModelById(Location, req.params.id, req.body);
      res.json(updatedLocation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function deleteLocationById(req, res) {
    try {
      const deletedLocation = await deleteModelById(Location, req.params.id);
      res.json(deletedLocation);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getLocations(req,res) {
    try {
      const locations = await Location.find({active:true});
      res.json(locations);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

module.exports = {
    createLocation,
    getLocationById,
    updateLocationById,
    deleteLocationById,
    getLocations

}  