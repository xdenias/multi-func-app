import React, { Component } from "react";
import "./style.css";
import { DONE_ITEM, ADD_ITEM } from "../../actions";
import { connect } from "react-redux";

const mapStateToProps = (state) => ({
  itemsReducer: state.itemsReducer,
});
const mapDispatchToProps = (dispatch) => ({
  addItem: (payload) => dispatch({ type: ADD_ITEM, payload }),
  doneItem: (payload) => dispatch({ type: DONE_ITEM, payload }),
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
  }
  render() {
    return (
      <>
        <input
          type="text"
          className="form-control"
          placeholder="add a new todo..."
          onChange={this.handleChange}
        />
        <button
          type="submit"
          onClick={() => this.props.addItem(this.state.newItemValue)}
          className="btn btn-default"
        >
          Add
        </button>
        {/* <button onClick={() => console.log(this.props.itemsReducer)}>
          asd
        </button> */}
      </>
    );
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
