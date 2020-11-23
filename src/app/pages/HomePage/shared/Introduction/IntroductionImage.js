import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import image from "../../../../assets/images/s-o-c-i-a-l-c-u-t-rF_ciLuetA8-unsplash.jpg";

const useStyles = makeStyles((theme) => ({
  root: {
    height: "100vh",
    width: 600,
    position: "absolute",
    top: 0,
    right: 0,
  },
  bgimage: {
    backgroundImage: `url(${image})`,
    height: "100vh",
    width: "auto",
    backgroundRepeat: "no-repeat",
    backgroundSize: "cover",
    backgroundPosition: "center",
  },
}));

const IntroductionImage = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.bgimage} />
    </Box>
  );
};

export default IntroductionImage;
