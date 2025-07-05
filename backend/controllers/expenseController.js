const { addExpense, getExpenseByUser } = require("../models/expenseModel");

async function createExpense(req, res) {
    try {
        const expense = await addExpense(req.user.id, req.body);
        res.status(201).json(expense);
    } catch (err) {
        console.error("Create Expense Error:", err);
        res.status(500).send("Server error");
    }
}

async function getExpenses(req, res) {
    try {
        const exprenses = await getExpensesByUser(req.user.id);
        res.json(expenses);
    } catch (err) {
        console.error("Get Expenses Error:", err);
        res.status(500).send("Server error");
    }
}

module.exports = { createExpense, getExpenses };