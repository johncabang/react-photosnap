import styled from "styled-components";
import bgBeta from "../../assets/shared/desktop/bg-beta.jpg";

export const StyledContainer = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1440px;
`;

export const StyledFeaturesFooter = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 55px 160px;
  background-image: url(${bgBeta});

  @media screen and (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
    height: 280px;
    transition: ease-in 0.5s;
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    padding: 50px 0;
  }
`;

export const StyledH1Footer = styled.h1`
  text-transform: uppercase;
  color: #fff;
  width: 400px;

  @media screen and (max-width: 769px) {
    width: 300px;
    font-size: 32px;
    transition: ease-in 0.5s;
  }

  @media screen and (max-width: 520px) {
    justify-content: center;
    flex-direction: column;
    padding: 0 45px 10px;
    width: 100%;
  }

  /* @media screen and (max-width: 410px) {
    font-size: 25px;
    justify-content: center;
    flex-direction: column;
    padding: 0 30px 5px;
    width: 100%;
  } */
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 520px) {
    width: 100%;
    padding-left: 45px;
    justify-content: flex-start;
    transition: ease-in 0.5s;
  }
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
