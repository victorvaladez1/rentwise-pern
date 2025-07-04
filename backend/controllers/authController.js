const bcrypt = require("bcryptjs");
const { findUserByEmail, createUser } = require("../models/userModel");

async function register(req, res) {
    const { email, password, role } = req.body;

    try {
        const existing = await findUserByEmail(email);
        if (existing) {
            return res.status(400).json({ error: "User already exists"});
        }

        const hash = await bcrypt.hash(password, 10);
        const newUser = await createUser(email, hash, role || "manager");

        res.status(201).json({ id: newUser.id, email: newUser.email, role: newUser.role });
    } catch (err) {
        console.error("Register error:", err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = { register };