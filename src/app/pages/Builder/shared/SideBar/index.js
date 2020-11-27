import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Drawer from "@material-ui/core/Drawer";

import SideBarHeader from "./SideBarHeader";
import SideBarSearch from "./SideBarSearch";
import SideBarMenu from "./SideBarMenu";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: theme.activityBarWidth,
    height: "100%",
    backgroundColor: "#fff",
    // boxShadow: "2px 0px 10px 0 rgba(0,0,0,0.1)",
    boxShadow: theme.shadows[2],
    zIndex: 5,
    transition: theme.transitions.create('left'),
    width: theme.sideBarWidth,
    "&.hide": {
      left: -(theme.activityBarWidth + theme.sideBarWidth),
    },
  },
  paper: {
    // width: theme.sideBarWidth,
    // left: theme.activityBarWidth,
    position: "relative",
  },
  panelbar: {
    // padding: theme.spacing(2, 3),
  },
}));

const PanelBar = () => {
  const classes = useStyles();
  const showSidebar = useSelector((state) => state.app.showSidebar);
  return (
    <Drawer
      open
      className={`${classes.root} ${showSidebar ? "show" : "hide"}`}
      variant="permanent"
      classes={{
        paper: classes.paper,
      }}
    >
      <div className={classes.panelbar}>
        <SideBarHeader />
        <SideBarSearch />
        <SideBarMenu />
      </div>
    </Drawer>
  );
};

export default PanelBar;
