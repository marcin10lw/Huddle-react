import styled from "styled-components";

const mobile = ({ theme }) => theme.mobile;

export const StyledArticle = styled.article`
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 515px));
  align-items: center;
  justify-content: space-around;
  margin-top: 235px;

  &:nth-child(odd) img {
    grid-area: 1 / 2 / 2 / 3;
  }

  img {
    max-width: 550px;
    width: 100%;
  }

  @media (max-width: ${mobile}px) {
    grid-template-columns: auto;
    margin-top: 190px;

    &:nth-child(odd) img {
      grid-area: auto;
    }
  }
`;

export const Info = styled.div`
  flex-basis: 550px;

  h2 {
    font-size: 1.4375rem;
    font-size: clamp(1.4375rem, 1.1074rem + 1.4085vw, 2.375rem);
    margin-bottom: 20px;
  }

  p {
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 0.809rem + 0.2817vw, 1.0625rem);
  }

  @media (max-width: ${mobile}px) {
    text-align: center;
    margin-top: 58px;
  }
`;
