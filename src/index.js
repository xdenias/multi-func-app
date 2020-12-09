import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";

let todoItems = [
  { index: 0, value: "Learn React", done: false },
  { index: 1, value: "Drink a coffe", done: true },
  { index: 2, value: "Eat lunch", done: true },
];

ReactDOM.render(
  <React.StrictMode>
    <App initItems={todoItems} />
  </React.StrictMode>,
  document.getElementById("root")
);
