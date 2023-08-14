import { useState } from "react";
import { motion } from "framer-motion";

import {
  StyledHero,
  HeroHeader,
  HeroText,
  HeroImage,
  ImagePlaceholder,
} from "./styled";
import Button from "features/huddle/Button";

const heroVariants = {
  hidden: {
    opacity: 0,
    y: 40,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 1,
      delay: 0.4,
      ease: "easeInOut",
    },
  },
};

const Hero = () => {
  const [imageLoaded, setImageLoaded] = useState(false);

  return (
    <StyledHero
      as={motion.section}
      variants={heroVariants}
      initial="hidden"
      animate="visible"
    >
      <HeroHeader>Build The Community Your Fans Will Love</HeroHeader>
      <HeroText>
        Huddle re-imagines the way we build communities. You have a voice, but
        so does your audience. Create connections with your users as you engage
        in genuine discussion.
      </HeroText>
      <Button content="Get Started For Free" location="main"></Button>
      <HeroImage
        onLoad={() => setImageLoaded(true)}
        src={`${process.env.PUBLIC_URL}/assets/images/screen-mockups.svg`}
        alt="mockup"
      />
      {!imageLoaded && <ImagePlaceholder />}
    </StyledHero>
  );
};

export default Hero;
