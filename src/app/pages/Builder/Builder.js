import { Fragment, useEffect } from "react";
import { useSelector, useDispatch } from "react-redux";
import ActivityBar from "./shared/ActivityBar";
import SideBar from "./shared/SideBar";
import MainArea from "./shared/MainArea";
import { initBuilder } from "../../redux/actions/bloggerActions";

const StartPage = () => {
  const dispatch = useDispatch();
  const initDataLoaded = useSelector((state) => state.blogger.initDataLoaded);
  useEffect(() => {
    if (!initDataLoaded) {
      dispatch(initBuilder());
    }
  }, []); // eslint-disable-line react-hooks/exhaustive-deps
  return (
    <Fragment>
      <ActivityBar />
      <SideBar />
      <MainArea />
    </Fragment>
  );
};

export default StartPage;
