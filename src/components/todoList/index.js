import React, { Component } from "react";
import TodoItem from "../todoList/todoItem";
import { connect } from "react-redux";
import "./style.css";

const mapStateToProps = (state) => ({
  add: state.add,
});

class TodoList extends Component {
  render() {
    let items = this.props.add.map((item, index) => {
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

export default connect(mapStateToProps)(TodoList);
