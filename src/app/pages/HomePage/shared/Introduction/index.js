import { makeStyles } from "@material-ui/core/styles";
import IntroductionContainer from "./IntroductionContainer";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const Introduction = () => {
  const classes = useStyles();
  return (
    <div className={classes.root}>
      <IntroductionContainer />
    </div>
  );
};

export default Introduction;
