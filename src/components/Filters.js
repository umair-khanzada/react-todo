import React from 'react';
import PropTypes from "prop-types";
import RadioButton from './Radio';

const Filters = ({onChange, count}) => {
  return (
    <div className="filter-container">
      <div className="filters">
        <RadioButton onChange={onChange} value={'all'} name="filters" labelText="All" checked/>
        <RadioButton onChange={onChange} value={'not_completed'} name="filters" labelText="Remaining"/>
        <RadioButton onChange={onChange} value={'completed'} name="filters" labelText="Completed"/>
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