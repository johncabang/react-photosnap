import React from "react";
import { motion } from "framer-motion";
import InviteSection from "../../components/InviteSection";

import {
  StyledContainer,
  StyledHero,
  StyledH1,
  StyledHeroTextWrapper,
  StyledP,
  StyledHeroImg,
  StyledGradientLine,
} from "./PricingElements";
import PricingSection from "../../components/PricingSection";

const Pricing = () => {
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
            <StyledH1>pricing</StyledH1>
            <StyledP>
              Create a your stories, Photosnap is a platform for photographers
              and visual storytellers. It’s the simple way to create and share
              your photos.
            </StyledP>
          </StyledHeroTextWrapper>
          <StyledHeroImg />
        </StyledHero>
        <PricingSection />
        <InviteSection />
      </StyledContainer>
    </motion.div>
  );
};

export default Pricing;
