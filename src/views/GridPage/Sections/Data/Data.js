import React, { Component } from "react";

export default class Data extends Component {
  constructor(props) {
    super(props);
    this.state = {
      width: 0,
      height: 0,
    };
    this.updateWindowDimensions = this.updateWindowDimensions.bind(this);
  }

  componentDidMount() {
    this.updateWindowDimensions();
    window.addEventListener("resize", this.updateWindowDimensions);
  }

  updateWindowDimensions() {
    this.setState({ width: window.innerWidth, height: window.innerHeight });
  }

  render() {
    return (
      <div id="windowData">
        Das weiß ich über mich
        <button onClick={this.updateWindowDimensions}>ReloadData</button>
        <div>W-Height: {this.state.height}</div>
        <div>W-Width: {this.state.width}</div>
      </div>
    );
  }
}
