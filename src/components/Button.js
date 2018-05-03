import React from 'react';
import PropTypes from "prop-types";
import TodoList from "./TodoList";

const Button = ({text, type, onClick, icon}) => {
  return (
    <button type={type} className="btn btn-default btn-sm pull-right" onClick={onClick}>
      {icon} {text}
    </button>
  )
};

Button.propTypes = {
  text: PropTypes.string,
  type: PropTypes.oneOf(['submit', 'button']),
  onClick: PropTypes.func,
  icon: PropTypes.node
};

//default props for Button component.
Button.defaultProps = {
  type: 'button',
  onClick: () => {}
};

export default Button;