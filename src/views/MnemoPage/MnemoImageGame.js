import React, { Component } from "react";

import "./styles.css";

export default class MnemoImageGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "settings",
      gameLength: 50,
      round: 0,
      timeVisible: false,
      pastTime: 0,
      timerInterval: null,
      images: null,
      choosenImg: null,
    };
    this.changeImg = this.changeImg.bind(this);
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

  render() {
    return (
      <div className="mnemo-page-image-game">
        {this.state.mode === "settings" && this.startContent()}
        {this.state.mode === "play" && this.gameContent()}
      </div>
    );
  }

  increaseTimer() {
    this.setState({
      pastTime: this.state.pastTime + 1,
    });
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
            this.setState({ mode: "play" });
            this.setState({
              timerInterval: setInterval(() => {
                this.increaseTimer();
              }, 1000),
            });
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
    return (
      <div>
        <p>
          {this.state.round}/{this.state.gameLength}
        </p>
        <img
          className="mnemo-page__img"
          onClick={this.changeImg}
          src={this.state.choosenImg[this.state.round]}
        ></img>
        {this.state.timeVisible === true && <div>{this.formatTime()}</div>}
        <button className="mnemo-page-next-img-button" onClick={this.changeImg}>
          Next
        </button>
      </div>
    );
  }
}
