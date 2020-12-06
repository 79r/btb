import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import HomeContent from "./HomeContent";
import LayoutContent from "./LayoutContent";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: theme.activityBarWidth,
    height: "100%",
    backgroundColor: "#fff",
    boxShadow: theme.shadows[2],
    zIndex: 5,
    transition: theme.transitions.create("left"),
    width: theme.sideBarWidth,
    "&.hide": {
      left: -(theme.activityBarWidth + theme.sideBarWidth),
    },
  },
  paper: {
    position: "relative",
  },
  sidebar: {
    // padding: theme.spacing(2, 3),
  },
}));

const PanelBar = () => {
  const classes = useStyles();
  const showSidebar = useSelector((state) => state.app.showSidebar);
  const activeMenu = useSelector((state) => state.app.activeMenuActivityBar);
  return (
    <Drawer
      open
      className={`${classes.root} ${showSidebar ? "show" : "hide"}`}
      variant="permanent"
      classes={{
        paper: classes.paper,
      }}
    >
      <div className={classes.sidebar}>
        {activeMenu === "HOME" && <HomeContent />}
        {activeMenu === "LAYOUT" && <LayoutContent />}
      </div>
    </Drawer>
  );
};

export default PanelBar;
