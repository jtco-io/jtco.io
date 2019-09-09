import React from "react";

import Jumbotron from "react-bootstrap/Jumbotron";
import Container from "react-bootstrap/Container";
import Card from "react-bootstrap/Card";
import Button from "react-bootstrap/Button";

import { GridMosaic } from "../components/GridMosaic"

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
      <Card.Header as="h5">Featured</Card.Header>
      <Card.Body>
        <Card.Title>{proj.title}</Card.Title>
        <Card.Text>
          With supporting text below as a natural lead-in to additional content.
        </Card.Text>
        <Button variant="primary">Go somewhere</Button>
      </Card.Body>
    </Card>
  )
}

function Projects() {

  const projects = fakeProjects();

  projects.forEach(
    (project, key) => projects[key] = ProjectCard(projects[key])
  )

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
