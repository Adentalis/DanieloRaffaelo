import React, { Component } from "react";

import Components from "./views/Components/Components.js";
import Header from "./components/Header/Header.js";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
  }
  render() {
    return (
      <div className="App">
        <Header startText="Hihihihi" />
        <Components />
      </div>
    );
  }
}
