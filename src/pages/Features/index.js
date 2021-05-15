import React from "react";
import {
  StyledContainer,
  StyledHero,
  StyledH1,
  StyledHeroTextWrapper,
  StyledP,
  StyledHeroImg,
  StyledFeaturesFooter,
  StyledH1Footer,
  StyledRightWrapper,
  StyledH4,
} from "./FeaturesElements";

import HeroImg from "../../assets/features/desktop/hero.jpg";

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
        <StyledHeroImg src={HeroImg} alt="hero" />
      </StyledHero>
      <StyledFeaturesFooter>
        <StyledH1Footer>We’re in beta. Get your invite today!</StyledH1Footer>

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

export default Features;
