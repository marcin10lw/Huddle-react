import { motion } from "framer-motion";

import Button from "features/huddle/Button";
import useInViewAnimation from "features/huddle/useInViewAnimation";
import { Wrapper, ReadyHeader } from "./styled";

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
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <Wrapper
      as={motion.section}
      ref={ref}
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
