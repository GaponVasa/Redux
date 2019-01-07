import {
  ADD_TASK,
  EDIT_TASK,
  DELETE_TASK,
  COMPLETE_TASK
} from "../constants.js";

export const actionAddTask = newTask => {
  return {
    type: ADD_TASK,
    payload: newTask
  };
};

export const actionDeleteTask = id => {
  return {
    type: DELETE_TASK,
    payload: id
  };
};

export const actionCompleteTask = id => {
  return {
    type: COMPLETE_TASK,
    payload: id
  };
};

export const actionEditTask = (id, changedText) => {
  return {
    type: EDIT_TASK,
    payload: { id, changedText }
  };
};
