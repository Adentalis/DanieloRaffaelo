import React, { Component } from "react";
import "./styles.css";

export default class AnimatedCircle extends Component {
  render() {
    return (
      <div className="animatedCircle">
        <div className="circle"></div>
        <div className="circle"></div>
        <svg>
          <filter id="waves">
            <feTurbulence
              x="0"
              y="0"
              baseFrequency="0.009"
              numOctaves="5"
              seed="2"
               >
              <animate
                attributeName="baseFrequency"
                dur="60s"
                values="0.02;0.005;0.02"
                repeatCount="indefinite"
              ></animate>
            </feTurbulence>
            <feDisplacementMap
              in="SourceFraphic"
              scale="30"
            ></feDisplacementMap>
          </filter>
        </svg>
      </div>
    );
  }
}
