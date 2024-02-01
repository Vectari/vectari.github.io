import styled from "styled-components";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

const TechnologiesWrapper = styled.div`
  text-align: center;
`;

const StyledLogo = styled.span`
  padding-right: 25px;
  font-size: 50px;
`;

export function Technologies() {
  return (
    <>
      <TechnologiesWrapper>
        <h1>Main Technologies</h1>
        <div>
          <StyledLogo>
            <SiJavascript />
          </StyledLogo>
          <StyledLogo>
            <SiTypescript />
          </StyledLogo>
          <StyledLogo>
            <FaReact />
          </StyledLogo>
          <StyledLogo>
            <SiNextdotjs />
          </StyledLogo>
        </div>
        <div>
          <StyledLogo>
            <SiStyledcomponents />
          </StyledLogo>
          <StyledLogo>
            <BiLogoGit />
          </StyledLogo>
          <StyledLogo>
            <BiLogoGithub />
          </StyledLogo>
        </div>

        <h1>Secondary Technologies</h1>
        <div>
          <p>REST API</p>
          <p>pnux</p>
          <p>jotai</p>
          <p>Storybook</p>
          <p>styled-components</p>
          <p>Git</p>
          <p>GitHub</p>
        </div>
        <h1>Soft Skills</h1>
        <div>
          <p>Communication</p>
          <p>Self-organizing</p>
        </div>
        <h1>Languages</h1>
        <div>
          <p>ENG</p>
          <p>PL</p>
        </div>
      </TechnologiesWrapper>
    </>
  );
}
