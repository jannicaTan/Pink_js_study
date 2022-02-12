import thenFs from 'then-fs'

const promiseArr = [
  thenFs.readFile('./files/3.txt', 'utf8'),
  thenFs.readFile('./files/2.txt', 'utf8'),
  thenFs.readFile('./files/1.txt', 'utf8'),
]

//all方法：所有异步操作完成之后再执行then操作
Promise.all(promiseArr).then(result=>{
  console.log(result)
})

// race方法:只要任何一个异步操作完成，就立即执行该异操作完成的下一步的.then操作(赛跑机制)
// Promise.race(promiseArr).then(result => {
//   console.log(result)
// })
