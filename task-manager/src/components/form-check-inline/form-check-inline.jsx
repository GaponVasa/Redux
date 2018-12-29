import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input';
import randomId from '../../others/random_id.js';
import './form-check-inline.css';

const FormCheckInline = ({classNameInline, textTask, valueCheckbox, onclick}) => {
  const ID = "inlineCheckbox" + randomId();
  const addClass = "form-check-inline ";
  const classInline = classNameInline =>{
    return classNameInline ? addClass + classNameInline : addClass;
  }
  return (
    <div className={classInline(classNameInline)}>
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
        {textTask}
      </label>
    </div>
  );
};

FormCheckInline.propTypes = {
  classNameInline: PropTypes.string, 
  textTask: PropTypes.string,
  valueCheckbox: PropTypes.bool,
  onclick: PropTypes.func,
};

export default FormCheckInline;