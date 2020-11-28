import { Provider } from "react-redux";
import { PersistGate } from 'redux-persist/integration/react'
import configureStore from '../redux/configureStore';
// import { store } from "../redux/store";


const { store, persistor } = configureStore();


const ReactReduxProvider = ({ children }) => (
  <Provider store={store}>
    <PersistGate loading={null} persistor={persistor}>
      {children}
    </PersistGate>
  </Provider>
);

export default ReactReduxProvider;
