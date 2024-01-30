import { RiJavascriptLine } from "react-icons/ri";
import { TbBrandTypescript } from "react-icons/tb";
import { FaReact } from "react-icons/fa";
import { SiNextdotjs } from "react-icons/si";
import { SiStyledcomponents } from "react-icons/si";
import { BiLogoGit } from "react-icons/bi";
import { BiLogoGithub } from "react-icons/bi";

export function Technologies() {
  return (
    <>
      <h1>Main Technologies</h1>
      <div>
        <RiJavascriptLine />
        <TbBrandTypescript />
        <FaReact />
        <SiNextdotjs />
        <SiStyledcomponents />
        <span>REST API</span>
        <BiLogoGit />
        <BiLogoGithub />
      </div>
      <h1>Secondary Technologies</h1>
      <div>
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
    </>
  );
}
