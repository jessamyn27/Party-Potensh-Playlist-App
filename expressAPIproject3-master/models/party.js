const mongoose = require('mongoose');
const User = require ('./user');

const PartySchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  information: String
})

module.exports = mongoose.model('Party', PartySchema);
