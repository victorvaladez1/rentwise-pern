const express = require("express");
const router = express.Router();
const { createPayment, getPayments, getRentSummary, getMonthlyBreakdown, getProfitSummary, getPaymentsThisMonthController } = require("../controllers/paymentController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, createPayment);
router.get("/", verifyToken, getPayments);
router.get("/summary", verifyToken, getRentSummary);
router.get("/monthly", verifyToken, getMonthlyBreakdown);
router.get("/profit-summary", verifyToken, getProfitSummary);
router.get("/this-month", verifyToken, getPaymentsThisMonthController);

module.exports = router;