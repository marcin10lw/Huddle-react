import { StyledStatistics } from "./styled";
import Statictic from "../Statistic";

const Statistics = () => {
  const statistics = [
    {
      id: 1,
      image: `${process.env.PUBLIC_URL}/assets/images/icon-communities.svg`,
      alt: "communities",
      amount: "1.4k+",
      operation: "Communities Formed",
    },

    {
      id: 2,
      image: `${process.env.PUBLIC_URL}/assets/images/icon-messages.svg`,
      alt: "messages",
      amount: "2.7m+",
      operation: "Messages Sent",
    },
  ];

  const renderedStatictics = statistics.map(
    ({ id, image, alt, amount, operation }) => (
      <Statictic
        key={id}
        image={image}
        alt={alt}
        amount={amount}
        operation={operation}
      />
    )
  );

  return <StyledStatistics>{renderedStatictics}</StyledStatistics>;
};

export default Statistics;
