require("dotenv").config();
const express = require("express");
const cors = require("cors");
const { Pool } = require("pg");

const app = express();

// Allow Vite dev server
app.use(cors({ origin: "http://localhost:5173" }));
app.use(express.json());

//Supabase requires SSL
const pool = new Pool({
  connectionString: process.env.DATABASE_URL,
  ssl: { require: true, rejectUnathorized: false },
});

app.get("/health", (_req, res) => res.json({ ok: true }));

app.get("/items", async (_req, res) => {
  const { rows } = await pool.query(
    "select id, name, created_at from public.items order by id desc"
  );
  res.json(rows);
});

app.post("/items", async (req, res) => {
  const name = (req.body?.name || "").trim();
  if (!name) return res.status(400).json({ error: "name required" });
  const { rows } = await pool.query(
    "insert into public.items(name) values($1) returning id, name, created_at",
    [name]
  );
  res.status(201).json(rows[0]);
});

const PORT = process.env.PORT || 4000;
app.listen(PORT, () => console.log(`API on http://localhost:${PORT}`));
