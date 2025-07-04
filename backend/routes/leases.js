const express = require("express");
const router = express.Router();
const { addLease, getLeases } = require("../controllers/leaseController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, addLease);
router.get("/", verifyToken, getLease);

module.exports = router;