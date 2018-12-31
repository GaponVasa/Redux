import React,{Component} from 'react';
import PropTypes from 'prop-types';
import Task from '../components/task/task';
import storeArray from '../others/array';
import randomId from '../others/random_id';

class TaskList extends Component {
  render() {
    const {onclick} = this.props;
    return (
      <div className='d-flex flex-column tasks'>
        {
          storeArray.map(el=>{
            return (<Task
              key={randomId()}
              textTask={el}
              onclick={onclick}
            />)
          })
        }
      </div>
    );
  }
}

TaskList.propTypes = {
  onclick: PropTypes.func
};

export default TaskList;