import { makeStyles } from "@material-ui/core/styles";
import Zoom from "./Zoom";
import Snackbar from "./Snackbar";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
    position: 'fixed',
    bottom: 0,
    // bottom: theme.spacing(2),
  }
}))

const TopSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Zoom />
      <Snackbar />
    </div>
  );
}

export default TopSection;