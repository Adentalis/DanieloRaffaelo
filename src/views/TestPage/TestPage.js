import React, { Component } from "react";
import Scrolltext from "./Sections/Scrolltext/Scrolltext.js";
import Times from "./Sections/Times/Times.js";
import AnimatedCircle from "./Sections/AnimatedCircle/AnimatedCircle.js";
import ImageRotation3D from "./Sections/ImageRotation3D/ImageRotation3D.js";

import Button from "@material-ui/core/Button";
require("./styles.css");

export default class TestPage extends Component {
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

    this.onStartStop = this.onStartStop.bind(this);
  }

  componentDidMount = async () => {
    try {
      console.log("Hello Youtube");
    } catch (error) {
      // Catch any errors for any of the above operations.
      alert(`Testpage did not mount hmm?!`);
      console.error(error);
    }
  };

  onStartStop() {
    if (!this.state.isStart) {
      this.setState({
        isStart: !this.state.isStart,
        timerInterval: setInterval(() => {
          this.decreaseTimer();
          this.phaseControl();
        }, 1000),
      });
    }
  }

  decreaseTimer() {
    this.setState({
      timeLeftInSecond: this.state.timeLeftInSecond - 1,
    });
  }

  phaseControl() {
    if (this.state.timeLeftInSecond === 0) {
      this.audioBeep.current.play();
    } else if (this.state.timeLeftInSecond === -1) {
      if (this.state.timeLabel === "Session") {
        this.setState({
          timeLabel: "Break",
          timeLeftInSecond: this.state.breakLength * 60,
        });
      } else {
        this.setState({
          timeLabel: "Session",
          timeLeftInSecond: this.state.sessionLength * 60,
        });
      }
    }
  }

  render() {
    return (
      <div>
        <Scrolltext />

        <button className="box">Data</button>
        <button className="box a">Data2</button>
        <button className="box a b ">Data3</button>

        <Button onClick={this.onStartStop}> STARTE DIE UHR</Button>
        <Times
          timeLabel={this.state.timeLabel}
          timeLeftInSecond={this.state.timeLeftInSecond}
        />
        <AnimatedCircle/>
        <ImageRotation3D/>
      </div>
    );
  }
}
