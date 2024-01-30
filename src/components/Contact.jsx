import styled from "styled-components";
import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";
import { Theme } from "../Theme";

const ContactWrapper = styled.div`
  background-color: ${Theme.colors.maintext};
  color: ${Theme.colors.background};
  font-size: 24px;
`;

export function Contact() {
  return (
    <ContactWrapper>
      <BsFillTelephoneFill />
      <FaMapLocationDot />
      <MdOutlineAlternateEmail />
      <CiLinkedin />
      <BiLogoGithub />
    </ContactWrapper>
  );
}
