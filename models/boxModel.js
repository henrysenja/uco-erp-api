const mongoose = require('mongoose');
const Schema = mongoose.Schema;

const boxSchema = new Schema({
    name: { type: String, required: true },
    internal_id: { type: String, default: null },
  
    status: { type: String, default: 'active' },
    config: { type: Object },
    address: { type: String, default: null },
    capacity: { type: Object },
    location: { type: Object },
    city: { type: String, default: "Bandung" },
    images: {
        type: Array, default: [],
    },
    collectionPoint: { type: Boolean, default: false },
    active: {
        type: Boolean,
        default: true
      }

}, { timestamps: true });

// Create User model
const Box = mongoose.model('Box', boxSchema,"asset_boxes");

module.exports = Box;