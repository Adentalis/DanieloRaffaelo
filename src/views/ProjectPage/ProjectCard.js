import React, { Component } from "react";
import "./styles.css";

export default class ProjectCard extends Component {
  constructor(props) {
    super(props);
    this.test = this.test.bind(this);
  }

  test() {
    console.log("Heey");
  }

  render() {
    return (
      <div className="projects-cards">
        <div className="projects-cards__circle">
          <h2>{this.props.title}</h2>
        </div>
        <div className="projects-cards__content">
          <p>{this.props.text}</p>
          <a href={this.props.href}>zum Projekt</a>
        </div>
      </div>
    );
  }
}
