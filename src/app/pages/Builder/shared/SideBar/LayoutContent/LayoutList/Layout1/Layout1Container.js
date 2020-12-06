import { connect } from "react-redux";
import { setLayout } from "../../../../../../../redux/actions/bloggerActions";
import { LayoutTypes } from "../../../../../../../constants/LayoutTypes";
import Layout1 from "./Layout1";

const mapStateToProps = (state) => {
  return {
    selectedLayout: state.blogger.selectedLayout,
  };
};

const mapDispatchToProps = (dispatch) => {
  return {
    setLayout: () => dispatch(setLayout(LayoutTypes.layout1)),
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Layout1);
