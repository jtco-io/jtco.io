import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./Home.css";
import {ContactForm} from "../pages/Contact"




// import NewsFeed from "../components/NewsFeed";


function HomeCarousel() {
  return (
    <Carousel>
        <Carousel.Item>
          <img
            className="d-block w-100"
            src="htx_background_cropped.jpg"
            alt="A picture with Houston's downtown skyline in the background."
          />
          <Carousel.Caption>
            <h3>Rethinking Tomorrows Ideas</h3>
            <p>Enhancing your vision.</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
  )
}

function Home() {
  return (
    <div className="Home">
      <HomeCarousel/>

      <div className="Info">
        <Row>
          <Col sm>
            <h3>Hardware, Networking, Software Design</h3>
            <p>
              Let us improve your organizations process's with technical
              solutions, find ways to provide better guarantees and while
              keeping your users data secure.
            </p>
          </Col>

          <Col sm>
            <h3>Web Design, Marketing, Cloud Migrations</h3>
            <p>
              Need to improve your customer facing assets, lead funnels or improve your customer acquisition cost? Let us
              assist in driving new and existing customer.
            </p>
          </Col>

          <Col sm>
            <h3>
              Solutions Architect, Reliability Engineering, Information Security
            </h3>

            <p>
              Have unmet business needs or existing infrastructure? Let us devise solutions to increase your bottem line
              and insure your technical solutions are reliable and secure.
            </p>
          </Col>
        </Row>

        {/*<NewsFeed />*/}
        <ContactForm/>
      </div>
    </div>
  );
}

export default Home;
