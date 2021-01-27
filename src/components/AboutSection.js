import about1 from "../img/about1.jpg";
import {
  StyledAbout,
  StyledDescription,
  StyledHide,
  StyledImage,
} from "../styles";

const AboutSection = () => {
  return (
    <StyledAbout>
      <StyledDescription>
        <div className="title">
          <StyledHide>
            <h2>
              Developers <span>portfolio</span>
            </h2>
          </StyledHide>
          <StyledHide>
            <h2>Maurits Arissen</h2>
          </StyledHide>
        </div>
        <p>I am a young software developer with my hobby as my job.</p>
      </StyledDescription>
      <StyledImage>
        <img src={about1} alt="Maurits Arissen" />
      </StyledImage>
    </StyledAbout>
  );
};

export default AboutSection;
