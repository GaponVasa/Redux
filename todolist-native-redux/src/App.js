import React, { Component } from 'react';
import ShowCard from './show_card.js';
import ShowEdit from './show_edit';

class App extends Component {
  render() {
    return (
      <main className="container my-3">
        <div className="d-flex flex-column">
          <div className="d-flex justify-content-center">
            <div className="input-group mb-3">
              <input type="text" id="addInput" className="form-control" placeholder="Recipient's username" />
              <div className="input-group-append">
                <button id="addButton" className="btn btn-outline-secondary" type="button" id="button-addon2">Add</button>
              </div>
            </div>
          </div>
          <div className="d-flex flex-column">
            <ShowCard/>
            <ShowEdit/>
                        
          </div>
        </div>
      </main>
    );
  }
}

export default App;
