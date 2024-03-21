const express = require('express');
const Product = require('../models/productModel');
const router = express.Router();
const {getProducts, getProduct, createProduct, updateProduct, deleteProduct} = require("../controllers/product.controller")

// Get all products
router.get('/', getProducts);

// Get a product by Id
router.get('/:id', getProduct);

// Create a product
router.post('/', createProduct);

// Update a product by Id
router.put('/:id', updateProduct);

// Delete a product by Id
router.delete('/:id', deleteProduct);

module.exports = router;