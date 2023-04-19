import styled from "styled-components";

export const StyledHeader = styled.header`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 65px 55px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    padding: 20px;
  }
`;

export const HeaderLink = styled.a`
  display: block;
  max-width: 7.5rem;
  max-width: clamp(7.5rem, 4.64rem + 12.21vw, 15.625rem);
  cursor: pointer;
`;

export const Logo = styled.img`
  display: block;
  width: 100%;
`;
