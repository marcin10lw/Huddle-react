import styled, { css } from "styled-components";

const mobile = ({ theme }) => theme.mobile;
const red = ({ theme }) => theme.colors.lightRed;

export const StyledNewsletter = styled.section`
  max-width: 550px;
  width: 100%;
  align-self: flex-start;

  h4 {
    font-size: 1.25rem;
    font-size: clamp(1.25rem, 1.14rem + 0.47vw, 1.5625rem);
    margin: 0;
  }

  @media (max-width: ${mobile}px) {
    grid-row: 1 / 2;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  position: relative;

  @media (max-width: ${mobile}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const Error = styled.span`
  display: none;
  position: absolute;
  color: ${red};
  font-weight: 500;
  top: 53px;
`;

export const EmailInput = styled.input`
  max-width: 355px;
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 5px;

  &:invalid {
    border: 1px solid ${red};
  }

  &:invalid ~ ${Error} {
    display: block;
  }

  @media (max-width: ${mobile}px) {
    max-width: none;
    font-size: 20px;
  }
`;

export const SubmitButton = styled.button`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.vpBlue};
  background-color: ${({ theme }) => theme.colors.pink};
  border: none;
  border-radius: 5px;
  padding: 14px 38px;
  cursor: pointer;
  transition: background-color 120ms ease-out;

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightPink};
  }

  @media (max-width: ${mobile}px) {
    align-self: flex-end;
  }
`;
