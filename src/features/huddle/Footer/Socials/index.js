import { StyledSocials } from "./styled";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faFacebookSquare,
  faSquareInstagram,
  faTwitterSquare,
} from "@fortawesome/free-brands-svg-icons";

const Socials = () => {
  return (
    <StyledSocials>
      <a href="#">
        <FontAwesomeIcon icon={faFacebookSquare} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faSquareInstagram} />
      </a>
      <a href="#">
        <FontAwesomeIcon icon={faTwitterSquare} />
      </a>
    </StyledSocials>
  );
};

export default Socials;
