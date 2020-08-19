import React, { Component } from "react";
import "./styles.css";
import Data from "./Sections/Data/Data.js";


export default class GridPage extends Component {
  render() {
    return (
      <div className="GridPage">
        <Data></Data>
        <div>A</div> 
        <div>B</div>
        <div>C</div>
        <div>D</div>
        <div>E</div>
        <div>F</div>
        <div>G</div>
      </div>
    );
  }
}
