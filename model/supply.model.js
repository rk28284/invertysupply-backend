const mongoose = require("mongoose");
const supplySchema = new mongoose.Schema({
  name: { type: String, required: true },
  city: { type: String, required: true }
});


module.exports = mongoose.model('Supply', supplySchema);
