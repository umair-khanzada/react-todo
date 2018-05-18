import React from 'react';
import PropTypes from "prop-types";
import RadioButton from './RadioButton';

const Filters = ({onChange, checked, count}) => {
  const filters = [
    { value: 'all', label: 'All' },
    { value: 'not_completed', label: 'Remaining' },
    { value: 'completed', label: 'Completed' }
  ];

  return (
    <div className="filter-container">
      <div className="filters">
        {filters.map(filter => (
          <RadioButton
            onChange={onChange}
            value={filter.value}
            name={'filters'}
            labelText={filter.label}
            checked={checked === filter.value}
          />
        ))}
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