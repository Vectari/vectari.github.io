import styled from "styled-components";
import { Theme } from "../Theme";

const StyledH1 = styled.h1`
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
  /* box-shadow: 10px 5px 5px red; */
`;

export function Header() {
  return (
    <>
      <StyledH1>Hello there!</StyledH1>
      <StyledH2>My name is Mateusz 🖖</StyledH2>
      <StyledH3>Aspiring Junior React Developer</StyledH3>
      <StyledImg src="/myphoto.jpg" alt="Mateusz Majer's photo" />
      <StyledImg src="/myphotonobg.PNG" alt="Mateusz Majer's photo no background" />
    </>
  );
}
