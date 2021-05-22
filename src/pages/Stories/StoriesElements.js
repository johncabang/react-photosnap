import styled from "styled-components";

import moonOfAppalaciaDesktop from "../../assets/stories/desktop/moon-of-appalacia.jpg";
import moonOfAppalaciaTablet from "../../assets/stories/tablet/moon-of-appalacia.jpg";
import moonOfAppalaciaMobile from "../../assets/stories/mobile/moon-of-appalacia.jpg";

export const StyledContainer = styled.div`
  display: flex;
  margin: 0 auto;
  max-width: 1440px;
  flex-wrap: wrap;
`;

export const StyledCard = styled.div`
  width: 100%;
  height: 650px;
`;

export const StyledCardImage = styled.div`
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.8)
    ),
    url(${moonOfAppalaciaDesktop});

  @media screen and (max-width: 768px) {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0.8)
      ),
      url(${moonOfAppalaciaTablet});
    transition: ease-in 0.5s;
  }
  @media screen and (max-width: 520px) {
    background: linear-gradient(
        to bottom,
        rgba(0, 0, 0, 0) 20%,
        rgba(0, 0, 0, 0.8)
      ),
      url(${moonOfAppalaciaMobile});
    background-size: cover;
    width: 100%;
    height: 317px;
  }
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  height: 100%;
  padding-left: 115px;

  @media screen and (max-width: 520px) {
    position: absolute;
    top: 317px;
    background-color: #000;
    padding: 50px 30px;
    width: 100%;
    height: 495px;
    transition: ease-in 0.5s;
  }
`;

export const StyledH1 = styled.h1`
  text-transform: uppercase;
  color: #fff;
  letter-spacing: 4.17px;
  width: 340px;
  padding-bottom: 20px;

  @media screen and (max-width: 520px) {
    font-size: 32px;
    transition: ease-in 0.5s;
    width: 100%;
  }
`;

export const StyledH4 = styled.h4`
  text-transform: uppercase;
  padding-right: 20px;
  color: #fff;
  padding-bottom: 20px;
  letter-spacing: 2px;
`;

export const StyledP = styled.p`
  color: #979797;
  font-size: 13px;
  width: 340px;
  padding-bottom: 20px;

  @media screen and (max-width: 520px) {
    width: 100%;
    transition: ease-in 0.5s;
  }
`;
