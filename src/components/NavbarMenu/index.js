import {
  SidebarContainer,
  SidebarMenu,
  SidebarLink,
  SidebarWrapper,
  StyledLine,
} from "./NavbarMenuElements";

import Button from "./../Button";

const NavbarMenu = ({ isOpen, toggle }) => {
  return (
    <SidebarContainer isOpen={isOpen} onClick={toggle}>
      <SidebarWrapper>
        <SidebarMenu>
          <SidebarLink to="stories">Stories</SidebarLink>
          <SidebarLink to="features">Features</SidebarLink>
          <SidebarLink to="pricing">Pricing</SidebarLink>
          <StyledLine />
          <Button>get an invite</Button>
        </SidebarMenu>
      </SidebarWrapper>
    </SidebarContainer>
  );
};

export default NavbarMenu;
