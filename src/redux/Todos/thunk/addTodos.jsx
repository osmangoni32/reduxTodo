import { added } from "../actions";

const addTodos = (todoText) => {
  return async (dispatch) => {
    const response = await fetch("http://localhost:9000/todos", {
      method: "POST",
      body: JSON.stringify({
        text: todoText,
        completed: false,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(added(todo.text));
  };
};
export default addTodos;
