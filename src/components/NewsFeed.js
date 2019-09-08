import React from "react";
// import './NewsFeed.css';

import Row from "react-bootstrap/Row";
import ListGroup from "react-bootstrap/ListGroup";
import Col from "react-bootstrap/Col";
import Container from "react-bootstrap/Container";

function NewsGenerator() {
  function news(count = 10) {
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
      );
      i++;
    }
    return items;
  }
  return <ListGroup variant="flush">{news()}</ListGroup>;
}

class NewsFeed extends React.Component {
  constructor(props) {
    super(props);
    this.state = { loading: false, msg: null };
  }

  handleClick = api => e => {
    e.preventDefault();

    this.setState({ loading: true });
    fetch("/.netlify/functions/" + api)
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg }));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <div>
        <p>
          <button onClick={this.handleClick("hello")}>
            {loading ? "Loading..." : "Call Lambda"}
          </button>
          <button onClick={this.handleClick("fetchFeed")}>
            {loading ? "Loading..." : "Call Async Lambda"}
          </button>
          <br />
          <span>{msg}</span>
        </p>

        <div className="News">
          <NewsGenerator />
        </div>
      </div>
    );
  }
}

export default NewsFeed;
