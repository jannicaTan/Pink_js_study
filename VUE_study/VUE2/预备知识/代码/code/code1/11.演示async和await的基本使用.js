import thenFs from 'then-fs'

console.log('A')
async function getAllFile() {
  console.log('B')
  // 如果某个方法的返回值是Promise对象,利用await修饰后将实例对象编程return的值
  // 在aysnc方法中，第一个await之前的方法会进入同步执行，其之后的都会进入异步执行
  const r1 = await thenFs.readFile('./files/1.txt', 'utf8')
  console.log(r1)
  const r2 = await thenFs.readFile('./files/2.txt', 'utf8')
  console.log(r2)
  const r3 = await thenFs.readFile('./files/3.txt', 'utf8')
  console.log(r3)
  console.log('D')
}

// thenFs.readFile('./files/1.txt','utf8').then((r1)=>{
//   console.log(r1)
// })
getAllFile()
console.log('C')
