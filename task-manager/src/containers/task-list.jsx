import React from 'react';
import PropTypes from 'prop-types';
import Task from '../components/task/task';
import storeArray from '../others/array';
import randomId from '../others/random_id';

const TaskList = ({onclick}) => {
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
};

TaskList.propTypes = {
  onclick: PropTypes.func
};

export default TaskList;