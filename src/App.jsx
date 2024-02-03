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

function App() {
  return (
    <>
      <Contact />
      <Header />
      <StyledBody>
        <Info />
        <Technologies />
        <Projects />
      </StyledBody>
    </>
  );
}

export default App;
