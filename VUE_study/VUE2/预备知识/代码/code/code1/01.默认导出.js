let n1 = 10
let n2 = 20
function show() {}
// export default {导出的对象}
// 目的是挂载使外界能够访问导出的对象
// 注意：只允许使用唯一的一次export default
export default {
  n1,
  show
}

// export default {
//   n2
// }