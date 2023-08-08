import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { colorchanged, statuschanged } from "../redux/filters/actions";

const numofTodos = (no_of_todos) => {
  switch (no_of_todos) {
    case 0:
      return "no task";
    case 1:
      return "1 task";
    default:
      return `${no_of_todos} tasks`;
  }
};

export default function Footer() {
  const todos = useSelector((state) => state.todos);
  const filters = useSelector((state) => state.filters);
  const dispatch = useDispatch();
  const remaining_task = todos.filter((todo) => !todo.completed).length;
  const { status, colors } = filters;
  const handlestatuschange = (status) => {
    dispatch(statuschanged(status));
  };

  const handlecolorchange = (color) => {
    if (colors.includes(color)) {
      dispatch(colorchanged(color, "removed"));
    } else {
      dispatch(colorchanged(color, "added"));
    }
  };

  return (
    <div className="mt-4 flex justify-between text-xs text-gray-500">
      <p>{numofTodos(remaining_task)} left</p>
      <ul className="flex space-x-1 items-center text-xs">
        <li
          className={`cursor-pointer ${status === "All" && "font-bold"}`}
          onClick={() => handlestatuschange("All")}
        >
          All
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Incomplete" && "font-bold"}`}
          onClick={() => handlestatuschange("Incomplete")}
        >
          Incomplete
        </li>
        <li>|</li>
        <li
          className={`cursor-pointer ${status === "Complete" && "font-bold"}`}
          onClick={() => handlestatuschange("Complete")}
        >
          Complete
        </li>
        <li></li>
        <li></li>
        <li
          className={`h-3 w-3 border-2 border-green-500 md:hover:bg-green-500 rounded-full cursor-pointer ${colors.includes('green') && 'bg-green-500'}`}
          onClick={() => handlecolorchange("green")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-red-500 md:hover:bg-red-500 rounded-full cursor-pointer ${colors.includes('red') && 'bg-red-500'}`}
          onClick={() => handlecolorchange("red")}
        ></li>
        <li
          className={`h-3 w-3 border-2 border-yellow-500 md:hover:bg-yellow-500 rounded-full cursor-pointer ${colors.includes('yellow') && 'bg-yellow-500'}`}
          onClick={() => handlecolorchange("yellow")}
        ></li>
      </ul>
    </div>
  );
}
