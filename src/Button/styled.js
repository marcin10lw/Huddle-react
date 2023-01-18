import styled, { css } from "styled-components";

const pink = ({ theme }) => theme.colors.pink;
const lightPink = ({ theme }) => theme.colors.lightPink;
const mobile = ({ theme }) => `${theme.mobile}px`;

export const Button = styled.button`
  border-radius: 20px;
  cursor: pointer;

  ${({ inHeader }) =>
    inHeader &&
    css`
      border: 1.5px solid ${pink};
      color: ${pink};
      padding: 8px 24px;
      transition: all 120ms ease-out;

      &:hover {
        border: 1.5px solid ${lightPink};
        color: ${lightPink};
      }

      @media (max-width: ${mobile}) {
        padding: 6px 20px;
        font-size: 12px;
      }
    `}
`;
