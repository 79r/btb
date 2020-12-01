import "./styles/styles.css";

import { makeStyles } from "@material-ui/core/styles";
import Grid from "@material-ui/core/Grid";

/** Sections */
import HeaderSection from "./sections/HeaderSection";
import MainSection from "./sections/MainSection";
import SidebarSection from "./sections/SidebarSection";
import FooterSection from "./sections/FooterSection";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    margin: "0 auto",
    [theme.breakpoints.up("md")]: {
      width: 1000,
    },
  },
}));

const Layout1 = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <div className="LayoutContainer">
        <Grid container spacing={2}>
          <Grid item xs={12}>
            <HeaderSection />
          </Grid>
          <Grid item xs={12} md={5}>
            <SidebarSection />
          </Grid>
          <Grid item xs={12} md={7}>
            <MainSection />
          </Grid>
          <Grid item xs={12}>
            <FooterSection />
          </Grid>
        </Grid>
      </div>
    </div>
  );
};

export default Layout1;
