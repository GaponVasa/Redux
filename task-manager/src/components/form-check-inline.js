import React from 'react';
import PropTypes from 'prop-types';
import Input from './input';
import randomId from '../others/random_id.js';



const FormCheckInline = ({currentTask, valueCheckbox, onclick}) => {
  const ID = "inlineCheckbox" + randomId();
  return (
    <div className="form-check form-check-inline">
      <Input 
        className="form-check-input" 
        type="checkbox" 
        id={ID}
        value={valueCheckbox}
        onClick={onclick}
      />
      <label 
        className="form-check-label" 
        htmlFor={ID}
      >
        {currentTask}
      </label>
    </div>
  );
};

FormCheckInline.propTypes = {
  currentTask: PropTypes.string,
  valueCheckbox: PropTypes.bool,
  onclick: PropTypes.func,
};

export default FormCheckInline;