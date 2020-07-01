import React, { Component } from "react";
import image from "../../assets/img/banner.png";
//import circle from "../../assets/img/bradcam.png";


export default class LandingPage extends Component {
  render() {
    return ( 
        <div class="center"
          style={{
            backgroundImage: "url(" + image + ")",
            backgroundSize: "auto",
            backgroundPosition: "top center",
            height: "800px",
            verticalAlign: "middle",
            color: "white"
          }}
        >
          This is Daniel Niemczyk
        </div>

    );
  }
}
