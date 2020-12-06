import { makeStyles } from "@material-ui/core/styles";
// import Iframe from "./Iframe";
import { useSelector } from "react-redux";

/** Layout */
import Layout1 from "../../../../../../builder/Layouts/Layout1";
import Layout2 from "../../../../../../builder/Layouts/Layout2";
import Layout3 from "../../../../../../builder/Layouts/Layout3";
import { LayoutTypes } from "../../../../../../constants/LayoutTypes";
import Ready from "./Ready";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Example = () => {
  const selectedLayout = useSelector((state) => state.blogger.selectedLayout);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Ready />
      {selectedLayout === LayoutTypes.layout1 && <Layout1 />}
      {selectedLayout === LayoutTypes.layout2 && <Layout2 />}
      {selectedLayout === LayoutTypes.layout3 && <Layout3 />}
    </div>
  );
};

export default Example;
