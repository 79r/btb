import { Provider } from "react-redux";
import { store } from "../redux/store";

const ReactReduxProvider = ({ children }) => (
  <Provider store={store}>{children}</Provider>
);

export default ReactReduxProvider;
