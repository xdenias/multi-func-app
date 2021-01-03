import { combineReducers } from "redux";
import title from "./reducers/titleReducer";
import itemsReducer from "./reducers/itemsReducer";
import { connectRouter } from "connected-react-router";
import history from "./Routes/history";

export default combineReducers({
  title,
  itemsReducer,
  router: connectRouter(history),
});
