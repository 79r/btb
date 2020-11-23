import Box from "@material-ui/core/Box";
import { makeStyles } from "@material-ui/core/styles";
import Typography from "@material-ui/core/Typography";
import IconButton from "@material-ui/core/IconButton";
import CloseIcon from "@material-ui/icons/Close";

const useStyles = makeStyles((theme) => ({
  root: {
    display: "flex",
    flexWrap: "wrap",
    justifyContent: "space-between",
    marginBottom: theme.spacing(2),
    padding: theme.spacing(2, 2, 0, 2),
  },
}));

const SideBarHeader = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <Typography component="h2">Your Project Name</Typography>
      <IconButton size="small" aria-label="Close panel bar">
        <CloseIcon fontSize="small" />
      </IconButton>
    </Box>
  );
};

export default SideBarHeader;
