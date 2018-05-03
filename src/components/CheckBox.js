import React from 'react';
import PropTypes from "prop-types";

const CheckBox = ({onChange, labelText, disabled = false}) => {
  return (
    <label className="checkbox-inline">
      <input type="checkbox" onChange={onChange} disabled={disabled} />
      {labelText}
    </label>
  )
};

CheckBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string,
  disabled: PropTypes.bool
};

export default CheckBox;