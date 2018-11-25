"use strict";

let buttons = document.querySelectorAll(".btn");
let incrementButton = buttons[0];
let decrementButton = buttons[1];
let elementResult = document.getElementById("result");

//Reducer
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
      break;
    case "DECREMENT":
      return { count: state.count - action.amount };
      break;
    default:
      return state;
  }
}

const initalState = { count: 0 };

const store = createStore(reducer, initalState);

//action
const incrementAction = { type: "INCREMENT", amount: 1 };
const decrementAction = { type: "DECREMENT", amount: 1 };

const showResult = () => {
  const state = store.getState().count;
  elementResult.innerHTML = state;
};
const unsubscribe = store.subscribe(() => showResult());

incrementButton.addEventListener("click", () =>
  store.dispatch(incrementAction)
);
decrementButton.addEventListener("click", () =>
  store.dispatch(decrementAction)
);
