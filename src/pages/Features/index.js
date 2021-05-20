import React from "react";
import { motion } from "framer-motion";
import InviteSection from "../../components/InviteSection";
import FeatureCard from "../../components/FeatureCard";

import { featuresData } from "./../../data";

import {
  StyledContainer,
  StyledHero,
  StyledH1,
  StyledHeroTextWrapper,
  StyledP,
  StyledHeroImg,
  StyledGradientLine,
} from "./FeaturesElements";

const Features = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledContainer>
        <StyledHero>
          <StyledGradientLine />
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
        <FeatureCard features={featuresData} />
        <InviteSection />
      </StyledContainer>
    </motion.div>
  );
};

export default Features;
