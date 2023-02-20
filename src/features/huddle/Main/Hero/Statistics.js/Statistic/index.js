import { Wrapper, Amount, Operation, StaticticIcon } from "./styled";

const Statictic = ({ image, alt, amount, operation }) => {
  return (
    <Wrapper>
      <StaticticIcon src={image} alt={alt} />
      <Amount>{amount}</Amount>
      <Operation>{operation}</Operation>
    </Wrapper>
  );
};

export default Statictic;
