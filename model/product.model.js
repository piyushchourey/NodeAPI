var mongoose = require('mongoose');
 
// define Schema
var productSchema = mongoose.Schema({
      name: String,
      brand: String,
      price: Number,
      weight: String,
      quantity: Number
    });
 
    // compile schema to model
module.exports =  mongoose.model('Products', productSchema);
