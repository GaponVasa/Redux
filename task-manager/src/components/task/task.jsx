import React from 'react';
import PropTypes from 'prop-types';
import FormCheckInline from '../form-check-inline/form-check-inline';
import Button from '../button/button';

const Task = ({onclickEdit, onclickDelete, textTask, currentId}) => {
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
          currentId={currentId}
          onclickButton={onclickEdit}
        />
        <Button
          classNameButton={'btn btn-outline-danger ml-3'}
          innerText={'Delete'}
          currentId={currentId}
          onclickButton={onclickDelete}
        />
      </div>
    </div>
  );
};

Task.propTypes = {
  onclickEdit: PropTypes.func,
  onclickDelete: PropTypes.func,
  textTask: PropTypes.string,
  currentId: PropTypes.number,
};

export default Task;