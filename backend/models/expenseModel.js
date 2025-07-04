const pool = require("..db");

async function addExpense(userId, data) {
    const { property_id, amount, category, description, date } = data;

    const result = await pool.query(
        `INSERT INTO expenses (user_id, property_id, amount, category, description, date)
         VALUES ($1, $2, $3, $4, $5, $6)
         RETURNING *`,
         [userId, property_id, amount, category, description, date]  
    );

    return result.rows[0];
}

async function getExpensesByUser(userId) {
    const resulst = await pool.query(
        `SELECT * FROM expenses WHERE user_id = $1 ORDER BY date DESC`,
        [userId]
    );

    return result.rows;
}