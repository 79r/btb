// import { makeStyles } from "@material-ui/core/styles";
import SideBarHeader from "./SideBarHeader";
import SideBarSearch from "./SideBarSearch";
import SideBarMenu from "./SideBarMenu";

// const useStyles = makeStyles((theme) => ({
//   root: {},
// }));

const SidebarHomeContent = () => {
  // const classes = useStyles();
  return (
    <div>
      <SideBarHeader />
      <SideBarSearch />
      <SideBarMenu />
    </div>
  );
};

export default SidebarHomeContent;
