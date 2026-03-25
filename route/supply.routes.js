const express = require("express");
const { createSupply, createInventy, getInventyData } = require("../controllers/inventory.controller");

const router = express.Router();


router.post('/supplier', createSupply);
router.post('/inventory', createInventy);
router.get('/inventory', getInventyData);

module.exports = router;