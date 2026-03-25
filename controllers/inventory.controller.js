const Supply = require('../model/supply.model');
const Inventory = require('../model/inventory.model');

const createSupply = async (req, res) => {
  try {
    const supply = new Supply(req.body);
    const savedSupply = await supply.save();
    res.status(201).json(savedSupply);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const createInventy = async (req, res) => {
  try {
    const supply = await Supply.findById(req.body.supply_id);
    if (!supply) return res.status(404).json({ error: "Supply not found" });

    const item = new Inventory(req.body);
    const savedItem = await item.save();
    res.status(201).json(savedItem);
  } catch (err) {
    res.status(400).json({ error: err.message });
  }
};

const getInventyData = async (req, res) => {
  try {
    const alldata = await Inventory.find().populate('supply_id');

    const groupedData = alldata.reduce((acc, item) => {
      const supplyId = item.supply_id._id.toString();
      
      if (!acc[supplyId]) {
        acc[supplyId] = {
          supply: item.supply_id,
          products: [],
          totalInventoryValue: 0
        };
      }

      acc[supplyId].products.push(item);
      acc[supplyId].totalInventoryValue += (item.quantity * item.price);
      
      return acc;
    }, {});


    res.json(groupedData);
  } catch (err) {
    res.status(500).json({ error: err.message });
  }
};

module.exports = { createSupply, createInventy, getInventyData };