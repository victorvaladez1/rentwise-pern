const bcrypt = require("bcryptjs");
const jwt = require("jsonwebtoken");
const { findUserByEmail, createUser } = require("../models/userModel");

const JWT_SECRET = process.env.JWT_SECRET;

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

async function login(req, res) {
    const {email, password} = req.body;

    try {
        const user = await findUserByEmail(email);
        if (!user) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const isMatch = await bcrypt.compare(password, user.password_hash);
        if (!isMatch) {
            return res.status(400).json({ error: "Invalid credentials" });
        }

        const token = jwt.sign({ id: user_id, role: user_role }, JWT_SECRET, {
            expiresIn: "1h",
        });

        res.json({ token });
    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Server error" });
    }
}

module.exports = { register, login };