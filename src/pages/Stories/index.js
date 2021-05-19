import React from "react";
import { motion } from "framer-motion";

import Card from "../../components/Card";

import { storyData } from "./../../data";
import {
  StyledContainer,
  StyledCard,
  StyledCardImage,
  StyledH1,
  StyledH4,
  StyledP,
  StyledTextWrapper,
} from "./StoriesElements";

const Stories = () => {
  return (
    <motion.div
      initial={{ scaleY: 0 }}
      animate={{ scaleY: 1 }}
      exit={{ scaleY: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledContainer>
        <StyledCard>
          <StyledCardImage>
            <StyledTextWrapper>
              <StyledH4>Last month's featured story</StyledH4>
              <StyledH1>HAZY FULL MOON OF APPALACHIA</StyledH1>
              <StyledP>March 2nd 2020 by John Appleseed</StyledP>
              <StyledP>
                The dissected plateau area, while not actually made up of
                geological mountains, is popularly called "mountains,"
                especially in eastern Kentucky and West Virginia, and while the
                ridges are not high, the terrain is extremely rugged.
              </StyledP>
            </StyledTextWrapper>
          </StyledCardImage>
        </StyledCard>
        <Card stories={storyData} />
      </StyledContainer>
    </motion.div>
  );
};

export default Stories;
