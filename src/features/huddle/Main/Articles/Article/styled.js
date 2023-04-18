import styled from "styled-components";

export const ArticleImage = styled.img`
  max-width: 550px;
  width: 100%;
`;

export const ListItem = styled.li`
  &:nth-child(odd) ${ArticleImage} {
    grid-area: 1 / 2 / 2 / 3;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    &:nth-child(odd) ${ArticleImage} {
      grid-area: auto;
    }
  }
`;

export const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 515px));
  align-items: center;
  justify-content: space-around;
  margin-top: 235px;
  gap: 15px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    gap: 0;
    grid-template-columns: auto;
    margin-top: 190px;
  }
`;

export const Info = styled.div`
  flex-basis: 550px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    text-align: center;
    margin-top: 58px;
  }
`;

export const ArticleHeader = styled.h2`
  font-size: 1.4375rem;
  font-size: clamp(1.4375rem, 1.1074rem + 1.4085vw, 2.375rem);
  margin-bottom: 20px;
`;

export const ArticleText = styled.p`
  font-size: 0.875rem;
  font-size: clamp(0.875rem, 0.809rem + 0.2817vw, 1.0625rem);
`;
