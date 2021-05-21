import React from "react";
import {
  StyledContainer,
  StyledCard,
  StyledCardContainer,
  StyledCardWrapper,
  StyledButton,
  StyledH3,
  StyledP,
} from "./PricingSectionElements";

import { pricingDatas } from "./../../data";

const PricingSection = () => {
  return (
    <StyledContainer>
      <div
        style={{ display: "flex", justifyContent: "center", paddingBottom: 20 }}
      >
        <StyledH3>Monthly</StyledH3>
        <StyledH3>Yearly</StyledH3>
      </div>
      <StyledCardContainer>
        {pricingDatas.map((pricingData) => {
          return (
            <StyledCard key={pricingData.id}>
              <StyledCardWrapper>
                <StyledH3>{pricingData.title}</StyledH3>
                <StyledP>{pricingData.body}</StyledP>
                <h1 style={{ letterSpacing: 4.17 }}>
                  {pricingData.monthlyPrice}
                </h1>
                <StyledP>per month</StyledP>
                <StyledButton>PICK PLAN</StyledButton>
              </StyledCardWrapper>
            </StyledCard>
          );
        })}
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default PricingSection;

// Monthly
// Yearly

// Compare

// The Features

// Basic
// Pro
// Business

// Unlimited Story Posting
// Unlimited Photo Upload
// Embedding Custom Content
// Customize Metadata
// Advanced Metrics
// Photo Downloads
// Search Engine Indexing
// Custom Analytics
