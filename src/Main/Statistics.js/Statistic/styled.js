import styled from "styled-components";

const vdCyan = ({ theme }) => theme.colors.vdCyan;
const grey = ({ theme }) => theme.colors.grey;

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  color: ${vdCyan};

  img {
    align-self: flex-start;
    margin: 0;
    max-width: 1.875rem;
    max-width: clamp(1.875rem, 1.5rem + 1.6vw, 2.9375rem);
    width: 100%;
  }
`;

export const Amount = styled.div`
  font-weight: 800;
  font-size: 3.875rem;
  font-size: clamp(3.875rem, 3.48rem + 1.69vw, 5rem);
`;

export const Operation = styled.div`
  font-weight: 400;
  color: ${grey};
  font-size: 0.9375rem;
  font-size: clamp(0.9375rem, 0.83rem + 0.47vw, 1.25rem);
`;
