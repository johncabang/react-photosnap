import React from "react";
import InviteSection from "../../components/InviteSection";
import FeaturesSection from "../../components/FeaturesSection";
import {
  StyledContainer,
  StyledHero,
  StyledH1,
  StyledHeroTextWrapper,
  StyledP,
  StyledHeroImg,
} from "./FeaturesElements";

const Features = () => {
  return (
    <StyledContainer>
      <StyledHero>
        <StyledHeroTextWrapper>
          <StyledH1>features</StyledH1>
          <StyledP>
            We make sure all of our features are designed to be loved by every
            aspiring and even professional photograpers who wanted to share
            their stories.
          </StyledP>
        </StyledHeroTextWrapper>
        <StyledHeroImg />
      </StyledHero>
      <FeaturesSection />
      <InviteSection />
    </StyledContainer>
  );
};

export default Features;
