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

import createDesktop from "../../assets/home/desktop/create-and-share.jpg";
import createTablet from "../../assets/home/tablet/create-and-share.jpg";
import createMobile from "../../assets/home/mobile/create-and-share.jpg";

import beautifulDesktop from "../../assets/home/desktop/beautiful-stories.jpg";
import beautifulTablet from "../../assets/home/tablet/beautiful-stories.jpg";
import beautifulMobile from "../../assets/home/mobile/beautiful-stories.jpg";

import designedDesktop from "../../assets/home/desktop/designed-for-everyone.jpg";
import designedTablet from "../../assets/home/tablet/designed-for-everyone.jpg";
import designedMobile from "../../assets/home/mobile/designed-for-everyone.jpg";
import StoriesSection from "../../components/StoriesSection";
import FeaturesSection from "../../components/FeaturesSection";

const Home = () => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5 }}
    >
      <StyledContainer>
        <StyledHero direction={`column-reverse`}>
          <StyledGradientLine />
          <StyledHeroTextWrapper color={`#000`}>
            <StyledH1 color={`#fff`}>
              Create and <br />
              share your <br />
              photo stories.
            </StyledH1>
            <StyledP>
              Photosnap is a platform for photographers and visual storytellers.
              We make it easy to share photos, tell stories and connect with
              others.
            </StyledP>
            <StyledRightWrapper color={`#fff`}>
              <StyledH4>Get an invite </StyledH4>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#fff">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </StyledRightWrapper>
          </StyledHeroTextWrapper>
          <StyledHeroImg
            desktopBackground={createDesktop}
            tabletBackground={createTablet}
            mobileBackground={createMobile}
          />
        </StyledHero>

        <StyledHero direction={`column`}>
          <StyledHeroImg
            desktopBackground={beautifulDesktop}
            tabletBackground={beautifulTablet}
            mobileBackground={beautifulMobile}
          />
          <StyledHeroTextWrapper color={`#fff`}>
            <StyledH1 color={`#000`}>
              Beautiful <br />
              Stories <br />
              every time.
            </StyledH1>
            <StyledP>
              We provide design templates to ensure your stories look terrific.
              Easily add photos, text, embed maps and media from other networks.
              Then share your story with everyone.
            </StyledP>
            <StyledRightWrapper color={`#000`}>
              <StyledH4>View the stories </StyledH4>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#000">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </StyledRightWrapper>
          </StyledHeroTextWrapper>
        </StyledHero>

        <StyledHero direction={`column-reverse`}>
          <StyledHeroTextWrapper color={`#fff`}>
            <StyledH1 color={`#000`}>
              Designed for <br />
              everyone.
            </StyledH1>
            <StyledP>
              Photosnap can help you create stories that resonate with your
              audience. Our tool is designed for photographers of all levels,
              brands, businesses you name it.
            </StyledP>
            <StyledRightWrapper color={`#000`}>
              <StyledH4>View the stories </StyledH4>
              <svg xmlns="http://www.w3.org/2000/svg" width="43" height="14">
                <g fill="none" fillRule="evenodd" stroke="#000">
                  <path d="M0 7h41.864M35.428 1l6 6-6 6" />
                </g>
              </svg>
            </StyledRightWrapper>
          </StyledHeroTextWrapper>
          <StyledHeroImg
            desktopBackground={designedDesktop}
            tabletBackground={designedTablet}
            mobileBackground={designedMobile}
          />
        </StyledHero>
        <StoriesSection />
        <FeaturesSection />
      </StyledContainer>
    </motion.div>
  );
};

export default Home;
