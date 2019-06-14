var mongoose  = require('mongoose')
, Schema = mongoose.Schema

var storySchema = Schema({
    author : { type: Schema.Types.ObjectId, ref: 'Author' },
    title    : String
  });
  
  module.exports = mongoose.model('Story', storySchema);