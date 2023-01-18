import { StyledHeader, Logo } from "./styled";
import { Button } from "../Button/styled";

const Header = () => {
  return (
    <StyledHeader>
      <Logo
        src={`${process.env.PUBLIC_URL}/assets/images/logo.svg`}
        alt="logo"
      />
      <Button inHeader>Try It Free</Button>
    </StyledHeader>
  );
};

export default Header;
