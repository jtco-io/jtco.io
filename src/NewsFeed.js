import React from 'react';
// import './NewsFeed.css';

import Row from 'react-bootstrap/Row';
import ListGroup from 'react-bootstrap/ListGroup';
import Col from 'react-bootstrap/Col';
import Container from 'react-bootstrap/Container';

function NewsGenerator() {
  function news(count=10) {
    let i = 0;
    const items = [];
    while (i < count) {
      items.push(
        <ListGroup.Item>
              <Container>
                <Row>
                  <Col md={{ span: 6, offset: 3 }}>
                    This is a singular news piece
                  </Col>
                </Row>
              </Container>
        </ListGroup.Item>
      )
      i++;
    }
    return items
  }
  return (
    <ListGroup variant="flush" >{news()}</ListGroup>
  )
}

function NewsFeed() {
  return (
    <div className="News">
      <NewsGenerator/>
    </div>
  );
}

export default NewsFeed;
