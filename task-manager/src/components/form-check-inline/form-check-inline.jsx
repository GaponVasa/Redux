import React from 'react';
import PropTypes from 'prop-types';
import Input from '../input/input';
import randomId from '../../others/random_id.js';
import './form-check-inline.css';

const FormCheckInline = props => {
  const {
    classNameInline, 
    textTask, 
    onclick, 
    flagInput, 
    onchange,
    editvalue, 
    completeFlag
  } = props;
  const ID = "inlineCheckbox" + randomId();
  const addClass = "form-check-inline ";
  const classInline = classNameInline =>{
    return classNameInline ? addClass + classNameInline : addClass;
  }
  const returnLable = ()=>{
    // const classCheckLable = "form-check-label";
    // const strikeClass = ' strikethrough';
    //console.log('returnLable', completeFlag ? classCheckLable + strikeClass: classCheckLable)
    return (
      <label 
        className="form-check-label"
        htmlFor={ID}
      >
        {textTask}
      </label>
    )
  }
  const returnInput = ()=>{
    return (
      <Input 
        className="col" 
        type="text" 
        placeholder={'Enter text'}
        value={editvalue}
        onChange={onchange}
      />
    )
  }
  return (
    <div className={classInline(classNameInline)}>
      <Input 
        className="form-check-input" 
        type="checkbox" 
        id={ID}
        onClick={onclick}
        value={true}
      />
      {flagInput ? returnInput() : returnLable()}
    </div>
  );
};

FormCheckInline.propTypes = {
  classNameInline: PropTypes.string, 
  textTask: PropTypes.string,
  flagInput:  PropTypes.bool,
  completeFlag:  PropTypes.bool,
  onclick: PropTypes.func,
  onchange: PropTypes.func,
  editvalue: PropTypes.string,
};

export default FormCheckInline;