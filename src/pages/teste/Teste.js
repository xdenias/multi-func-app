import React, { Component } from "react";
import "./Teste.css";
import Header from "../../components/header";
import TodoList from "../../components/todoList";
import TodoForm from "../../components/todoForm";
import { connect } from "react-redux";
import { ADD_TITLE, DONE_ITEM } from "../../actions";

const mapStateToProps = (state) => ({
  title: state.title,
  itemsReducer: state.itemsReducer,
});
const mapDispatchToProps = (dispatch) => ({
  testPart: () => dispatch({ type: ADD_TITLE }),
  doneItem: (payload) => dispatch({ type: DONE_ITEM, payload }),
});

class Teste extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <h1>iaeee meen</h1>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(Teste);
