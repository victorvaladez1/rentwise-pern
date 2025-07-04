const { getUserProperties, createProperty } = require("../models/propertyModel");

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

module.exports = { getProperties, addProperty }