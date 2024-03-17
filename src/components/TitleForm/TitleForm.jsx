import {
  StyledContainer,
  StyledParagraph,
  StyledHeading,
  StyledDollar,
} from "./TitleForm.module";

export const MainLogo = () => {
  return (
    <StyledContainer>
      <StyledHeading>
        Kapu<StyledDollar>$</StyledDollar>ta
      </StyledHeading>
      <StyledParagraph>SMART FINANCE</StyledParagraph>
    </StyledContainer>
  );
};
