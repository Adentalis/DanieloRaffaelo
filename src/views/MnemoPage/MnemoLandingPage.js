import React, { Component } from "react";
import "./styles.css";

export default class MnemoLandingPage extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mnemo-page-landing">
        <h2>MnemoFancyMancy</h2>
        <a>Normal</a> <br />
        <a>Bilder</a> <br />
        <a>Hören</a> <br />
        <a>Info</a> <br />
      </div>
    );
  }
}
