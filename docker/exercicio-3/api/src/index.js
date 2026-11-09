const express = require("express");
const { Pool } = require("pg");

const app = express();
app.use(express.json());

const pool = new Pool({
  host: process.env.DB_HOST,
  user: process.env.DB_USER,
  password: process.env.DB_PASS,
  database: process.env.DB_NAME,
  port: 5432,
});

app.get("/", (req, res) => {
  res.send(`Hello from Docker! (${process.env.NODE_ENV})`);
});

app.get("/health", (req, res) => {
  res.json({ status: "ok" });
});

app.get("/items", async (req, res) => {
  const { rows } = await pool.query("SELECT * FROM items ORDER BY id");
  res.json(rows);
});

app.post("/items", async (req, res) => {
  const { rows } = await pool.query(
    "INSERT INTO items (name) VALUES ($1) RETURNING *",
    [req.body.name]
  );
  res.status(201).json(rows[0]);
});

async function start() {
  await pool.query(
    "CREATE TABLE IF NOT EXISTS items (id SERIAL PRIMARY KEY, name TEXT NOT NULL)"
  );
  app.listen(3000, () => console.log("API rodando na porta 3000"));
}

start().catch((err) => {
  console.error(err);
  process.exit(1);
});
