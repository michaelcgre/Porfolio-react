import { Container, Row, Col } from "reactstrap";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGithub, faLinkedin } from "@fortawesome/free-brands-svg-icons";
import PortraitDrawing from "../assets/portrait-drawing.webp";
import "../styles/Intro.css";

const Intro = () => {
  return (
    <div className="intro-wrapper">
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center">
            <h1 className="intro-title">Hi, I&apos;m Michael,</h1>
            <p className="intro-text fs-3">
              a web developer based in Dallas, TX.
            </p>
            <div>
              <FontAwesomeIcon icon={faGithub} />
              <FontAwesomeIcon icon={faLinkedin} />
            </div>
          </Col>
          <Col>
            <img
              src={PortraitDrawing}
              alt="Portrait Drawing"
              className="intro-img"
            />
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default Intro;
