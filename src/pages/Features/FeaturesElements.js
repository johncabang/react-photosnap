import styled from "styled-components";
import bgBeta from "../../assets/shared/desktop/bg-beta.jpg";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;
`;

export const StyledHero = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  height: 490px;
`;

export const StyledHeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 115px;
  width: 610px;
  background-color: #000;
`;

export const StyledH1 = styled.h1`
  text-transform: uppercase;
`;

export const StyledP = styled.p`
  width: 380px;
  color: #979797;
  padding-top: 25px;
`;

export const StyledHeroImg = styled.img`
  /* width: 100%; */
`;

export const StyledFeaturesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 160px;
  background-image: url(${bgBeta});
`;

export const StyledH1Footer = styled.h1`
  text-transform: uppercase;
  color: #fff;
  width: 400px;
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const StyledH4 = styled.h4`
  text-transform: uppercase;
  padding-right: 20px;

  cursor: pointer;
  color: white;

  &:hover {
    text-decoration: underline;
  }
`;
