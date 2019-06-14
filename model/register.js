var mongoose = require('mongoose');
 
// define Schema
    var LoginSchema = mongoose.Schema({
      username: String,
      password: String,
      status: Number
    });
 
    // compile schema to model
module.exports =  mongoose.model('Users', LoginSchema);


