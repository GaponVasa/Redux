import React from 'react';
import PropTypes from 'prop-types';

import randomId from '../../others/random_id.js';

const Button = ({classNameButton, idButton, innerText, currentId, onclickButton}) => {
  return (
    <button 
      className={classNameButton} 
      type='button'
      id={idButton ? idButton + randomId(): null}
      onClick={onclickButton}
      data-currentid={currentId}
    >
      {innerText}
    </button>
  );
};

Button.propTypes = {
  classNameButton : PropTypes.string,
  idButton : PropTypes.string,
  innerText : PropTypes.string,
  currentId : PropTypes.number,
  onclickButton : PropTypes.func,
};

export default Button;