export function reducer(state, action) {
  switch (action.type) {
    case "ADD":
      return { cards: [...state.cards, action.card] };
    case "EDIT":
      return {
        cards: state.cards.map((el) => {
          if (el.id === action.card.id) {
            el.text = action.card.text
          }
          return el;
        })
      };
    case "DELETE":
      return { 
        cards: state.cards.filter((el) => { 
          if (el.id !== action.id) { return el };
        }) 
      };
    default:
      return state;
  }
}

export default reducer;