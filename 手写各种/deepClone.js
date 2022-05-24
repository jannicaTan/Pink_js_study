// 思路：创建一个新obj，先判断拷贝对象为string/obj,for循环判断obj[key]否还有obj，有就继续进行递归,没有就赋值
function deepClone(obj){
  if(Array.isArray(obj)){
    let newObj=[]
  }else{
    let newObj={}
  }
  for(let i in obj){
    if(typeof obj[key]=='object'){
      newObj[key]=deepClone(obj[key])//这里让新节点递归去
    }else{
      newObj[key]=obk[key]
    }
  }
  return newObj
}