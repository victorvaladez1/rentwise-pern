const express = require("express");
const router = express.Router();
const { createPayment, getPayments, getRentSummary } = require("../controllers/paymentController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, createPayment);
router.get("/", verifyToken, getPayments);
router.get("/summary", verifyToken, getRentSummary);

module.exports = router;