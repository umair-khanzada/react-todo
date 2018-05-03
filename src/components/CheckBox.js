import React from 'react';
import PropTypes from "prop-types";

const CheckBox = ({onChange, labelText}) => {
  return (
    <label className="checkbox-inline">
      <input type="checkbox" onChange={onChange} />
      {labelText}
    </label>
  )
};

CheckBox.propTypes = {
  onChange: PropTypes.func.isRequired,
  labelText: PropTypes.string
};

export default CheckBox;