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


function AppFooter() {
  return (
    <Navbar bg="dark" fixed="bottom" className="justify-content-between">
      <Link to="/">
        jtco.io
      </Link>
    </Navbar>
  );
}

export default AppFooter;
