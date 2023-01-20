import styled from "styled-components";

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.vdCyan};
  color: ${({ theme }) => theme.colors.vpBlue};
  padding: 120px 38px;
  line-height: 1.6;

  p {
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 0.83rem + 0.19vw, 1rem);
    max-width: 375px;
    width: 100%;
  }
`;

export const StylingPicture = styled.picture`
  display: block;
  margin-top: 70px;

  img {
    width: 100%;
    display: block;
  }
`;

export const Wrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${({ theme }) => theme.mobile}px) {
    flex-direction: column-reverse;
  }
`;
