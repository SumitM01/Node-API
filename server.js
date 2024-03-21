const express = require('express');
const mongoose = require('mongoose');
const Product = require('./models/product.model.js');
const productRoute = require("./routes/product.route.js");
const app = express();

// middleware
app.use(express.json());
app.use(express.urlencoded({extended: false}));

// routes
app.use("/api/products", productRoute);

app.get('/', (req, res) => {
    res.send('Hello NODE API')
})

app.get('/blog', (req, res) => {
    res.send('Hello Blog. My name is Sumit Mishra')
})



// Set StrictQuery to false
mongoose.set("strictQuery", false)

// Connect to the MongoDB database using the connection string 
// You can add a collection name if you want between mongodb.net/ and ?retryWrites in the URL (Node-API)

//This is a local mongodb connection
mongoose
.connect('mongodb://localhost:27017/Node-API')
  .then(() => {
    console.log('MongoDB Connected!')
    app.listen(3000, ()=>{
      console.log("Node API app is running on port 3000")
    });
})
  .catch((error) => {
    console.log(error)
});