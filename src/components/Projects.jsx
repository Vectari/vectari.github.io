import styled from "styled-components";
import { Theme } from "../Theme";

const ProjectsWrapper = styled.div`
  text-align: center;
`;

const StyledH1 = styled.h1`
  padding: 15px 0 10px 0;
  /* border-top: 1px solid ${Theme.colors.secondary}; */
  background-image: linear-gradient(
    to right,
    ${Theme.colors.accent_opacity},
    ${Theme.colors.accent2_opacity}
  );
  border-radius: 30px;
  max-width: max-content;
  padding: 15px;
  margin-bottom: 10px;
`;

const StyledImg = styled.img`
  border: 2px solid white;
  border-radius: 10px;
  padding: 20px;
  margin: 10px;
  transition: 0.3s;

  &:hover {
    background-color: ${Theme.colors.hover};
    border: 2px solid ${Theme.colors.hover};
  }

  @media only screen and (max-width: ${Theme.width.tablet}) {
    padding: 10px;
    margin: 5px;
  }
`;

export function Projects() {
  return (
    <>
      <ProjectsWrapper>
        <StyledH1>🔧 Key Projects</StyledH1>
        <a href="https://www.serduszkadwa.pl/" target="_blank" rel="noreferrer">
          <StyledImg src="/serduszkadwa.svg" alt="serduszkadwa logo" />
        </a>
        <a
          href="https://gamepad-tester.vercel.app/"
          target="_blank"
          rel="noreferrer"
        >
          <StyledImg src="/gamepadtester.svg" alt="gamepadtester logo" />
        </a>
        <a
          href="https://github.com/intive/patronage2023-js"
          target="_blank"
          rel="noreferrer"
        >
          <StyledImg src="/inbudget.svg" alt="inbudget logo" />
        </a>
        <a
          href="https://github.com/Vectari/Jamming"
          target="_blank"
          rel="noreferrer"
        >
          <StyledImg src="/jamming.svg" alt="jamming logo" />
        </a>
        <a href="https://github.com/Vectari" target="_blank" rel="noreferrer">
          <StyledImg src="/moreongithub.svg" alt="moreongithub logo" />
        </a>
      </ProjectsWrapper>
    </>
  );
}
