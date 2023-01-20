import { Wrapper, Amount, Operation } from "./styled";

const Statictic = ({ image, alt, amount, operation }) => {
  return (
    <Wrapper>
      <img src={image} alt={alt} />
      <Amount>{amount}</Amount>
      <Operation>{operation}</Operation>
    </Wrapper>
  );
};

export default Statictic;
