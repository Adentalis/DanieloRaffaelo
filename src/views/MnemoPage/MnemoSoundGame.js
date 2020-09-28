import React, { Component } from "react";

import m0 from "../../assets/voices/maleDigits/0m.mp4";
import m1 from "../../assets/voices/maleDigits/1m.mp4";
import m2 from "../../assets/voices/maleDigits/2m.mp4";
import m3 from "../../assets/voices/maleDigits/3m.mp4";
import m4 from "../../assets/voices/maleDigits/4m.mp4";
import m5 from "../../assets/voices/maleDigits/5m.mp4";
import m6 from "../../assets/voices/maleDigits/6m.mp4";
import m7 from "../../assets/voices/maleDigits/7m.mp4";
import m8 from "../../assets/voices/maleDigits/8m.mp4";
import m9 from "../../assets/voices/maleDigits/9m.mp4";

import f0 from "../../assets/voices/femaleDigits/0f.mp4";
import f1 from "../../assets/voices/femaleDigits/1f.mp4";
import f2 from "../../assets/voices/femaleDigits/2f.mp4";
import f3 from "../../assets/voices/femaleDigits/3f.mp4";
import f4 from "../../assets/voices/femaleDigits/4f.mp4";
import f5 from "../../assets/voices/femaleDigits/5f.mp4";
import f6 from "../../assets/voices/femaleDigits/6f.mp4";
import f7 from "../../assets/voices/femaleDigits/7f.mp4";
import f8 from "../../assets/voices/femaleDigits/8f.mp4";
import f9 from "../../assets/voices/femaleDigits/9f.mp4";

import "./styles.css";

export default class MnemoSoundGame extends Component {
  constructor(props) {
    super(props);
    this.state = {};
  }

  render() {
    return (
      <div className="mnemo-page-sound-game">
        <div className="testSound">
          <button onClick={() => new Audio(m0).play()}>0</button>
          <button onClick={() => new Audio(m1).play()}>1</button>
          <button onClick={() => new Audio(m2).play()}>2</button>
          <button onClick={() => new Audio(m3).play()}>3</button>
          <button onClick={() => new Audio(m4).play()}>4</button>
          <button onClick={() => new Audio(m5).play()}>5</button>
          <button onClick={() => new Audio(m6).play()}>6</button>
          <button onClick={() => new Audio(m7).play()}>7</button>
          <button onClick={() => new Audio(m8).play()}>8</button>
          <button onClick={() => new Audio(m9).play()}>9</button>
          <button onClick={() => new Audio(f0).play()}>0</button>
          <button onClick={() => new Audio(f1).play()}>1</button>
          <button onClick={() => new Audio(f2).play()}>2</button>
          <button onClick={() => new Audio(f3).play()}>3</button>
          <button onClick={() => new Audio(f4).play()}>4</button>
          <button onClick={() => new Audio(f5).play()}>5</button>
          <button onClick={() => new Audio(f6).play()}>6</button>
          <button onClick={() => new Audio(f7).play()}>7</button>
          <button onClick={() => new Audio(f8).play()}>8</button>
          <button onClick={() => new Audio(f9).play()}>9</button>
        </div>
      </div>
    );
  }
}
