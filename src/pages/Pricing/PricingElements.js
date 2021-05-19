import styled from "styled-components";

import heroDesktop from "../../assets/pricing/desktop/hero.jpg";
import heroTablet from "../../assets/pricing/tablet/hero.jpg";
import heroMobile from "../../assets/pricing/mobile/hero.jpg";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  margin: 0 auto;
  max-width: 1440px;

  @media screen and (max-width: 520px) {
    margin: 0;
    height: 100%;
    transition: ease-in 0.5s;
  }
`;

export const StyledHero = styled.div`
  display: flex;
  color: #fff;
  width: 100%;
  height: 490px;
  position: relative;

  @media screen and (max-width: 520px) {
    flex-direction: column-reverse;
    height: 100%;
    transition: ease-in 0.5s;
  }
`;

export const StyledGradientLine = styled.div`
  background: linear-gradient(to top, #ffc593, #bc7198, #5a77ff);
  position: absolute;
  width: 5px;
  height: 50%;
  margin-top: auto;
  margin-bottom: auto;
  top: 0;
  bottom: 0;

  @media screen and (max-width: 520px) {
    background: linear-gradient(to right, #ffc593, #bc7198, #5a77ff);
    margin: 0;
    top: 294px;
    left: 10%;
    width: 50%;
    height: 5px;
  }
`;

export const StyledHeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 115px;
  width: 610px;
  background-color: #000;

  @media screen and (max-width: 1024px) {
    padding: 70px;
    width: 495px;
  }

  @media screen and (max-width: 520px) {
    padding: 50px 30px;
    width: 100%;
    height: 300px;
    transition: ease-in 0.5s;
  }
`;

export const StyledH1 = styled.h1`
  text-transform: uppercase;

  @media screen and (max-width: 520px) {
    font-size: 32px;
    transition: ease-in 0.5s;
  }
`;

export const StyledP = styled.p`
  width: 380px;
  color: #979797;
  padding-top: 25px;

  @media screen and (max-width: 520px) {
    width: 100%;
    transition: ease-in 0.5s;
  }
`;

export const StyledHeroImg = styled.div`
  background-image: url(${heroDesktop});
  background-size: cover;
  width: 840px;

  @media screen and (max-width: 768px) {
    background-image: url(${heroTablet});
    /* background-size: cover; */
    width: 273px;
  }

  @media screen and (max-width: 520px) {
    background-image: url(${heroMobile});
    background-size: cover;
    width: 100%;
    height: 294px;
    transition: ease-in 0.5s;
  }
`;
