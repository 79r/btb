import { createContext, useReducer } from "react";
import appReducer from "./appReducer";

export const AppContext = createContext({});

const initialState = {
  foo: "bar",
};

const AppProvider = ({ children }) => {
  const state = useReducer(appReducer, initialState);
  return <AppContext.Provider value={state}>{children}</AppContext.Provider>;
};

export default AppProvider;
