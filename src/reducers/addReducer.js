import { ADD_ITEM } from "../actions";

const addReducer = (
  state = [
    { index: 0, value: "Learn React", done: false },
    { index: 1, value: "Drink a coffe", done: true },
    { index: 2, value: "Eat lunch", done: true },
  ],
  action
) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        { index: state.length, value: action.payload, done: false },
      ];
    default:
      return state;
  }
};

export default addReducer;
