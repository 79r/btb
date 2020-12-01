import { combineReducers } from "redux";
import app from "./appReducer";
import builder from "./builderReducer";
import alert from "./alertReducer";

export default combineReducers({
  app,
  builder,
  alert,
});
