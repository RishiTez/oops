const Bank = require('../models/bankModel');

// Create new account
const createNewAccount = async (req, res) => {
  const { bankBalance, expenditure, accountNumber, creditScore, monthlyIncome } = req.body;

  try {
    const account = await Bank.create({ bankBalance, expenditure, accountNumber, creditScore, monthlyIncome });
    res.status(200).json(account);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get bank balance
const getBankBalance = async (req, res) => {
  try {
    const bankBalance = await Bank.find({}).sort({ createdAt: -1 });

    if (!bankBalance.length) {
      return res.status(404).json({ message: "No bank accounts found" });
    }

    res.status(200).json(bankBalance[0]);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update bank balance
const updateBankBalance = async (req, res) => {
  try {
    const { bankBalance, expenditure, accountNumber, creditScore, monthlyIncome } = req.body;

    if (bankBalance === undefined || expenditure === undefined || accountNumber === undefined || creditScore === undefined || monthlyIncome === undefined) {
      return res.status(400).json({ message: "All fields are required" });
    }

    // Find the most recent bank balance document
    const account = await Bank.findOne({}).sort({ createdAt: -1 });

    if (!account) {
      return res.status(404).json({ message: "Bank account not found" });
    }

    // Update the bank balance
    account.bankBalance = bankBalance;
    account.expenditure = expenditure;
    account.accountNumber = accountNumber;
    account.creditScore = creditScore;
    account.monthlyIncome = monthlyIncome;
    await account.save();

    res.status(200).json(account);
  } catch (error) {
    console.error("Error updating bank balance:", error);
    res.status(500).json({ message: error.message });
  }
};

module.exports = {
  createNewAccount,
  getBankBalance,
  updateBankBalance
};