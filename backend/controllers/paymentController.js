const { addPayment, getPaymentsByUser } = require("../models/paymentModel");

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

module.exports = { createPayment, getPayments };