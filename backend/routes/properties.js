const express = require("express");
const router = express.Router();
const { getProperties, addProperty } = require("../controllers/propertyController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/", verifyToken, getProperties);
router.post("/", verifyToken, addProperty);

module.exports = router;