import styled, { css } from "styled-components";

const pink = ({ theme }) => theme.colors.pink;
const lightPink = ({ theme }) => theme.colors.lightPink;
const vpBlue = ({ theme }) => theme.colors.vpBlue;
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
      background-color: transparent;

      &:hover {
        border: 1.5px solid ${lightPink};
        color: ${lightPink};
      }

      @media (max-width: ${mobile}) {
        padding: 6px 20px;
        font-size: 10px;
      }
    `}

  ${({ inMain }) =>
    inMain &&
    css`
      margin-top: 42px;
      border: none;
      background-color: ${pink};
      color: ${vpBlue};
      font-size: 20px;
      font-weight: 600;
      padding: 26px 100px;
      border-radius: 40px;
      box-shadow: 2px 2px 12px 1px hsl(0deg 0% 72%);
      transition: background-color 120ms ease-out;

      &:hover {
        background-color: ${lightPink};
      }

      @media (max-width: ${mobile}) {
        padding: 14px 40px;
        font-size: 12px;
      }
    `}
`;
