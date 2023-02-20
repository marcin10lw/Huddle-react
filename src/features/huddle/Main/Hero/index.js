import { StyledHero, HeroHeader, HeroText, HeroImage } from "./styled";
import { Button } from "../../Button";
import Statistics from "./Statistics.js";

const Hero = () => {
  return (
    <StyledHero>
      <HeroHeader>Build The Community Your Fans Will Love</HeroHeader>
      <HeroText>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </HeroText>
      <Button inMain>Get Started For Free</Button>
      <HeroImage
        src={`${process.env.PUBLIC_URL}/assets/images/screen-mockups.svg`}
        alt="mockup"
      />
      <Statistics />
    </StyledHero>
  );
};

export default Hero;
