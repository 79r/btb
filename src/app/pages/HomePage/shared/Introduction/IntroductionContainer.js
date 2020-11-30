import Container from "@material-ui/core/Container";
import IntroductionContent from "./IntroductionContent";
import IntroductionImage from "./IntroductionImage";

const IntroductionContainer = () => {
  return (
    <Container>
      <IntroductionContent />
      <IntroductionImage />
    </Container>
  );
};
export default IntroductionContainer;
