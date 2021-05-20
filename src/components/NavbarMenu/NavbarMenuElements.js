import styled from "styled-components";
import { Link as LinkRouter } from "react-router-dom";

export const NavbarMenuContainer = styled.aside`
  display: flex;
  justify-content: center;
  position: fixed;
  z-index: 999;
  width: 100%;
  height: 100vh;
  border-bottom: 25rem solid rgba(0, 0, 0, 0.5);

  transition: 0.5s ease-in-out;
  opacity: ${({ isOpen }) => (isOpen ? "100%" : "0")};
  top: ${({ isOpen }) => (isOpen ? "72px" : "-100%")};
`;

export const NavbarMenuWrapper = styled.div`
  background: #fff;
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
`;

export const NavbarMenuMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: space-evenly;
  height: 100%;
  width: 100%;
  align-items: center;
`;

export const NavbarMenuLink = styled(LinkRouter)`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
  font-size: 15px;
  list-style: none;
  text-decoration: none;
  transition: 0.5s ease-in-out;
  text-transform: uppercase;
  color: #000;

  &:hover {
    text-decoration: underline;
    transition: 0.2s ease-in-out;
  }
`;

export const StyledLine = styled.div`
  display: flex;
  height: 2px;
  background-color: #979797;
  opacity: 30%;
  margin: 20px 0;
  width: 80%;
`;
