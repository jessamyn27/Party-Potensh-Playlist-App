const mongoose = require('mongoose');


const UserSchema = new mongoose.Schema({
  username: String,
  password: {String, required: true},
  partName: {String, required: true},
})

module.exports = mongoose.model('User', UserSchema);
