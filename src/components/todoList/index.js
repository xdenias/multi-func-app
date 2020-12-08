import React, { Component } from "react";
import TodoItem from "../todoList/todoItem";
import "./style.css";

class TodoList extends Component {
  render() {
    let items = this.props.items.map((item, index) => {
      return (
        <TodoItem
          key={index}
          item={item}
          index={index}
          removeItem={this.props.removeItem}
          todoDone={this.props.todoDone}
        />
      );
    });
    return <ul>{items}</ul>;
  }
}

export default TodoList;
