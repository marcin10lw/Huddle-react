import { StyledStatistics } from "./styled";
import Statictic from "./Statistic";

const Statistics = () => {
  return (
    <StyledStatistics>
      <Statictic
        image={`${process.env.PUBLIC_URL}/assets/images/icon-communities.svg`}
        alt="communities"
        amount={1.4}
        prefix="k+"
        operation="Communities Formed"
      />
      <Statictic
        image={`${process.env.PUBLIC_URL}/assets/images/icon-messages.svg`}
        alt="messages"
        amount={2.7}
        prefix="m+"
        operation="Messages Sent"
      />
    </StyledStatistics>
  );
};

export default Statistics;
