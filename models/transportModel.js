const mongoose = require('mongoose');
const { Schema } = mongoose;

const assetTransportSchema = new Schema({
  transport_id: {
    type: String,
    required: true
  },
  company_id: {
    type: String,
    required: true
  },
  identification: {
    type: String,
    required: true
  },
  country: {
    type: String,
    default: "Indonesia"
  },
  capacity: {
    type: Number,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

const AssetTransport = mongoose.model('AssetTransport', assetTransportSchema,"asset_transports");

module.exports = AssetTransport;