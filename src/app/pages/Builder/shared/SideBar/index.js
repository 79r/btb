import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

import SideBarHeader from "./SideBarHeader";
import SideBarSearch from "./SideBarSearch";
import SideBarMenu from "./SideBarMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: theme.toolBarWidth,
    height: "100%",
    width: theme.panelBarWidth,
    backgroundColor: "#fff",
  },
  panelbar: {
    // padding: theme.spacing(2, 3),
  },
}));

const PanelBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.panelbar}>
        <SideBarHeader />
        <SideBarSearch />
        <SideBarMenu />
      </div>
    </Box>
  );
};

export default PanelBar;
