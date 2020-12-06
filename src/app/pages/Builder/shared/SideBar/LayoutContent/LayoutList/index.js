import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";
import LayoutItem1 from "./Layout1/Layout1Container";
import LayoutItem2 from "./Layout2/Layout2Container";

const useStyles = makeStyles((theme) => ({
  root: {
    padding: theme.spacing(2),
  },
}));

const LayoutList = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <Grid container>
        <Grid item xs={12}>
          <LayoutItem1 />
        </Grid>
        <Grid item xs={12}>
          <LayoutItem2 />
        </Grid>
      </Grid>
    </div>
  );
};

export default LayoutList;
