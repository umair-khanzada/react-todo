import React from 'react';
import PropTypes from "prop-types";

const RadioButton = ({onChange, value, name, labelText, checked, disabled}) => {
  return (
    <label className="checkbox-inline">
      <input type="radio" onChange={onChange} value={value} name={name} disabled={disabled} checked={checked} />
      {labelText}
    </label>
  )
};

RadioButton.propTypes = {
  onChange: PropTypes.func.isRequired,
  value: PropTypes.oneOfType([
    PropTypes.string,
    PropTypes.bool
  ]).isRequired,
  name: PropTypes.string.isRequired,
  labelText: PropTypes.string,
  disabled: PropTypes.bool
};

//default props for Button component.
RadioButton.defaultProps = {
  disabled: false
};

export default RadioButton;