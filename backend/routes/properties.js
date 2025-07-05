const express = require("express");
const router = express.Router();
const { 
    getProperties, 
    addProperty,
    editProperty,
    removeProperty,
} = require("../controllers/propertyController");
const verifyToken = require("../middleware/authMiddleware");

router.get("/", verifyToken, getProperties);
router.post("/", verifyToken, addProperty);
router.put("/:id", verifyToken, editProperty);
router.delete("/:id", verifyToken, removeProperty);

module.exports = router;