import { Container, Row, Col, Card, CardBody, CardHeader } from "reactstrap";
import { animated, useSpring } from "react-spring";
import { useState, useEffect, useRef } from "react";
import { useInView } from "react-intersection-observer";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowPointer } from "@fortawesome/free-solid-svg-icons";
import "../styles/Projects.css";
import { selectAllProjects } from "../projects/projectsSlice";

const Projects = () => {
  const projects = selectAllProjects();
  const [toggles, setToggles] = useState([]);
  const refs = useRef([]);

  useEffect(() => {
    setToggles(Array.from({ length: projects.length }, () => false));
  }, [projects.length]);

  useEffect(() => {
    refs.current = refs.current.slice(0, projects.length);
  }, [projects.length]);

  const updateToggle = (index, inView) => {
    setToggles((prevToggles) => {
      const newToggles = [...prevToggles];
      newToggles[index] = inView;
      return newToggles;
    });
  };

  return (
    <div className="projects-wrapper py-4">
      <Container>
        <Row>
          <Col className="d-flex justify-content-center align-content-center mb-2">
            <h4 className="projects-title">Projects</h4>
          </Col>
        </Row>
        {projects.map((project, index) => {
          const [ref, inView] = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          useEffect(() => {
            if (inView) {
              updateToggle(index, true);
            }
          }, [index, inView]);

          refs.current[index] = ref;

          const fade = useSpring({
            opacity: toggles[index] ? 1 : 0,
            config: { duration: 500 },
          });

          return (
            <Row
              className={`projects-row ${index % 2 === 0 ? "even" : "odd"}`}
              key={project.id}
            >
              <Col xs={12} lg={8} className="project-img my-3">
                <img
                  className="img-fluid rounded projects-img"
                  src={project.image}
                  alt={project.name}
                />
              </Col>
              <Col xs={12} lg={4} className="project-details">
                <animated.div style={fade} ref={refs.current[index]}>
                  <Card className="project-card">
                    <CardHeader className="project-title">
                      <h5 className="fs-3 mt-5">{project.name}</h5>
                    </CardHeader>
                    <CardBody>
                      <p>{project.description}</p>
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="fs-5 btn visit-btn"
                      >
                        <FontAwesomeIcon
                          className="icon"
                          icon={faArrowPointer}
                        />
                        Visit
                      </a>
                    </CardBody>
                  </Card>
                </animated.div>
              </Col>
            </Row>
          );
        })}
      </Container>
    </div>
  );
};

export default Projects;
