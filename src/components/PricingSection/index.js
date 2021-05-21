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
        <StyledCard>
          <StyledCardWrapper>
            <StyledH3>Basic</StyledH3>
            <StyledP>
              Includes basic usage of our platform. Recommended for new and
              aspiring photographers.
            </StyledP>
            <h1 style={{ letterSpacing: 4.17 }}>$19.00</h1>
            <StyledP>per month</StyledP>
            <StyledButton>PICK PLAN</StyledButton>
          </StyledCardWrapper>
        </StyledCard>
        <StyledCard>
          <StyledCardWrapper>
            <StyledH3>Pro</StyledH3>
            <StyledP>
              More advanced features available. Recommended for photography
              veterans and professionals.
            </StyledP>
            <h1 style={{ letterSpacing: 4.17 }}>$39.00</h1>
            <StyledP>per month</StyledP>
            <StyledButton>PICK PLAN</StyledButton>
          </StyledCardWrapper>
        </StyledCard>
        <StyledCard>
          <StyledCardWrapper>
            <StyledH3>Business</StyledH3>
            <StyledP>
              Additional features available such as more detailed metrics.
              Recommended for business owners.
            </StyledP>
            <h1 style={{ letterSpacing: 4.17 }}>$99.00</h1>
            <StyledP>per month</StyledP>
            <StyledButton>PICK PLAN</StyledButton>
          </StyledCardWrapper>
        </StyledCard>
      </StyledCardContainer>
    </StyledContainer>
  );
};

export default PricingSection;

// Monthly
// Yearly

// Basic
// Includes basic usage of our platform. Recommended for new and aspiring photographers.
// $19.00 per month
// $190.00 per year
// Pick Plan

// Pro
// More advanced features available. Recommended for photography veterans and professionals.
// $39.00 per month
// $390.00 per year
// Pick Plan

// Business
// Additional features available such as more detailed metrics. Recommended for business owners.
// $99.00 per month
// $990.00 per year
// Pick Plan

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
