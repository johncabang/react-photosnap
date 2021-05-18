import React from "react";
import Card from "../../components/Card";

import { storyData } from "./../../data";
import { StyledContainer } from "./StoriesElements";

const Stories = () => {
  return (
    <StyledContainer>
      <Card stories={storyData} />
    </StyledContainer>
  );
};

export default Stories;
