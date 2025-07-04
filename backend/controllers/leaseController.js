const { createLease, getLeasesByUser } = require("../models/leaseModel");

async function addLease(req, res) {
    try {
        const lease = await createLease(req.user.id, req.body);
        res.status(201).json(lease);
    } catch (err) {
        console.error("Add Lease Error:", err);
        res.status(500).send("Server error");
    }
}

async function getLeases(req, res) {
    try {
        const leases = await getLeasesByUser(req.user.id);
        res.json(leases);
    } catch (err) {
        console.error("Get Leases Error:", err);
        res.status(500).send("Server error");
    }
}

module.exports = { addLease, getLeases };