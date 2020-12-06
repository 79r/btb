import { makeStyles } from "@material-ui/core/styles";
import Box from "@material-ui/core/Box";
import IconButton from "@material-ui/core/IconButton";
import BaseLayoutItem from "../BaseLayoutItem";
import img from "../../../../../../../assets/images/layouts/layout2.png";
import { LayoutTypes } from "../../../../../../../constants/LayoutTypes";

/** Icons */
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "relative",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",

    "&.selected": {
      "& img": {
        opacity: "0.5",
      },
    },

    "& img": {
      position: "absolute",
      top: 0,
      left: 0,
    },
  },
  buttonContainer: {
    display: "flex",
    justifyContent: "center",
    alignItems: "center",
    height: 190,
    width: "100%",
  },
  button: {
    "&.selected": {
      backgroundColor: "rgb(164 65 255 / 22%)",
    },
  },
}));

const Layout2 = (props) => {
  const { selectedLayout, setLayout } = props;
  const classes = useStyles();

  const isSelected = () => {
    return selectedLayout === LayoutTypes.layout2 ? true : false;
  };

  return (
    <BaseLayoutItem>
      <Box className={`${classes.root} ${isSelected() && "selected"}`}>
        <img src={img} alt="Layout 2" onClick={setLayout} />
        <div className={classes.buttonContainer}>
          <IconButton
            className={`${classes.button} ${isSelected() && "selected"}`}
            onClick={setLayout}
            color="primary"
          >
            <CheckIcon />
          </IconButton>
        </div>
      </Box>
    </BaseLayoutItem>
  );
};

export default Layout2;
