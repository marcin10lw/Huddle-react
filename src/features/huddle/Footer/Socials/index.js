import { StyledSocials } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";
import { motion } from "framer-motion";
import useInViewAnimation from "../../useInViewAnimation";

const socialsVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
    transition: {
      when: "beforeChildren",
      staggerChildren: 0.5,
    },
  },
};

const linkVariants = {
  hidden: { opacity: 0, x: "-20vw", transition: { duration: 0.4 } },
  visible: {
    opacity: 1,
    x: 0,
    transition: { type: "spring", stiffness: 300, damping: 24 },
  },
};

const Socials = () => {
  const { animation, ref } = useInViewAnimation(0.4);

  return (
    <StyledSocials
      ref={ref}
      as={motion.section}
      variants={socialsVariants}
      initial="hidden"
      animate={animation}
    >
      <motion.a variants={linkVariants} href="#">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </motion.a>
      <motion.a variants={linkVariants} href="#">
        <FontAwesomeIcon icon={faSquareInstagram} />
      </motion.a>
      <motion.a variants={linkVariants} href="#">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </motion.a>
    </StyledSocials>
  );
};

export default Socials;
