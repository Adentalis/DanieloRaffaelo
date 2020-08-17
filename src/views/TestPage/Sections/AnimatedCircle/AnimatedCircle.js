import React, { Component } from 'react';
import './styles.css';



export default class AnimatedCircle extends Component {
  render() {
    return (
      <div className="animatedCircle">
          <div className="circle"></div>
          <div className="circle"></div>

      </div>
    )
  }
}