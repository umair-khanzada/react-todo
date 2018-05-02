import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    //initial state.
    this.state = {
      mode: 'add',
      todoList: [
        {id: 1, text: 'Do something.', completed: false},
        {id: 2, text: 'Build todo app.', completed: false}
      ]
    };

    //binding ref.
    this.handleChange = this.handleChange.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }

  //handling change, run whenever change event occur.
  handleChange(e){
    this.setState({mode: e.target.value})
  }

  //add item in todoList.
  addTodo(text){
    let {todoList} = this.state;
    this.setState({
      todoList: [
        {id: (todoList.length + 1), text, completed: false},
        ...todoList
      ]
    })
  }

  render() {
    let {mode, todoList} = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-3 col-sm-6 todo-container">
            <h2 className="text-center">Todo List</h2>
            {/*TODO: Extract .radio-parent into a component if needed.*/}
            <div className="col-sm-12 radio-parent">
              <label className="radio-inline">
                <input type="radio" value="add" name="mode" onChange={this.handleChange} checked={mode === 'add'}/>
                Add
              </label>
              <label className="radio-inline">
                <input type="radio" value="search" name="mode" onChange={this.handleChange} checked={mode === 'search'}/>
                Search
              </label>
            </div>
            {
              mode === 'add' ?
                <Form key="add" onSubmit={this.addTodo}/> :
                <Form key="search" placeHolder="Search todo." buttonLabel="Search" onSubmit={this.addTodo}/>
            }
            <TodoList data={todoList} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
