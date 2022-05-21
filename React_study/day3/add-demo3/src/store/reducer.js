const defaultState={
  num:0
}
const stateAction=(state=defaultState,action)=>{
  let newState=JSON.parse(JSON.stringify(state))
  switch(action.type){
    case 'click_change':
      newState.num+=action.value
      break;
    default:
      break
  }
  return newState
}
export default stateAction