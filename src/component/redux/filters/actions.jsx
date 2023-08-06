import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const statuschanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
export const colorchanged = (color, changetype) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changetype,
    },
  };
};
