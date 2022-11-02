const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 8000;

const db = mysql.createPool({
  host: "localhost",
  user: "root",
  password: "201537",
  database: "bigparty",
  port: "3307",
});

app.use(cors());
app.use(express.json());
app.use(bodyParser.urlencoded({ extended: true }));

//공지사항 db 삭제하기
app.delete("/api/:id", function (req, res) {
  const id = req.params.id;
  const sqlQuery = "DELETE FROM notice WHERE id = ?";
  db.query(sqlQuery, [id], (err, result) => {
    res.send("삭제가 완료되었습니다.");
  });
});

//공지사항 db 가져오기
app.get("/api/get", (req, res) => {
  const sqlQuery = "SELECT * FROM notice ORDER BY id DESC";
  db.query(sqlQuery, (err, result) => {
    res.send(result);
  });
});

// db에 글 저장
app.post("/api/insert", (req, res) => {
  const title = req.body.title;
  const content = req.body.content;
  const sqlQuery = "INSERT INTO notice (title, description) VALUES (?,?)";
  db.query(sqlQuery, [title, content], (err, result) => {
    res.send("success!");
  });
});

// 결제 db 저장
// app.post("/payment/insert", (req, res) => {
//   const name = req.body.name;
//   const amount = req.body.amount;
//   const phone = req.body.phone;
//   const email = req.body.email;
//   const paynum = req.body.paynum;
//   const ordernum = req.body.ordernum;
//   const sqlQuery =
//     "INSERT INTO participants (name,amount,phone,email,paynum,status,ordernum) VALUES(?,?,?,?,?,?,?);";
//   db.query(
//     sqlQuery,
//     [name, amount, phone, email, paynum, ordernum],
//     (err, result) => {
//       res.send("success!");
//     }
//   );
// });

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
