import { batch } from "react-redux";
import { AlertTypes } from "../../constants/AlertTypes";
import { setAlert } from "./alertActions";

/** Action types */
export const SET_LAYOUT = "SET_LAYOUT";

/** Actions */
export const setLayout = (layoutName) => {
  return (dispatch) => {
    batch(() => {
      dispatch({
        type: SET_LAYOUT,
        payload: layoutName,
      });
      dispatch(setAlert(AlertTypes.success, layoutName + " selected"));
    });
  };
};
