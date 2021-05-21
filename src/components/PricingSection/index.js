import { React, useState } from "react";
import {
  StyledContainer,
  StyledCard,
  StyledCardContainer,
  StyledCardWrapper,
  StyledButton,
  StyledH1,
  StyledH3,
  StyledP,
  StyledSwitch,
} from "./PricingSectionElements";

import { pricingDatas } from "./../../data";

const PricingSection = () => {
  const [isToggled, setIsToggled] = useState(false);

  return (
    <StyledContainer>
      <div
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          paddingBottom: 60,
          height: "100%",
        }}
      >
        <h3>Monthly</h3>
        <StyledSwitch
          type="checkbox"
          toggled={isToggled}
          onChange={(e) => setIsToggled(e.target.checked)}
        />
        <h3>Yearly</h3>
      </div>
      <StyledCardContainer>
        {pricingDatas.map((pricingData) => {
          return (
            <StyledCard key={pricingData.id}>
              <StyledCardWrapper>
                <StyledH3>{pricingData.title}</StyledH3>
                <StyledP>{pricingData.body}</StyledP>
                <StyledH1 style={{ letterSpacing: 4.17 }}>
                  {!isToggled
                    ? pricingData.monthlyPrice
                    : pricingData.yearlyPrice}
                </StyledH1>
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
