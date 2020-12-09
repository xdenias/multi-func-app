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
    this.removeItem = this.removeItem.bind(this);
  }
  addItem(todoItem) {
    const newTodo = {
      index: this.state.todoItems.length,
      value: todoItem,
      done: false,
    };
    this.setState({ todoItems: [...this.state.todoItems, newTodo] });
    console.log(this.state.todoItems);
  }
  removeItem(itemIndex) {
    this.setState((prevState) => ({
      todoItems: prevState.todoItems.filter(
        (item, index) => itemIndex !== index
      ),
    }));
  }
  render() {
    return (
      <React.Fragment>
        <Header />
        <TodoList
          items={this.state.todoItems}
          removeItem={this.removeItem}
          todoDone={this.todoDone}
        />
        <TodoForm addItem={this.addItem} />
      </React.Fragment>
    );
  }
}

export default App;
