import { useSelector, useDispatch } from 'react-redux';
import { makeStyles } from '@material-ui/core/styles';
import ButtonGroup from '@material-ui/core/ButtonGroup';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import Tooltip from '@material-ui/core/Tooltip';
import ZoomInIcon from '@material-ui/icons/ZoomIn';
import ZoomOutIcon from '@material-ui/icons/ZoomOut';
import FullscreenIcon from '@material-ui/icons/Fullscreen';
import FullscreenExitIcon from '@material-ui/icons/FullscreenExit';
import { fullScreen, exitFullScreen } from '../../../../../../../redux/actions/appActions';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  button: {
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
  }
}))

const UndoRedo = () => {
  const classes = useStyles();
  const dispatch = useDispatch();
  const fullscreen = useSelector((state) => state.app.fullscreen);

  const handleFullscreen = () => {
    dispatch(fullScreen());
  }

  const handleExitFullscreen = () => {
    // document.body.requestFullscreen();
    dispatch(exitFullScreen());
  }

  console.log(fullscreen);

  return (
    <Box className={classes.root}>
        <ButtonGroup
          // color="secondary"
          orientation="vertical"
          aria-label="Zoom in and zoom out">
          <Tooltip title="Fullscreen">
            { fullscreen ? (
              <IconButton
                onClick={handleExitFullscreen}
                className={classes.button}
                aria-label="Fullscreen">
                  <FullscreenExitIcon fontSize="small" />
              </IconButton>
                ) : (
              <IconButton
                onClick={handleFullscreen}
                className={classes.button}
                aria-label="Fullscreen">
                  <FullscreenIcon fontSize="small" />
              </IconButton>
            )}
          </Tooltip>
          <Tooltip title="Zoom in">
            <IconButton
              className={classes.button}
              aria-label="Zoom in">
                <ZoomInIcon fontSize="small" />
            </IconButton>
          </Tooltip>
          <Tooltip title="Zoom out">
            <IconButton
              className={classes.button}
              aria-label="Zoom out">
              <ZoomOutIcon fontSize="small" />
            </IconButton>
          </Tooltip>
        </ButtonGroup>
    </Box>
  );
}

export default UndoRedo;