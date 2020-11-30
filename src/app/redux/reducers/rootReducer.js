import { combineReducers } from "redux";
import app from "./appReducer";
import builder from "./builderReducer";

export default combineReducers({
  app,
  builder,
});
