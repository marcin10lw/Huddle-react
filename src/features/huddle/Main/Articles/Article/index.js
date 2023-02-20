import { StyledArticle, Info } from "./styled";

const Article = ({ heading, text, image, alt }) => {
  return (
    <StyledArticle>
      <img src={image} alt={alt} />
      <Info>
        <h2>{heading}</h2>
        <p>{text}</p>
      </Info>
    </StyledArticle>
  );
};

export default Article;
