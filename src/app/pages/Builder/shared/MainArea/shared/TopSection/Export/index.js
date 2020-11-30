import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ArrowForwardIcon from "@material-ui/icons/ArrowForward";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Export = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button
        disableElevation
        color="secondary"
        variant="contained"
        aria-label="Export to XML"
        size="small"
        endIcon={<ArrowForwardIcon />}
      >
        Export to .xml
      </Button>
    </Box>
  );
};

export default Export;
