import React, { Component } from "react";
import "./styles.css";

import MnemoLandingPage from "./MnemoLandingPage";
import MnemoSoundGame from "./MnemoSoundGame";
import MnemoImageGame from "./MnemoImageGame";
import MnemoNormalGame from "./MnemoNormalGame";

export default class MnemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mnemo-page">
        <MnemoLandingPage></MnemoLandingPage>
      </div>
    );
  }
}

// <MnemoNormalGame></MnemoNormalGame>
// <MnemoImageGame></MnemoImageGame>
// <MnemoSoundGame></MnemoSoundGame>
