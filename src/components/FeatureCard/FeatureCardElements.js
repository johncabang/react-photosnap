import styled from "styled-components";

export const StyledCard = styled.div`
  display: flex;
  justify-content: center;
  flex-direction: column;
  text-align: center;
  width: 340px;
  height: 236px;
  margin: 100px 20px;

  @media screen and (max-width: 1024px) {
    width: 100%;
    padding: 0 250px;
  }

  @media screen and (max-width: 768px) {
    width: 100%;
    padding: 0 50px;
  }
`;

export const StyledCardWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const StyledImageContainer = styled.div`
  display: flex;
  justify-content: center;
  /* align-items: center; */
  padding-bottom: 50px;
  height: 150px;
`;

export const StyledImage = styled.img`
  /* width: 72px; */
  object-fit: none;
`;

export const StyledH3 = styled.h3`
  padding-bottom: 20px;
`;

export const StyledP = styled.p`
  color: #gray;
`;
