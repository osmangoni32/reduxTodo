import {
  ADDED,
  ALLCOMPLETED,
  CLEARCOMPLETED,
  COLORSELECTED,
  DELETED,
  LOADED,
  TOGGELED,
} from "./actionTypes";

export const added = (todos) => {
  return {
    type: ADDED,
    payload: todos,
  };
};

export const loaded = (todoText) => {
  return {
    type: LOADED,
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
