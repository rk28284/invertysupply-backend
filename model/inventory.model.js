const mongoose = require("mongoose");

const inventySchema = new mongoose.Schema({
  supply_id: {
    type: Number,
    required: true,
  },
  product_name: { type: String, required: true },
  quantity: { type: Number, required: true, min: 0 },
  price: { type: Number, required: true, min: 0.01 },
});

module.exports = mongoose.model("Inventory", inventySchema);
