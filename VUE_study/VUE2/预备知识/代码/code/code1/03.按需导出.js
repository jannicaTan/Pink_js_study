/* 
  注意事项：
  1.可以多次按需导出
  2.按需导入的名称要与按需导出的名称保持一致
  3.可以使用as 重命名名称 进行重命名
  4.按需导入可以与默认导入一起
*/
export let s1 = 'aaa'
export let s2 = 'ccc'
export function say() {}

export default {
  a: 20
}
