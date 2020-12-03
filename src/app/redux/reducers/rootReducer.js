import { combineReducers } from "redux";
import app from "./appReducer";
import blogger from "./bloggerReducer";
import alert from "./alertReducer";

export default combineReducers({
  app,
  blogger,
  alert,
});
