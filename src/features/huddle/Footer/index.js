import { StyledFooter, StylingPicture, Wrapper, PictureImage } from "./styled";
import Contact from "./Contact";
import Newsletter from "./Newsletter";
import Socials from "./Socials";

const Footer = () => {
  return (
    <>
      <StylingPicture>
        <source
          srcSet={`${process.env.PUBLIC_URL}/assets/images/bg-footer-top-mobile.svg`}
          media="(max-width: 767px)"
        />
        <PictureImage
          src={`${process.env.PUBLIC_URL}/assets/images/bg-footer-top-desktop.svg`}
          alt=""
        />
      </StylingPicture>
      <StyledFooter>
        <Wrapper>
          <Contact />
          <Newsletter />
          <Socials />
        </Wrapper>
      </StyledFooter>
    </>
  );
};

export default Footer;
