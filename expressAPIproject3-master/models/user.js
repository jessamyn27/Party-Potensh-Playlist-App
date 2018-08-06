const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: String,
  password: {type: String, required: true},
  partyName: {type: String, required: true},
})

module.exports = mongoose.model('User', UserSchema);
