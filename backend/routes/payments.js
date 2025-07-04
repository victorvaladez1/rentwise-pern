const express = require("express");
const router = express.Router();
const { createPayment, getPayments } = require("../controllers/paymentController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, createPayment);
router.get("/", verityToken, getPayments);

module.exports = router;