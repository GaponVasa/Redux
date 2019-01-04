import {createStore} from 'redux';
import {initialState} from './initial-state';

const ADD_TASK = 'ADD_TASK';
// const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';

export const actionAddTask = (newTask)=> {
  console.log('actionAddTask')
  return {
    type: ADD_TASK,
    payload: newTask
  }
}

export const actionDeleteTask = (id)=> {
  console.log('actionDeleteTask')
  return {
    type: DELETE_TASK,
    payload: id
  }
}


//Reducer recives stat and action, and return state
const tasks = (state = initialState, action)=>{
  // console.log('tasks');
  switch(action.type){
    case ADD_TASK:
      const lengthArr = state.tasks.length;
      const currentId = lengthArr===0 ? 0 : state.tasks[lengthArr - 1].id + 1;
      return{tasks:[...state.tasks, {
          id:currentId,
          bodyTask: action.payload,
          changed: false
        }],
        filtered: false
      }
    case DELETE_TASK:
      const tasks = state.tasks;
      return {
        tasks:tasks.filter(el =>{
          return el.id!==parseInt(action.payload);
        }),
        filtered: false
      }
  }
  return state;
}

const store = createStore(tasks);
console.log('store.getState() ',store.getState());
export default store;