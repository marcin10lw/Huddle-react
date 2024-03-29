import { Wrapper, Amount, Operation, StaticticIcon } from "./styled";

const Statictic = ({ image, alt, amount, prefix, operation }) => {
  return (
    <Wrapper>
      <StaticticIcon src={image} alt={alt} />
      <Amount>
        {amount}
        {prefix}
      </Amount>
      <Operation>{operation}</Operation>
    </Wrapper>
  );
};

export default Statictic;
