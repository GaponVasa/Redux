import { createStore } from 'redux';
import { initialState } from './initial-state';

const ADD_TASK = 'ADD_TASK';
const EDIT_TASK = 'EDIT_TASK';
const DELETE_TASK = 'DELETE_TASK';
const COMPLETE_TASK = 'COMPLETE_TASK';

export const actionAddTask = (newTask) => {
  return {
    type: ADD_TASK,
    payload: newTask
  }
}

export const actionDeleteTask = (id) => {
  return {
    type: DELETE_TASK,
    payload: id
  }
}

export const actionCompleteTask = (id) => {
  return {
    type: COMPLETE_TASK,
    payload: id
  }
}

export const actionEditTask = (id, changedText) => {
  return {
    type: EDIT_TASK,
    payload: { id, changedText }
  }
}

//Reducer recives stat and action, and return state
const tasks = (state = initialState, action) => {
  const lengthArr = state.tasks.length;
  const currentId = lengthArr === 0 ? 0 : state.tasks[lengthArr - 1].id + 1;
  const { tasks } = state;
  const { payload } = action;
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [...state.tasks, {
          id: currentId,
          bodyTask: payload,
          changed: false,
          complete: false
        }],
        filtered: false
      }
    case DELETE_TASK:
      return {
        tasks: tasks.filter(el => {
          return el.id !== parseInt(payload);
        }),
        filtered: false
      }
    case COMPLETE_TASK:
      console.log('COMPLETE_TASK');
      console.log('payload',payload);
      return {
        tasks: tasks.filter(el => {
          if (el.id === parseInt(payload)) {
            console.log('el.complete',el  );
            return {
              id: el.id,
              bodyTask: el.bodyTask,
              changed: el.changed,
              complete: true
            }
          } else {
            return el;
          }
        }),
        filtered: false
      }
    case EDIT_TASK:
      return {
        tasks: tasks.map(el => {
          if (el.id === parseInt(payload.id)) {
            return {
              id: el.id,
              bodyTask: payload.changedText,
              changed: true,
              complete: false
            }
          } else {
            return el;
          }
        }),
        filtered: true
      }
    default:
      return state;
  }
}

const store = createStore(tasks);

export default store;