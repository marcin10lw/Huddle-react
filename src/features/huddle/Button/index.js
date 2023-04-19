import { motion } from "framer-motion";
import { StyledButton } from "./styled";

const Button = ({ content, location }) => {
  return (
    <StyledButton
      as={motion.button}
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.9 }}
      transition={{ type: "spring", stiffness: 100, damping: 10 }}
      location={location}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
