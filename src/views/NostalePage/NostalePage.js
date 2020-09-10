import React, { Component } from "react";

export default class NostalePage extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    console.log("Heey");
    this.startCapture();
  }

  startCapture(displayMediaOptions) {
    let captureStream = null;

    return navigator.mediaDevices
      .getDisplayMedia(displayMediaOptions)
      .catch((err) => {
        console.error("Error:" + err);
        return null;
      });
  }

  render() {
    return (
      <div className="nostale-page">
        in Bearbeitung :)
        <button onClick={this.test}>test</button>
      </div>
    );
  }
}
