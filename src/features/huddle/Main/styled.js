import styled from "styled-components";

export const StyledMain = styled.main`
  margin-top: 115px;
  padding: 0 28px 100px;
  line-height: 1.5;
  color: ${({ theme }) => theme.colors.vdCyan};

  h1,
  h2,
  h3 {
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    margin-top: 95px;
  }
`;
