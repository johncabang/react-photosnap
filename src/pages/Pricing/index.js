import React from "react";
import InviteSection from "../../components/InviteSection";

import {
  StyledContainer,
  StyledHero,
  StyledH1,
  StyledHeroTextWrapper,
  StyledP,
  StyledHeroImg,
} from "./PricingElements";

const Pricing = () => {
  return (
    <StyledContainer>
      <StyledHero>
        <StyledHeroTextWrapper>
          <StyledH1>pricing</StyledH1>
          <StyledP>
            Create a your stories, Photosnap is a platform for photographers and
            visual storytellers. It’s the simple way to create and share your
            photos.
          </StyledP>
        </StyledHeroTextWrapper>
        <StyledHeroImg />
      </StyledHero>
      <InviteSection />
    </StyledContainer>
  );
};

export default Pricing;
