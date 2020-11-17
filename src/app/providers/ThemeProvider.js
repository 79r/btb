import { ThemeProvider as Provider } from "@material-ui/core/styles";
import { theme } from "../theme";

const ThemeProvider = ({ children }) => (
  <Provider theme={theme}>{children}</Provider>
);

export default ThemeProvider;
