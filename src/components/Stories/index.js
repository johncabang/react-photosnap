import React from "react";
import Card from "../Card";

import { StyledContainer } from "./StoriesElements";
import { storyData } from "./../../data";

const Stories = () => {
  const firstFourStories = storyData.slice(0, 4);

  return (
    <StyledContainer>
      <Card stories={firstFourStories} />
    </StyledContainer>
  );
};

export default Stories;
