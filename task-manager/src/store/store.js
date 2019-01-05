import {createStore} from 'redux';
import {initialState} from './initial-state';

const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
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

export const actionEditTask = (id, changedText)=> {
  console.log('actionEditTask')
  return {
    type: EDIT_TASK,
    payload: {id, changedText}
  }
}

//Reducer recives stat and action, and return state
const tasks = (state = initialState, action)=>{
  // console.log('tasks');
  const lengthArr = state.tasks.length;
  const currentId = lengthArr===0 ? 0 : state.tasks[lengthArr - 1].id + 1;
  const {tasks} = state;
  const {payload} = action;
  switch(action.type){
    case ADD_TASK:
      
      return{tasks:[...state.tasks, {
          id:currentId,
          bodyTask: payload,
          changed: false
        }],
        filtered: false
      }
    case DELETE_TASK:
      
      return {
        tasks:tasks.filter(el =>{
          return el.id!==parseInt(payload);
        }),
        filtered: false
      }
    case EDIT_TASK:
      console.log(payload);
      console.log(tasks);
      console.log(Array.isArray(tasks));
      return {
        tasks:tasks.map(el=>{
          if(el.id === parseInt(payload.id)){
            return {
              id: el.id,
              bodyTask: payload.changedText,
              changed: true
            }
          }else{
            return el;
          }
        })
        ,
        filtered: true
      }
  }
  return state;
}

const store = createStore(tasks);
console.log('store.getState() ',store.getState());
export default store;