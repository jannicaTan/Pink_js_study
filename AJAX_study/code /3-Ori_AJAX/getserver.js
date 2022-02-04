const express = require("express");
const app = express();
// 1.GET
app.get("/server", (request, response) => {
  // 2022.2.3 找出问题所在:这里要设置为setHeader
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("hello ajax");
});
// 2.POST
app.post("/server", (request, response) => {
  // 2022.2.3 找出问题所在:这里要设置为setHeader
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("hello ajax POST");
});
app.listen(8000, () => {
  console.log("8000 success!");
});
