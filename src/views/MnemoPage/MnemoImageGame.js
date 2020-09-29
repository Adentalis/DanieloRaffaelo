import React, { Component } from "react";

import "./styles.css";

export default class MnemoImageGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      gameStarted: false,
      gameLength: 50,
      gamesEnd: false,
      round: 0,
      pastTime: 0,
      timerInterval: null,
      timeVisible: false,
      images: null,
      choosenImg: null,
    };
    this.changeImg = this.changeImg.bind(this);
    this.checkGameState = this.checkGameState.bind(this);
  }

  componentWillMount() {
    const images = this.importAll(
      require.context(
        "../../assets/img/wordlist/",
        false,
        /\.(png|jpe?g|JPG|svg)$/
      )
    );
    this.setState({ images: images });
  }

  importAll(r) {
    return r.keys().map(r);
  }

  changeImg() {
    this.setState({
      round: this.state.round + 1,
    });
  }

  formatTime() {
    let minute = Math.floor(this.state.pastTime / 60);
    if (minute < 10) minute = "0" + minute;

    let second = this.state.pastTime - 60 * minute;
    if (second < 10) second = "0" + second;

    return `${minute}:${second}`;
  }

  increaseTimer() {
    this.setState({
      pastTime: this.state.pastTime + 1,
    });
  }

  checkGameState() {
    if (this.state.round + 1 === this.state.gameLength) {
      this.setState({ gamesEnd: true });
      clearInterval(this.state.intervalID);
    }
  }

  startTimer() {
    this.state.intervalID = setInterval(() => {
      this.increaseTimer();
    }, 1000);
  }

  render() {
    return (
      <div className="mnemo-page-image-game">
        {this.state.gameStarted === false && this.startContent()}
        {this.state.gameStarted === true && this.gameContent()}
      </div>
    );
  }

  //when clicking on Start, change state mode and start timer
  startContent() {
    return (
      <div>
        Wie viele Bilder
        <br />
        <input
          type="range"
          min="1"
          max="100"
          onChange={(e) =>
            this.setState({ gameLength: parseInt(e.target.value) })
          }
        ></input>
        <button
          onClick={() => {
            this.setState({
              choosenImg: this.state.images
                .sort(() => 0.5 - Math.random())
                .slice(0, this.state.gameLength),
            });
            this.setState({ gameStarted: true });
            this.startTimer();
          }}
        >
          Start
        </button>
        <p> Zeit live anzeigen?</p>
        <label class="switch">
          <input
            type="checkbox"
            onChange={(e) => {
              this.setState({ timeVisible: e.target.checked });
            }}
          />
          <span class="slider round"></span>
        </label>
      </div>
    );
  }

  gameContent() {
    if (this.state.gamesEnd === false) {
      return (
        <div>
          <p>
            {this.state.round + 1}/{this.state.gameLength}
          </p>
          <img
            className="mnemo-page__img"
            onClick={() => {
              this.changeImg();
              this.checkGameState();
            }}
            src={this.state.choosenImg[this.state.round]}
          ></img>
          {this.state.timeVisible === true && <div>{this.formatTime()}</div>}
          <button
            className="mnemo-page-next-img-button"
            onClick={() => {
              this.changeImg();
              this.checkGameState();
            }}
          >
            Next
          </button>
        </div>
      );
    } else {
      return (
        <div>
          <h2> games over</h2><p>Endzeit: {this.formatTime()}</p>
          <p>Durchschnitt pro Bild {this.state.pastTime / this.state.gameLength}s</p>
          <button onClick={() => this.props.parentCallback("landing")}>
            Zurück
          </button>
        </div>
      );
    }
  }
}
