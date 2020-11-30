import { makeStyles } from "@material-ui/core/styles";
import UndoRedo from "./UndoRedo";
import Share from "./Share";
import Export from "./Export";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "space-between",
    alignItems: "center",
    padding: theme.spacing(2),
  }
}))

const TopSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <UndoRedo />
      <Share />
      <Export />
    </div>
  );
}

export default TopSection;