import React from "react";
import AppNav from "./AppNav";

import "./App.css";

import Home from "./pages/Home";

function App() {
  return (
    <div className="App">
      <AppNav />

      <Home />
    </div>
  );
}

export default App;
