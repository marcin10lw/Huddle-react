import styled from "styled-components";

const mobile = ({ theme }) => `${theme.mobile}px`;

export const StyledStatistics = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  margin-top: 120px;

  @media (max-width: ${mobile}) {
    flex-direction: column;
    gap: 80px;
  }
`