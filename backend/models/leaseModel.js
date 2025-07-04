const pool = require("../db");

async function createLease(userId, lease) {
    const {
        property_id,
        tenant_name,
        rent_amount,
        start_date,
        end_date,
        is_active,
    } = lease;

    const result = await pool.query(
      `INSERT INTO leases (user_id, property_id, tenant_name, rent_amount, start_date, end_date, is_active)
      VALUES ($1, $2, $3, $4, $5, $6, $7)
      RETURNING *`,
      [userId, property_id, tenant_name, rent_amount, start_date, end_date, is_active ?? true]  
    );

    return result.rows[0];
}

async function getLeasesByUser(userId) {
    const result = await pool.query(
        `SELECT * FROM leases WHERE user_id = $1 ORDER BY start_date DESC`,
        [userId]
    );
    return result.rows;
}

module.exports = { createLease, getLeasesByUser };