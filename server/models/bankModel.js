const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const bankSchema = new Schema({
  bankBalance: {
    type: Number,
    required: true
  },
  expenditure: {
    type: Number,
    required: true
  },
  accountNumber: {
    type: Number,
    required: true
  },
  creditScore: {
    type: Number,
    required: true
  },
  monthlyIncome: {
    type: Number,
    required: true
  }
}, {timestamps: true});

module.exports = mongoose.model('Bank', bankSchema);