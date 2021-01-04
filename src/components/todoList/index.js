import React, { Component } from "react";
import TodoItem from "../todoList/todoItem";
import { connect } from "react-redux";
import "./style.css";

const mapStateToProps = (state) => ({
  itemsReducer: state.itemsReducer,
});

class TodoList extends Component {
  render() {
    let items = this.props.itemsReducer.map((item, index) => {
      return <TodoItem key={index} item={item} index={index} />;
    });
    return <ul className="todo-list">{items}</ul>;
  }
}

export default connect(mapStateToProps)(TodoList);
