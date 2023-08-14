import styled from "styled-components";

export const StyledNewsletter = styled.section`
  max-width: 550px;
  width: 100%;
  align-self: flex-start;
`;

export const NewsletterHeader = styled.h4`
  font-size: 1.25rem;
  font-size: clamp(1.25rem, 1.14rem + 0.47vw, 1.5625rem);
  margin: 0;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    grid-row: 1 / 2;
  }
`;

export const Form = styled.form`
  margin-top: 40px;
  display: flex;
  gap: 40px;
  position: relative;

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    flex-direction: column;
    gap: 20px;
  }
`;

export const InputWrapper = styled.div`
  position: relative;
  max-width: 355px;
  width: 100%;
`;

export const Error = styled.span`
  display: none;
  position: absolute;
  font-size: 0.6875rem;
  font-size: clamp(0.6875rem, 0.62rem + 0.28vw, 0.875rem);
  color: ${({ theme }) => theme.colors.lightRed};
  font-weight: 500;
  top: 55px;
`;

export const EmailInput = styled.input`
  width: 100%;
  border: none;
  padding: 14px;
  border-radius: 5px;

  &:focus-visible {
    outline: none;
  }

  &:invalid:not(:placeholder-shown) {
    border: 1px solid ${({ theme }) => theme.colors.lightRed};
    ~ ${Error} {
      display: block;
    }
  }

  &:valid {
    border: 1px solid green;
  }

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    max-width: none;
    font-size: 18px;
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

  @media (max-width: ${({ theme }) => theme.breakpoints.mobile}px) {
    align-self: flex-end;
  }
`;
