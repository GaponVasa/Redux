import React, { Component } from 'react';
import ShowCard from './components/show_card.js';

import createStore from './redux.js';
import Button from './components/button.js';
import Input from './components/input.js';

const initalState = { cards: [{ id: 0, text: 'Learn React' }] };

const store = createStore(reducer, initalState);

function reducer(state, action) {
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
          if (el.id !== action.id) { return el } 
        }) 
      };
    default:
      return state;
  }
}

//action
const addAction = card => {
  return { type: "ADD", card };
};

const editAction = card => {
  return { type: "EDIT", card };
};

const deleteAction = id => {
  return { type: "DELETE", id };
};

class App extends Component {
  state = {
    value: '',
  }

  componentDidMount() {
    store.subscribe(() => { this.forceUpdate() });
  }

  showCards = () => {
    const cards = store.getState().cards;

    return cards.map(el => {
      return (
        <ShowCard
          key={el.id}
          keyId={el.id}
          editCard={this.editCard}
          deleteCard={this.deleteCard}
          textCard={el.text}
        />
      )
    })
  }

  addCard = () => {
    const addText = this.state.value;
    const cards = store.getState().cards;
    const length = cards.length;
    const addId = cards[length - 1].id + 1;
    const card = { id: addId, text: addText };

    store.dispatch(addAction(card));
    console.log(store.getState().cards);
    this.setState({ value: '' });
  };

  editCard = (card) => {
    store.dispatch(editAction(card));
    console.log(store.getState().cards);
  };

  deleteCard = (id) => {
    store.dispatch(deleteAction(id));
    console.log(store.getState().cards);
  }

  handleChange = (event) => {
    this.setState({ value: event.target.value });
  };

  render() {
    return (
      <main className="container my-3">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <div className="input-group mb-3">
              <Input
                id={'addInput'}
                cssClass={'form-control'}
                type={'text'}
                placeholder={'Recipient\'s username'}
                value={this.state.value}
                onChange={this.handleChange}
              />
              <div className="input-group-append">
                <Button
                  id={'button-addon2'}
                  cssClass={'btn btn-outline-secondary'}
                  onclick={this.addCard}
                  textButton={'Add'}
                />
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            {this.showCards()}
          </div>
        </div>
      </main>
    );
  }
}

export default App;
