import React from "react";

import {
  StyledCard,
  StyledCardImage,
  StyledH3,
  StyledH4,
  StyledLine,
  StyledP,
  StyledReadStoryWrapper,
  StyledTextWrapper,
} from "./CardElements";

const Card = ({ stories }) => {
  return (
    <>
      {stories.map((story) => {
        return (
          <StyledCard key={story.id} to={story.route}>
            <StyledCardImage desktopCardBackground={story.image}>
              <StyledTextWrapper>
                <StyledP>{story.date}</StyledP>
                <StyledH3>{story.title}</StyledH3>
                <StyledP>by {story.author}</StyledP>
                <StyledLine />
                <StyledReadStoryWrapper>
                  <StyledH4>Read story</StyledH4>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="43"
                    height="14"
                  >
                    <g fill="none" filrule="evenodd" stroke="#fff">
                      <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                    </g>
                  </svg>
                </StyledReadStoryWrapper>
              </StyledTextWrapper>
            </StyledCardImage>
          </StyledCard>
        );
      })}
    </>
  );
};

export default Card;
