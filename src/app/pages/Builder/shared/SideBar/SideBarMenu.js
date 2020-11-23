import { makeStyles } from "@material-ui/core/styles";
import ListSubheader from "@material-ui/core/ListSubheader";
import List from "@material-ui/core/List";
import ListItem from "@material-ui/core/ListItem";
import ListItemAvatar from "@material-ui/core/ListItemAvatar";
import Avatar from "@material-ui/core/Avatar";
import ListItemText from "@material-ui/core/ListItemText";

/** icons */
import LayersIcon from "@material-ui/icons/Layers";
import QuestionAnswerIcon from "@material-ui/icons/QuestionAnswer";
import StarIcon from "@material-ui/icons/Star";

const useStyles = makeStyles((theme) => ({
  root: {},
  avatar: {
    width: theme.spacing(4),
    height: theme.spacing(4),
    backgroundColor: theme.palette.primary.main,
  },
}));

const SideBarMenu = () => {
  const classes = useStyles();
  return (
    <List
      className={classes.root}
      component="nav"
      aria-labelledby="panel-menu"
      subheader={
        <ListSubheader component="div" aria-labelledby="panel-menu-subheader">
          Sub header
        </ListSubheader>
      }
    >
      <ListItem button>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <LayersIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Layout" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <QuestionAnswerIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Comments" />
      </ListItem>
      <ListItem button>
        <ListItemAvatar>
          <Avatar className={classes.avatar}>
            <StarIcon fontSize="small" />
          </Avatar>
        </ListItemAvatar>
        <ListItemText primary="Comments" />
      </ListItem>
    </List>
  );
};

export default SideBarMenu;
