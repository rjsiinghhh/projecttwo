const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  date: {type: String, required: true},
  description: {type: String, required: true},
  invoice: {type: Number, required: true},
  withdrawl: {type: Number, required: false},
  deposit: {type: Number, required: false},
  first: {type: String, required: true},
  last: {type: String, required: true},
  email: {type: String, required: true},
  dob: {type: String, required: true},
  number: {type: String, required: true}


})
const Bank = mongoose.model('Bank', bankSchema);







module.exports = Bank;
