const express = require("express");
const router = express.Router();
const db = require("../bin/my");

const bcrypt = require("bcrypt");
const saltRounds = 10;

router.post("/login", (req, res, next) => {
  param = [req.body.id, req.body.pw];
  db.query("SELECT * FROM user WHERE mb_id=?", param[0], (err, row) => {
    if (err) {
      console.log(err);
    }

    if (row.length > 0) {
      console.log("파람", param[1]);
      console.log("로우", row[0]);
      bcrypt.compare(param[1], row[0].mb_password, (error, result) => {
        if (result) {
          console.log("성공");
          res.send("성공");
        } else {
          console.log("비밀번호가 틀려요", error);
          res.send("비번 x");
        }
      });
    } else {
      console.log("ID가 존재하지 않습니다");
      res.send("아이디 존재하지않음");
    }
  });
});
module.exports = router;
