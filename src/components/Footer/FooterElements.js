import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  background-color: #000;
  color: #fff;
  height: 250px;
  padding: 55px 160px;
  margin: 0 auto;
  max-width: 1440px;

  @media screen and (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
    height: 284px;
    transition: ease-in 0.5s;
  }

  @media screen and (max-width: 520px) {
    justify-content: center;
    flex-direction: column;
    padding: 50px 0;
    height: 540px;
    width: 100%;
  }
`;

export const StyledLinksWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  width: 35%;
  height: 100%;
  position: relative;

  @media screen and (max-width: 520px) {
    justify-content: center;
    width: 60%;
  }
`;

export const StyledLogoWrapper = styled.div`
  display: flex;
  flex-direction: row;
  height: 100%;
  width: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
  }
`;

export const StyledLogo = styled.div`
  align-items: center;
  padding-right: 100px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
    padding: 0;
    display: flex;
    justify-content: center;
  }
`;

export const StyledUL = styled.ul`
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  height: 100%;

  @media screen and (max-width: 1024px) {
    flex-direction: row;
  }

  @media screen and (max-width: 520px) {
    flex-direction: column;
    justify-content: flex-end;
    width: 100%;
    margin-top: 100px;
  }
`;

export const StyledLI = styled.li`
  list-style: none;
  text-transform: uppercase;
  padding-right: 30px;
  width: 100%;

  @media screen and (max-width: 520px) {
    display: flex;
    justify-content: center;
    width: 100%;
    padding: 0;
  }
`;

export const StyledLinks = styled(Link)`
  color: #fff;
  text-decoration: none;
  text-transform: uppercase;

  &:hover {
    color: #515151;
    transition: ease-in 0.2s;
  }

  @media screen and (max-width: 520px) {
    padding-bottom: 20px;
    z-index: 1;
  }
`;

export const StyledSocialLinks = styled.div`
  display: flex;
  justify-content: space-between;
  position: absolute;
  width: 175px;
  bottom: 0;

  @media screen and (max-width: 520px) {
    width: 100%;
    top: 60px;
  }
`;

export const StyledRightSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
  height: 100%;

  @media screen and (max-width: 520px) {
    justify-content: flex-end;
  }
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 520px) {
    justify-content: center;
  }
`;

export const StyledH4 = styled.h4`
  text-transform: uppercase;
  padding-right: 20px;
  cursor: pointer;

  &:hover {
    text-decoration: underline;
  }

  @media screen and (max-width: 520px) {
    padding: 0 20px 30px 0;
  }
`;

export const StyledP = styled.p`
  text-transform: uppercase;
  display: flex;
  color: gray;

  @media screen and (max-width: 320px) {
    font-size: 12px;
  }
`;

export const Icon = styled.svg`
  height: 20px;
  width: 20px;
  display: flex;
  fill: white;
  cursor: pointer;

  &:hover {
    fill: url(#a);
  }
`;
