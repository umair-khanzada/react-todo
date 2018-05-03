import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    //initial state.
    this.state = {
      mode: 'add', //enum: ['add', 'search']
      selectedTodo: null, //for update todo item.
      todoList: [
        {id: 1, text: 'Do something.', completed: false},
        {id: 2, text: 'Build todo app.', completed: false}
      ],
      searchResult: []
    };

    //binding ref.
    this.handleChange = this.handleChange.bind(this);
    this.search = this.search.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  //handling change, run whenever change event occur.
  handleChange(e){
    this.setState({
      mode: e.target.value,
      selectedTodo: null,
      searchResult: this.state.todoList
    })
  }

  //search handler.
  search(value){
    this.setState({searchResult: this.state.todoList.filter(obj => obj.text.toLowerCase().includes(value))})
  }

  //select selectedTodo in state.
  selectTodo(id = 0){
    this.setState({
      mode: 'add',
      selectedTodo: this.state.todoList.find(obj => obj.id === id) || null
    });
  };

  //add item in todoList.
  addTodo(id, text){
    const {todoList} = this.state;
    this.setState({
      todoList: [
        {id: (todoList.length + 1), text, completed: false},
        ...todoList
      ]
    })
  }

  //toggle todo.
  updateTodo(id, text){
    const {todoList} = this.state,
      index = todoList.findIndex(obj => obj.id === id);

    //update todoList in state.
    this.setState({
      selectedTodo: null,
      todoList: [
        ...todoList.slice(0, index),
        text ?
          {...todoList[index], text} :
          {...todoList[index], completed: !todoList[index].completed},
        ...todoList.slice(index + 1)
      ]
    })
  };

  //remove todo.
  removeTodo(id){
    const {todoList} = this.state,
      index = todoList.findIndex(obj => obj.id === id);

    //update todoList.
    this.setState({
      todoList: [
        ...todoList.slice(0, index),
        ...todoList.slice(index + 1)
      ]
    })
  };

  render() {
    const {mode, todoList, selectedTodo, searchResult} = this.state;

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
                <Form key="add" selectedTodo={selectedTodo} onReset={this.selectTodo}
                  onSubmit={selectedTodo ? this.updateTodo : this.addTodo} submitButton /> :
                <Form key="search" placeHolder="Search todo." buttonLabel="Search" onInputChange={this.search} />
            }
            <TodoList data={mode === 'add' ? todoList : searchResult} updateTodo={this.updateTodo} disabledActions={!!selectedTodo}
              selectTodo={this.selectTodo} removeTodo={this.removeTodo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
