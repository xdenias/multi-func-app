import { combineReducers } from "redux";
import title from "./reducers/titleReducer";
import itemsReducer from "./reducers/itemsReducer";

export default combineReducers({
  title,
  itemsReducer,
});
