import { StyledFooter, StylingPicture, Wrapper, PictureImage } from "./styled";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Socials from "./Socials";
import useInViewAnimation from "../useInViewAnimation";
import { motion } from "framer-motion";

const footerVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 50,
      bounce: 1,
      mass: 1,
      delay: 0.1,
    },
  },
};

const Footer = () => {
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <>
      <StylingPicture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/assets/images/bg-footer-top-mobile.svg`}
          media="(max-width: 767px)"
        />
        <PictureImage
          src={`${process.env.PUBLIC_URL}/assets/images/bg-footer-top-desktop.svg`}
          alt=""
        />
      </StylingPicture>
      <StyledFooter>
        <Wrapper
          as={motion.div}
          ref={ref}
          variants={footerVariants}
          initial="hidden"
          animate={animation}
        >
          <Contact />
          <Newsletter />
          <Socials />
        </Wrapper>
      </StyledFooter>
    </>
  );
};

export default Footer;
