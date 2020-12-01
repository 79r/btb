import { makeStyles } from "@material-ui/core/styles";
// import Iframe from "./Iframe";
import { useSelector } from "react-redux";

/** Layout */
import Layout1 from "../../../../../../builder/Layouts/Layout1";
import Layout2 from "../../../../../../builder/Layouts/Layout2";
import Layout3 from "../../../../../../builder/Layouts/Layout3";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexDirection: "column",
  },
}));

const Example = () => {
  const selectedLayout = useSelector((state) => state.builder.selectedLayout);
  const classes = useStyles();
  return (
    <div className={classes.root}>
      {/* <Iframe> */}
      {selectedLayout === "LAYOUT_1" && <Layout1 />}
      {selectedLayout === "LAYOUT_2" && <Layout2 />}
      {selectedLayout === "LAYOUT_3" && <Layout3 />}
      {/* </Iframe> */}
    </div>
  );
};

export default Example;
