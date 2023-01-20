import { StyledContact, Logo, Wrapper, Icon, Info } from "./styled";
const Contact = () => {
  return (
    <StyledContact>
      <Logo
        src={`${process.env.PUBLIC_URL}/assets/images/logo-white.svg`}
        alt="logo"
      />
      <p>
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Mauris nulla
        quam, hendrerit lacinia vestibulum a, ultrices quis sem.
      </p>
      <Wrapper>
        <Icon src={`${process.env.PUBLIC_URL}/assets/images/icon-phone.svg`} alt="phone" />
        <Info>Phone: +1-543-123-4567</Info>
      </Wrapper>
      <Wrapper>
        <Icon src={`${process.env.PUBLIC_URL}/assets/images/icon-email.svg`} alt="email" />
        <Info>example@huddle.com</Info>
      </Wrapper>
    </StyledContact>
  );
};

export default Contact;
