import React, { Component } from "react";

import Times from "./views/LandingPage/Sections/Times/Times.js";
import Components from "./views/LandingPage/LandingPage.js";
import Header from "./components/Header/Header.js";

import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);

    this.state = {
      breakLength: Number.parseInt(this.props.defaultBreakLength, 10),
      sessionLength: Number.parseInt(this.props.defaultSessionLength, 10),
      timeLabel: "Session",
      timeLeftInSecond:
        Number.parseInt(this.props.defaultSessionLength, 10) * 60,
      isStart: false,
      timerInterval: null,
    };
  }
  render() {
    return (
      <div className="App">
        <Header startText="Hihihihi" />
        <Components />
        <Times
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />
      </div>
    );
  }
}
