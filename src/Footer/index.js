import { StyledFooter, StylingPicture, Wrapper } from "./styled";
import Contact from "./Contact";
import Newsletter from "./Newsletter";

const Footer = () => {
  return (
    <>
      <StylingPicture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/assets/images/bg-footer-top-mobile.svg`}
          media="(max-width: 767px)"
        />
        <img
          src={`${process.env.PUBLIC_URL}/assets/images/bg-footer-top-desktop.svg`}
          alt=""
        />
      </StylingPicture>
      <StyledFooter>
        <Wrapper>
          <Contact />
          <Newsletter />
        </Wrapper>
      </StyledFooter>
    </>
  );
};

export default Footer;
