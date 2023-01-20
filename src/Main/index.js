import { StyledMain } from "./styled";
import Hero from "./Hero";
import Sections from "./Articles";
import { Button } from "../Button/styled";

const Main = () => {
  return (
    <StyledMain>
      <Hero />
      <Sections />
    </StyledMain>
  );
};

export default Main;
