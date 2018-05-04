import React , {Fragment} from 'react';
import PropTypes from "prop-types";
import CheckBox from './CheckBox';
import Button from './Button';
import Filters from './Filters';

const TodoList = ({data, toggleStatus, selectTodo, removeTodo, disabledActions}) => {
  return (
    <Fragment>
      <ul className="todo-list">
        {
          data.map(todo => (
            <li key={todo.id}>
              <CheckBox onChange={() => toggleStatus(todo.id)} disabled={disabledActions}/>
              <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
              <Button className="btn btn-default btn-sm pull-right" onClick={() => removeTodo(todo.id)}
                icon={<span className="glyphicon glyphicon-trash" />} disabled={disabledActions} />
              {todo.completed || <Button className="btn btn-default btn-sm pull-right" onClick={() => selectTodo(todo.id)}
                icon={<span className="glyphicon glyphicon-edit" />} disabled={disabledActions}/>}
            </li>
          ))
        }
      </ul>
      <Filters count={5} onChange={() => {}}/>
    </Fragment>
  )
};

TodoList.propTypes = {
  data: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.number.isRequired,
    text: PropTypes.string.isRequired,
    completed: PropTypes.bool.isRequired
  })),
  selectTodo: PropTypes.func.isRequired,
  removeTodo: PropTypes.func.isRequired,
  toggleStatus: PropTypes.func.isRequired,
  disabledActions: PropTypes.bool
};

//default props for TodoList component.
TodoList.defaultProps = {
  data: [],
  disabledActions: false
};

export default TodoList;