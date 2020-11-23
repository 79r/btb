import { Fragment } from "react";
import ActivityBar from "./shared/ActivityBar";
import SideBar from "./shared/SideBar";
import MainBoard from "./shared/MainBoard";

const StartPage = () => {
  return (
    <Fragment>
      <ActivityBar />
      <SideBar />
      <MainBoard />
    </Fragment>
  );
};

export default StartPage;
