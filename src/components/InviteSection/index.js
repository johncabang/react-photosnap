import React from "react";

import {
  StyledContainer,
  StyledRightWrapper,
  StyledH1Footer,
  StyledFeaturesFooter,
  StyledH4,
} from "./InviteSectionElements";

const InviteSection = () => {
  return (
    <StyledContainer>
      <StyledFeaturesFooter>
        <StyledH1Footer>
          We’re in beta. <br />
          Get your invite <br />
          today!
        </StyledH1Footer>
        <StyledRightWrapper>
          <StyledH4>Get an invite </StyledH4>
          <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
            <g fill="none" fillRule="evenodd" stroke="#fff">
              <path d="M0 7h41.864M35.428 1l6 6-6 6" />
            </g>
          </svg>
        </StyledRightWrapper>
      </StyledFeaturesFooter>
    </StyledContainer>
  );
};

export default InviteSection;
