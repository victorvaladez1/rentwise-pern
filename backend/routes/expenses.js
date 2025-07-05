const express = require("express");
const router = express.Router();
const { createExpense, getExpenses } = require("../controllers/expenseController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, createExpense);
router.get("/", verifyToken, getExpenses);

module.exports = router;
