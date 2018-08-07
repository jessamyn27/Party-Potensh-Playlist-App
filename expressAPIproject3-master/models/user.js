const mongoose = require('mongoose');
const Party = require('./party');

const UserSchema = new mongoose.Schema({
  username: String,
  password: {type: String, required: true},
  hostedParties: [Party.schema]

})
// we need to next the party schema here
module.exports = mongoose.model('User', UserSchema);
