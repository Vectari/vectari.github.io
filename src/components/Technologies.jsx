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
      <ul>
        <RiJavascriptLine />
        <TbBrandTypescript />
        <FaReact />
        <SiNextdotjs />
        <SiStyledcomponents />
        <li>REST API</li>
        <BiLogoGit />
        <BiLogoGithub />
      </ul>
      <h1>Secondary Technologies</h1>
      <ul>
        <li>Linux</li>
        <li>jotai</li>
        <li>Storybook</li>
        <li>styled-components</li>
        <li>Git</li>
        <li>GitHub</li>
      </ul>
      <h1>Soft Skills</h1>
      <ul>
        <li>Communication</li>
        <li>Self-organizing</li>
      </ul>
      <h1>Languages</h1>
      <ul>
        <li>ENG</li>
        <li>PL</li>
      </ul>
    </>
  );
}
