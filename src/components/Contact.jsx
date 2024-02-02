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
  text-align: center;
  width: 50px;
  height: auto;
  background-color: ${Theme.colors.secondaryTransparent};
  color: ${Theme.colors.maintext};
  border-radius: 10px;
  position: fixed;
  bottom: 20px;
  right: 10px;

  &:hover {
    background-color: ${Theme.colors.secondary};
    text-align: left;
    width: 270px;
  }
`;
const NavItem = styled.a`
  font-size: 20px;
  display: block;
  padding: 10px;
  color: ${Theme.colors.maintext};
  text-decoration: none;
  overflow: hidden;

  &:hover {
    background-color: ${Theme.colors.hover};
    &:first-child {
      border-radius: 10px 10px 0 0;
    }

    &:last-child {
      border-radius: 0 0 10px 10px;
    }
  }
`;

const HoverText = styled.span`
  display: none;

  ${Sidebar}:hover & {
    display: inline;
    user-select: auto;
    padding-left: 15px;
    font-size: 15px;
  }
`;

export function Contact() {
  const email = "mateusz.majer996@gmail.com";
  const mailtoLink = `mailto:${email}`;

  const phone = "+48 721 072 731";
  const callTo = `callto:${phone}`;

  return (
    <Wrapper>
      <Sidebar>
        <NavItem href={callTo}>
          <BsFillTelephoneFill />
          <HoverText>+48 721 072 731</HoverText>
        </NavItem>
        <NavItem>
          <FaMapLocationDot />
          <HoverText>Poznań, Poland</HoverText>
        </NavItem>
        <NavItem href={mailtoLink}>
          <MdOutlineAlternateEmail />
          <HoverText>mateusz.majer996@gmail.com</HoverText>
        </NavItem>
        <NavItem href="https://www.linkedin.com/in/mateusz-majer/">
          <CiLinkedin />
          <HoverText>linkedin.com/in/mateusz-majer/</HoverText>
        </NavItem>
        <NavItem href="https://github.com/Vectari">
          <BiLogoGithub />
          <HoverText>github.com/Vectari</HoverText>
        </NavItem>
      </Sidebar>
    </Wrapper>
  );
}
