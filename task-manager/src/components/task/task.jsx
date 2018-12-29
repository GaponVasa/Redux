import React from 'react';
import PropTypes from 'prop-types';
import FormCheckInline from '../form-check-inline/form-check-inline';
import Button from '../button/button';

const Task = ({onclick, textTask}) => {
  return (
    <div className="row border rounded m-3">
      <FormCheckInline
        classNameInline={'col-10 p-3 mr-0'}
        textTask={textTask}
        valueCheckbox={false} 
        onclick={onclick}
      />
      <div className='col-2 my-3 p-0'>
        <Button
          classNameButton={'btn btn-outline-primary'}
          innerText={'Edit'}
          onclickButton={onclick}
        />
        <Button
          classNameButton={'btn btn-outline-danger ml-3'}
          innerText={'Delete'}
          onclickButton={onclick}
        />
      </div>
    </div>
  );
};

Task.propTypes = {
  onclick: PropTypes.func,
  textTask: PropTypes.string,
};

export default Task;