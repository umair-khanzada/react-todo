import React from 'react';
import PropTypes from "prop-types";

const Button = ({text, type, onClick, icon, disabled, className}) => {
  return (
    <button type={type} className={className} onClick={onClick} disabled={disabled}>
      {icon} {text}
    </button>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func,
  icon: PropTypes.node,
  disabled: PropTypes.bool,
  className: PropTypes.string
};

//default props for Button component.
Button.defaultProps = {
  type: 'button',
  onClick: () => {},
  disabled: false,
  className: 'btn btn-primary'
};

export default Button;