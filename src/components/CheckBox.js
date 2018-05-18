import React from 'react';
import PropTypes from "prop-types";

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

CheckBox.defaultProps = {
  disabled: false
};

export default CheckBox;