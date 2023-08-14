import { motion } from "framer-motion";

import { StyledButton } from "./styled";

const Button = ({ content, location }) => {
  return (
    <StyledButton
      as={motion.button}
      whileHover={{ scale: 1.05 }}
      whileTap={{ scale: 0.95 }}
      transition={{ type: "spring", stiffness: 200, damping: 20 }}
      location={location}
    >
      {content}
    </StyledButton>
  );
};

export default Button;
