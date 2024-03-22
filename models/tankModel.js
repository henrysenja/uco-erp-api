const mongoose = require('mongoose');
const { Schema } = mongoose;

const assetTankSchema = new Schema({
  tanks_id: {
    type: String,
    required: true
  },
  type: {
    type: String,
    required: true
  },
  capacity: {
    type: Number,
    required: true
  },
  locations_id: {
    type: String,
    required: true
  },
  company_id: {
    type: String,
    required: true
  },
  active: {
    type: Boolean,
    default: true
  }
});

const AssetTank = mongoose.model('AssetTank', assetTankSchema);

module.exports = AssetTank;