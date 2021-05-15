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
    transition: ease-in 0.5s;
  }

  @media screen and (max-width: 520px) {
    padding-left: 20px;
    padding-right: 20px;
  }
`;

export const StyledUL = styled.ul`
  display: flex;

  @media screen and (max-width: 520px) {
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

  &:hover {
    color: #b9b9b9;
    transition: ease-in 0.2s;
  }
`;

export const StyledLogoLink = styled(Link)`
  align-items: center;
`;
