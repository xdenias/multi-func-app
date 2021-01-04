import React, { Component } from "react";
import "./style.css";

class Header extends Component {
  render() {
    return (
      <>
        <header className="header">
          <nav>
            <ul className="u-list">
              <li>
                <a href="/">Home</a>
              </li>
              <li>
                <a href="/todo">Todo</a>
              </li>
            </ul>
          </nav>
        </header>
      </>
    );
  }
}

export default Header;
