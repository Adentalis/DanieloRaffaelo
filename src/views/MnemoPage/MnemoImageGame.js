import React, { Component } from "react";

import "./styles.css";

export default class MnemoImageGame extends Component {
  constructor(props) {
    super(props);
    this.state = {
      mode: "settings",
      gameLength: 50,
      images: "",
      nr: 0,
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
    var nr = Math.floor(Math.random() * images.length);
    this.setState({ images: images });
    this.setState({ nr });
  }

  importAll(r) {
    return r.keys().map(r);
  }

  changeImg() {
    var nr = Math.floor(Math.random() * this.state.images.length);
    this.setState({ nr });
  }

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
        <button onClick={() => this.setState({ mode: "play" })}>Start</button>
      </div>
    );
  }

  gameContent() {
    return (
      <div>
        <p>12/{this.state.gameLength}</p>
        <img
          className="mnemo-page__img"
          onClick={this.changeImg}
          src={this.state.images[this.state.nr]}
        ></img>
      </div>
    );
  }

  render() {
    return (
      <div className="mnemo-page-image-game">
        {this.state.mode === "settings" && this.startContent()}
        {this.state.mode === "play" && this.gameContent()}
      </div>
    );
  }
}
