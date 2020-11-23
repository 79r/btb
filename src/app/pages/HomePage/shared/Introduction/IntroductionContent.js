import { makeStyles } from "@material-ui/core/styles";
import { useHistory } from "react-router-dom";
import Typography from "@material-ui/core/Typography";
import Box from "@material-ui/core/Box";
import Button from "@material-ui/core/Button";

const useStyles = makeStyles((theme) => ({
  intro: {
    height: "100vh",
    flex: 1,
    display: "flex",
    // textAlign: "center",
    justifyContent: "center",
    // alignItems: "center",
    flexDirection: "column",
    paddingLeft: theme.spacing(14),
  },
  firstLine: {
    fontSize: 22,
    [theme.breakpoints.up("sm")]: {
      fontSize: 30,
    },
  },
  secondLine: {
    fontSize: 32,
    fontWeight: theme.typography.fontWeightBold,
    [theme.breakpoints.up("sm")]: {
      fontSize: 44,
    },
  },
  subtitle: {},
  buttonContainer: {
    marginTop: theme.spacing(2),
    "& > *": {
      margin: theme.spacing(1),
    },
  },
}));

const IntroductionContent = () => {
  const history = useHistory();
  const classes = useStyles();

  const go = (path) => {
    history.push(path);
  };

  return (
    <div className={classes.intro}>
      <Typography className={classes.firstLine} component="h2" variant="h3">
        Build Your Own
      </Typography>
      <Typography className={classes.secondLine} component="h2" variant="h3">
        Blogger Theme
      </Typography>
      <Box className={classes.buttonContainer}>
        <Button
          onClick={() => go("/start")}
          disableElevation
          color="primary"
          variant="contained"
        >
          Start Now!
        </Button>
        {/* <Button
          onClick={() => go("/templates")}
          color="primary"
          variant="outlined"
        >
          See Templates
        </Button> */}
      </Box>
    </div>
  );
};

export default IntroductionContent;
