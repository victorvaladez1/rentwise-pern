const pool = require("../db");

async function findUserByEmail(email) {
    const result = await pool.query(
        "SELECT * FROM users WHERE email = $1",
        [email]
    );
    return result.rows[0];
}

async function createUser(email, passwordHash, role= "manager") {
    const result = await pool.query(
        "INSERT INTO users (email, password_hash, role) VALUES ($1, $2, $3) RETURNING *",
        [email, passwordHash, role]
    );
    return result.rows[0];
}

module.exports = { findUserByEmail, createUser };