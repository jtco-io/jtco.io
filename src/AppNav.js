import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";


import Navbar from "react-bootstrap/Navbar";
import NavDropdown from "react-bootstrap/NavDropdown";
import Nav from "react-bootstrap/Nav";
import Form from "react-bootstrap/Form";
import FormControl from "react-bootstrap/FormControl";
import Button from "react-bootstrap/Button";

import { LinkContainer } from "react-router-bootstrap"

import "./AppNav.css";


function AppNav() {
  return (
    <Navbar bg="dark" >

      <LinkContainer to="/">
        <Navbar.Brand >jtco.io</Navbar.Brand>
      </LinkContainer>

      <Navbar.Toggle aria-controls="basic-navbar-nav" />
      <Navbar.Collapse className="justify-content-end">
          <LinkContainer to="/">
            <Nav.Link>Home</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/contact">
            <Nav.Link>Contact</Nav.Link>
          </LinkContainer>

          <LinkContainer to="/projects">
            <Nav.Link>Projects</Nav.Link>
          </LinkContainer>

          <NavDropdown title="Services" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">
              Onsight IT
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.2">
              Marketing and Business Solutions
            </NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
            <NavDropdown.Divider />
            <NavDropdown.Item href="#action/3.4">
              Scaling out and Security
            </NavDropdown.Item>
          </NavDropdown>
      </Navbar.Collapse>
    </Navbar>
  );
}

export default AppNav;
