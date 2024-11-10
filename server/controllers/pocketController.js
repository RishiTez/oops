const Pocket = require('../models/pocketModel');

// Create new pocket
const createNewPocket = async (req, res) => {
  const { pocketName, goldBalance, currentGoldPrice, mutualFundsValue, mutualFundsType, fdAmount } = req.body;

  try {
    const newPocket = await Pocket.create({ pocketName, goldBalance, currentGoldPrice, mutualFundsValue, mutualFundsType, fdAmount });
    res.status(201).json(newPocket);
  } catch (error) {
    res.status(400).json({ error: error.message });
  }
};

// Get pocket by ID
const getPocket = async (req, res) => {
  const { id } = req.params;

  try {
    const requiredPocket = await Pocket.findById(id);

    if (!requiredPocket) {
      return res.status(404).json({ message: "Pocket not found" });
    }

    res.status(200).json(requiredPocket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

// Update pocket by ID
const updatePocket = async (req, res) => {
  const { id } = req.params;
  const { pocketName, goldBalance, currentGoldPrice, mutualFundsValue, mutualFundsType, fdAmount } = req.body;

  try {
    const pocket = await Pocket.findById(id);

    if (!pocket) {
      return res.status(404).json({ message: "Pocket not found" });
    }

    pocket.pocketName = pocketName !== undefined ? pocketName : pocket.pocketName;
    pocket.goldBalance = goldBalance !== undefined ? goldBalance : pocket.goldBalance;
    pocket.currentGoldPrice = currentGoldPrice !== undefined ? currentGoldPrice : pocket.currentGoldPrice;
    pocket.mutualFundsValue = mutualFundsValue !== undefined ? mutualFundsValue : pocket.mutualFundsValue;
    pocket.mutualFundsType = mutualFundsType !== undefined ? mutualFundsType : pocket.mutualFundsType;
    pocket.fdAmount = fdAmount !== undefined ? fdAmount : pocket.fdAmount;
    await pocket.save();

    res.status(200).json(pocket);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

const getAllPockets = async (req, res) => {
  try {
    const pockets = await Pocket.find({});
    res.status(200).json(pockets);
  } catch (error) {
    res.status(500).json({ error: error.message });
  }
};

module.exports = {
  createNewPocket,
  getPocket,
  updatePocket,
  getAllPockets
};