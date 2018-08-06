const mongoose = require('mongoose');


const PartySchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  information: String,
})

module.exports = mongoose.model('User', UserSchema);
