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
  }

  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 500px) {
    justify-content: center;
    width: 55%;
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

export const StyledLogo = styled(Link)`
  align-items: center;
  padding-right: 100px;

  @media screen and (max-width: 1024px) {
    padding-bottom: 20px;
  }

  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 500px) {
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
  @media screen and (max-width: 500px) {
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

  @media screen and (max-width: 500px) {
    padding-bottom: 20px;
  }
`;

export const StyledFooterLinks = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column;
`;

export const StyledSocialLinks = styled.div`
  display: flex;
  position: absolute;
  bottom: 0;

  @media screen and (max-width: 500px) {
    justify-content: space-between;
    width: 100%;
    top: 60px;
    height: 100%;
  }
`;

export const StyledRightSection = styled.div`
  display: flex;
  justify-content: space-between;
  flex-direction: column-reverse;
  height: 100%;

  @media screen and (max-width: 500px) {
    justify-content: flex-end;
    flex-direction: column;
  }
`;

export const StyledRightWrapper = styled.div`
  display: flex;
  justify-content: flex-end;

  @media screen and (max-width: 500px) {
    justify-content: center;
  }
`;

export const StyledH4 = styled.h4`
  text-transform: uppercase;
  padding-right: 20px;

  @media screen and (max-width: 500px) {
    padding: 0 0 30px 0;
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
