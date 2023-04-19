import { StyledHeader, Logo } from "./styled";
import Button from "../Button";
import { motion } from "framer-motion";

const headerVariants = {
  hidden: {
    opacity: 0,
    y: -20,
  },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      delay: 0.1,
      ease: "easeInOut",
    },
  },
};

const Header = () => {
  return (
    <StyledHeader
      as={motion.header}
      variants={headerVariants}
      initial="hidden"
      animate="visible"
    >
      <Logo
        src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
        alt="logo"
      />
      <Button content="Try It Free" location="header"></Button>
    </StyledHeader>
  );
};

export default Header;
