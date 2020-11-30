import { useSelector } from "react-redux";
import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import dotImg from "./dot.jpg";
import TopSection from "./shared/TopSection";
import Main from "./shared/Main";
import BottomSection from "./shared/BottomSection";

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
}));

const MainArea = () => {
  const classes = useStyles();
  const showSidebar = useSelector((state) => state.app.showSidebar);
  return (
    <Box
      className={`${classes.root} ${showSidebar ? "withSidebar" : "noSidebar"}`}
    >
      <TopSection />
      <Main />
      <BottomSection />
    </Box>
  );
};

export default MainArea;
