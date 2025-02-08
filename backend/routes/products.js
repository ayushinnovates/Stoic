const express = require('express');
const router = express.Router();
const productsController = require('../controllers/productsController');

// Get all products
router.get('/', productsController.getAllProducts);

// Buy product (simulate purchase)
router.post('/buy/:id', productsController.buyProduct);

module.exports = router;
