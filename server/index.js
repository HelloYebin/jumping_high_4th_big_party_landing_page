const express = require("express");
const app = express();
const mysql = require("mysql");
const cors = require("cors");
const bodyParser = require("body-parser");
const { urlencoded } = require("body-parser");
const PORT = process.env.port || 8000;
const multer = require("multer");
const path = require("path");

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

app.listen(PORT, () => {
  console.log(`running on port ${PORT}`);
});
