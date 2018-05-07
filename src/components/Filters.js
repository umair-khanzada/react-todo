import React from 'react';
import PropTypes from "prop-types";
import RadioButton from './Radio';

const Filters = ({onChange, checked, count}) => {
  return (
    <div className="filter-container">
      <div className="filters">
        <RadioButton onChange={onChange} value={'all'} name="filters" labelText="All" checked={checked === 'all'}/>
        <RadioButton onChange={onChange} value={'not_completed'} name="filters" labelText="Remaining" checked={checked === 'not_completed'}/>
        <RadioButton onChange={onChange} value={'completed'} name="filters" labelText="Completed" checked={checked === 'completed'}/>
      </div>
      <div className="count">Total: &nbsp;&nbsp;{count}</div>
    </div>
  )
};

Filters.propTypes = {
  onChange: PropTypes.func.isRequired,
  checked: PropTypes.string.isRequired,
  count: PropTypes.number.isRequired,
};

export default Filters;