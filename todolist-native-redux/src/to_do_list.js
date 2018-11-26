'use strict';

let cards = document.querySelectorAll('.card');
const addButton = document.getElementById('addButton');
const addInput = document.getElementById('addInput');


//Reducer
function reducer(state, action) {
  // console.log(...state.cards);
  // console.log(action.card);
  // let card = action.card;
  // let cards = state.cards
  switch (action.type) {
    case "ADD":
      return { cards:[...state.cards, action.card] };
      break;
    // case "EDIT":
    //   return { count: state.count - action.amount };
    //   break;
    // case "DELETE":
    //   return { count: 0 };
    default:
      return state;
  }
}

const initalState = { cards: [{id:0, text:'123'}] };

const store = createStore(reducer, initalState);

//action creators
const addAction = card => {
  return { type: "ADD", card };
};

const addCard = () => {
  const addText = addInput.value;
  const addId = store.getState().cards.length;
  const card = {id:addId, text:addText};
  store.dispatch(addAction(card));
};

const showResult = ()=>{

}

const unsubscribe = store.subscribe(() => showResult());

addButton.addEventListener("click", () => addCard());
//addButton.addEventListener("click", () => addCard());