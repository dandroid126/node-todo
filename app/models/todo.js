var mongoose = require('mongoose');

var TodoSchema =  new mongoose.Schema({
   text : {type : String, default: ''},
   checked : Boolean,
   snoozed : Boolean
});

module.exports = mongoose.model('Todo', TodoSchema);
