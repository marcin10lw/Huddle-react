import styled from "styled-components";

export const StyledHero = styled.section`
  text-align: center;

  h1 {
    margin: 0;
    font-size: 1.5625rem;
    font-size: clamp(1.5625rem, 1.0123rem + 2.3474vw, 3.125rem);
  }

  p {
    max-width: 660px;
    margin: 30px auto 0;
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 0.72rem + 0.66vw, 1.3125rem);
  }

  img {
    max-width: 100%;
    display: block;
    margin: 90px auto 0;
  }
`;
