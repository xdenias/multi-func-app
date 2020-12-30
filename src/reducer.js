import { combineReducers } from "redux";
import title from "./reducers/titleReducer";
import add from "./reducers/addReducer";
import todoItems from "./reducers/todoItemsReducer";

export default combineReducers({
  title,
  add,
});
