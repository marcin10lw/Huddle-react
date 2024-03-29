import styled from "styled-components";

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
`;

export const Amount = styled.div`
  font-weight: 800;
  font-size: 3.875rem;
  font-size: clamp(3.875rem, 3.26rem + 2.63vw, 5.625rem);
`;

export const Operation = styled.div`
  font-weight: 400;
  color: ${({ theme }) => theme.colors.grey};
  font-size: 0.9375rem;
  font-size: clamp(0.9375rem, 0.76rem + 0.75vw, 1.4375rem);
`;

export const StaticticIcon = styled.img`
  align-self: flex-start;
  margin: 0;
  max-width: 1.875rem;
  max-width: clamp(1.875rem, 1.5rem + 1.6vw, 2.9375rem);
  width: 100%;
`;
