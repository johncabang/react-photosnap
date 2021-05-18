import React from "react";

import {
  StyledCard,
  StyledCardImage,
  StyledH3,
  StyledLine,
  StyledP,
  StyledTextWrapper,
} from "./CardElements";

const Card = ({ stories }) => {
  return (
    <>
      {stories.map((story) => {
        return (
          <StyledCard key={story.id}>
            <StyledCardImage desktopCardBackground={story.image}>
              <StyledTextWrapper>
                <StyledH3>{story.title}</StyledH3>
                <StyledP>by {story.author}</StyledP>
                <StyledLine />
              </StyledTextWrapper>
            </StyledCardImage>
          </StyledCard>
        );
      })}
    </>
  );
};

export default Card;
