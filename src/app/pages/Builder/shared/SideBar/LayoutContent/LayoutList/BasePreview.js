import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import PropTypes from "prop-types";

const useStyles = makeStyles((theme) => ({
  root: {
    lineHeight: 0,
    marginBottom: theme.spacing(2),
    position: "relative",
    "& img": {
      width: "100%",
    },
  },
}));

const BasePreview = ({ children }) => {
  const classes = useStyles();

  return <Box className={classes.root}>{children}</Box>;
};

BasePreview.propTypes = {
  children: PropTypes.node.isRequired,
};

export default BasePreview;
