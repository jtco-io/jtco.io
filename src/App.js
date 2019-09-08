import React from "react";
import { BrowserRouter as Router, Route, Link } from "react-router-dom";

import AppNav from "./AppNav";

import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <Router>
        <AppNav />
        <Home />
      </Router>
    </div>
  );
}

export default App;
