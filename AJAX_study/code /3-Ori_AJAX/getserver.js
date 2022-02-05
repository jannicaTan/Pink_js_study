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
  response.setHeader("Access-Control-Allow-Header","*");
  response.send("hello ajax POST");
});
// all:所有HTTP类型都可以接受
// app.all("/server", (request, response) => {
//   // 2022.2.3 找出问题所在:这里要设置为setHeader
//   response.setHeader("Access-Control-Allow-Origin", "*");
//   response.setHeader("Access-Control-Allow-Header","*");
//   response.send("hello ajax POST");
// });
app.all("/json-server", (request, response) => {
  // 2022.2.3 找出问题所在:这里要设置为setHeader
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Header","*");
  const data={
    name:'haha'
  }
  // 将字符串进行转换再返回:
  let str=JSON.stringify(data);
  response.send(str);//send方法只接受字符串/buffer
});

// IE
app.get("/ie", (request, response) => {
  // 2022.2.3 找出问题所在:这里要设置为setHeader
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.send("hello IE -2");
});
// 延迟响应
app.get("/delay", (request, response) => {
  // 2022.2.3 找出问题所在:这里要设置为setHeader
  response.setHeader("Access-Control-Allow-Origin", "*");
  response.setHeader("Access-Control-Allow-Header","*");
  setTimeout(() => {
    response.send("settimeout");
  }, 3000);
  
});
app.listen(8000, () => {
  console.log("8000 success!");
});
