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
`;

export const StyledUL = styled.ul`
  display: flex;
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
