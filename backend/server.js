const express = require("express");
const cors = require("cors");
const pool = require("./db");
const cookieParser = require("cookie-parser");

const authRoutes = require("./routes/auth");
const propertyRoutes = require("./routes/properties");
const leaseRoutes = require("./routes/leases");
const paymentRoutes = require("./routes/payments");
const expenseRoutes = require("./routes/expenses");

const verifyToken = require("./middleware/authMiddleware");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors({
    origin: "http://localhost:5173",
    credentials: true
}));
app.use(express.json());
app.use(cookieParser());

app.use("/api/auth", authRoutes);
app.use("/api/properties", propertyRoutes);
app.use("/api/leases", leaseRoutes);
app.use("/api/payments", paymentRoutes);
app.use("/api/expenses", expenseRoutes);

app.get("/api/test", async (req, res) => {
    try {
        const result = await pool.query("SELECT NOW()");
        res.json(result.rows[0]);
    } catch (err) {
        console.log("DB ERROR:", err);
        res.status(500).send("Server error");
    }
});

app.listen(PORT, () => {
    console.log(`Server running on port ${PORT}`);
});