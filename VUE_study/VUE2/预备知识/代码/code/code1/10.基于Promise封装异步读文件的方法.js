import fs from 'fs'

/* 
  1.方法名称为getFile
  2.接收一个形参fpath,表示要读取的文件路径
  3.返回值为Promise实例对象
*/
// 创造具体的异步操作：
// 在new Promise中传递一个function,将操作放入function中


function getFile(fpath) {
  return new Promise(function (resolve, reject) {
    // 成功为dataStr
    fs.readFile(fpath, 'utf8', (err, dataStr) => {
      if (err) return reject(err)
      resolve(dataStr)
    })
  })
}
// 用户调用函数发给file路径&resolve成功的回调函数/reject失败的回调函数(这两个是回调函数)
getFile('./files/11.txt')
  .then((r1) => {
    console.log(r1)
  })
  .catch((err) => console.log(err.message))
