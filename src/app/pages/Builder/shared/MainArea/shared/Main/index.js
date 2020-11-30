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
  const selectedLayout = useSelector((state) => state.builder.selectedLayout);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Iframe>{selectedLayout ? <h1>{selectedLayout}</h1> : ""}</Iframe>
    </div>
  );
};

export default Example;
