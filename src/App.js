import React, { Component } from "react";

import LandingPage from "./views/LandingPage/LandingPage.js";
import Header from "./components/Header/Header.js";

import "./App.css";

export default class App extends Component {
  render() {
    return (
      <div className="App">
        <Header startText="Hihihihi" />
        <LandingPage defaultSessionLength='5'/>
      </div>
    );
  }
}
