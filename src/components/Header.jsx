import styled from "styled-components";
import { Theme } from "../Theme";

const StyledH1 = styled.h1`
  color: ${Theme.colors.testgold};
`;

const StyledH2 = styled.h2`
  color: ${Theme.colors.testpink};
`;

export function Header() {
  return (
    <>
      <StyledH1>Hello there!</StyledH1>
      <StyledH2>My name is Mateusz 🖖</StyledH2>
      <h3>Aspiring Junior React Developer</h3>
    </>
  );
}
