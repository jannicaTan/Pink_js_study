import thenFs from "then-fs";

thenFs
  .readFile("./files/111.txt", "utf8")
  .catch((err) => {
    console.log(err.message);
  })
  .then((r1) => {
    console.log(r1);
    return thenFs.readFile("./files/2.txt", "utf8"); //在第一个then中返回一个新的Promise对象
  })
  .then((r2) => {
    //继续调用 .then 为上一个.then的返回值（新的Promise实例）指定成功之后的回调函数
    console.log(r2);
    return thenFs.readFile("./files/3.txt", "utf8");
  })
  .then((r3) => {
    console.log(r3);
  });

// error:进入Promise后发现错误
// catch:直接无法进入Promise，只要报错就不运行了直接跳到catch了,可以将catch提前

// thenFs
//   .readFile('./files/11.txt', 'utf8')
//   .catch((err) => {
//     console.log(err.message)
//   })
//   .then((r1) => {
//     console.log(r1)
//     return thenFs.readFile('./files/2.txt', 'utf8')//在第一个then中返回一个新的Promise对象
//   })
//   .then((r2) => {//继续调用 .then 为上一个.then的返回值（新的Promise实例）指定成功之后的回调函数
//     console.log(r2)
//     return thenFs.readFile('./files/3.txt', 'utf8')
//   })
//   .then((r3) => {
//     console.log(r3)
//   })
