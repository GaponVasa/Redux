import React, { Component } from 'react';

import InputGroup from './components/input-group/input-group';
import FormCheckInline from './components/form-check-inline/form-check-inline';
import './App.css';
import Header from './containers/header';
import TaskList from './containers/task-list';


class App extends Component {

  onclick = ()=>{
    console.log('click');
  }

  render() {
    return (
      <div className="container d-flex flex-column border my-3">
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
        <TaskList
          onclick={this.onclick}
        />
        <div className='row m-3'>
          <FormCheckInline
            textTask={'Check all tasks'}
            valueCheckbox={false} 
            onclick={this.onclick}
          />
        </div>
      </div>
    );
  }
}

export default App;
