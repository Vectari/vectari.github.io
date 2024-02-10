import styled from "styled-components";
import { Theme } from "../Theme";

const StyledInfo = styled.p`
  font-size: 22px;
  text-align: center;
  padding-bottom: 30px;
  @media only screen and (max-width: ${Theme.width.tablet}) {
    font-size: 18px;
  }
`;

export function Info() {
  return (
    <>
      <StyledInfo>
        I&lsquo;m a passionate Frontend Developer on a journey of continuous
        learning and exploration since 2022. My primary focus is on mastering
        React, but I am always excited to embrace new challenges and expand my
        skill set.
        <br />
        <br />I had the opportunity to create a website for the real company
        &ldquo;Matchmaking Office Serduszka Dwa&ldquo; and contributing to the
        internship project &ldquo;inbudget - budget control application&ldquo;
        in intive Patronage 2023.
      </StyledInfo>
    </>
  );
}

// &ldquo;
