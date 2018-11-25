"use strict";

let buttons = document.querySelectorAll(".btn");
const incrementButton = buttons[0];
const resetButton = buttons[1];
const decrementButton = buttons[2];
const elementResult = document.getElementById("result");
const elementInput = document.getElementById("input");

//Reducer
function reducer(state, action) {
  switch (action.type) {
    case "INCREMENT":
      return { count: state.count + action.amount };
      break;
    case "DECREMENT":
      return { count: state.count - action.amount };
      break;
    case "RESET":
      return { count: 0 };
    default:
      return state;
  }
}

const initalState = { count: 0 };

const store = createStore(reducer, initalState);

//action creators
const incrementAction = amount => {
  return { type: "INCREMENT", amount };
};

const decrementAction = amount => {
  return { type: "DECREMENT", amount };
};

const resetAction = () => {
  return { type: "RESET" };
};

const showResult = () => {
  const state = store.getState().count;
  elementResult.innerHTML = state;
};
const unsubscribe = store.subscribe(() => showResult());

const increment = () => {
  let amount = parseInt(elementInput.value);
  store.dispatch(incrementAction(amount));
};

const decrement = () => {
  let amount = parseInt(elementInput.value);
  store.dispatch(decrementAction(amount));
};

incrementButton.addEventListener("click", () => increment());
decrementButton.addEventListener("click", () => decrement());
resetButton.addEventListener("click", () => store.dispatch(resetAction()));
