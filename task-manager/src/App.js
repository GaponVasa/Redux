import React, { Component } from 'react';

import InputGroup from './components/input-group';
import FormCheckInline from './components/form-check-inline';
import './App.css';
import Header from './containers/header';


class App extends Component {

  onclick = ()=>{
    console.log('click');
  }

  render() {
    return (
      <div className="container justify-content-center border my-3">
        <Header
          classNameInputGroup={'input-group mr-0'}
          classNameButton={"btn btn-outline-secondary"}
          idButton={'button-addon'} 
          innerText={'Search'}
          onclickButton={this.onclick} 
          values={''}
          onChange={this.onclick}
        />
        <div className="row m-3">
          <InputGroup
            classNameInputGroup={'input-group col-12 px-0'}
            classNameButton={"btn btn-outline-secondary"}
            idButton={'button-addon'} 
            innerText={'Add task'}
            onclickButton={this.onclick} 
            values={''}
            onChange={this.onclick}
          />
        </div>
        <div className='row m-3 d-flex flex-column tasks'>
          <div className="border rounded mb-3">
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
          <div className="border rounded mb-3">
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
        <div className='row m-3'>
          <FormCheckInline
            currentTask={'Check all tasks'}
            valueCheckbox={false} 
            onclick={this.onclick}
          />
        </div>
      </div>
    );
  }
}

export default App;
