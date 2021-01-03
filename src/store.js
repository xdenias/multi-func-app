import { createStore, applyMiddleware } from "redux";
import { connectRouter, routerMiddleware } from "connected-react-router";
import reducer from "./reducer";
import thunk from "redux-thunk";
import history from "./Routes/history";

const middlewares = [thunk, routerMiddleware(history)];

const store = createStore(
  connectRouter(history)(reducer),
  applyMiddleware(...middlewares)
);

export default store;
