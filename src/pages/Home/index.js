import React from "react";
import { motion } from "framer-motion";
import {
  StyledContainer,
  StyledHero,
  StyledH1,
  StyledHeroTextWrapper,
  StyledP,
  StyledHeroImg,
  StyledRightWrapper,
  StyledH4,
  StyledGradientLine,
} from "./HomeElements";

import { homeDatas } from "./../../data";

import StoriesSection from "../../components/StoriesSection";
import FeaturesSection from "../../components/FeaturesSection";

// TODOS - FIX SVG LINKS, FIX ROUTING TO SPECIFIC PAGES, FIX FRAMER MOTION-SCROLL-TO-TOP RELOADING ISSUE

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledContainer>
        {homeDatas.map((homeData) => {
          return (
            <StyledHero key={homeData.id} direction={homeData.direction}>
              {homeData.id === 1 && <StyledGradientLine />}

              {homeData.id === 2 ? (
                <>
                  <StyledHeroImg
                    desktopBackground={homeData.desktopImage}
                    tabletBackground={homeData.tabletImage}
                    mobileBackground={homeData.mobileImage}
                  />
                  <StyledHeroTextWrapper color={homeData.textWrapper}>
                    <StyledH1 color={homeData.h1color}>
                      {homeData.title}
                    </StyledH1>
                    <StyledP>{homeData.body}</StyledP>
                    <StyledRightWrapper
                      color={homeData.rightWrapperColor}
                      to={homeData.route}
                    >
                      <StyledH4>{homeData.linkText}</StyledH4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="14"
                      >
                        <g
                          fill="none"
                          fillRule="evenodd"
                          stroke={homeData.svgStrokeColor}
                        >
                          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                        </g>
                      </svg>
                    </StyledRightWrapper>
                  </StyledHeroTextWrapper>
                </>
              ) : (
                <>
                  <StyledHeroTextWrapper color={homeData.textWrapper}>
                    <StyledH1 color={homeData.h1color}>
                      {homeData.title}
                    </StyledH1>
                    <StyledP>{homeData.body}</StyledP>
                    <StyledRightWrapper
                      color={homeData.rightWrapperColor}
                      to="/"
                    >
                      <StyledH4>{homeData.linkText}</StyledH4>
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        width="43"
                        height="14"
                      >
                        <g
                          fill="none"
                          fillRule="evenodd"
                          stroke={homeData.svgStrokeColor}
                        >
                          <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                        </g>
                      </svg>
                    </StyledRightWrapper>
                  </StyledHeroTextWrapper>
                  <StyledHeroImg
                    desktopBackground={homeData.desktopImage}
                    tabletBackground={homeData.tabletImage}
                    mobileBackground={homeData.mobileImage}
                  />
                </>
              )}
            </StyledHero>
          );
        })}
        <StoriesSection />
        <FeaturesSection />
      </StyledContainer>
    </motion.div>
  );
};

export default Home;
