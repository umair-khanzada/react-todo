import React from 'react';
import PropTypes from "prop-types";
import RadioButton from './Radio';

const Filters = ({onChange, count}) => {
  return (
    <div className="filter-container">
      <div className="filters">
        <RadioButton onChange={onChange} labelText="All"/>
        <RadioButton onChange={onChange} labelText="Remaining"/>
        <RadioButton onChange={onChange} labelText="Completed"/>
      </div>
      <div className="count">Total: &nbsp;&nbsp;{count}</div>
    </div>
  )
};

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  count: PropTypes.number.isRequired,
};

export default Filters;