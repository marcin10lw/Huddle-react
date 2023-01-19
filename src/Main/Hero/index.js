import { StyledHero } from "./styled";
import { Button } from "../../Button/styled";
import Statistics from "../Statistics.js";

const Hero = () => {
  return (
    <StyledHero>
      <h1>Build The Community Your Fans Will Love</h1>
      <p>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </p>
      <Button inMain>Get Started For Free</Button>
      <img
        src={`${process.env.PUBLIC_URL}/assets/images/screen-mockups.svg`}
        alt="mockup"
      />
      <Statistics />
    </StyledHero>
  );
};

export default Hero;
