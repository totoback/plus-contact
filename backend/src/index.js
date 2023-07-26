//node.js의 진입점이 되는 파일
const express = require("express"); //express 모듈 불러오기

//constants
const PORT = 8080; //express 서버를 위한 포트 설정
const HOST = "0,0,0,0"; // 호스트지정

//app
const app = express(); //새로운 Express 어플 생성
app.get("/", (req, res) => { // "/"경로로 요청이 오면 hello World출력
  res.send("hello world111");
});

app.listen(PORT, ()=>{
  console.log(`서버는 ${PORT}번 포트에서 작동중!`)
}); //해당포트와 호스트에서 HTTP 서버를 시작