import { motion } from "framer-motion";

import useInViewAnimation from "features/huddle/useInViewAnimation";
import { imageVariants, infoVariants } from "../variants";
import {
  StyledArticle,
  Info,
  ListItem,
  ArticleImage,
  ArticleHeader,
  ArticleText,
} from "./styled";

const Article = ({ heading, text, image, alt }) => {
  const { animation, ref } = useInViewAnimation(0.3);

  return (
    <ListItem>
      <StyledArticle>
        <ArticleImage
          as={motion.img}
          ref={ref}
          variants={imageVariants}
          initial="hidden"
          animate={animation}
          src={image}
          alt={alt}
        />
        <Info
          as={motion.div}
          ref={ref}
          variants={infoVariants}
          initial="hidden"
          animate={animation}
        >
          <ArticleHeader>{heading}</ArticleHeader>
          <ArticleText>{text}</ArticleText>
        </Info>
      </StyledArticle>
    </ListItem>
  );
};

export default Article;
