import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  TOGGELED,
} from "./actionTypes";

export const added = (todoText) => {
  return {
    type: ADDED,
    payload: todoText,
  };
};

export const toggeled = (todoId) => {
  return {
    type: TOGGELED,
    payload: todoId,
  };
};
export const deleted = (todoId) => {
  return {
    type: DELETED,
    payload: todoId,
  };
};
export const colorselected = (todoId, color) => {
  return {
    type: COLORSELECTED,
    payload: {
      todoId: todoId,
      color: color,
    },
  };
};
export const clearcompleted = () => {
  return {
    type: CLEARCOMPLETED,
  };
};
export const allcompleted = () => {
  return {
    type: ALLCOMPLETED,
  };
};
