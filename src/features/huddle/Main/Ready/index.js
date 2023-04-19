import { Wrapper, ReadyHeader } from "./styled";
import Button from "../../Button";
import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

const readyVariants = {
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

const Ready = () => {
  const statisticRef = useRef(null);
  const inView = useInView(statisticRef, { amount: 0.7, once: false });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <Wrapper
      as={motion.section}
      ref={statisticRef}
      variants={readyVariants}
      initial="hidden"
      animate={animation}
    >
      <ReadyHeader>Ready To Build Your Community?</ReadyHeader>
      <Button content="Get Started For Free" location="main" />
    </Wrapper>
  );
};

export default Ready;
