const mongoose = require('mongoose');

const Schema = mongoose.Schema;

const pocketSchema = new Schema({
  pocketName: {
    type: String,
    required: true
  },
  goldBalance: {
    type: Number
  },
  currentGoldPrice: {
    type: Number
  },
  mutualFundsValue: {
    type: Number
  },
  mutualFundsType: {
    type: String
  },
  fdAmount: {
    type: Number
  },
  fdTerm: {
    type: Number
  },
  fdInterestRate: {
    type: Number
  },
  color: {
    type: String,
    required: true
  }
}, {timestamps: true})

module.exports = mongoose.model("Pocket", pocketSchema);