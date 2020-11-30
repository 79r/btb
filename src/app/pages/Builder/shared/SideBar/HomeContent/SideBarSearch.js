import { makeStyles } from "@material-ui/core/styles";
import Paper from "@material-ui/core/Paper";
import TextField from "@material-ui/core/TextField";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    marginBottom: theme.spacing(3),
    padding: theme.spacing(2, 2, 0, 2),
  },
  input: {
    width: "100%",
  },
}));

const SideBarSearch = () => {
  const classes = useStyles();
  return (
    <Paper component="form" elevation={0} className={classes.root}>
      <TextField
        className={classes.input}
        size="small"
        id="search"
        label="Search field"
        type="search"
        variant="outlined"
      />
    </Paper>
  );
};

export default SideBarSearch;
