import React, { Component } from "react";
import "./App.css";
import Header from "../components/header";
import TodoList from "../components/todoList";
import TodoForm from "../components/todoForm";
class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: this.props.initItems,
    };
    this.addItem = this.addItem.bind(this);
  }
  addItem(todoItem) {
    const newTodo = {
      index: this.state.todoItems.length + 1,
      value: todoItem,
      done: false,
    };
    this.setState({ todoItems: [...this.state.todoItems, newTodo] });
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <TodoList items={this.state.todoItems} />
        <TodoForm addItem={this.addItem} />
      </React.Fragment>
    );
  }
}

export default App;
