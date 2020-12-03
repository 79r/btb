import { batch } from "react-redux";

import widgetDB from "../../../fake-db/widget";
import layoutDB from "../../../fake-db/layout";

import { AlertTypes } from "../../constants/AlertTypes";
import { setAlert } from "./alertActions";

/** Action types */
export const INIT_BUILDER = "INIT_BUILDER";
export const SET_LAYOUT = "SET_LAYOUT";

/** Actions */

export const initBuilder = () => {
  const data = {
    widgets: widgetDB,
    layouts: layoutDB,
  };
  return (dispatch) => {
    dispatch({
      type: INIT_BUILDER,
      payload: data,
    });
  };
};

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
