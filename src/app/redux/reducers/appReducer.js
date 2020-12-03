import {
  OPEN_SIDEBAR,
  CLOSE_SIDEBAR,
  FULLSCREEN,
  EXIT_FULLSCREEN,
  SET_ACTIVE_MENU_ACTIVITY_BAR,
} from "../actions/appActions";

const initialState = {
  showSidebar: false,
  fullscreen: false,
  activeMenuActivityBar: "HOME", // default home is selected
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
    case SET_ACTIVE_MENU_ACTIVITY_BAR:
      return {
        ...state,
        activeMenuActivityBar: action.payload,
      };
    default:
      return state;
  }
};

export default appReducer;
