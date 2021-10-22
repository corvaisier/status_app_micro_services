const express = require("express");

const app = express();
require("dotenv").config();
const cors = require("cors");

app.use(cors());

const mysql = require("mysql2");

const database = mysql.createConnection({
  port: process.env.DB_PORT,
  user: process.env.DB_USER,
  password: process.env.DB_PASSWORD,
  database: process.env.DB_NAME,
  host: 'mysqldb'
});



app.get("/", (req, res) => {
  res.send("Hi There");
});

app.get("/status", (req, res) => {
  res.json({ message: "ok" });
});

app.listen(process.env.PORT, console.log(`app run ${process.env.PORT}`));