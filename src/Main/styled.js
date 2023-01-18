import styled from "styled-components";

const mobile = ({ theme }) => `${theme.mobile}px`;

export const StyledMain = styled.main`
  margin-top: 115px;
  padding: 0 40px 100px;
  line-height: 1.6;

  @media (max-width: ${mobile}) {
    margin-top: 95px;
  }
`;
