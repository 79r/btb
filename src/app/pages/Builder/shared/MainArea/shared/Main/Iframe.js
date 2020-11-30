import Frame from "react-frame-component";
import PropTypes from "prop-types";

const Preview = ({ children }) => {
  return (
    <Frame
      style={{
        borderWidth: 0,
      }}
    >
      {children}
    </Frame>
  );
};

Preview.propTypes = {
  children: PropTypes.node.isRequired,
};

export default Preview;
