// 思路：左为对象，右为构造函数，判断左.__proto__==右.prototype，如果没有，就返回递归这个函数直到为null
function reInstanceOf(obj,constructor){
  let left=obj.__proto__
  let right= constructor.prototype
  if(left==null){
    return false
  }
  if(left==right){
    return true
  }
  return reInstanceOf(obj.__proto__,constructor)
}
const arr=[1,2,3]
console.log(reInstanceOf(arr,Object))