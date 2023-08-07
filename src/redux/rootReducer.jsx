import { combineReducers } from "redux";
import todoReducer from "./Todos/reducer";
import filterReducer from "./filters/reducer";
const rootReducer = combineReducers({
  filters: filterReducer,
  todos: todoReducer,
});

export default rootReducer;
