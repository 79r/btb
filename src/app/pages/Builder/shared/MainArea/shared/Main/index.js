import { makeStyles } from "@material-ui/core/styles";
import Iframe from "./Iframe";
import { useSelector } from "react-redux";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
    padding: theme.spacing(1),
  },
}));

const Example = () => {
  const showSidebar = useSelector((state) => state.app.showSidebar);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Iframe>
        <h1>Hello I am from iFrame</h1>
        {showSidebar ? <p>Sidebar Active</p> : <span></span>}
      </Iframe>
    </div>
  );
};

export default Example;
