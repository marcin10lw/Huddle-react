import styled from "styled-components";

export const StyledSocials = styled.section`
  grid-column: span 2;
  display: flex;
  align-items: center;
  gap: 28px;
  margin-top: 80px;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    grid-column: auto;
  }

  svg {
    height: 40px;
    color: ${({ theme }) => theme.colors.vpBlue};
    transition: color 120ms cubic-bezier(0.65, 0.05, 0.36, 1);

    &:hover {
      color: ${({ theme }) => theme.colors.blue};
    }
  }
`;
