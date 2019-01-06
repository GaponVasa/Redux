import React from "react";
import Input from "../input/input";
import Button from "../button/button";
import PropTypes from "prop-types";

export const InputGroup = props => {
  const {
    classNameInputGroup,
    classNameButton,
    idButton,
    innerText,
    onclickButton,
    className,
    placeholder,
    values,
    onChange
  } = props;
  return (
    <div className={classNameInputGroup}>
      <Input
        className={className}
        placeholder={placeholder}
        value={values}
        onChange={onChange}
      />
      <div className="input-group-append">
        <Button
          classNameButton={classNameButton}
          idButton={idButton}
          innerText={innerText}
          onclickButton={onclickButton}
        />
      </div>
    </div>
  );
};

InputGroup.propTypes = {
  classNameInputGroup: PropTypes.string,
  classNameButton: PropTypes.string,
  idButton: PropTypes.string,
  innerText: PropTypes.string,
  onclickButton: PropTypes.func,
  className: PropTypes.string,
  placeholder: PropTypes.string,
  values: PropTypes.string,
  onChange: PropTypes.func
};

InputGroup.defaultProps = {
  type: "text",
  className: "form-control mr-0",
  placeholder: "Enter text"
};

export default InputGroup;
