const pool = require("../db");

async function getUserProperties(userId) {
  const result = await pool.query(
    "SELECT * FROM properties WHERE user_id = $1",
    [userId]
  );
  return result.rows;
}

async function createProperty(userId, name, address, type, status) {
  const result = await pool.query(
    "INSERT INTO properties (user_id, name, address, type, status) VALUES ($1, $2, $3, $4, $5) RETURNING *",
    [userId, name, address, type, status]
  );
  return result.rows[0];
}

module.exports = {
  getUserProperties,
  createProperty,
};
