const mongoose = require('mongoose')

//Schema definition for the products model
const productSchema = mongoose.Schema(
    // define all the data fields and their types
    {
        name: {
            type: String,
            required: [true, "Please enter product name"]
        },
        quantity: {
            type: Number,
            required: true,
            default: 0
        },
        price: {
            type: Number,
            required: true,
        },
        image: {
            type: String,
            required: false,
        }
    },
    //Timestamps enabled for createdAt and updatedAt
    {
        timestamps: true
    }
)

// Create the product module
const Product = mongoose.model('Product', productSchema);

//Export the product model
module.exports = Product;