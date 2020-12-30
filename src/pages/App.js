import React, { Component } from "react";
import "./App.css";
import Header from "../components/header";
import TodoList from "../components/todoList";
import TodoForm from "../components/todoForm";
import { connect } from "react-redux";
import { ADD_TITLE, DONE_ITEM } from "../actions";

const mapStateToProps = (state) => ({
  title: state.title,
  itemsReducer: state.itemsReducer,
});
const mapDispatchToProps = (dispatch) => ({
  testPart: () => dispatch({ type: ADD_TITLE }),
  doneItem: (payload) => dispatch({ type: DONE_ITEM, payload }),
});

class App extends Component {
  render() {
    return (
      <React.Fragment>
        <Header />
        <TodoList />
        <TodoForm />
        <button onClick={() => this.props.testPart()}>teste</button>
        <h1>{this.props.title || "Nothing"}</h1>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
