import thenFs from 'then-fs'

thenFs.readFile('./files/1.txt', 'utf8').then((r1) => {console.log(r1)})
thenFs.readFile('./files/2.txt', 'utf8').then((r2) => {console.log(r2)})
thenFs.readFile('./files/3.txt', 'utf8').then((r3) => {console.log(r3)})

// 上述代码只能保证读取成功 不能保证读取顺序