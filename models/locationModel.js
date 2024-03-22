const mongoose = require('mongoose');
const { Schema } = mongoose;

const assetLocationSchema = new Schema({
  location_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  company_id: {
    type: String,
    required: true
  },
  latitude: {
    type: Number,
    required: true
  },
  longitude: {
    type: Number,
    required: true
  },
  address: {
    type: String,
    required: true
  },
  postcode: {
    type: String,
    required: true
  },
  city: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: "Indonesia"
  },
  active: {
    type: Boolean,
    default: true
  }
});

const AssetLocation = mongoose.model('AssetLocation', assetLocationSchema);

module.exports = AssetLocation;