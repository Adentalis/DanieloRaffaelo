import React, { Component } from "react";
import Button from "@material-ui/core/Button";

import image from "../../../../assets/img/profile-bg.jpg";

export default class JText extends Component {
  constructor(props) {
    super(props);
    this.state = { rangeValue: 50 };
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
          //value="50"
          class="slider"
          id="myRange"
        />
        {[...new Array(100)].map(() => `J ist die beste! `).join("\n")}
      </div>
    );
  }
}
