// 浅拷贝：对于obj进行for循环，hasownpropty（返回boolean）去判断obj是否有某属性
function genClone(obj){
  const newObj={}
  for(let prop in obj){
    if(obj.hasOwnProperty(prop)){
      newObj[prop]=obj[prop]
    }
  }
  return newObj
}