const express = require('express');
const router = express();
const { createProduct, getAllProducts } = require('../controllers/productController');

// Route to create a product
router.post('/', createProduct);

// Route to fetch all products
router.get('/', getAllProducts);

module.exports = router;
