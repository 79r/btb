import { SET_LAYOUT, INIT_BUILDER } from "../actions/bloggerActions";

const initialState = {
  selectedLayout: null,
  initDataLoaded: false,
};

export const bloggerReducer = (state = initialState, action) => {
  switch (action.type) {
    case INIT_BUILDER:
      return {
        ...state,
        initDataLoaded: true,
        widget: action.payload.widgets,
        layout: action.payload.layouts,
      };
    case SET_LAYOUT:
      return {
        ...state,
        selectedLayout: action.payload,
      };
    default:
      return state;
  }
};

export default bloggerReducer;
