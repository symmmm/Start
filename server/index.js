const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "54.180.75.205",
  port: 33051,
  user: "funit1toc",
  password: "67yuhjnm!@#$",
  database: "funitstock_db",
});

app.use(cors());
app.use(express.json());

app.get("/board", (req, res) => {
  const sqlQuery = "SELECT * FROM tb_sy_board WHERE board_use='y' ";
  db.query(sqlQuery, (err, result) => {
    res.json(result);
  });
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
