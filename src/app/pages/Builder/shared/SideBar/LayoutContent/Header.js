import { useDispatch } from "react-redux";
import { closeSidebar } from "../../../../../redux/actions/appActions";
import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import ArrowBackIcon from "@material-ui/icons/ArrowBack";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2, 2, 0, 2),
  },
  title: {
    fontSize: 18,
  },
}));

const SideBarHeader = () => {
  const dispatch = useDispatch();
  const classes = useStyles();

  const handleClickArrowBack = () => {
    dispatch(closeSidebar());
  };

  return (
    <Box className={classes.root}>
      <Typography component="h2" className={classes.title}>
        Layout
      </Typography>
      <IconButton
        onClick={handleClickArrowBack}
        size="small"
        aria-label="Close panel bar"
      >
        <ArrowBackIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default SideBarHeader;
