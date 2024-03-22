const Person = require('@models/personModel');
const {
  createModel,
  getModelById,
  updateModelById,
  deleteModelById,
} = require('./commonCrud');

async function createPerson(req, res) {
    try {
      const newPerson = await createModel(Person, req.body);
      res.json(newPerson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function getPersonById(req, res) {
    try {
      const person = await getModelById(Person, req.params.id);
      res.json(person);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function updatePersonById(req, res) {
    try {
      const updatedPerson = await updateModelById(Person, req.params.id, req.body);
      res.json(updatedPerson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
  
  async function deletePersonById(req, res) {
    try {
      const deletedPerson = await deleteModelById(Person, req.params.id);
      res.json(deletedPerson);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }

  async function getPersons(req, res) {
    try {
      const persons = await Person.find({active:true});
      res.json(persons);
    } catch (error) {
      res.status(500).json({ error: error.message });
    }
  }
module.export = {
    createPerson,
    getPersonById,
    updatePersonById,
    deletePersonById,
    getPersons
}  