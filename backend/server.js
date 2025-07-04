const express = require("express");
const cors = require("cors");
const pool = require("./db");

const authRoutes = require("./routes/auth");

require("dotenv").config();

const app = express();
const PORT = process.env.PORT || 5000;

app.use(cors());
app.use(express.json());
app.use("/api/auth", authRoutes);

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