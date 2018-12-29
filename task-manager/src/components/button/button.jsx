import React from 'react';
import PropTypes from 'prop-types';

import randomId from '../../others/random_id.js';

const Button = ({classNameButton, idButton, innerText, onclickButton}) => {
  return (
    <button 
      className={classNameButton} 
      type='button'
      id={idButton ? idButton + randomId(): null}
      onClick={onclickButton}
      
    >
      {innerText}
    </button>
  );
};

Button.propTypes = {
  classNameButton : PropTypes.string,
  idButton : PropTypes.string,
  innerText : PropTypes.string,
  onclickButton : PropTypes.func,
};

export default Button;