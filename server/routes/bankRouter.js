const express = require('express');
const Bank = require('../models/bankModel');
const {
  createNewAccount,
  getBankBalance,
  updateBankBalance
} = require('../controllers/bankController');

const router = express.Router();

// Creating account balance
router.post('/balance', createNewAccount)

// Get current account balance
router.get('/balance', getBankBalance)

//Update current account balance
router.patch('/balance', updateBankBalance)

module.exports = router;