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

export const Logo = styled.img`
  max-width: 7.5rem;
  max-width: clamp(7.5rem, 4.64rem + 12.21vw, 15.625rem);
`;
