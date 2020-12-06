import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import UndoRedo from "./UndoRedo";
import Share from "./Share";
import Export from "./Export";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    "& > .MuiBox-root": {
      padding: theme.spacing(2),
      alignItems: "center",
      justifyContent: "space-between",
      display: "flex",
      width: "100%",
    },
  },
}));

const TopSection = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Box>
        <UndoRedo />
        <Share />
        <Export />
      </Box>
    </div>
  );
};

export default TopSection;
