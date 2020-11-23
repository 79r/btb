import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: theme.toolBarWidth + theme.panelBarWidth,
    height: "100%",
    width: "auto",
    backgroundColor: "#fbfbfb",
  },
  mainboard: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
}));

const MainBoard = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.mainboard}>Main Board</div>
    </Box>
  );
};

export default MainBoard;
