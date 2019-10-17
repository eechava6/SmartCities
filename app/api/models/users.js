const mongoose = require('mongoose');

//Define a schema
const Schema = mongoose.Schema;
const UserSchema = new Schema({
 email: {
  type: String,
  trim: true,  
  required: true,
 },
 password: {
  type: String,
  trim: true,
  required: true
 }
}, { collection : 'users' });

module.exports = mongoose.model('User', UserSchema);