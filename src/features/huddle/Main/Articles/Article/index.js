import {
  StyledArticle,
  Info,
  ListItem,
  ArticleImage,
  ArticleHeader,
  ArticleText,
} from "./styled";

const Article = ({ heading, text, image, alt }) => {
  return (
    <ListItem>
      <StyledArticle>
        <ArticleImage src={image} alt={alt} />
        <Info>
          <ArticleHeader>{heading}</ArticleHeader>
          <ArticleText>{text}</ArticleText>
        </Info>
      </StyledArticle>
    </ListItem>
  );
};

export default Article;
