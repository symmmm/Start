const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const join = require("./router/join");
const login = require("./router/login");

const PORT = process.env.port || 7000;

const db = require("./bin/my");
db.connect();

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use("/member", join);
app.use("/member", login);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
