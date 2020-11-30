import { makeStyles } from "@material-ui/core/styles";
import { useDispatch } from "react-redux";
import { setLayout } from "../../../../../../../redux/actions/builderActions";
import ButtonGroup from "@material-ui/core/ButtonGroup";
import Button from "@material-ui/core/Button";
import BasePreview from "../BasePreview";
import previewImg from "./preview.jpg";

/** Icons */
import CheckIcon from "@material-ui/icons/Check";
import RemoveRedEyeIcon from "@material-ui/icons/RemoveRedEye";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    padding: theme.spacing(0, 2),
    bottom: theme.spacing(1),
  },
}));

const PreviewLayout3 = () => {
  const classes = useStyles();
  const dispatch = useDispatch();

  const handleClick = () => {
    dispatch(setLayout("LAYOUT_3"));
  };

  return (
    <BasePreview>
      <img src={previewImg} alt="Preview Layout 1" />
      <ButtonGroup className={classes.root}>
        <Button
          onClick={handleClick}
          disableElevation
          size="small"
          variant="contained"
          color="primary"
          startIcon={<CheckIcon />}
        >
          Use it
        </Button>
        <Button
          disableElevation
          size="small"
          variant="contained"
          color="secondary"
          startIcon={<RemoveRedEyeIcon />}
        >
          Preview
        </Button>
      </ButtonGroup>
    </BasePreview>
  );
};

export default PreviewLayout3;
