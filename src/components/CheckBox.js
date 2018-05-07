import React from 'react';
import PropTypes from "prop-types";
import Button from "./Button";

const CheckBox = ({onChange, checked, labelText, disabled}) => {
  return (
    <label className="checkbox-inline">
      <input type="checkbox" checked={checked} onChange={onChange} disabled={disabled} />
      {labelText}
    </label>
  )
};

CheckBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.bool.isRequired,
  labelText: PropTypes.string,
  disabled: PropTypes.bool
};

//default props for Button component.
CheckBox.defaultProps = {
  disabled: false
};

export default CheckBox;