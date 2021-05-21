import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  margin: 100px 0;
`;

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 165px;

  @media screen and (max-width: 1024px) {
    flex-direction: column;
    justify-content: center;
    margin: 0 auto;
    width: 100%;
  }
`;

export const StyledCardPrice = styled.div`
  display: flex;
  flex-direction: column;

  @media screen and (max-width: 1024px) {
    position: absolute;
    right: 0;
    top: 0;
    margin: 0 20px;
  }

  @media screen and (max-width: 520px) {
    position: static;
    text-align: center;
  }
`;

export const StyledH1 = styled.h1`
  letter-spacing: 4.17;
`;

export const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  text-align: center;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;

  @media screen and (max-width: 1024px) {
    width: 270px;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
  }
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
  position: relative;

  @media screen and (max-width: 1024px) {
    width: 100%;
  }
`;

export const StyledCardTextWrapper = styled.div`
  @media screen and (max-width: 1024px) {
    width: 270px;
  }

  @media screen and (max-width: 520px) {
    width: 100%;
    text-align: center;
  }
`;

export const StyledH3 = styled.h3`
  padding-bottom: 20px;
`;

export const StyledP = styled.p`
  padding-bottom: 30px;
`;

export const StyledSwitch = styled.input`
  appearance: none;
  height: 36px;
  width: 64px;
  background-color: lightgray;
  cursor: pointer;
  border-radius: 100px;
  position: relative;
  transition: background-color 0.3s ease;
  margin: 0 10px;

  &::before {
    content: "";
    height: 32px;
    width: 50%;
    background-color: black;
    position: absolute;
    border-radius: 25px;
    border: lightgray solid 2px;
    transition: transform 0.3s ease, border-color 0.3s ease;
  }

  &:checked {
    background-color: black;
  }

  &:checked::before {
    transform: translateX(78%);
    background-color: white;
    border: black solid 2px;
  }
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 350px;
  height: 407px;
  padding: 45px;
  background-color: #e3e3e3;
  transition: ease 0.6s;

  &:hover {
    background-color: #000;
    color: #e3e3e3;
    transform: translate3D(0, -1px, 0) scale(1.11);
    border-top: 5px solid transparent;
    border-image: linear-gradient(to right, #ffc593, #bc7198, #5a77ff);
    border-image-slice: 1;
    ${StyledButton} {
      background-color: #fff;
      color: #000;
    }
    ${StyledH1} {
      color: #fff;
    }

    ${StyledH3} {
      color: #fff;
    }
  }

  @media screen and (max-width: 1024px) {
    width: 80%;
    margin: 0 auto 60px;
    text-align: left;
    justify-content: flex-start;
    height: 270px;

    &:hover {
      border-top: 0;
      border-left: 5px solid transparent;
      border-image: linear-gradient(to top, #ffc593, #bc7198, #5a77ff);
      border-image-slice: 1;
    }
  }

  @media screen and (max-width: 520px) {
    height: 407px;

    &:hover {
      border-left: 0;
      border-top: 5px solid transparent;
      border-image: linear-gradient(to right, #ffc593, #bc7198, #5a77ff);
      border-image-slice: 1;
    }
  }
`;
