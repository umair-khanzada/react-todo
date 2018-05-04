import React from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

const RadioButton = ({onChange, labelText, disabled}) => {
  return (
    <label className="checkbox-inline">
      <input type="radio" onChange={onChange} disabled={disabled} />
      {labelText}
    </label>
  )
};

RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  disabled: PropTypes.bool
};

//default props for Button component.
RadioButton.defaultProps = {
  disabled: false
};

export default RadioButton;