import {createStore} from 'redux';

const initialState:{currentUser: boolean} = {
  currentUser: false
}
const LoginReducer = (state= initialState, action:{type:string, value:boolean}) =>{
  if(action.type === 'true'){
    return {
      currentUser: action.value,
    }
  }
  if(action.type === 'false'){
    return {
      currentUser: action.value,
    }
  }
  return state;
}
const store = createStore(LoginReducer)
export default store;