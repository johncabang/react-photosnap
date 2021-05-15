import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  height: 72px;
  padding: 20px 160px;
  margin: 0 auto;
  max-width: 1440px;

  @media screen and (max-width: 1024px) {
    padding-left: 50px;
    padding-right: 50px;
  }

  @media screen and (max-width: 500px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const StyledUL = styled.ul`
  display: flex;

  @media screen and (max-width: 500px) {
    display: none;
  }
`;

export const StyledLI = styled.li`
  list-style: none;
  padding-right: 20px;
`;

export const StyledLink = styled(Link)`
  color: inherit;
  text-decoration: none;
  text-transform: uppercase;
`;

export const StyledLogoLink = styled(Link)`
  align-items: center;
`;
