const express = require("express");
const app = express();
app.all("/axios-server", (request, response) => {
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Headers", "*");
  const data = { name: "尚硅谷",age: '18'};
  response.send(JSON.stringify(data));
});
app.listen(8000, () => {
  console.log("服务已经启动, 8000 端口监听中....");
});
