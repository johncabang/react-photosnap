import styled from "styled-components";
import { Link } from "react-router-dom";

export const StyledCard = styled(Link)`
  flex: 1 0 auto;
  width: 25%;
  height: 500px;
  position: relative;
  top: 0;
  transition: top ease 0.5s;

  &:hover {
    background-color: #000;
    cursor: pointer;
    top: -25px;
    border-bottom: 5px solid transparent;
    border-image: linear-gradient(to right, #ffc593, #bc7198, #5a77ff);
    border-image-slice: 1;
    transition: top ease 0.5s;
  }

  @media screen and (max-width: 1024px) {
    width: 50%;
    transition: ease-in 0.5s;
  }

  @media screen and (max-width: 720px) {
    width: 100%;
    min-width: auto;
    position: static;
  }
`;

export const StyledCardImage = styled.div`
  width: 100%;
  height: 100%;
  background: linear-gradient(
      to bottom,
      rgba(0, 0, 0, 0) 20%,
      rgba(0, 0, 0, 0.8)
    ),
    ${(props) => `url(${props.desktopCardBackground})`};
  background-size: cover;
`;

export const StyledTextWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
  flex-direction: column;
  height: 100%;
  padding: 40px;
`;

export const StyledH3 = styled.h3`
  color: #fff;
`;

export const StyledP = styled.p`
  color: #fff;
  font-size: 13px;
`;

export const StyledLine = styled.div`
  height: 2px;
  background-color: #979797;
  opacity: 30%;
  margin: 20px 0;
`;

export const StyledReadStoryWrapper = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const StyledH4 = styled.h4`
  text-transform: uppercase;
  color: #fff;
`;
