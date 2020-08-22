import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import image from "../../../../assets/img/profile-bg.jpg";

export default class JText extends Component {
  constructor(props) {
    super(props);
    this.state = { rangeValue: 50 };
    this.updateInputValue = this.updateInputValue.bind(this);
  }

  updateInputValue(e) {
    var value = parseInt(e.target.value);
    this.setState({ rangeValue: value });
  }

  render() {
    return (
      <div
        style={{
          display: "grid",
          backgroundImage: "url(" + image + ")",
          backgroundSize: "auto",
          backgroundPosition: "top center",
          color: "red",
        }}
      >
        <Button color="primary">Danielus Rafaellus ist Bombardus</Button>
        <input
          type="range"
          min="1"
          max="100"
          class="slider"
          id="myRange"
          onChange={this.updateInputValue}
        />
        {this.state.rangeValue > 0 && (
          <div>
            {[...new Array(this.state.rangeValue)]
              .map(() => `J ist die beste, Jeey! `)
              .join("\n")}
          </div>
        )}
      </div>
    );
  }
}
