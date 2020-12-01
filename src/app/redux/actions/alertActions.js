export const SET_ALERT = "SET_ALERT";
export const CLOSE_ALERT = "CLOSE_ALERT";

export const setAlert = (alertType, message) => {
  return (dispatch) => {
    dispatch({
      type: SET_ALERT,
      payload: {
        type: alertType,
        message,
      },
    });
  };
};

export const closeAlert = () => {
  return (dispatch) => {
    dispatch({
      type: CLOSE_ALERT,
    });
  };
};
