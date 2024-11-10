const express = require('express');
const {
  createNewPocket,
  getPocket,
  updatePocket,
  getAllPockets
} = require('../controllers/pocketController');
const { get } = require('mongoose');

const router = express.Router();

// Define routes
router.post("/", createNewPocket);
router.get("/:id", getPocket);
router.patch("/:id", updatePocket);
router.get("/", getAllPockets);

module.exports = router;