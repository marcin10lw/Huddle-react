import { StyledMain } from "./styled";
import Hero from "./Hero";
import Sections from "./Articles";
import Ready from "./Ready";

const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <Sections />
      <Ready />
    </StyledMain>
  );
};

export default Main;
