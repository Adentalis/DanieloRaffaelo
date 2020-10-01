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
    this.state = {
      gameStarted: false,
      gamesLength: 20,
      digitsPerBlock: 1,
      timeBetweenBlocks: 1,
      rndNr: [0],
      currentNr: 1,
    };
  }

  componentWillMount() {}

  componentWillUnmount() {
    clearInterval(this.state.intervalID);
  }

  playSound() {
    switch (this.state.rndNr[this.state.currentNr]) {
      case 0:
        new Audio(m0).play();
        break;
      case 1:
        new Audio(m1).play();
        break;
      case 2:
        new Audio(m2).play();
        break;
      case 3:
        new Audio(m3).play();
        break;
      case 4:
        new Audio(m4).play();
        break;
      case 5:
        new Audio(m5).play();
        break;
      case 6:
        new Audio(m6).play();
        break;
      case 7:
        new Audio(m7).play();
        break;
      case 8:
        new Audio(m8).play();
        break;
      case 9:
        new Audio(m9).play();
        break;
    }
    this.setState({ currentNr: this.state.currentNr + 1 });
  }

  startGameSound() {
    this.setState({ currentNr: 0 });
    this.state.intervalID = setInterval(() => {
      this.playSound();
    }, 1000);
  }

  createFakeNumber() {
    var rndNr = [];
    for (var i = 0; i < this.state.gamesLength; i++) {
      rndNr[i] = Math.floor(Math.random() * 10);
    }
    this.setState({ rndNr: rndNr });

    var fakeNr = [...rndNr];
    debugger;
    fakeNr = 4;
  }

  render() {
    return (
      <div className="mnemo-page-sound-game">
        {this.state.currentNr} {this.state.rndNr}
        {this.state.gameStarted === false && this.startContent()}
        {this.state.gameStarted === true && this.gameContent()}
      </div>
    );
  }

  startContent() {
    return (
      <div>
        <p>Wie viele Zahlen insgesamt</p>
        <input
          onChange={(e) =>
            this.setState({ gamesLength: parseInt(e.target.value) })
          }
        ></input>
        <p>Ziffern pro Block</p>
        <button onClick={() => this.setState({ digitsPerBlock: 1 })}>1</button>
        <button onClick={() => this.setState({ digitsPerBlock: 2 })}>2</button>
        <button onClick={() => this.setState({ digitsPerBlock: 3 })}>3</button>
        <button onClick={() => this.setState({ digitsPerBlock: 4 })}>4</button>
        <button onClick={() => this.setState({ digitsPerBlock: 5 })}>5</button>
        <button onClick={() => this.setState({ digitsPerBlock: 6 })}>6</button>
        <p>Abstand pro Block in s</p>
        <button onClick={() => this.setState({ timeBetweenBlocks: 0 })}>
          0
        </button>
        <button onClick={() => this.setState({ timeBetweenBlocks: 1 })}>
          1
        </button>
        <button onClick={() => this.setState({ timeBetweenBlocks: 2 })}>
          2
        </button>
        <button onClick={() => this.setState({ timeBetweenBlocks: 5 })}>
          5
        </button>
        <button onClick={() => this.setState({ timeBetweenBlocks: 8 })}>
          8
        </button>
        <button onClick={() => this.setState({ timeBetweenBlocks: 12 })}>
          12
        </button>
        <br></br>
        <button
          onClick={() => {
            this.setState({ gameStarted: true });
            //generate rndNr
            this.startGameSound();
            this.createFakeNumber();
          }}
        >
          Start
        </button>
      </div>
    );
  }

  gameContent() {
    return (
      <div>
        GOGOGGO
        <button
          onClick={() => {
            clearInterval(this.state.intervalID);
            this.startGameSound();
          }}
        >
          Nochmal
        </button>
        <button>Eingeben</button>
      </div>
    );
  }
}
