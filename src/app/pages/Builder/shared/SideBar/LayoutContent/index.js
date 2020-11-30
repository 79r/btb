// import { makeStyles } from "@material-ui/core/styles";
import Header from "./Header";
import ListSubheader from "@material-ui/core/ListSubheader";
import LayoutList from "./LayoutList";

// const useStyles = makeStyles((theme) => ({
//   root: {},
// }));

const SidebarLayoutContent = () => {
  // const classes = useStyles();
  return (
    <div>
      <Header />
      <ListSubheader component="div" aria-labelledby="panel-menu-subheader">
        Layout list
      </ListSubheader>
      <LayoutList />
    </div>
  );
};

export default SidebarLayoutContent;
