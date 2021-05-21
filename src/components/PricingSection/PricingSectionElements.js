import styled from "styled-components";

export const StyledContainer = styled.div`
  display: flex;
  justify-content: center;
  flex-wrap: wrap;
  flex-direction: column;
  text-align: center;
  margin: 100px 0;
`;

export const StyledCardContainer = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 165px;
`;

export const StyledButton = styled.button`
  background-color: #000;
  color: #fff;
  text-align: center;
  border: none;
  cursor: pointer;
  width: 100%;
  height: 40px;
`;

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  width: 350px;
  height: 407px;
  padding: 45px;
  background-color: #979797;
  transition: ease 0.3s;

  &:hover {
    background-color: #000;
    color: #fff;
    transform: translate3D(0, -1px, 0) scale(1.11);
    border-top: 5px solid transparent;
    border-image: linear-gradient(to right, #ffc593, #bc7198, #5a77ff);
    border-image-slice: 1;
    ${StyledButton} {
      background-color: #fff;
      color: #000;
    }
  }
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledH3 = styled.h3`
  padding-bottom: 20px;
`;

export const StyledP = styled.p`
  padding-bottom: 30px;
`;
