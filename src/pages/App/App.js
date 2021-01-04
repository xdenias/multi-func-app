import React, { Component } from "react";
import { connect } from "react-redux";
import { ADD_TITLE, DONE_ITEM } from "../../actions";
import Header from "../../components/header";
import "./App.css";

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
        <h1>Hello!</h1>
        <h1>Welcome!</h1>
      </React.Fragment>
    );
  }
}
export default connect(mapStateToProps, mapDispatchToProps)(App);
