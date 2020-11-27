import { makeStyles } from '@material-ui/core/styles';
import IconButton from '@material-ui/core/IconButton';
import Box from '@material-ui/core/Box';
import RefreshIcon from '@material-ui/icons/Refresh';
import ReplayIcon from '@material-ui/icons/Replay';

const useStyles = makeStyles((theme) => ({
  root: {
  },
  button: {
    boxShadow: theme.shadows[1],
    backgroundColor: theme.palette.background.paper,
    padding: theme.spacing(1),
    '&:first-child': {
      marginRight: theme.spacing(1),
    }
  }
}))

const UndoRedo = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <IconButton
        className={classes.button} aria-label="Undo">
        <ReplayIcon fontSize="small" />
      </IconButton>
      <IconButton
        className={classes.button} aria-label="Redo">
        <RefreshIcon fontSize="small" />
      </IconButton>
    </Box>
  );
}

export default UndoRedo;