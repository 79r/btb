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
      light: "#efefff",
      main: "#a441ff",
      dark: "#8a3fd0",
      contrastText: "#fff",
    },
  },

  /** Custom variables */
  activityBarWidth: 52,
  sideBarWidth: 282,
});
