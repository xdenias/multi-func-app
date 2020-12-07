import React, { Component } from "react";
import "./App.css";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      todoItems: this.props.initItems,
    };
    this.handleClick = this.handleClick.bind(this);
  }

  handleClick() {
    console.log(this.state.todoItems);
  }

  render() {
    return <button onClick={this.handleClick}>Click-me</button>;
  }
}

export default App;
