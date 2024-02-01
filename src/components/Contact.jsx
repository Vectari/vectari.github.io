import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";
import { Theme } from "../Theme";
// import { Theme } from "../Theme";

// const ContactWrapper = styled.div`
//   background-color: ${Theme.colors.maintext};
//   color: ${Theme.colors.background};
//   display: block;
//   width: 100px;

//   :hover {
//   }
// `;

const Wrapper = styled.div`
  display: flex;
`;
const Sidebar = styled.nav`
  width: 40px;
  height: 200px;
  background-color: ${Theme.colors.secondary};
  color: ${Theme.colors.maintext};
  border-radius: 10px;
  position: fixed;
  bottom: 20px;
  right: 10px;
  &:hover {
    width: 140px;
  }
`;
const NavItem = styled.a`
  display: block;
  padding: 10px;
  color: ${Theme.colors.maintext};
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background-color: ${Theme.colors.hover};
    border-radius: 10px;
  }
`;

export function Contact() {
  return (
    <Wrapper>
      <Sidebar>
        <NavItem href="">
          <BsFillTelephoneFill />
        </NavItem>
        <NavItem href="">
          <FaMapLocationDot />
        </NavItem>
        <NavItem href="">
          <MdOutlineAlternateEmail />
        </NavItem>
        <NavItem href="">
          <CiLinkedin />
        </NavItem>
        <NavItem href="">
          <BiLogoGithub />
        </NavItem>
      </Sidebar>
    </Wrapper>
  );
}
