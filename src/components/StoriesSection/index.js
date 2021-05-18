import React from "react";
import Card from "../Card";

import { StyledContainer } from "./StoriesSectionElements";
import { storyData } from "../../data";

const StoriesSection = () => {
  const firstFourStories = storyData.slice(0, 4);

  return (
    <StyledContainer>
      <Card stories={firstFourStories} />
    </StyledContainer>
  );
};

export default StoriesSection;
