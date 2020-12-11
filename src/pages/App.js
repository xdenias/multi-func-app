import React, { Component } from "react";
import "./App.css";
import Header from "../components/header";
import TodoList from "../components/todoList";
import TodoForm from "../components/todoForm";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: [
        { index: 0, value: "Learn React", done: false },
        { index: 1, value: "Drink a coffe", done: true },
        { index: 2, value: "Eat lunch", done: true },
      ],
    };
    this.addItem = this.addItem.bind(this);
    this.removeItem = this.removeItem.bind(this);
    this.todoDone = this.todoDone.bind(this);
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
  todoDone(itemIndex) {
    const newData = this.state.todoItems.map((item, index) => {
      if (itemIndex === index) {
        return { ...item, done: !item.done };
      } else {
        return item;
      }
    });
    this.setState({ todoItems: newData });
    console.log(this.state.todoItems);
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
