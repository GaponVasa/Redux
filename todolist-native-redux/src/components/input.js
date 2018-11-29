import React from "react";
import PropTypes from "prop-types";

const Input = props => {
  const { id, cssClass, type, placeholder, value, onChange } = props;
  return (
    <input
      id={id}
      className={cssClass}
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
    />
  );
};

Input.propTypes = {
  id: PropTypes.string,
  cssClass: PropTypes.string,
  type: PropTypes.string,
  placeholder: PropTypes.string,
  value: PropTypes.string,
  onChange: PropTypes.func
};

export default Input;
