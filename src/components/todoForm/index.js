import React, { useState } from "react";
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

const TodoForm = ({ addItem }) => {
  const [itemValue, setItemValue] = useState("");

  const handleChange = (e) => {
    console.log(e.target.value);
    setItemValue(e.target.value);
  };
  const handleClick = () => {
    console.log(itemValue);
    addItem(itemValue);
  };

  return (
    <>
      <input
        type="text"
        className="form-control"
        placeholder="add a new todo..."
        value={itemValue}
        onChange={(e) => handleChange(e)}
      />
      <button
        type="submit"
        onClick={() => handleClick()}
        className="btn btn-default"
      >
        Add
      </button>
    </>
  );
};

export default connect(mapStateToProps, mapDispatchToProps)(TodoForm);
