import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["HK Grotesk", "Roboto", "sans-serif"].join(","),
    fontWeightRegular: "500",
  },
  palette: {
    primary: {
      light: "#757ce8",
      main: "#00b7b3",
      dark: "#009292",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffa90c",
      dark: "#ff7500",
      contrastText: "#fff",
    },
  },
});
