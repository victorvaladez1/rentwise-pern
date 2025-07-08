const express = require("express");
const router = express.Router();
const { addLease, getLeases, getExpiringLeasesController } = require("../controllers/leaseController");
const verifyToken = require("../middleware/authMiddleware");

router.post("/", verifyToken, addLease);
router.get("/", verifyToken, getLeases);
router.get("/expiring-leases", verifyToken, getExpiringLeasesController);

module.exports = router;