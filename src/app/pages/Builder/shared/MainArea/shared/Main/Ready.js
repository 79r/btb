import Typography from "@material-ui/core/Typography";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    textAlign: "center",
    height: "100vh",
    display: "flex",
    justifyContent: "center",
    flexDirection: "column",
  },
  title: {
    fontSize: 30,
  },
  subtitle: {
    fontSize: 18,
    marginBottom: theme.spacing(2),
  },
}));

const Ready = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Typography variant="h2" component="h2" className={classes.title}>
        Ready to Make Something Amazing!
      </Typography>
      <Typography
        variant="subtitle2"
        component="p"
        className={classes.subtitle}
      >
        Create your blogger theme without code.
      </Typography>
      <div>
        <Button disableElevation variant="contained" color="primary">
          Start Now
        </Button>
      </div>
    </div>
  );
};

export default Ready;
