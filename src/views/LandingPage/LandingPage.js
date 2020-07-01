import React, { Component } from "react";

import Intro from "./Sections/Intro/Intro.js";
import Skills from "./Sections/Skills/Skills.js";

export default class LandingPage extends Component {
  render() {
    return (
      <div>
        <Intro /> <Skills />
      </div>
    );
  }
}
