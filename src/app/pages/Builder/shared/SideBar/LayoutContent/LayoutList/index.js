import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import PreviewLayout1 from "./Layout1/Preview";
import PreviewLayout2 from "./Layout2/Preview";
import PreviewLayout3 from "./Layout3/Preview";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const LayoutList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <PreviewLayout1 />
      <PreviewLayout2 />
      <PreviewLayout3 />
    </div>
  );
};

export default LayoutList;
