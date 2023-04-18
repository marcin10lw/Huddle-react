import styled, { css } from "styled-components";

export const Button = styled.button`
  border-radius: 20px;
  cursor: pointer;

  ${({ inHeader }) =>
    inHeader &&
    css`
      border: 1.5px solid ${({ theme }) => theme.colors.pink};
      color: ${({ theme }) => theme.colors.pink};
      padding: 8px 24px;
      transition: all 120ms ease-out;
      background-color: transparent;

      &:hover {
        border: 1.5px solid ${({ theme }) => theme.colors.lightPink};
        color: ${({ theme }) => theme.colors.lightPink};
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 6px 20px;
        font-size: 12px;
      }
    `}

  ${({ inMain }) =>
    inMain &&
    css`
      margin-top: 42px;
      border: none;
      background-color: ${({ theme }) => theme.colors.pink};
      color: ${({ theme }) => theme.colors.vpBlue};
      font-size: 20px;
      font-weight: 600;
      padding: 26px 100px;
      border-radius: 40px;
      box-shadow: 2px 2px 12px 1px hsl(0deg 0% 72%);
      transition: background-color 120ms ease-out;

      &:hover {
        background-color: ${({ theme }) => theme.colors.lightPink};
      }

      @media (max-width: ${({ theme }) => theme.breakpoints.mobile}) {
        padding: 14px 40px;
        font-size: 14px;

        &:last-child {
          margin-top: 32px;
        }
      }
    `}
`;
