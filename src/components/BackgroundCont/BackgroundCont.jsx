import cabbageGroupImage from "../../images/desktop/kapusta.png";
import { StyledContainer, StyledImage } from "./BackgroundCont.module";

export const BackgroundCont = () => {
  return (
    <StyledContainer>
      <StyledImage src={cabbageGroupImage} alt="Cabbages" />
    </StyledContainer>
  );
};
