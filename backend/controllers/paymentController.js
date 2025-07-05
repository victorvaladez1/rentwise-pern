const { addPayment, getPaymentsByUser, getRentSummaryByProperty, getMonthlyRentBreakdown, getNetProfitByProperty } = require("../models/paymentModel");

async function createPayment(req, res) {
    try {
        const payment = await addPayment(req.user.id, req.body);
        res.status(201).json(payment);
    } catch (err) {
        console.error("Create Payment Error:", err);
        req.status(500).send("Server error");
    }
}

async function getPayments(req, res) {
    try {
        const payments = await getPaymentsByUser(req.user.id);
        res.json(payments);
    } catch (err) {
        console.error("Get Payments Error:", err);
        res.status(500).send("Server error");
    }
}

async function getRentSummary(req, res) {
    try {
        const summary = await getRentSummaryByProperty(req.user.id);
        res.json(summary);
    } catch (err) {
        console.error("Get Rent Summary Error:", err);
        res.status(500).send("Server error");
    }
}

async function getMonthlyBreakdown(req, res) {
    try {
        const data = await getMonthlyRentBreakdown(req.user.id);
        res.json(data);
    } catch (err) {
        console.error("Monthly Breakdown Error", err);
        res.status(500).send("Server error");
    }
}

async function getProfitSummary(req, res) {
    try {
        const data = await getNetProfitByProperty(req.user.id);
        res.json(data);
    } catch (err) {
        console.error("Profit Summary Error:", err);
        res.status(500).send("Server error");
    }
}

module.exports = { createPayment, getPayments, getRentSummary, getMonthlyBreakdown, getProfitSummary };