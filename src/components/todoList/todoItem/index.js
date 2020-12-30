import React, { Component } from "react";
import { connect } from "react-redux";
import { DONE_ITEM } from "../../../actions";
import "./style.css";

const mapDispatchToProps = (dispatch) => ({
  doneItem: (payload) => dispatch({ type: DONE_ITEM, payload }),
});
const mapStateToProps = (state) => ({
  title: state.title,
  itemsReducer: state.itemsReducer,
});

class TodoItem extends Component {
  // constructor(props) {
  //   super(props);
  //   this.clickClose = this.clickClose.bind(this);
  // }
  // clickClose() {
  //   let index = Number(this.props.index);
  //   this.props.removeItem(index);
  // }

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
          <button type="button" className="close">
            &times;
          </button>
        </div>
      </li>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(TodoItem);
