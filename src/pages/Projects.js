import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import "./Projects.css";

function Projects() {
  return (
    <div className="Projects">
      <Jumbotron fluid>
        <Container>
          <h1>Projects</h1>
          <p>
            Ways we enable communities to better foster success and share
            opportunity.
          </p>
        </Container>
      </Jumbotron>

      <div className="Info">
        <Row>
          <Col sm>
            <h3>Opensource</h3>
            <p>
              * rjango

            </p>
          </Col>

          <Col sm>
            <h3>Startups</h3>
            <p>
              Passing on concepts and recipes to foster healthier communities.
            </p>
          </Col>

          <Col sm>
            <h3>Previous Work</h3>

            <p>Allowing others to make their own journey</p>
          </Col>
        </Row>
      </div>
    </div>
  );
}

export default Projects;
