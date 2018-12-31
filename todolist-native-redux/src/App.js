import React, { Component } from 'react';

import store from './store';
import {addAction, editAction, deleteAction} from './actions/actions';
import Button from './components/button.js';
import Input from './components/input.js';
import ShowCard from './containers/show_card';

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
    const oneCharacter = /[a-z]|[A-Z]|\d/g.test(addText);
    if(oneCharacter){
      const cards = store.getState().cards;
      const length = cards.length;
      const addId = length===0 ? 0 : cards[length - 1].id + 1;
      const card = { id: addId, text: addText };
      store.dispatch(addAction(card));
      this.setState({ value: '' });
    }
  };

  editCard = (card) => {
    store.dispatch(editAction(card));
  };

  deleteCard = (id) => {
    store.dispatch(deleteAction(id));
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
