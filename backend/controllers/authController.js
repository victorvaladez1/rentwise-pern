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

        const token = jwt.sign({ id: user.id, role: user.role }, JWT_SECRET, {
            expiresIn: "1h",
        });

        const ONE_HOUR = 1000 * 60 * 60;

        res.cookie("token", token, {
            httpOnly: true,
            secure: process.env.NODE_ENV === "production",
            sameSite: "lax",
            maxAge: ONE_HOUR,
        });

        res.json({ message: "Login successful" });

    } catch (err) {
        console.error("Login error:", err);
        res.status(500).json({ error: "Server error" });
    }
}

async function logout(req, res) {
    res.clearCookie("token");
    res.json({ message: "Logged out"});
}

async function me(req, res) {
    res.json({
        id: req.user.id,
        role: req.user.role
    });
};

module.exports = { register, login, logout, me };