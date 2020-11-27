import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import dotImg from "./dot.jpg";
import TopSection from "./shared/TopSection";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    transition: theme.transitions.create("padding"),
    backgroundImage: `url(${dotImg})`,
    backgroundRepeat: "repeat",
    position: "fixed",
    top: 0,
    paddingLeft: theme.activityBarWidth + theme.sideBarWidth,
    height: "100%",
    backgroundColor: "#fbfbfb",
    "&.noSidebar": {
      paddingLeft: theme.activityBarWidth,
    },
  },
  mainboard: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
}));

const MainBoard = () => {
  const classes = useStyles();
  const showSidebar = useSelector((state) => state.app.showSidebar);
  return (
    <Box className={`${classes.root} ${showSidebar ? "withSidebar" : "noSidebar"}`}>
      <TopSection />
      <div className={classes.mainboard}>Main Board</div>
    </Box>
  );
};

export default MainBoard;
