const express = require("express");
const router = express.Router();
const db = require("../bin/maria");

//boardList경로 이동 요청시 boardList/1로 이동 요청.
router.get("/", (req, res) => {
  res.redirect("/board/1");
});
//페이지
router.get("/:currentPage", (req, res) => {
  let rowPerPage = 10;
  let currentPage = 1;
  if (req.params.currentPage) {
    currentPage = parseInt(req.params.currentPage);
  }
  let beginRow = (currentPage - 1) * rowPerPage;
  console.log(`currentPage : ${currentPage}`);
  db.query("SELECT COUNT(*) AS cnt FROM tb_sy_board", (err, result) => {
    if (err) {
      console.log(err);
    } else {
      console.log(`totalRow : ${result[0].cnt}`);
      let totalRow = result[0].cnt;
      lastPage = totalRow / rowPerPage;
      if (totalRow % rowPerPage != 0) {
        lastPage++;
      }
    }
    db.query(
      "SELECT * FROM tb_sy_board ORDER BY number DESC LIMIT ?,?",
      [beginRow, rowPerPage],
      (err, rs) => {
        if (err) {
          console.log(err);
        } else {
          res.json({ total: result[0].cnt, docs: rs });
        }
      }
    );
  });
});
//디테일 들어가기
router.get("/detail/:board_no", (req, res) => {
  console.log("/boardDetail 요청");
  console.log(req.params.board_no);

  if (!req.params.board_no) {
    res.redirect("/board");
  } else {
    db.query(
      "SELECT number,title,auth,contents,read_count,create_date FROM tb_sy_board WHERE number=?",
      [parseInt(req.params.board_no)],
      (err, rs) => {
        if (err) {
          console.log(err);
        } else {
          res.json(rs[0]);
        }
      }
    );
  }
});

////////////검색시////////////////
router.get("/search/:option/:text/:currentPage", (req, res) => {
  let option;
  if (req.params.option == "제목") {
    option = "title";
  } else if (req.params.option == "작성자") {
    option = "auth";
  } else if (req.params.option == "내용") {
    option = "contents";
  }
  let text = req.params.text;
  // let option = req.params.option;
  console.log("전달받은값", text, option);
  let rowPerPage = 10;
  let currentPage = 1;
  if (req.params.currentPage) {
    currentPage = parseInt(req.params.currentPage);
  }
  let beginRow = (currentPage - 1) * rowPerPage;
  //console.log(`currentPage : ${currentPage}`);
  //console.log(`비긴로우 : ${beginRow}`);
  //console.log(`몇개씩 : ${rowPerPage}`);

  db.query(
    "SELECT COUNT(*) AS cnt FROM tb_sy_board WHERE" +
      db.escapeId(option) +
      "LIKE" +
      db.escape("%" + req.params.text + "%"),
    (err, result) => {
      if (err) {
        console.log(err);
      } else {
        console.log(`totalRow : ${result[0].cnt}`);
        let totalRow = result[0].cnt;
        lastPage = totalRow / rowPerPage;
        if (totalRow % rowPerPage != 0) {
          lastPage++;
        }
      }
      db.query(
        "SELECT * FROM tb_sy_board WHERE" +
          db.escapeId(option) +
          "LIKE" +
          db.escape("%" + req.params.text + "%") +
          "ORDER BY number DESC LIMIT ?,?",
        [beginRow, rowPerPage],
        (err, rs) => {
          if (err) {
            console.log(err);
          } else {
            res.json({ total: result[0].cnt, docs: rs });
          }
        }
      );
    }
  );
});

module.exports = router;
