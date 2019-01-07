import { initialState } from "../reducers/initial-state";
import { ADD_TASK, EDIT_TASK, DELETE_TASK, COMPLETE_TASK } from "../constants";

export const tasks = (state = initialState, action) => {
  const lengthArr = state.tasks.length;
  const currentId = lengthArr === 0 ? 0 : state.tasks[lengthArr - 1].id + 1;
  const { tasks } = state;
  const { payload } = action;
  switch (action.type) {
    case ADD_TASK:
      return {
        tasks: [
          ...state.tasks,
          {
            id: currentId,
            bodyTask: payload,
            changed: false,
            complete: false
          }
        ]
      };
    case DELETE_TASK:
      return {
        tasks: tasks.filter(el => {
          return el.id !== parseInt(payload);
        })
      };
    case COMPLETE_TASK:
      return {
        tasks: tasks.map(el => {
          if (el.id === parseInt(payload)) {
            return {
              id: el.id,
              bodyTask: el.bodyTask,
              changed: el.changed,
              complete: !el.complete
            };
          } else {
            return el;
          }
        })
      };
    case EDIT_TASK:
      return {
        tasks: tasks.map(el => {
          if (el.id === parseInt(payload.id)) {
            return {
              id: el.id,
              bodyTask: payload.changedText,
              changed: true,
              complete: el.complete
            };
          } else {
            return el;
          }
        })
      };
    default:
      return state;
  }
};
