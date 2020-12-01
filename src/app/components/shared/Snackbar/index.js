import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Snackbar from "@material-ui/core/Snackbar";
import MuiAlert from "@material-ui/lab/Alert";
import { makeStyles } from "@material-ui/core/styles";
import { closeAlert } from "../../../redux/actions/alertActions";

function Alert(props) {
  return <MuiAlert elevation={6} variant="filled" {...props} />;
}

const useStyles = makeStyles((theme) => ({
  root: {
    width: 300,
    "& > * + *": {
      marginTop: theme.spacing(2),
    },
  },
}));

export default function CustomizedSnackbars() {
  const classes = useStyles();
  const dispatch = useDispatch();
  const { open, type, message } = useSelector((state) => state.alert);
  // const open = useSelector((state) => state.alert.show);
  // const type = useSelector((state) => state.alert.type);

  const handleClose = (event, reason) => {
    if (reason === "clickaway") {
      return;
    }
    dispatch(closeAlert());
  };

  return (
    <div className={classes.root}>
      {open && (
        <Snackbar open={open} autoHideDuration={6000} onClose={handleClose}>
          <Alert onClose={handleClose} severity={type.toLowerCase()}>
            {message}
          </Alert>
        </Snackbar>
      )}
    </div>
  );
}
