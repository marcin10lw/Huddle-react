import { StyledMain } from "./styled";
import Hero from "./Hero";
import Articles from "./Articles";
import Ready from "./Ready";
import Statistics from "./Statistics.js";

const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <Statistics />
      <Articles />
      <Ready />
    </StyledMain>
  );
};

export default Main;
