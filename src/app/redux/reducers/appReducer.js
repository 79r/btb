import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  FULLSCREEN,
  EXIT_FULLSCREEN
} from "../actions/appActions";

const initialState = {
  showSidebar: true,
  fullscreen: false,
};

export const appReducer = (state = initialState, action) => {
  switch (action.type) {
    case OPEN_SIDEBAR:
      return {
        ...state,
        showSidebar: true,
      };
    case CLOSE_SIDEBAR:
      return {
        ...state,
        showSidebar: false,
      };
    case FULLSCREEN:
      return {
        ...state,
        fullscreen: true,
      };
    case EXIT_FULLSCREEN:
      return {
        ...state,
        fullscreen: false,
      };
    default:
      return state;
  }
};

export default appReducer;
