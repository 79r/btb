import CircularProgress from "@material-ui/core/CircularProgress";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: "100vh",
    width: "100%",
  },
}));

const PreloadScreen = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <CircularProgress color="primary" />
    </Box>
  );
};

export default PreloadScreen;
