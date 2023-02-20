import styled from "styled-components";

export const StyledContact = styled.section`
  max-width: 500px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    margin-top: 90px;
    align-self: flex-start;
  }
`;

export const Logo = styled.img`
  max-width: 12.5rem;
  max-width: clamp(12.5rem, 11.62rem + 3.76vw, 15rem);
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  margin-top: 20px;
  margin-left: 2px;
`;

export const Info = styled.span`
  margin-left: 20px;
`;
