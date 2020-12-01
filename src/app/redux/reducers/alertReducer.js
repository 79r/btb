import { SET_ALERT, CLOSE_ALERT } from "../actions/alertActions";

const initialState = {
  open: false,
  type: null,
  message: "",
};

const alertReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_ALERT:
      return {
        ...state,
        open: true,
        type: action.payload.type,
        message: action.payload.message,
      };
    case CLOSE_ALERT:
      return initialState;
    default:
      return state;
  }
};

export default alertReducer;
