import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./pages/App";

let todoItems = [];
todoItems.push({ index: 1, value: "Learn React", done: false });
todoItems.push({ index: 2, value: "Drink a coffe", done: true });
todoItems.push({ index: 3, value: "Eat lunch", done: true });

ReactDOM.render(
  <React.StrictMode>
    <App initItems={todoItems} />
  </React.StrictMode>,
  document.getElementById("root")
);
