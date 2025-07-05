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

async function getMonthlyRentBreakdown(userId) {
    const result = await pool.query(
        `
            SELECT
                TO_CHAR(date_paid, 'YYYY-MM') AS month,
                SUM(amount)::NUMERIC(10, 2) AS total
            FROM payments
            WHERE user_id = $1
            GROUP BY month
            ORDER BY month
        `,
        [userId]
    );

    return result.rows;
}

async function getNetProfitByProperty(userId) {
    const result = await pool.query(
        `
            SELECT
                p.id AS property_id,
                p.name AS property_name,
                COALESCE(SUM(pay.amount), 0) AS total_rent,
                COALESCE(SUM(exp.amount), 0) AS total_expense,
                COALESCE(SUM(pay.amount), 0) - COALESCE(SUM(exp.amount), 0) AS net_profit
            FROM properties p
            LEFT JOIN leases l ON p.id = l.property_id AND l.user_id = $1
            LEFT JOIN payments pay ON l.id = pay.lease_id AND pay.user_id = $1
            LEFT JOIN expenses exp ON p.id = exp.property_id AND exp.user_id = $1
            WHERE p.user_id = $1
            GROUP BY p.id
            ORDER BY net_profit DESC
        `,
        [userId]
    );

    return result.rows;
}

module.exports = { addPayment, getPaymentsByUser, getRentSummaryByProperty, getMonthlyRentBreakdown, getNetProfitByProperty };