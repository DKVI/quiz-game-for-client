/** @format */

const initialState = {
  name: localStorage.getItem("users")
    ? JSON.parse(localStorage.getItem("users"))
    : "",
  scores: 0,
  questionsList: [],
  itemId: 1,
  random: [],
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case "ADD_USER":
      return {
        ...state,
        name: action.payload,
      };
    case "GET_QUESTIONS":
      return {
        ...state,
        questionsList: [...action.payload],
      };
    case "Z_INDEX_ITEMS":
      return {
        ...state,
        itemId: action.payload,
      };
    case "INCREASE_SCORES":
      return {
        ...state,
        scores: action.payload,
      };
    case "ADD_RANDOM":
      return {
        ...state,
        random: [...action.payload],
      };
    default:
      return state;
  }
};

export default reducer;
