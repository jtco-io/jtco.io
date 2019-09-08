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
    this.state = { loading: false, msg: null, articles: [
        {title: "News Title1!", body: "News Body"},
        {title: "News Title2!", body: "News Body"}
      ] };
  }

  componentDidMount() {
    this.setState({ loading: true });
    fetch("/.netlify/functions/" + "fetchFeed")
      .then(response => response.json())
      .then(json => this.setState({ loading: false, msg: json.msg , articles: this.state.articles.concat(json.articles)}));
  };

  render() {
    const { loading, msg } = this.state;

    return (
      <div>

        <div className="News">
          {
            this.state.articles.length !== 0 ?
            this.state.articles.map(article =>
              <ListGroup.Item>
                <Container>
                  <Row>
                    <Col md={{ span: 6, offset: 3 }}>
                      <h4>{article.title}</h4>
                      <p>{article.body}</p>
                    </Col>
                  </Row>
                </Container>
              </ListGroup.Item>
            ): <div> None </div>
          }
        </div>
      </div>
    );
  }
}

export default NewsFeed;
