import { motion } from "framer-motion";

import Button from "../Button";
import { StyledHeader, Logo, HeaderLink } from "./styled";

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
      <HeaderLink href="#">
        <Logo
          src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
          alt="logo"
        />
      </HeaderLink>
      <Button content="Try It Free" location="header"></Button>
    </StyledHeader>
  );
};

export default Header;
