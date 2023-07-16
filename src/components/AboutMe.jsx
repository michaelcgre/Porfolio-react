import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { animated, useSpring } from "react-spring";
import { useState, useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faHtml5,
  faCss3Alt,
  faSass,
  faBootstrap,
  faJs,
  faReact,
  faNodeJs,
  faGit,
  faEnvira,
} from "@fortawesome/free-brands-svg-icons";
import { faLaptopCode } from "@fortawesome/free-solid-svg-icons";
import "../styles/AboutMe.css";

const AboutMe = () => {
  const [toggle, setToggle] = useState(false);
  const [ref, inView] = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const fade = useSpring({
    opacity: toggle ? 1 : 0,
    config: { duration: 1000 },
  });

  useEffect(() => {
    if (inView) {
      setToggle(true);
    }
  }, [inView]);

  return (
    <div className="about-me-wrapper">
      <Container>
        <Row>
          <Col className="d-flex flex-column justify-content-center align-items-center text-center">
            <h2 className="fs-1">Hi, I&apos;m Michael. Nice to meet you.</h2>
            <p className="fs-5 mt-4 mb-5 about-me-description">
              I&apos;ve been creating websites for about a year now, and
              it&apos;s something I&apos;m truly passionate about. I have made
              multiple websites for clients already, including e-commerce
              websites and blogs, and am always looking for new projects to work
              on. I&apos;m currently enrolled in NuCamps Full Stack Bootcamp,
              and can&apos;t wait to further my knowledge and grow as a
              developer. I am eager to learn, and strive to learn something new
              every day.
            </p>
          </Col>
        </Row>
        <Row>
          <Col className="d-flex justify-content-center align-items-center">
            <animated.div style={fade} ref={ref}>
              <Card className="skill-card">
                <Col className="d-flex justify-content-center align-items-center">
                  <FontAwesomeIcon
                    className="fs-1 my-4 card-logo py-3"
                    icon={faLaptopCode}
                  />
                </Col>
                <CardHeader className="d-flex justify-content-center align-content-center card-title">
                  <h3 className="fs-2">Skills</h3>
                </CardHeader>
                <CardBody className="d-flex justify-content-center align-items-center">
                  <Col className="text-center">
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faHtml5} />
                      HTML
                    </ul>
                    <ul>
                      <FontAwesomeIcon
                        className="skill-icon"
                        icon={faCss3Alt}
                      />
                      CSS
                    </ul>
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faSass} />
                      SASS
                    </ul>
                    <ul>
                      <FontAwesomeIcon
                        className="skill-icon"
                        icon={faBootstrap}
                      />
                      Bootstrap
                    </ul>
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faJs} />
                      Javascript
                    </ul>
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faReact} />
                      React
                    </ul>
                  </Col>
                  <Col className="text-center me-5">
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faReact} />
                      React Native
                    </ul>
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faNodeJs} />
                      Node.js
                    </ul>
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faNodeJs} />
                      Express
                    </ul>
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faEnvira} />
                      MongoDB
                    </ul>
                    <ul>
                      <FontAwesomeIcon className="skill-icon" icon={faGit} />
                      Git
                    </ul>
                  </Col>
                </CardBody>
              </Card>
            </animated.div>
          </Col>
        </Row>
      </Container>
    </div>
  );
};

export default AboutMe;
