async function createModel(Model, data) {
    try {
      const newItem = new Model(data);
      await newItem.save();
      return newItem;
    } catch (error) {
      throw new Error(`Error creating item: ${error.message}`);
    }
  }
  
  async function getModelById(Model, id) {
    try {
      const item = await Model.findById(id);
      return item;
    } catch (error) {
      throw new Error(`Error getting item by ID: ${error.message}`);
    }
  }
  
  async function updateModelById(Model, id, newData) {
    try {
      const updatedItem = await Model.findByIdAndUpdate(id, newData, { new: true });
      return updatedItem;
    } catch (error) {
      throw new Error(`Error updating item: ${error.message}`);
    }
  }
  
  async function deleteModelById(Model, id) {
    try {
      const deletedItem = await Model.findByIdAndDelete(id);
      return deletedItem;
    } catch (error) {
      throw new Error(`Error deleting item: ${error.message}`);
    }
  }
  
  module.exports = {
    createModel,
    getModelById,
    updateModelById,
    deleteModelById,
  };