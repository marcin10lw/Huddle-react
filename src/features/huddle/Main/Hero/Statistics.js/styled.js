import styled from "styled-components";

export const StyledStatistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 120px;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
    flex-direction: column;
    gap: 80px;
  }
`;
