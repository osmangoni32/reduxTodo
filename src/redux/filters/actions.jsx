import { COLORCHANGED, STATUSCHANGED } from "./actionTypes";

export const colorchanged = (color, changetype) => {
  return {
    type: COLORCHANGED,
    payload: {
      color,
      changeType,
    },
  };
};
export const statuschanged = (status) => {
  return {
    type: STATUSCHANGED,
    payload: status,
  };
};
