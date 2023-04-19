import { ArticlesList } from "./styled";
import Article from "./Article";
import { articles } from "./articlesData";

const Articles = () => {
  const renderedArticles = articles.map(({ id, heading, text, image, alt }) => (
    <Article key={id} heading={heading} text={text} image={image} alt={alt} />
  ));

  return (
    <section>
      <ArticlesList>{renderedArticles}</ArticlesList>
    </section>
  );
};

export default Articles;
