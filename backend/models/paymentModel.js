const pool = require("../db");

async function addPayment(userId, data) {
    const { lease_id, amount, date_paid, is_late, note } = data;

    const result = await pool.query(
        `INSERT INTO payments (user_id, lease_id, amount, date_paid, is_late, note)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
         [userId, lease_id, amount, date_paid, is_late ?? false, note]
    );

    return result.rows[0];
}

async function getPaymentsByUser(userId) {
    const result = await pool.query(
        `SELECT * FROM payments WHERE user_id = $1 ORDER BY date_paid DESC`,
        [userId]
    );
    return result.rows;
}

async function getRentSummaryByProperty(userId) {
    const result = await pool.query(
    `
        SELECT
            properties.id AS property_id,
            properties.name AS property_name,
            SUM(payments.amount) AS total_rent
        FROM payments
        JOIN leases ON leases.id = payments.lease_id
        JOIN properties ON properties.id = leases.property_id
        WHERE payments.user_id = $1
        GROUP BY properties.id
        ORDER BY total_rent DESC
    `,
    [userId]
    );

    return result.rows;
}

module.exports = { addPayment, getPaymentsByUser, getRentSummaryByProperty };