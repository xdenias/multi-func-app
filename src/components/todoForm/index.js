import React, { Component } from "react";
import "./style.css";
import { ADD_ITEM } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  add: state.add,
});
const mapDispatchToProps = (dispatch) => ({
  testPart2: (payload) => dispatch({ type: ADD_ITEM, payload }),
});

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
          onClick={(e) => this.props.testPart2(this.state.newItemValue)}
          className="btn btn-default"
        >
          Add
        </button>
        <button onClick={() => console.log(this.props.add)}></button>
        {/* <h1>{this.props.add[3].index}</h1> */}
      </React.Fragment>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
