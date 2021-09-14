const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");

const PORT = process.env.port || 8000;

const db = mysql.createPool({
  connectionLimit: 10,
  host: "54.180.75.205",
  port: 33051,
  user: "funit1toc",
  password: "67yuhjnm!@#$",
  database: "funitstock_db",
});

app.use(cors());
app.use(express.json());

app.get("/board/:currentPage", (req, res) => {
  let rowPerPage = 10;
  let currentPage = 1;
  if (req.params.currentPage) {
    currentPage = parseInt(req.params.currentPage);
  }
  let beginRow = (currentPage - 1) * rowPerPage;
  console.log(`currentPage : ${currentPage}`);

  db.getConnection((err, conn) => {
    conn.query("SELECT COUNT(*) AS cnt FROM tb_sy_board", (err, result) => {
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
      conn.query(
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
    conn.release();
  });
});

app.get("/board", (req, res) => {
  res.redirect("/board/1");
  //boardList경로 이동 요청시 boardList/1로 이동 요청.
});

app.get("/boardDetail/:board_no", (req, res) => {
  console.log("/boardDetail 요청");
  console.log(req.params.board_no);

  if (!req.params.board_no) {
    res.redirect("board");
  } else {
    db.getConnection((err, conn) => {
      conn.query(
        "SELECT number,title,auth,contents,read_count,create_date FROM tb_sy_board WHERE number=?",
        [parseInt(req.params.board_no)],
        (err, rs) => {
          if (err) {
            console.log(err);
          } else {
            res.json(rs);
          }
        }
      );
      conn.release();
    });
  }
});

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
