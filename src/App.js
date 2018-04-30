import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props){
    super(props);

    this.state = [
      {id: 1, text: 'Do something.', completed: false},
      {id: 2, text: 'Build todo app.', completed: false}
    ];
  }

  render() {
    return (
      <div className="container">
        <h2>Todo List</h2>
      </div>
    );
  }
}

export default App;
