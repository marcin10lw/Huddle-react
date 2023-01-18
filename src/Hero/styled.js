import styled from "styled-components";

const vdCyan = ({ theme }) => theme.colors.vdCyan;

export const StyledHero = styled.section`
  text-align: center;

  h1 {
    margin: 0;
    font-family: "Poppins", sans-serif;
    font-size: 1.5rem;
    font-size: clamp(1.5rem, 0.93rem + 2.44vw, 3.125rem);
    color: ${vdCyan};
  }

  p {
    max-width: 660px;
    margin: 30px auto 0;
    font-size: 0.875rem;
font-size: clamp(0.875rem, 0.7209507042253521rem + 0.6572769953051643vw, 1.3125rem);
    color: ${vdCyan};
  }

  img {
    max-width: 100%;
    display: block;
    margin: 0 auto;
  }
`;
