import React, { Component } from "react";
import "./styles.css";

import MnemoLandingPage from "./MnemoLandingPage";
import MnemoSoundGame from "./MnemoSoundGame";
import MnemoImageGame from "./MnemoImageGame";
import MnemoTrainingGame from "./MnemoTrainingGame";

export default class MnemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
    };
  }

  render() {
    return (
      <div className="mnemo-page">
        <MnemoLandingPage></MnemoLandingPage>
        <MnemoTrainingGame></MnemoTrainingGame>
        <MnemoImageGame></MnemoImageGame>
        <MnemoSoundGame></MnemoSoundGame>
      </div>
    );
  }
}
