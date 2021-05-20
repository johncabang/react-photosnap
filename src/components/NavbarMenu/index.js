import {
  NavbarMenuContainer,
  NavbarMenuMenu,
  NavbarMenuLink,
  NavbarMenuWrapper,
  StyledLine,
} from "./NavbarMenuElements";

import Button from "./../Button";

const NavbarMenu = ({ isOpen, toggle }) => {
  return (
    <NavbarMenuContainer isOpen={isOpen} onClick={toggle}>
      <NavbarMenuWrapper>
        <NavbarMenuMenu>
          <NavbarMenuLink to="stories">Stories</NavbarMenuLink>
          <NavbarMenuLink to="features">Features</NavbarMenuLink>
          <NavbarMenuLink to="pricing">Pricing</NavbarMenuLink>
          <StyledLine />
          <Button>get an invite</Button>
        </NavbarMenuMenu>
      </NavbarMenuWrapper>
    </NavbarMenuContainer>
  );
};

export default NavbarMenu;
