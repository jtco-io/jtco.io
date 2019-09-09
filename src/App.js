import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppNav from "./AppNav";

import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNav />
        <Route path="/" exact component={Home} />
        <Route path="/contact" exact component={Contact} />
        <Route path="/projects" exact component={Projects} />
      </Router>
    </div>
  );
}

export default App;
