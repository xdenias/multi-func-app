import React, { Component } from "react";
import "./style.css";

class TodoItem extends Component {
  constructor(props) {
    super(props);
    this.clickClose = this.clickClose.bind(this);
    this.clickDone = this.clickDone.bind(this);
  }
  clickClose() {
    let index = Number(this.props.index);
    this.props.removeItem(index);
  }
  clickDone() {
    let index = Number(this.props.index);
    this.props.todoDone(index);
  }

  render() {
    let todoClass = this.props.item.done ? "done" : "undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={this.clickDone}
          ></span>
          {this.props.item.value}
          <button type="button" className="close" onClick={this.clickClose}>
            &times;
          </button>
        </div>
      </li>
    );
  }
}
export default TodoItem;
