import { useDispatch, useSelector } from "react-redux";
import { openSidebar } from "../../../../redux/actions/appActions";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";
import IconButton from "@material-ui/core/IconButton";
import Tooltip from "@material-ui/core/Tooltip";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";
import HomeIcon from "@material-ui/icons/Home";
import LayersIcon from "@material-ui/icons/Layers";
import StyleIcon from "@material-ui/icons/Style";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CodeIcon from "@material-ui/icons/Code";
import { setActiveMenuActivityBar } from "../../../../redux/actions/appActions";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#e3e7ff",
    width: theme.activityBarWidth,
    zIndex: 6,
  },
  toolbar: {
    textAlign: "center",
    transition: theme.transitions.create(),
  },
  button: {
    padding: theme.spacing(1.8),
    // marginBottom: theme.spacing(1),
    borderRadius: 0,
    minWidth: theme.activityBarWidth,
    "&.active": {
      backgroundColor: theme.palette.background.paper,
    },
  },
}));

const ActivityBar = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const showSidebar = useSelector((state) => state.app.showSidebar);
  const active = useSelector((state) => state.app.activeMenuActivityBar);

  const handleClickOpenSidebar = () => {
    dispatch(openSidebar());
  };

  /** this function is required parameter string (Manu Name) */
  const handleClickMenu = (str) => {
    dispatch(setActiveMenuActivityBar(str));
  };
  return (
    <Box className={classes.root}>
      <div className={classes.toolbar}>
        {!showSidebar && (
          <Tooltip title="Show sidebar">
            <IconButton
              size="small"
              onClick={handleClickOpenSidebar}
              aria-label="Show sidebar"
              className={classes.button}
            >
              <ArrowForwardIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        )}
        <Button
          onClick={() => handleClickMenu("HOME")}
          aria-label="Home"
          className={`${classes.button} ${active === "HOME" ? "active" : ""}`}
        >
          <HomeIcon fontSize="small" />
        </Button>
        <Button
          onClick={() => handleClickMenu("LAYOUT")}
          aria-label="Edit"
          className={`${classes.button} ${active === "LAYOUT" ? "active" : ""}`}
        >
          <LayersIcon fontSize="small" />
        </Button>
        <Button
          onClick={() => handleClickMenu("LAYOUT")}
          aria-label="Edit"
          className={`${classes.button} ${active === "LAYOUT" ? "active" : ""}`}
        >
          <StyleIcon fontSize="small" />
        </Button>
        <Button
          onClick={() => handleClickMenu("DOWNLOAD")}
          aria-label="Download"
          className={`${classes.button} ${
            active === "DOWNLOAD" ? "active" : ""
          }`}
        >
          <SaveAltIcon fontSize="small" />
        </Button>
        <Button
          onClick={() => handleClickMenu("CODE")}
          aria-label="See the code"
          className={`${classes.button} ${active === "CODE" ? "active" : ""}`}
        >
          <CodeIcon fontSize="small" />
        </Button>
      </div>
    </Box>
  );
};

export default ActivityBar;
