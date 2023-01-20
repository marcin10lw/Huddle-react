import styled from "styled-components";

const mobile = ({ theme }) => `${theme.mobile}px`;

export const StyledMain = styled.main`
  margin-top: 115px;
  padding: 0 40px 100px;
  line-height: 1.5;
  color: ${({theme}) => theme.colors.vdCyan};

  h1, h2 {
    font-family: "Poppins", sans-serif;
  }

  @media (max-width: ${mobile}) {
    margin-top: 95px;
  }
`;
