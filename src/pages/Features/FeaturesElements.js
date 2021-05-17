import styled from "styled-components";

import heroDesktop from "../../assets/features/desktop/hero.jpg";
import heroTablet from "../../assets/features/tablet/hero.jpg";

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
  /* width: 60%; */
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

export const StyledHeroImg = styled.div`
  background-image: url(${heroDesktop});
  background-size: cover;
  width: 100%;

  @media screen and (max-width: 1024px) {
  }

  @media screen and (max-width: 520px) {
    background-image: url(${heroTablet});
    background-size: cover;
    width: 100%;
  }
`;
