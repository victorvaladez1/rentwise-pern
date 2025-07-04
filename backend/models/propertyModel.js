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

async function updateProperty(userId, propertyId, updates) {
  const { name, address, type, status} = updates;

  const result = await pool.query(
    `UPDATE properties
    SET name = $1,
        address = $2,
        type = $3,
        status = $4
    WHERE id = $5 AND user_id = $6
    RETURNING *`,
    [name, address, type, status, propertyId, userId]
  );

  return result.rows[0];
}

async function deleteProperty(userId, propertyId) {
  const result = await pool.query(
    "DELETE FROM properties WHERE id = $1 AND user_id = $2 RETURNING *",
    [propertyId, userId]
  );

  return result.rows[0];
}

module.exports = {
  getUserProperties,
  createProperty,
  updateProperty,
  deleteProperty
};
