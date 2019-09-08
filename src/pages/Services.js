import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

// import "./Services.css";

function Services() {
  return (
    <div className="Services">
      <Jumbotron fluid>
        <Container>
          <h1>Managed IT</h1>
          <p>
            Wifi and Email all day, Exchange, Gsuite you got it.
          </p>
        </Container>
      </Jumbotron>

      <div className="Info">
        <Row>
          <Col sm>
            <h3>Marketing and Customer Facing Web Design</h3>
            <p>

            </p>
          </Col>

          <Col sm>
            <h3>Scaling Solutions and Securing Data</h3>
            <p>
              Making sure services are reliable while data is safe and backed up regularly
            </p>
          </Col>

        </Row>
      </div>
    </div>
  );
}

export default Services;
