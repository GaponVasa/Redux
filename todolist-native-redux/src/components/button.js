import React from "react";
import PropTypes from "prop-types";

const Button = props => {
  const { id, cssClass, onclick, textButton } = props;
  return (
    <button id={id} className={cssClass} onClick={onclick}>
      {textButton}
    </button>
  );
};

Button.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  onclick: PropTypes.func,
  textButton: PropTypes.string
};

export default Button;
