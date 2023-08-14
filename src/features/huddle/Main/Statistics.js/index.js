import { motion } from "framer-motion";

import Statictic from "./Statistic";
import useInViewAnimation from "features/huddle/useInViewAnimation";
import { StyledStatistics } from "./styled";

const statisticVariants = {
  hidden: {
    opacity: 0,
    scale: 0.8,
  },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      type: "spring",
      stiffness: 60,
      bounce: 0.25,
      mass: 0.7,
      delay: 0.1,
    },
  },
};

const Statistics = () => {
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <StyledStatistics
      ref={ref}
      as={motion.section}
      variants={statisticVariants}
      initial="hidden"
      animate={animation}
    >
      <Statictic
        image={`${process.env.PUBLIC_URL}/assets/images/icon-communities.svg`}
        alt="communities"
        amount={1.4}
        prefix="k+"
        operation="Communities Formed"
      />
      <Statictic
        image={`${process.env.PUBLIC_URL}/assets/images/icon-messages.svg`}
        alt="messages"
        amount={2.7}
        prefix="m+"
        operation="Messages Sent"
      />
    </StyledStatistics>
  );
};

export default Statistics;
