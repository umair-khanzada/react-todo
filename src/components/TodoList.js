import React , {Component, Fragment} from 'react';
import PropTypes from "prop-types";
import CheckBox from './CheckBox';
import Button from './Button';
import Filters from './Filters';

class TodoList extends Component{
  constructor(props){
    super(props);

    this.state = {filterBy: 'all'};

    this.handleFilterChange = this.handleFilterChange.bind(this);
  }

  handleFilterChange(e){
    this.setState({filterBy: e.target.value});
  }

  render(){
    const {data, toggleStatus, selectTodo, removeTodo, disabledActions} = this.props,
      { filterBy } = this.state,
      filteredData = filterBy === 'all' ? [...data] : data.filter(obj => filterBy === 'completed' ? obj.completed : !obj.completed) ;

    return (
      <Fragment>
        <ul className="todo-list">
          {
            filteredData.map(todo => (
              <li key={todo.id}>
                <CheckBox onChange={() => toggleStatus(todo.id)} checked={todo.completed} disabled={disabledActions}/>
                <span className={todo.completed ? 'completed' : ''}>{todo.text}</span>
                <Button
                  className="btn btn-default btn-sm pull-right"
                  onClick={() => removeTodo(todo.id)}
                  icon={<span className="glyphicon glyphicon-trash" />}
                  disabled={disabledActions}
                />
                {todo.completed ||
                  <Button
                    className="btn btn-default btn-sm pull-right"
                    onClick={() => selectTodo(todo.id)}
                    icon={<span className="glyphicon glyphicon-edit" />}
                    disabled={disabledActions}
                  />
                }
              </li>
            ))
          }
        </ul>
        <Filters count={filteredData.length} onChange={this.handleFilterChange} checked={filterBy}/>
      </Fragment>
    )
  }
}

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
