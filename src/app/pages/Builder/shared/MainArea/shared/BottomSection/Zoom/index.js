import { useSelector, useDispatch } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import Tooltip from "@material-ui/core/Tooltip";
import ZoomInIcon from "@material-ui/icons/ZoomIn";
import ZoomOutIcon from "@material-ui/icons/ZoomOut";
import FullscreenIcon from "@material-ui/icons/Fullscreen";
import FullscreenExitIcon from "@material-ui/icons/FullscreenExit";
import {
  fullScreen,
  exitFullScreen,
} from "../../../../../../../redux/actions/appActions";

const useStyles = makeStyles((theme) => ({
  root: {},
  button: {
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  },
}));

const UndoRedo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fullscreen = useSelector((state) => state.app.fullscreen);

  const handleFullscreen = () => {
    dispatch(fullScreen());
  };

  const handleExitFullscreen = () => {
    dispatch(exitFullScreen());
  };

  return (
    <Box className={classes.root}>
      <ButtonGroup
        // color="secondary"
        orientation="vertical"
        aria-label="Zoom in and zoom out"
      >
        <Tooltip title="Fullscreen">
          {fullscreen ? (
            <Button
              onClick={handleExitFullscreen}
              className={classes.button}
              aria-label="Fullscreen"
            >
              <FullscreenExitIcon fontSize="small" />
            </Button>
          ) : (
            <Button
              onClick={handleFullscreen}
              className={classes.button}
              aria-label="Fullscreen"
            >
              <FullscreenIcon fontSize="small" />
            </Button>
          )}
        </Tooltip>
        <Tooltip title="Zoom in">
          <Button className={classes.button} aria-label="Zoom in">
            <ZoomInIcon fontSize="small" />
          </Button>
        </Tooltip>
        <Tooltip title="Zoom out">
          <Button className={classes.button} aria-label="Zoom out">
            <ZoomOutIcon fontSize="small" />
          </Button>
        </Tooltip>
      </ButtonGroup>
    </Box>
  );
};

export default UndoRedo;
