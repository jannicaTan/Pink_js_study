const defaultState = {
  inputVal: '',
  data: []
}
// 导出返回state
// state: 指的是原始仓库里的状态。
// action: 指的是action新传递的状态。
const stateAction = (state = defaultState, action) => {
  let newState = JSON.parse(JSON.stringify(state)); // 对原本的state做一次深拷贝
  switch (action.type) {
    case 'change-input-val':
      newState.inputVal = action.value; // 重新赋值action过来的value
      break;
    case 'add-list':
      newState.data.unshift(newState.inputVal); // 重新赋值action过来的value
      newState.inputVal = ''
      break;
    case 'del_item':
      newState.data.splice(action.value,1); // 重新赋值action过来的value
      break;
    default:
      break;
  }
  console.log(state, action)
  return newState
}
export default stateAction