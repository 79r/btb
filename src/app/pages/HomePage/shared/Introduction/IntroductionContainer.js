import { makeStyles } from "@material-ui/core/styles";
import Container from "@material-ui/core/Container";
import IntroductionContent from "./IntroductionContent";
import IntroductionImage from "./IntroductionImage";

const useStyles = makeStyles((theme) => ({
  root: {},
}));

const IntroductionContainer = () => {
  // const classes = useStyles();
  return (
    <Container>
      <IntroductionContent />
      <IntroductionImage />
    </Container>
  );
};
export default IntroductionContainer;
