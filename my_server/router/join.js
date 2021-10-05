const express = require("express");
const router = express.Router();
const db = require("../bin/my");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/join", (req, res) => {
  const info = [req.body.id, req.body.pw, req.body.name, req.body.mobile_no];

  bcrypt.hash(info[1], saltRounds, (error, hash) => {
    info[1] = hash;

    db.query(
      "INSERT INTO user(`mb_id`,`mb_password`,`mb_name`,`mb_mobile_no`) VALUES(?,?,?,?)",
      info,
      (err, row) => {
        if (err) {
          console.log("중복");
          console.log(err);
        }
      }
    );
  });
  res.end();
});

module.exports = router;
