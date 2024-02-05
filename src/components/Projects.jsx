import styled from "styled-components";
import { Theme } from "../Theme";

const ProjectsWrapper = styled.div`
  text-align: center;
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
        <h1>Projects</h1>
        <StyledImg src="/serduszkadwa.svg" alt="serduszkadwa logo" />
        <StyledImg src="/gamepadtester.svg" alt="gamepadtester logo" />
        <StyledImg src="/inbudget.svg" alt="inbudget logo" />
        <StyledImg src="/jamming.svg" alt="jamming logo" />
        <a href="https://github.com/Vectari">
          <StyledImg src="/moreongithub.svg" alt="moreongithub logo" />
        </a>
      </ProjectsWrapper>
    </>
  );
}
