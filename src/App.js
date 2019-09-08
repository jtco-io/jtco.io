import React from 'react';
import AppNav from "./AppNav"
import NewsFeed from "./NewsFeed"

import Jumbotron from 'react-bootstrap/Jumbotron';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';

import './App.css';

function App() {
  return (
    <div className="App">
      <AppNav />
        <Jumbotron fluid>
          <Container>
            <h1>Technology Forerunner</h1>
            <p>
              Rethinking what is possible with tomorrows ideas.
            </p>
          </Container>
        </Jumbotron>

        <div className="Info">
          <Row>

              <Col sm>
                <h3>Hardware, Networking, Software Design</h3>
                <p>
                  Let us improve your organizations process's with technical solutions,
                find ways to provide better guarantees and while keeping your users data
                secure.
                </p>
              </Col>

              <Col sm>
                <h3>Web Design, Marketing, Cloud Migrations</h3>
                <p>
                  Let us improve your organizations process's with technical solutions,
                find ways to provide better guarantees and while keeping your users data
                secure.
                </p>
              </Col>

              <Col sm>
                <h3>Solutions Architect, Reliability Engineering, Information Security</h3>

                <p>
                  Let us improve your organizations process's with technical solutions,
                find ways to provide better guarantees and while keeping your users data
                secure.
                </p>
              </Col>

            </Row>

            <NewsFeed/>
        </div>



    </div>
  );
}

export default App;
