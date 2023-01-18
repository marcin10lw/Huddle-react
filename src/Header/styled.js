import styled from "styled-components";

const mobile = ({ theme }) => `${theme.mobile}px`;

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 65px 55px;

  @media (max-width: ${mobile}) {
    padding: 20px;
  }
`;

export const Logo = styled.img`
  width: 6.5625rem;
  width: clamp(6.5625rem, 3.59rem + 12.68vw, 15rem);
`;
