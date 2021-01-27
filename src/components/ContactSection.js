import contact1 from "../img/contact1.jpg";
import {
  StyledContact,
  StyledDescriptionContact,
  StyledImageContact,
  StyledContactButton,
} from "../styles";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";

const ContactSection = () => {
  return (
    <StyledContact>
      <StyledImageContact>
        <img src={contact1} alt="Contact me" />
      </StyledImageContact>
      <StyledDescriptionContact>
        <h2>
          Where to <span>contact</span> me
        </h2>
        <br />
        <StyledContactButton href="https://www.linkedin.com/in/maurits-arissen-abb09b16b">
          LinkedIn{" "}
          <FontAwesomeIcon size="1x" icon={faLinkedinIn}></FontAwesomeIcon>
        </StyledContactButton>
        <StyledContactButton href="https://github.com/MauritsArissen">
          GitHub <FontAwesomeIcon size="1x" icon={faGithub}></FontAwesomeIcon>
        </StyledContactButton>
        <StyledContactButton href="mailto:marissen1@live.nl">
          Email <FontAwesomeIcon size="1x" icon={faEnvelope}></FontAwesomeIcon>
        </StyledContactButton>
      </StyledDescriptionContact>
    </StyledContact>
  );
};

export default ContactSection;
