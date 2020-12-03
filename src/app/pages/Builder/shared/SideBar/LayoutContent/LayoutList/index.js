import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
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
      <Grid container spacing={1}>
        <Grid item xs={6}>
          <PreviewLayout1 />
        </Grid>
        <Grid item xs={6}>
          <PreviewLayout2 />
        </Grid>
        <Grid item xs={6}>
          <PreviewLayout3 />
        </Grid>
      </Grid>
    </div>
  );
};

export default LayoutList;
