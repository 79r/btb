import { createMuiTheme } from "@material-ui/core/styles";

export const theme = createMuiTheme({
  typography: {
    fontFamily: ["HK Grotesk", "Roboto", "sans-serif"].join(","),
    fontWeightRegular: "500",
  },
  palette: {
    primary: {
      light: "#ffcfdc",
      main: "#ff1440",
      dark: "#e0003e",
      contrastText: "#fff",
    },
    secondary: {
      light: "#ff7961",
      main: "#ffa90c",
      dark: "#ff7500",
      contrastText: "#fff",
    },
  },

  /** Custom variables */
  activityBarWidth: 54,
  sideBarWidth: 240,
});
