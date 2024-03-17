import styled from "styled-components";

export const StyledHeading = styled.h1`
  font-size: 102px;
  font-weight: 900;
  margin: 0;
  text-align: left;
`;

export const StyledParagraph = styled.p`
  color: rgba(82, 85, 95, 1);
  font-size: 16px;
  font-weight: 700;
  line-height: 1.17;
  letter-spacing: 0.18em;
  text-align: left;
  margin: 0 20%;
`;

export const StyledContainer = styled.div`
  position: absolute;
  bottom: 42%;
  left: 20%;
  display: flex;
  gap: 20px;
  flex-direction: column;
`;

export const StyledDollar = styled.span`
  display: inline-block;
  font-size: 0.9em;
  vertical-align: middle;
  transform: scaleY(0.8) translateY(-0.05em);
  transform-origin: 50%;
`;
