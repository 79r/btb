import { makeStyles } from "@material-ui/core/styles";
import Button from "@material-ui/core/Button";
import Box from "@material-ui/core/Box";
import ShareIcon from "@material-ui/icons/Share";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const ShareButton = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Button size="small" endIcon={<ShareIcon />} aria-label="Share">
        Share
      </Button>
    </Box>
  );
};

export default ShareButton;
