import { Fragment } from "react";
import ActivityBar from "./shared/ActivityBar";
import SideBar from "./shared/SideBar";
import MainArea from "./shared/MainArea";

const StartPage = () => {
  return (
    <Fragment>
      <ActivityBar />
      <SideBar />
      <MainArea />
    </Fragment>
  );
};

export default StartPage;
