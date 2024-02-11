import styled from "styled-components";
import { SiJavascript } from "react-icons/si";
import { SiTypescript } from "react-icons/si";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";
import { Theme } from "../Theme";

const TechnologiesWrapper = styled.div`
  text-align: center;
`;

const LogoWrapper = styled.div`
  display: flex;
  margin: 20px 0;
`;

const StyledLogo = styled.span`
  padding-right: 25px;
  font-size: 35px;
  color: ${Theme.colors.hover};
  @media only screen and (max-width: ${Theme.width.tablet}) {
    font-size: 25px;
  }

  &:hover {
    scale: calc(1.3);
    transition: 0.5s;
    color: ${Theme.colors.maintext};
  }
`;

const StyledH1 = styled.h1`
  padding: 15px 0 10px 0;
  border-top: 1px solid ${Theme.colors.secondary};
`;

const StyledTable = styled.table`
  font-size: 20px;
  @media only screen and (max-width: ${Theme.width.tablet}) {
    font-size: 16px;
  }
`;

const StyledTr = styled.tr``;

const StyledTd = styled.td`
  padding: 10px 0px 10px 15px;
  text-align: left;
`;

const StyledLeftSide = styled.div`
  font-weight: bold;
  text-align: right;
  color: ${Theme.colors.hover};
`;

export function Technologies() {
  return (
    <>
      <TechnologiesWrapper>
        <LogoWrapper>
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
          <StyledLogo>
            <SiStyledcomponents />
          </StyledLogo>
          <StyledLogo>
            <BiLogoGit />
          </StyledLogo>
          <StyledLogo>
            <BiLogoGithub />
          </StyledLogo>
        </LogoWrapper>
        <StyledH1>🛠️ Technology Stack</StyledH1>

        <StyledTable>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Languages:</StyledLeftSide>
            </StyledTd>
            <StyledTd>JavaScript, TypeScript</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Libraries/Frameworks:</StyledLeftSide>
            </StyledTd>
            <StyledTd>React.js, Next.js</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Styling:</StyledLeftSide>
            </StyledTd>
            <StyledTd>CSS, styled-components</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>State Management:</StyledLeftSide>
            </StyledTd>
            <StyledTd>jotai</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Storytelling:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Storybook</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Version Control:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Git, GitHub</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>APIs:</StyledLeftSide>
            </StyledTd>
            <StyledTd>REST API</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Others:</StyledLeftSide>
            </StyledTd>
            <StyledTd>HTML5, Linux</StyledTd>
          </StyledTr>
        </StyledTable>
        <StyledH1>🤝 Soft Skills</StyledH1>
        <StyledTable>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Communication:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Clear and effective communication.</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Respectfulness:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Valuing diverse perspectives.</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Collaboration Skills:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Thriving in a team-oriented environment.</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Self-Organizing:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Efficiently managing tasks and deadlines.</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Creativity:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Bringing innovative solutions to the table.</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Analytical Thinking:</StyledLeftSide>
            </StyledTd>
            <StyledTd>
              Tackling challenges with a problem-solving mindset.
            </StyledTd>
          </StyledTr>
        </StyledTable>
        <StyledH1>🙋‍♂️ About Me</StyledH1>
        <StyledTable>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Nature Lover:</StyledLeftSide>
            </StyledTd>
            <StyledTd>
              Enjoying the tranquility of the forest, ideally in a hammock with
              a captivating non-fiction book (or an elf novel for a change).
            </StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Music Enthusiast:</StyledLeftSide>
            </StyledTd>
            <StyledTd>
              Playing the drums and guitar, and immersing myself in the world of
              loud scream music.
            </StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Coffee Aficionado:</StyledLeftSide>
            </StyledTd>
            <StyledTd>
              Ever since my first &ldquo; Hello world&ldquo;, coffee has been my
              loyal companion.
            </StyledTd>
          </StyledTr>
        </StyledTable>
        <StyledH1>🌐 Languages</StyledH1>
        <StyledTable>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>Polish:</StyledLeftSide>
            </StyledTd>
            <StyledTd>Native</StyledTd>
          </StyledTr>
          <StyledTr>
            <StyledTd>
              <StyledLeftSide>English:</StyledLeftSide>
            </StyledTd>
            <StyledTd>B2</StyledTd>
          </StyledTr>
        </StyledTable>
      </TechnologiesWrapper>
    </>
  );
}
