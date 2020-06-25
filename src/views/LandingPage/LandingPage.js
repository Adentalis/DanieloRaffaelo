import React, { Component } from "react";
import Scrolltext from "./Sections/Scrolltext/Scrolltext.js";
import Times from "./Sections/Times/Times.js";

export default class LandingPage extends Component {
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
      <div>
        <Scrolltext/>
        <Times
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />
      </div>
    );
  }
}
