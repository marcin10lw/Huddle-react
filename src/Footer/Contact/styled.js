import styled from "styled-components";

export const StyledContact = styled.section`
  max-width: 500px;
  width: 100%;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    margin-top: 80px;
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
`;

export const Icon = styled.img``;

export const Info = styled.span`
  margin-left: 20px;
`;
