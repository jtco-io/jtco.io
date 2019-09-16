import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";

import Image from "react-bootstrap/Image";
import Carousel from "react-bootstrap/Carousel";

import "./Home.css";
import {ContactForm} from "../pages/Contact"




import Octicon, {Zap, Shield, Ruby} from '@primer/octicons-react'
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
            <Octicon icon={Zap}/>

            <h3>Custom Applications</h3>
            <p>
              Let us improve or augment your business process with custom built solutions.
            </p>
          </Col>

          <Col sm>
            <Octicon icon={Ruby}/>
            <h3>Web Design and Marketing</h3>
            <p>
              Need to improve your customer facing assets, lead funnels or improve your customer acquisition cost? Let us
              assist in driving new and existing customer to your services.
            </p>
          </Col>

          <Col sm>
            <Octicon icon={Shield}/>
            <h3>
              Info Sec & IT Consulting Services
            </h3>

            <p>
              Let us help your organization work more effortlessly. Whether its cloud migrations or increasing WiFi range.
              We also perform hardware upgrades on existing infrastructure on future hardware.
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
