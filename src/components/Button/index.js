import React from "react";
import { StyledInviteButton } from "./ButtonElements";

const Button = (props) => {
  return <StyledInviteButton>{props.children}</StyledInviteButton>;
};

export default Button;
