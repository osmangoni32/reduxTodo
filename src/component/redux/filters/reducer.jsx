import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";
import initialState from "./initialState";

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case COLORCHANGED:
      const { color, changetype } = action.payload;
      switch (changetype) {
        case "added":
          return {
            ...state,
            colors: [...state.colors, color],
          };
        case "removed":
          return {
            ...state,
            colors: state.colors.filter((existing) => existing1 == color),
          };
        default:
          return state;
      }

    case STATUSCHANGED:
      return { ...state, status: action.payload };
    default:
      return state;
  }
};
export default reducer;
