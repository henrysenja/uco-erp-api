const mongoose = require('mongoose');
const { Schema } = mongoose;

const assetCompanySchema = new Schema({
  company_id: {
    type: String,
    required: true
  },
  name: {
    type: String,
    required: true
  },
  legal_name: {
    type: String,
    required: true
  },
  phone: {
    type: String,
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
  tax_number: {
    type: String,
    required: true
  },
  contact_name: {
    type: String,
    required: true
  },
  contact_email: {
    type: String,
    required: true
  },
  contact_number: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

const AssetCompany = mongoose.model('AssetCompany', assetCompanySchema,"asset_companies");

module.exports = AssetCompany;
