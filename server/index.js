const express = require("express");
const BoardRouter = require("./routes/board");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.port || 8000;

const db = require("./bin/maria");
db.connect();

app.use(cors());
app.use(express.json());

app.use("/board", BoardRouter);

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
