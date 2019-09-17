import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { LinkContainer } from "react-router-bootstrap"

import "./ProjectCards.css"

export function PcJTX(proj) {
  return (
      <Card>
        <Card.Img variant="top" src="proj_jtx.png" />
        <Card.Body>

          <Card.Title>
            <a href="https://jtronics.exchange">jtronics.exchange</a>
          </Card.Title>


          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
  )
}

export function PcFE(proj) {
  return (
      <Card>
        <Card.Img variant="top" src="proj_fe.png" />
        <Card.Body>


          <Card.Title>
            <a href="http://floralevents.com">Floral Events</a>
          </Card.Title>


          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
