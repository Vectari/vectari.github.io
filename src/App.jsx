import styled, { keyframes } from "styled-components";
import { Header } from "./components/Header";
import { Info } from "./components/Info";
import { Projects } from "./components/Projects";
import { Contact } from "./components/Contact";
import { Technologies } from "./components/Technologies";

const bodyup = keyframes`
  0% {
    transform: translateY(1000px);
    opacity: 0;
  }

  70% {
    transform: translateY(1000px);
    opacity: 0;
  }

  100% {
    transform: translateY(0);
    opacity: 1;
  }
`;

const StyledBody = styled.div`
  animation: ${bodyup} 3s;
`;

const contactup = keyframes`
    0% {
    opacity: 0;
  }

  70% {
    opacity: 0;
  }

  100% {
    opacity: 1;
  }
`;

const StyledContactUp = styled.div`
  animation: ${contactup} 3.5s;
`;

function App() {
  return (
    <>
      <Header />

      <StyledBody>
        <Info />
        <Technologies />
        <Projects />
      </StyledBody>
      <StyledContactUp>
        <Contact />
      </StyledContactUp>
    </>
  );
}

export default App;

// TEST
