import { combineReducers } from "redux";
import app from "./appReducer/appReducer";
import builder from "./builderReducer/builderReducer";

export default combineReducers({
  app,
  builder,
});
