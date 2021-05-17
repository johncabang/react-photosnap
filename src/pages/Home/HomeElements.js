import styled from "styled-components";

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
  height: 610px;

  @media screen and (max-width: 520px) {
    flex-direction: ${(props) => props.direction};
    /* flex-direction: column-reverse; */
    height: 100%;
    transition: ease-in 0.5s;
  }
`;

export const StyledHeroTextWrapper = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  padding-left: 115px;
  width: 650px;
  background-color: ${(props) => props.color};

  @media screen and (max-width: 1024px) {
    padding: 70px;
    width: 495px;
  }

  @media screen and (max-width: 520px) {
    padding: 50px 30px;
    width: 100%;
    height: 419px;
    transition: ease-in 0.5s;
  }
`;

export const StyledH1 = styled.h1`
  text-transform: uppercase;
  color: ${(props) => props.color};

  @media screen and (max-width: 520px) {
    font-size: 32px;
    transition: ease-in 0.5s;
  }
`;

export const StyledP = styled.p`
  width: 370px;
  color: #979797;
  padding-top: 25px;

  @media screen and (max-width: 520px) {
    width: 100%;
    transition: ease-in 0.5s;
  }
`;

export const StyledHeroImg = styled.div`
  background-image: ${(props) => `url(${props.desktopBackground})`};

  background-size: cover;
  width: 830px;

  @media screen and (max-width: 768px) {
    background-image: ${(props) => `url(${props.tabletBackground})`};
    /* background-size: cover; */
    width: 273px;
  }

  @media screen and (max-width: 520px) {
    background-image: ${(props) => `url(${props.mobileBackground})`};
    background-size: cover;
    width: 100%;
    height: 294px;
    transition: ease-in 0.5s;
  }
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  padding-top: 40px;
  color: ${(props) => props.color};
`;

export const StyledH4 = styled.h4`
  text-transform: uppercase;
  padding-right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 520px) {
    padding: 0 0 30px 0;
  }
`;
