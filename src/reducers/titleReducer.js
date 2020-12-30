import { ADD_TITLE } from "../actions";

const titleReducer = (state = "Hi!", action) => {
  switch (action.type) {
    case ADD_TITLE:
      return "Hello!";
    default:
      return state;
  }
};

export default titleReducer;
