/** Action types */
export const SET_LAYOUT = "SET_LAYOUT";

/** Actions */
export const setLayout = (layoutName) => {
  return (dispatch) => {
    dispatch({
      type: SET_LAYOUT,
      payload: layoutName,
    });
  };
};
