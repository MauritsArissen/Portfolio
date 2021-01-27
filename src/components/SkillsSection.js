import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faBookmark } from "@fortawesome/free-solid-svg-icons";
import {
  faReact,
  faJava,
  faNode,
  faAngular,
  faPython,
} from "@fortawesome/free-brands-svg-icons";
import skills1 from "../img/skills1.jpg";
import {
  StyledSkills,
  StyledDescriptionSkills,
  StyledCard,
  StyledCards,
  StyledImage,
} from "../styles";

const SkillsSection = () => {
  return (
    <StyledSkills>
      <StyledDescriptionSkills>
        <h2>
          What are my <span>skills</span>
        </h2>
        <StyledCards>
          <StyledCard>
            <div className="top">
              <FontAwesomeIcon className="icon" size="2x" icon={faReact} />
              <h3>React</h3>
            </div>
            <p>
              This website along with some other project I've worked on are
              build in React.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="top">
              <FontAwesomeIcon className="icon" size="2x" icon={faJava} />
              <h3>Java</h3>
            </div>
            <p>
              I've worked a lot with Java and all sorts of frameworks and
              libraries. Usually build around APIs.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="top">
              <FontAwesomeIcon className="icon" size="2x" icon={faNode} />
              <h3>Node.js</h3>
            </div>
            <p>
              This is the language I started out with and used it as back-end
              for websites and automization.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="top">
              <FontAwesomeIcon className="icon" size="2x" icon={faPython} />
              <h3>Python</h3>
            </div>
            <p>
              Used in a lot of projects surrounding analysing data and
              processing this data.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="top">
              <FontAwesomeIcon className="icon" size="2x" icon={faAngular} />
              <h3>Angular</h3>
            </div>
            <p>
              The front-end framework I used before React and used it in around
              two smaller project.
            </p>
          </StyledCard>
          <StyledCard>
            <div className="top">
              <FontAwesomeIcon className="icon" size="2x" icon={faBookmark} />
              <h3>Other skills</h3>
            </div>
            <p>
              Spring Boot; NPM; Docker; .NET; C#; SQL; NoSQL; PL/SQL; GitHub.
            </p>
          </StyledCard>
        </StyledCards>
      </StyledDescriptionSkills>
      <StyledImage>
        <img src={skills1} alt="Programming" />
      </StyledImage>
    </StyledSkills>
  );
};

export default SkillsSection;
