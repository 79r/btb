import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import HomeIcon from "@material-ui/icons/Home";
import LayersIcon from "@material-ui/icons/Layers";
import SaveAltIcon from "@material-ui/icons/SaveAlt";
import CodeIcon from "@material-ui/icons/Code";

const useStyles = makeStyles((theme) => ({
  root: {
    position: "fixed",
    top: 0,
    left: 0,
    height: "100%",
    backgroundColor: "#e3e7ff",
    width: theme.toolBarWidth,
  },
  toolbar: {
    textAlign: "center",
    padding: theme.spacing(1),
  },
  button: {
    padding: theme.spacing(1.2),
    marginBottom: theme.spacing(1),
  },
}));

const ToolBar = () => {
  const classes = useStyles();
  return (
    <Box className={classes.root}>
      <div className={classes.toolbar}>
        <IconButton className={classes.button} aria-label="Home">
          <HomeIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.button} aria-label="Edit">
          <LayersIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.button} aria-label="Download">
          <SaveAltIcon fontSize="small" />
        </IconButton>
        <IconButton className={classes.button} aria-label="See the code">
          <CodeIcon fontSize="small" />
        </IconButton>
      </div>
    </Box>
  );
};

export default ToolBar;
