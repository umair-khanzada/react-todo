import React, { Component } from 'react';
import Form from './components/Form';
import TodoList from './components/TodoList';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    //initial state.
    this.state = {
      data: [
        {id: 1, text: 'Do something.', completed: false},
        {id: 2, text: 'Build todo app.', completed: false}
      ],
      selected: null, //for update todo item.
    };

    //binding ref.
    // this.handleChange = this.handleChange.bind(this);
    this.selectTodo = this.selectTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
    this.updateTodo = this.updateTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.removeTodo = this.removeTodo.bind(this);
  }

  //update selectedTodo in state.
  selectTodo(id = 0){
    this.setState({
      selected: this.state.data.find(obj => obj.id === id) || null
    });
  };

  //add item in data.
  addTodo(text){
    const {data} = this.state,
      id = data.reduce((prev, current) => (prev > current.id) ? prev : current.id,  0) + 1; //generate unique id.

    this.setState({
      data: [
        {id, text, completed: false},
        ...data
      ]
    })
  }

  //toggle todo.
  toggleTodo(id){
    const {data} = this.state,
      index = data.findIndex(obj => obj.id === id);

    //update data in state.
    this.setState({
      data: [
        ...data.slice(0, index),
        {...data[index], completed: !data[index].completed},
        ...data.slice(index + 1)
      ]
    })
  };

  //update todo.
  updateTodo(text){
    const {data, selected} = this.state,
      index = data.findIndex(obj => obj.id === selected.id);

    //update data in state.
    this.setState({
      selected: null,
      data: [
        ...data.slice(0, index),
        {...data[index], text},
        ...data.slice(index + 1)
      ]
    })
  };

  //remove todo.
  removeTodo(id){
    const {data} = this.state,
      index = data.findIndex(obj => obj.id === id);

    //update data.
    this.setState({
      data: [
        ...data.slice(0, index),
        ...data.slice(index + 1)
      ]
    })
  };

  render() {
    const {data, selected} = this.state;

    return (
      <div className="container">
        <div className="row">
          <div className="col-sm-offset-3 col-sm-6 todo-container">
            <h2 className="text-center">Todo List</h2>
            {
              selected ?
                <Form selected={selected} submitButtonLabel="update"
                  onSubmit={this.updateTodo} onReset={this.selectTodo} /> :
                <Form onSubmit={this.addTodo}/>
            }
            <TodoList data={data} toggleStatus={this.toggleTodo} disabledActions={!!selected}
              selectTodo={this.selectTodo} removeTodo={this.removeTodo}/>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
