const mysql = require("mysql");
const db = mysql.createConnection({
  host: "54.180.75.205",
  port: 33051,
  user: "funit1toc",
  password: "67yuhjnm!@#$",
  database: "funitstock_db",
});

module.exports = db;
