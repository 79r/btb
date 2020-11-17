import { BrowserRouter } from "react-router-dom";
import CssBaseline from "@material-ui/core/CssBaseline";
import ReactReduxProvider from "./providers/ReactReduxProvider";
import AppProvider from "./providers/AppProvider/AppProvider";
import ThemeProvider from "./providers/ThemeProvider";
import Routes from "./Routes";

const App = () => {
  return (
    <ReactReduxProvider>
      <AppProvider>
        <ThemeProvider>
          <BrowserRouter>
            <CssBaseline />
            <Routes />
          </BrowserRouter>
        </ThemeProvider>
      </AppProvider>
    </ReactReduxProvider>
  );
};
export default App;
