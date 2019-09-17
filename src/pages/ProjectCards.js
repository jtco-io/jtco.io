import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { GridMosaic } from "../components/GridMosaic"

import "./ProjectCards.css"

export function PcJTX(proj) {
  return (
      <Card>
        <Card.Img variant="top" src="proj_jtx.png" />
        <Card.Body>
          <Card.Title>jtronics.exchange</Card.Title>
          <Card.Text>
            This is a wider card with supporting text below as a natural lead-in to
            additional content. This content is a little bit longer.
          </Card.Text>
        </Card.Body>
      </Card>
  )
}
