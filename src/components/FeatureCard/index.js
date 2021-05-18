import React from "react";

import {
  StyledCard,
  StyledImage,
  StyledImageContainer,
  StyledCardWrapper,
  StyledH3,
  StyledP,
} from "./FeatureCardElements";

const FeatureCard = ({ features }) => {
  return (
    <>
      {features.map((feature) => {
        return (
          <StyledCard key={feature.id}>
            <StyledCardWrapper>
              <StyledImageContainer>
                <StyledImage src={feature.image} alt="card" />
              </StyledImageContainer>
              <StyledH3>{feature.title}</StyledH3>
              <StyledP>{feature.body}</StyledP>
            </StyledCardWrapper>
          </StyledCard>
        );
      })}
    </>
  );
};

export default FeatureCard;
