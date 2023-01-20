import styled from "styled-components";

const mobile = ({ theme }) => theme.mobile;

export const StyledFooter = styled.footer`
  background-color: ${({ theme }) => theme.colors.vdCyan};
  color: ${({ theme }) => theme.colors.vpBlue};
  padding: 105px 30px;
  line-height: 1.6;

  p {
    font-size: 0.875rem;
    font-size: clamp(0.875rem, 0.83rem + 0.19vw, 1rem);
    max-width: 375px;
    width: 100%;
    padding-right: 10px;
  }

  @media (max-width: ${mobile}px) {
    padding-top: 65px;
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
  display: grid;
  grid-template-columns: repeat(2, minmax(0px, 550px));
  align-items: center;
  justify-content: space-around;

  @media (max-width: ${mobile}px) {
    grid-template-columns: 1fr;
  }
`;
