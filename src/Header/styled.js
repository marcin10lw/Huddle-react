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
  width: 7.5rem;
  width: clamp(7.5rem, 4.86rem + 11.27vw, 15rem);
`;
