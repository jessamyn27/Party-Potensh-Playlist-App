const mongoose = require('mongoose');
const User = require ('./user');

const PartySchema = new mongoose.Schema({
  name: String,
  date: Date,
  location: String,
  zip: String,
  information: String,
  playlistID: String
  // we need the playlist id here
})

module.exports = mongoose.model('Party', PartySchema);
