import {createStore} from 'redux';

const initialState = {
  tasks : [
    {
      id: 0,
      bodyTask: "Lorem ipsum dolor sit amet.",
      changed:false
    },
  ],
  filtered: false,
}

const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';

const actionAddTask = {
  type: ADD_TASK,
  payload: null
}

const tasks = (state = initialState, action)=>{
  return state;
}

const store = createStore(tasks);
console.log('store.getState() ',store.getState());
export default store;