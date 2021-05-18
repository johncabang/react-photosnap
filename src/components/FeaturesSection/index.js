import React from "react";
import FeatureCard from "../FeatureCard";

import { StyledContainer } from "./FeaturesSectionElements";
import { featuresData } from "../../data";

const FeaturesSection = () => {
  const firstThreeFeaturs = featuresData.slice(0, 3);

  return (
    <StyledContainer>
      <FeatureCard features={firstThreeFeaturs} />
    </StyledContainer>
  );
};

export default FeaturesSection;
