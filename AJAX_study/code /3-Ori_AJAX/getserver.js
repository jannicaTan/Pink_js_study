const express = require("express");
const app = express();

app.get("/server", (request, response) => {
  // 2022.2.3 找出问题所在:这里要设置为setHeader
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("hello ajax");
});

app.listen(8000, () => {
  console.log("8000 success!");
});
