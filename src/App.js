import React, { Component } from "react";
import "./App.css";

import Components from "./views/Components/Components.js";
import Header from "./components/Header/Header.js";

function App() {
  return (
    <div className="App">
      <Header />
      <Components />
    </div>
  );
}

export default App;
