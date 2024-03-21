const Product = require("../models/productModel");

//Create a product
const createProduct = async(req, res) => {
    try{
        const product = await Product.create(req.body);
        res.status(200).json(product);
    }
    catch(error){
        res.status(500).json({message:error.message});
    }
};

//Get all products
const getProducts = async(req, res) => {
    try{
        const products = await Product.find({});
        res.status(200).json(products);
    }
    catch(error) {
        res.status(500).json({message:error.message});
    }  
};

// Get a product by Id
const getProduct = async(req, res) => {
    try{
        const {id} = req.params;
        const product = await Product.findById(id);
        res.status(200).json(product);
    }
    catch(error) {
        res.status(500).json({message:error.message});
    }
};

//Update a product by Id
const updateProduct = async(req, res) => {
    try{
        const {id} = req.params;
        //Find the product using its id and update it using findByIdAndUpdate func()
        const product = await Product.findByIdAndUpdate(id, req.body);
    
        // If product is not found return 404 error
        if(!product){
          res.status(404).json({message:"Product not found"});
        }
    
        //Find the updated product and return the product details
        const updatedProduct = await Product.findById(id);
        res.status(200).json(updatedProduct);
    }
    catch(error) {
        res.status(500).json({message:error.message});
    }
};

//Delete a product by Id
const deleteProduct = async(req, res) => {
    try{
        const {id} = req.params;
        //Find the product using its id and update it using findByIdAndDelete func()
        const product = await Product.findByIdAndDelete(id);
    
        // If product is not found return 404 error
        if(!product){
          res.status(404).json({message:"Product not found"});
        }
    
        //Show delete completion message to the user
        res.status(200).json({message: "Product deleted successfully"});
    }
    catch(error) {
        res.status(500).json({message:error.message});
    }
};


module.exports = {
    createProduct,
    getProducts,
    getProduct,
    updateProduct,
    deleteProduct,
}