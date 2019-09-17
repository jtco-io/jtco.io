import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { GridMosaic } from "../components/GridMosaic"
import {PcJTX} from './ProjectCards';

function fakeProjects() {
  const projects = []
  let times = 10
  for(var i=0; i < times; i ++) {
    projects.push({
      uuid: i,
      organization: "",
      title: `Project Title ${i}`,
      tags: "",
      body: "",
    })
  }
  return projects
}
function ProjectCard(proj) {
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

function Projects() {

  // const projects = fakeProjects();
  //
  // projects.forEach(
  //   (project, key) => projects[key] = ProjectCard(projects[key])
  // )

  const projects = [
    <PcJTX/>
  ]

  return (
    <div className="Projects">
      <Jumbotron fluid>
        <Container>
          <h1>Projects</h1>
        </Container>
      </Jumbotron>

      <Container>
        {GridMosaic(projects)}
      </Container>
    </div>
  );
}

export default Projects;
