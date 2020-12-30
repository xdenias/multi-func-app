import React, { Component } from "react";
import { connect } from "react-redux";
import { REMOVE_ITEM, DONE_ITEM } from "../../../actions";
import "./style.css";

const mapDispatchToProps = (dispatch) => ({
  doneItem: (payload) => dispatch({ type: DONE_ITEM, payload }),
  removeItem: (payload) => dispatch({ type: REMOVE_ITEM, payload }),
});
const mapStateToProps = (state) => ({
  title: state.title,
  itemsReducer: state.itemsReducer,
});

class TodoItem extends Component {
  render() {
    let todoClass = this.props.itemsReducer[this.props.index].done
      ? "done"
      : "undone";
    return (
      <li className="list-group-item ">
        <div className={todoClass}>
          <span
            className="glyphicon glyphicon-ok icon"
            aria-hidden="true"
            onClick={() => this.props.doneItem(this.props.index)}
          ></span>
          {this.props.item.value}
          <button
            type="button"
            className="close"
            onClick={() => this.props.removeItem(this.props.index)}
          >
            &times;
          </button>
        </div>
      </li>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
