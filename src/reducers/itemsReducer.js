import { ADD_ITEM, DONE_ITEM } from "../actions";

const initialState = [
  { index: 0, value: "Learn React", done: false },
  { index: 1, value: "Drink a coffe", done: true },
  { index: 2, value: "Eat lunch", done: true },
];

const itemsReducer = (state = initialState, action) => {
  switch (action.type) {
    case ADD_ITEM:
      return [
        ...state,
        { index: state.length, value: action.payload, done: false },
      ];

    case DONE_ITEM:
      return state.map((item, index) => {
        if (action.payload === index) {
          return { ...item, done: !item.done };
        } else {
          return item;
        }
      });
    default:
      return state;
  }
};

export default itemsReducer;
