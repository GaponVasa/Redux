import React, { Component } from 'react';


class App extends Component {
  render() {
    return (
      <div className="container justify-content-center border my-3">
        <div className="row mt-3 mx-3">
          <div className="col-6 pl-0">
            <h3>Task planning</h3>
          </div>
          <div className="col-6 pr-0">
            <div className='input-group mr-0'>
              <input 
                type="text" 
                className="form-control" 
                placeholder="Enter text" 
              />
              <div className="input-group-append">
                <button 
                  className="btn btn-outline-secondary" 
                  type="button" 
                  id="button-addon2"
                >
                  Search
                </button>
              </div>
            </div>
          </div>
        </div>
        <div className="row m-3">
          <div className='input-group col-12 px-0'>
            <input 
              type="text" 
              className="form-control" 
              placeholder="Enter text" 
            />
            <div className="input-group-append">
              <button 
                className="btn btn-outline-secondary" 
                type="button" 
                id="button-addon2"
              >
                Add task
              </button>
            </div>
          </div>
        </div>
        <div className="row border rounded m-3">
          <div className='col d-flex justify-content-between m-2'>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
              <label className="form-check-label" htmlFor="inlineCheckbox1">Name</label>
            </div>
            <div>
              <button type="button" className="btn btn-outline-primary">Edit</button>
              <button type="button" className="btn btn-outline-danger ml-3">Delete</button>
            </div>
          </div>
        </div>
        <div className="row border rounded m-3">
          <div className='col d-flex justify-content-between m-2'>
            <div className="form-check form-check-inline">
              <input className="form-check-input" type="checkbox" id="inlineCheckbox1" value="option1"/>
              <label className="form-check-label" htmlFor="inlineCheckbox1">Name</label>
            </div>
            <div>
              <button type="button" className="btn btn-outline-primary">Edit</button>
              <button type="button" className="btn btn-outline-danger ml-3">Delete</button>
            </div>
          </div>
        </div>

      </div>
    );
  }
}

export default App;
