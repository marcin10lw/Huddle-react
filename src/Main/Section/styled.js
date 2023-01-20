import styled from "styled-components";

const mobile = ({ theme }) => theme.mobile;

export const StyledSection = styled.section`
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 500px));
  align-items: center;
  justify-content: space-around;
  margin-top: 250px;

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
    font-size: 1.375rem;
    font-size: clamp(1.375rem, 1.02rem + 1.5vw, 2.375rem);
  }

  p {
    font-size: 0.8125rem;
    font-size: clamp(0.8125rem, 0.75rem + 0.28vw, 1rem);
  }

  @media (max-width: ${mobile}px) {
    text-align: center;
    margin-top: 58px;
  }
`;
