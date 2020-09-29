import React, { Component } from "react";
import "./styles.css";

import MnemoSoundGame from "./MnemoSoundGame";
import MnemoImageGame from "./MnemoImageGame";
import MnemoNormalGame from "./MnemoNormalGame";

export default class MnemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "landing",
    };
  }

  callbackFunction = (childData) => {
    this.setState({ mode: childData });
  };

  createContent() {
    switch (this.state.mode) {
      case "landing":
        return this.landingContent();
      case "normal":
        return <MnemoNormalGame></MnemoNormalGame>;
      case "image":
        return (
          <MnemoImageGame
            parentCallback={this.callbackFunction}
          ></MnemoImageGame>
        );
      case "sound":
        return <MnemoSoundGame></MnemoSoundGame>;
    }
  }

  landingContent() {
    return (
      <div className="mnemo-page-landing">
        <h2>MnemoFancyMancy</h2>
        <button onClick={() => this.setState({ mode: "normal" })}>
          Normal
        </button>{" "}
        <br />
        <button onClick={() => this.setState({ mode: "image" })}>
          Bilder
        </button>{" "}
        <br />
        <button onClick={() => this.setState({ mode: "sound" })}>
          Hören
        </button>{" "}
        <br />
        <button onClick={() => this.setState({ mode: "info" })}>
          Info
        </button>{" "}
        <br />
      </div>
    );
  }

  render() {
    return (
      <div className="mnemo-page">
        {this.createContent()}
        <button
          className="mnemo-page-navigate-back-button"
          onClick={() => {
            this.setState({ mode: "landing" });
          }}
        />
      </div>
    );
  }
}

// <MnemoNormalGame></MnemoNormalGame>
// <MnemoImageGame></MnemoImageGame>
// <MnemoSoundGame></MnemoSoundGame>
