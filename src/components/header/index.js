import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <>
        <a href="/">Home</a>
        <a href="/test">Add Student</a>
        <a href="/view-students">View Students</a>
      </>
    );
  }
}

export default Header;
