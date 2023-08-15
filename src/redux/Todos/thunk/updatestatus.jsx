import { toggeled } from "../actions";

const updatestatus = (todoId, status) => {
  return async (dispatch) => {
    const response = await fetch(`http://localhost:9000/todos/${todoId}`, {
      method: "PATCH",
      body: JSON.stringify({
        completed: !status,
      }),
      headers: {
        "content-type": "application/json; charset=UTF-8",
      },
    });
    const todo = await response.json();
    dispatch(toggeled(todo.id));
  };
};
export default updatestatus;
