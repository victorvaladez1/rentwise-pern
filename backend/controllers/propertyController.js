const { 
    getUserProperties, 
    createProperty,
    updateProperty,
    deleteProperty
 } = require("../models/propertyModel");

async function getProperties(req, res) {
    try {
        const properties = await getUserProperties(req.user.id);
        res.json(properties);
    } catch (err) {
        console.error("Get Properties Error:", err);
        res.status(500).send("Server error");
    }
}

async function addProperty(req, res) {
    const { name, address, type, status } = req.body;

    try {
        const newProp = await createProperty(
            req.user.id,
            name,
            address,
            type,
            status || "vacant"
        );
        res.status(201).json(newProp);
    } catch (err) {
        console.error("Add Property Error:", err);
        res.status(500).send("Server error");
    }
}

async function editProperty(req, res) {
    const propertyId = req.params.id;
    const userId = req.user.id;
    const updates = req.body;

    try {
        const updated = await updateProperty(userId, propertyId, updates);
        if (!updated) return res.status(404).json({ error: "Not found or not authorized" });
        res.json(updated);
    } catch (err) {
        console.error("Edit Property Error:", err);
        res.status(500).send("Server error");
    }
}



module.exports = { 
    getProperties, 
    addProperty,
    editProperty
}