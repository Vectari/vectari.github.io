import { BsFillTelephoneFill } from "react-icons/bs";
import { FaMapLocationDot } from "react-icons/fa6";
import { MdOutlineAlternateEmail } from "react-icons/md";
import { CiLinkedin } from "react-icons/ci";
import { BiLogoGithub } from "react-icons/bi";

export function Contact() {
  return (
    <>
      <h1>Contact</h1>
      <ul>
        <BsFillTelephoneFill />
        <FaMapLocationDot />
        <MdOutlineAlternateEmail />

        <CiLinkedin />

        <BiLogoGithub />
      </ul>
    </>
  );
}
