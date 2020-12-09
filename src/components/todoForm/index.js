import React, { Component } from "react";
import "./style.css";
class TodoForm extends Component {
  constructor(props) {
    super(props);
    this.state = {
      newItemValue: "",
    };
    this.handleClick = this.handleClick.bind(this);
    this.handleChange = this.handleChange.bind(this);
  }
  handleChange(e) {
    console.log(e.target.value);
    this.setState({ newItemValue: e.target.value });
  }
  handleClick(e) {
    console.log(this.state.newItemValue);
    this.props.addItem(this.state.newItemValue);
    // this.props.addItem(this.state.newItemValue);
  }
  render() {
    return (
      <React.Fragment>
        <input
          type="text"
          className="form-control"
          placeholder="add a new todo..."
          onChange={this.handleChange}
        />
        <button
          type="submit"
          onClick={this.handleClick}
          className="btn btn-default"
        >
          Add
        </button>
      </React.Fragment>
    );
  }
}

export default TodoForm;
