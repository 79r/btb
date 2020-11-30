import { SET_LAYOUT } from "../actions/builderActions";

const initialState = {
  selectedLayout: null,
};

export const builderReducer = (state = initialState, action) => {
  switch (action.type) {
    case SET_LAYOUT:
      return {
        ...state,
        selectedLayout: action.payload,
      };
    default:
      return state;
  }
};

export default builderReducer;
