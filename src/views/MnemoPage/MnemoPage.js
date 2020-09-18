import React, { Component } from "react";
import "./styles.css";

export default class MnemoPage extends Component {
  constructor(props) {
    super(props);
    this.state = {
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

  render() {
    return (
      <div className="mnemo-page">
        <img
          id="mnemo-page__img"
          onClick={this.changeImg}
          src={this.state.images[this.state.nr]}
        ></img>
      </div>
    );
  }
}
