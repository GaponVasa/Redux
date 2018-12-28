import React from 'react';
import PropTypes from 'prop-types';

const Header = props => {
  const{
    classNameInputGroup,
    classNameButton,  
    idButton, 
    innerText, 
    onclickButton, 
    values, 
    onChange
  } = props;
  return (
    <div className="row mt-3 mx-3">
      <div className="col-6 pl-0">
        <h3>Task planning</h3>
      </div>
      <div className="col-6 pr-0">
        <InputGroup
          classNameInputGroup={classNameInputGroup}
          classNameButton={classNameButton}
          idButton={idButton} 
          innerText={innerText}
          onclickButton={onclickButton} 
          values={values}
          onChange={onChange}
        />
      </div>
    </div>
  );
};

Header.propTypes = {
  classNameInputGroup : PropTypes.string,
  classNameButton : PropTypes.string,  
  idButton : PropTypes.string, 
  innerText : PropTypes.string, 
  onclickButton : PropTypes.func, 
  values : PropTypes.string, 
  onChange : PropTypes.func
};

export default Header;