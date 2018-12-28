import React from 'react';
import PropTypes from 'prop-types';

const Task = props => {
  return (
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
  );
};

Task.propTypes = {
  
};

export default Task;