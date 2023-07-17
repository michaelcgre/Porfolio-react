import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import { faEnvelope } from "@fortawesome/free-solid-svg-icons";
import PortraitDrawing from "../assets/Bangers.png";
import "../styles/Intro.css";

const Intro = () => {
  const email = "michaelcgregorio06@gmail.com";

  const handleEmailClick = () => {
    window.location.href = `mailto:${email}`;
  };
  return (
    <div className="intro-wrapper">
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center intro-description text-center">
            <h1 className="intro-title">Welcome to my universe!</h1>
            <p className="intro-text fs-4 mt-3">
              I&apos;m a web developer making sure we live in a world of elegant
              and functional websites.
            </p>
            <div className="d-flex gap-4">
              <a href="https://github.com/michaelcgre" target="blank">
                <FontAwesomeIcon className="fs-1 icon" icon={faGithub} />
              </a>
              <a
                href="https://www.linkedin.com/in/michael-cgregorio/"
                target="blank"
              >
                <FontAwesomeIcon className="fs-1 icon" icon={faLinkedin} />
              </a>
              <button onClick={handleEmailClick}>
                <FontAwesomeIcon className="fs-1 icon" icon={faEnvelope} />
              </button>
            </div>
          </Col>
          <Col>
            <div className="image-container">
              <img
                src={PortraitDrawing}
                alt="Portrait Drawing"
                className="intro-img"
              />
            </div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
