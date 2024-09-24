const { Product } = require('../models');

// Create a new product
exports.createProduct = async (req, res) => {
    const { name, type, quantity, price } = req.body;
    try {
        const product = await Product.create({ name, type, quantity, price });
        res.status(201).send(product);
    } catch (error) {
        res.status(500).send(error.message);
    }
};

// Fetch all products
exports.getAllProducts = async (req, res) => {
    try {
        const products = await Product.findAll();
        res.status(200).send(products);
    } catch (error) {
        res.status(500).send(error.message);
    }
};
