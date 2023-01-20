import { StyledSection, Info } from "./styled";

const Section = ({ heading, text, image, alt }) => {
  return (
    <StyledSection>
      <img src={image} alt={alt} />
      <Info>
        <h2>{heading}</h2>
        <p>{text}</p>
      </Info>
    </StyledSection>
  );
};

export default Section;
