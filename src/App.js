import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppNav from "./AppNav";
import AppFooter from "./AppFooter"

import "./App.css";

import Home from "./pages/Home";
import Contact from "./pages/Contact";
import Projects from "./pages/Projects";

import withTracker from "./containers/WithTracker"

function App() {
  return (
    <div className="App">
      <Router>
        <AppNav />
        <Route path="/" exact component={withTracker(Home)} />
        <Route path="/contact" exact component={withTracker(Contact)} />
        <Route path="/projects" exact component={withTracker(Projects)} />
        <AppFooter/>
      </Router>
    </div>
  );
}

export default App;
