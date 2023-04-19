import { useRef } from "react";
import {
  StyledArticle,
  Info,
  ListItem,
  ArticleImage,
  ArticleHeader,
  ArticleText,
} from "./styled";
import { motion, useAnimation, useInView } from "framer-motion";
import { useEffect } from "react";
import { imageVariants, infoVariants } from "../variants";

const Article = ({ heading, text, image, alt }) => {
  const statisticRef = useRef(null);
  const inView = useInView(statisticRef, { amount: 0.7, once: false });
  const animation = useAnimation();

  useEffect(() => {
    if (inView) {
      animation.start("visible");
    }
  }, [animation, inView]);

  return (
    <ListItem>
      <StyledArticle>
        <ArticleImage
          as={motion.img}
          ref={statisticRef}
          variants={imageVariants}
          initial="hidden"
          animate={animation}
          src={image}
          alt={alt}
        />
        <Info
          as={motion.div}
          ref={statisticRef}
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
