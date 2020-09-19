const mongoose = require('mongoose');

const bankSchema = new mongoose.Schema({
  date: {type: String, required: true},
  description: {type: String, required: true},
  invoice: {type: Number, required: true},
  withdrawl: {type: Number, required: false},
  deposit: {type: Number, required: false}

})
const Bank = mongoose.model('Bank', bankSchema);


module.exports = Bank;
