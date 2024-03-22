const mongoose = require('mongoose');
const { Schema } = mongoose;

const assetPersonSchema = new Schema({
  person_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  id_card_number: {
    type: String,
    required: true
  },
  id_card_type: {
    type: String,
    required: true
  },
  photo: String,
  license: String,
  active: {
    type: Boolean,
    default: true
  }
});

const AssetPerson = mongoose.model('AssetPerson', assetPersonSchema);

module.exports = AssetPerson;