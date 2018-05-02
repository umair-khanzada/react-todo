import React from 'react';
import PropTypes from "prop-types";

const TodoList = ({data, editHandler, removeHandler}) => {
  return (
    <ul>
      {
        data.map(todo => (
          <li key={todo.id}>{todo.text}</li>
        ))
      }
    </ul>
  )
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.object),
  editHandler: PropTypes.func,
  removeHandler: PropTypes.func
};

//default props for Form component.
TodoList.defaultProps = {
  data: []
};

export default TodoList;