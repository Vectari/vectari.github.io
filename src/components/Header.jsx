import styled from "styled-components";
import { Theme } from "../Theme";

const HeaderWrapper = styled.div`
  display: flex;
  min-width: 300px;
  max-width: 780px;
  flex-wrap: wrap;
`;

const TextWrapper = styled.div``;

const ImgWrapper = styled.div``;

const StyledH1 = styled.h1`
  padding-top: 15px;
  text-align: center;
  color: ${Theme.colors.testgold};
`;

const StyledH2 = styled.h2`
  text-align: center;
  color: ${Theme.colors.testpink};
`;

const StyledH3 = styled.h3`
  text-align: center;
  color: ${Theme.colors.testpink};
`;

const StyledImg = styled.img`
  display: block;
  margin-left: auto;
  margin-right: auto;
  width: 150px;
  border-radius: 30px;
  background-color: ${Theme.colors.secondary};
  @media only screen and (max-width: 459px) {
    margin-top: 40px;
  }
`;

const StyledSpan = styled.span`
  font-size: 30px;

  animation-name: wave-animation; /* Refers to the name of your @keyframes element below */
  animation-duration: 2.5s; /* Change to speed up or slow down */
  animation-iteration-count: 3; /* Never stop waving :) */
  transform-origin: 50% 80%; /* Pivot around the bottom-left palm */
  display: inline-block;

  @keyframes wave-animation {
    0% {
      transform: rotate(0deg);
    }
    10% {
      transform: rotate(14deg);
    } /* The following five values can be played with to make the waving more or less extreme */
    20% {
      transform: rotate(-8deg);
    }
    30% {
      transform: rotate(14deg);
    }
    40% {
      transform: rotate(-4deg);
    }
    50% {
      transform: rotate(10deg);
    }
    60% {
      transform: rotate(0deg);
    } /* Reset for the last half to pause */
    100% {
      transform: rotate(0deg);
    }
  }
`;

export function Header() {
  return (
    <HeaderWrapper>
      <TextWrapper>
        <StyledH1>Hello there!</StyledH1>
        <StyledH2>
          My name is Mateusz <StyledSpan>🖖</StyledSpan>
        </StyledH2>
        <StyledH3>Aspiring Junior React Developer</StyledH3>
      </TextWrapper>
      <ImgWrapper>
        <StyledImg
          src="/myphotonobg.PNG"
          alt="Mateusz Majer's photo no background"
        />
      </ImgWrapper>
    </HeaderWrapper>
  );
}
