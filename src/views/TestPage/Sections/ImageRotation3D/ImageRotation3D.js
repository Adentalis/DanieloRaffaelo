import React, { Component } from "react";
import "./styles.css";
import image1 from "../../../../assets/img/cats/01.jpg";
import image2 from "../../../../assets/img/cats/02.jpg";
import image3 from "../../../../assets/img/cats/03.jpg";
import image4 from "../../../../assets/img/cats/04.jpg";
import image5 from "../../../../assets/img/cats/05.jpg";
import image6 from "../../../../assets/img/cats/06.jpg";
import image7 from "../../../../assets/img/cats/07.jpg";
import image8 from "../../../../assets/img/cats/08.jpg";

export default class ImageRotation3D extends Component {

  render() {
    return (
      <div className="rotation3D">
        <div className="content">
          <span id="s1">
            <img src={image1}></img>
          </span>{" "}
          <span id="s2">
            <img src={image2}></img>
          </span>{" "}
          <span id="s3">
            <img src={image3}></img>
          </span>{" "}
          <span id="s4">
            <img src={image4}></img>
          </span>{" "}
          <span id="s5">
            <img src={image5}></img>
          </span>{" "}
          <span id="s6">
            <img src={image6}></img>
          </span>{" "}
          <span id="s7">
            <img src={image7}></img>
          </span>{" "}
          <span id="s8">
            <img src={image8}></img>
          </span>
        </div>{" "}
      </div>
    );
  }
}
