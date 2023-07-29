//node.js의 진입점이 되는 파일
const express = require("express"); //express 모듈 불러오기
const cors = require("cors"); //cors 불러오기
const PORT = 8080; //express 서버를 위한 포트 설정
const app = express(); //새로운 Express 어플 생성
const mongoose = require("mongoose");
const dotenv = require("dotenv");
dotenv.config(); //env쓰기위해 가져옴
const bodyParser = require("body-parser");

app.use(cors());
app.use(bodyParser.json());
app.use(express.json());
app.use(express.static("uploads")); //이미지폴더 경로
mongoose
  .connect(process.env.MONGO_URI)
  .then(() => {
    console.log("연결 완료");
  })
  .catch((err) => {
    console.error(err);
  });

app.get("/", (req, res) => {
  // "/"경로로 요청이 오면 hello World출력
  res.send("hello world111");
});

app.post("/", (req, res) => {
  console.log(req.body);
  res.json(req.body);
});

app.listen(PORT, () => {
  console.log(`서버는 ${PORT}번 포트에서 작동중!`);
}); //해당포트와 호스트에서 HTTP 서버를 시작
